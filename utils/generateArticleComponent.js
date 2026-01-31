const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

/**
 * Convert title to component name (PascalCase), always in Latin.
 * Cyrillic is transliterated via CYRILLIC_TO_LATIN so componentName is valid English.
 * Example: "Will you share your feedback ASAP?" -> "WillYouShareYourFeedbackAsap"
 * Example: "4 делікатних ситуації" -> "4DelikatnyhSituacii"
 */
function titleToComponentName(title) {
  const t = transliterate(title.trim());
  const words = t
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const pascalCase = words
    .map((word) => {
      if (!word.length) return '';
      if (word.toUpperCase() === word && word.length > 1) {
        return word.charAt(0) + word.slice(1).toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
  return pascalCase.replace(/[^A-Za-z0-9]/g, '') || 'Article';
}

/**
 * Convert title to filename (kebab-case)
 * Example: "Will you share your feedback ASAP?" -> "will-you-share-your-feedback-asap"
 */
function titleToFileName(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single
}

/**
 * Cyrillic (Ukrainian/Russian) to Latin transliteration, 1 char → 1 char.
 * Used so pageComponent has no special/Cyrillic chars.
 */
const CYRILLIC_TO_LATIN = {
  а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd', е: 'e', є: 'e', ж: 'z',
  з: 'z', и: 'y', і: 'i', ї: 'i', й: 'j', к: 'k', л: 'l', м: 'm', н: 'n',
  о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'x', ц: 'c',
  ч: 'c', ш: 's', щ: 's', ь: '', ю: 'u', я: 'a', ы: 'y', э: 'e', ъ: '',
  А: 'A', Б: 'B', В: 'V', Г: 'H', Ґ: 'G', Д: 'D', Е: 'E', Є: 'E', Ж: 'Z',
  З: 'Z', И: 'Y', І: 'I', Ї: 'I', Й: 'J', К: 'K', Л: 'L', М: 'M', Н: 'N',
  О: 'O', П: 'P', Р: 'R', С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'X', Ц: 'C',
  Ч: 'C', Ш: 'S', Щ: 'S', Ь: '', Ю: 'U', Я: 'A', Ы: 'Y', Э: 'E', Ъ: '',
};

/**
 * Convert title to pageComponent value: PascalCase, no special chars.
 * Cyrillic chars are transliterated to Latin (1:1 length). Result is
 * letters/digits only (e.g. "4 делікатних ситуації" → "4DelikatnyhSituacii").
 */
function titleToPageComponent(title) {
  const transliterated = Array.from(title.trim(), (char) =>
    CYRILLIC_TO_LATIN[char] !== undefined ? CYRILLIC_TO_LATIN[char] : char
  ).join('');

  const words = transliterated
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  const pascalCase = words
    .map((word) => {
      if (!word.length) return '';
      if (word.toUpperCase() === word && word.length > 1) {
        return word.charAt(0) + word.slice(1).toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

  return pascalCase.replace(/[^A-Za-z0-9]/g, '') || 'Article';
}

/**
 * Transliterate Cyrillic to Latin (1:1) using CYRILLIC_TO_LATIN.
 */
function transliterate(str) {
  return Array.from(String(str ?? ''), (char) =>
    CYRILLIC_TO_LATIN[char] !== undefined ? CYRILLIC_TO_LATIN[char] : char
  ).join('');
}

/**
 * Convert title to URL slug: transliterate then kebab-case, no length limit.
 * Example: "4 делікатних ситуації" → "4-delikatnyh-situacii"
 */
function titleToSlug(title) {
  const t = transliterate(title);
  return t
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Convert title to image filename part: transliterate, spaces → underscore,
 * invalid filename chars removed, no length limit.
 */
function titleToImageName(title) {
  const t = transliterate(title);
  return t
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[/\\:*?"<>|]/g, '');
}

// Match "### 1." or "### 1 " (ordered list item)
const ORDERED_LIST_LINE = /^###\s+\d+[.\s]\s*(.*)$/;
// Match "### - " or "### * " (unordered list item)
const UNORDERED_LIST_LINE = /^###\s+[-*]\s+(.*)$/;

/**
 * Parse markdown content and convert to JSX
 * Handles:
 * - Headings (## -> h2 with subTitle)
 * - Ordered list (### 1., ### 2. -> ol with articleList + numberedList)
 * - Unordered list (### - or ### * -> ul; - -> ul with articleList, li with discList)
 * - Paragraphs (-> p with articleText)
 * - Bold text (**text** -> <b>text</b>)
 * - Links ([text](url) -> <a> with articleLink)
 * - Colored spans (convert back to classNames)
 */
function markdownToJSX(markdown) {
  const input = typeof markdown === 'string' ? markdown : String(markdown ?? '');
  if (input.length > 2 * 1024 * 1024) {
    throw new Error('markdownToJSX: content too large (max 2MB)');
  }
  let jsx = '';
  let sectionCount = 0;
  const sections = ['articleOddSection', 'articleEvenSection'];
  let currentSectionOpen = false;

  const lines = input.split('\n');
  let i = 0;
  const totalLines = lines.length;
  console.log('[markdownToJSX] start lines=', totalLines);

  while (i < lines.length) {
    if (i > 0 && i % 100 === 0) {
      console.log('[markdownToJSX] progress line', i, '/', totalLines);
    }
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    // Check if it's a heading
    if (line.startsWith('## ') && !line.startsWith('### ')) {
      const headingText = line.replace(/^##\s+/, '').trim();

      // Close previous section if open
      if (currentSectionOpen && sectionCount > 0) {
        jsx += `                </div>\n            </div>\n\n`;
      }

      // Open new section
      const sectionClass = sections[sectionCount % 2];
      sectionCount++;
      currentSectionOpen = true;

      jsx += `            <div className={styles.${sectionClass}}>\n`;
      jsx += `                <div className={styles.maxWidthArticleSectionWrapper}>\n`;
      jsx += `                    <h2 className={styles.subTitle}>${escapeJSX(headingText)}</h2>\n\n`;
      i++;
      continue;
    }

    // Check if it's an ordered list (### 1., ### 2., etc.) (use match to avoid regex state)
    const orderedMatch = line.match(ORDERED_LIST_LINE);
    if (orderedMatch) {
      jsx += `                    <ol className={\`\${styles.articleList} \${styles.numberedList}\`}>\n`;
      while (i < lines.length) {
        const itemLine = lines[i].trim();
        const match = itemLine.match(ORDERED_LIST_LINE);
        if (!match) break;
        const content = match[1].trim();
        let listText = content;
        const spanMatch = content.match(/<span[^>]*>(.*?)<\/span>/);
        if (spanMatch) {
          listText = spanMatch[1];
        } else {
          listText = content.replace(/<[^>]*>/g, '');
        }
        listText = listText.replace(/&quot;/g, '"');
        jsx += `                        <li className={styles.discList} style={{\n`;
        jsx += `                            color: \`#\${articleData.article_color}\`\n`;
        jsx += `                        }}>\n`;
        jsx += `                            <p>${escapeJSX(listText)}</p>\n`;
        jsx += `                        </li>\n`;
        i++;
      }
      jsx += `                    </ol>\n\n`;
      continue;
    }

    // Check if it's an unordered list with ### - or ### *
    const unorderedMatch = line.match(UNORDERED_LIST_LINE);
    if (unorderedMatch) {
      jsx += `                    <ul className={\`\${styles.articleList}\`}>\n`;
      while (i < lines.length) {
        const itemLine = lines[i].trim();
        const match = itemLine.match(UNORDERED_LIST_LINE);
        if (!match) break;
        const content = match[1].trim();
        let listText = content;
        const spanMatch = content.match(/<span[^>]*>(.*?)<\/span>/);
        if (spanMatch) {
          listText = spanMatch[1];
        } else {
          listText = content.replace(/<[^>]*>/g, '');
        }
        listText = listText.replace(/&quot;/g, '"');
        jsx += `                        <li className={styles.discList} style={{\n`;
        jsx += `                            color: \`#\${articleData.article_color}\`\n`;
        jsx += `                        }}>\n`;
        jsx += `                            <p>${escapeJSX(listText)}</p>\n`;
        jsx += `                        </li>\n`;
        i++;
      }
      jsx += `                    </ul>\n\n`;
      continue;
    }

    // Check if it's a list item (plain - )
    if (line.startsWith('- ')) {
      jsx += `                    <ul className={\`\${styles.articleList}\`}>\n`;

      // Collect all list items
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        const itemLine = lines[i].trim();
        const content = itemLine.replace(/^-\s+/, '').trim();

        // Extract text from span if present, otherwise use content as-is
        let listText = content;
        const spanMatch = content.match(/<span[^>]*>(.*?)<\/span>/);
        if (spanMatch) {
          listText = spanMatch[1];
        } else {
          // Remove any HTML tags
          listText = content.replace(/<[^>]*>/g, '');
        }

        // Clean up quotes
        listText = listText.replace(/&quot;/g, '"');

        jsx += `                        <li className={styles.discList} style={{\n`;
        jsx += `                            color: \`#\${articleData.article_color}\`\n`;
        jsx += `                        }}>\n`;
        jsx += `                            <p>${escapeJSX(listText)}</p>\n`;
        jsx += `                        </li>\n`;
        i++;
      }

      jsx += `                    </ul>\n\n`;
      continue;
    }

    // Regular paragraph - collect until empty line, heading, or ### list
    let paragraphLines = [];
    while (i < lines.length) {
      const currentLine = lines[i].trim();
      if (!currentLine || currentLine.startsWith('## ') || currentLine.startsWith('### ')) {
        break;
      }
      paragraphLines.push(currentLine);
      i++;
    }

    if (paragraphLines.length > 0) {
      let paragraphContent = paragraphLines.join(' ');

      // Convert colored spans with bold back to <b> tags
      paragraphContent = paragraphContent.replace(
        /<span style="color: #44546A; font-weight: bold;">([^<]+)<\/span>/g,
        '<b>$1</b>'
      );

      // Convert markdown bold (**text**) to <b> tags
      paragraphContent = paragraphContent.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');

      // Convert markdown links with colored span
      paragraphContent = paragraphContent.replace(
        /<span style="color: #4b6bf5;">\[([^\]]+)\]\(([^)]+)\)<\/span>/g,
        '<a href="$2" target="_blank" rel="noreferrer">$1</a>'
      );

      // Convert regular markdown links
      paragraphContent = paragraphContent.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noreferrer">$1</a>'
      );

      // Remove regular colored spans (keep content)
      paragraphContent = paragraphContent.replace(
        /<span style="color: #44546A[^"]*">([^<]+)<\/span>/g,
        '$1'
      );

      // Clean up HTML entities
      paragraphContent = paragraphContent.replace(/&quot;/g, '"');
      paragraphContent = paragraphContent.replace(/&mdash;/g, '—');
      paragraphContent = paragraphContent.replace(/&nbsp;/g, ' ');

      // Handle line breaks in markdown (double space or <br/>)
      paragraphContent = paragraphContent.replace(/\s{2,}/g, ' ');

      jsx += `                    <p className={styles.articleText}>\n`;
      jsx += `                        ${paragraphContent}\n`;
      jsx += `                    </p>\n\n`;
    }
  }

  // Close last section if open
  if (currentSectionOpen) {
    jsx += `                </div>\n            </div>\n`;
  }

  console.log('[markdownToJSX] end');
  return jsx;
}

/**
 * Escape JSX special characters (but preserve HTML tags we want to keep)
 */
function escapeJSX(text) {
  // Don't escape if it already contains HTML tags we want to preserve
  if (text.includes('<b>') || text.includes('<a>') || text.includes('<br')) {
    return text;
  }

  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * Generate React component file from markdown content
 */
function generateArticleComponent(title, markdownContent, articleColor = 'FF603B') {
  const componentName = titleToComponentName(title);
  const fileName = titleToFileName(title);
  const jsxContent = markdownToJSX(markdownContent, articleColor);

  const componentTemplate = `
    import React from 'react';
    import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
    import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

    import styles from './commonArticleStyles.module.scss';

      export default function ${componentName}({ articleData }) {
          return (
              <div className={styles.article}>
                  <div className={styles.maxWidthArticleTitleWrapper}>
                      <ArticleHeader articleData={articleData}/>
                  </div>
                  ${jsxContent}
                  <div className={styles.articleEvenSection}>
                      <ArticleFooter articleData={articleData}/>
                  </div>
              </div>
          );
      };
  `;

  return {
    componentName,
    fileName: `${fileName}.js`,
    content: componentTemplate,
  };
}

/**
 * Save component file to filesystem (async to avoid blocking the event loop).
 * Calls generateArticleComponent once and reuses the result.
 */
async function saveArticleComponent(title, markdownContent, articleColor = 'FF603B') {
  try {
    console.log('[saveArticleComponent] calling generateArticleComponent');
    const result = generateArticleComponent(title, markdownContent, articleColor);
    console.log('[saveArticleComponent] generateArticleComponent done, writing file');
    const { fileName, content, componentName } = result;
    const componentsDir = path.join(process.cwd(), 'components', 'articles');
    const filePath = path.join(componentsDir, fileName);

    await fsPromises.mkdir(componentsDir, { recursive: true });
    await fsPromises.writeFile(filePath, content, 'utf8');

    return {
      success: true,
      fileName,
      filePath,
      componentName,
    };
  } catch (error) {
    console.error('Error saving article component:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

module.exports = {
  generateArticleComponent,
  saveArticleComponent,
  titleToComponentName,
  titleToFileName,
  titleToPageComponent,
  transliterate,
  titleToSlug,
  titleToImageName,
};

