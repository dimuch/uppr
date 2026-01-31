const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;
const MarkdownIt = require('markdown-it');

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

/**
 * Render inline token children to JSX string (bold, links, text).
 */
function renderInlineToJSX(children) {
  if (!children || children.length === 0) return '';
  let out = '';
  for (let i = 0; i < children.length; i++) {
    const t = children[i];
    if (t.type === 'text') {
      out += escapeJSX(t.content || '');
    } else if (t.type === 'strong_open') {
      out += '<b>';
    } else if (t.type === 'strong_close') {
      out += '</b>';
    } else if (t.type === 'em_open') {
      out += '<em>';
    } else if (t.type === 'em_close') {
      out += '</em>';
    } else if (t.type === 'link_open') {
      const href = (t.attrs && t.attrs.find((a) => a[0] === 'href')) ? t.attrs.find((a) => a[0] === 'href')[1] : '#';
      out += `<a href="${escapeJSX(href)}" target="_blank" rel="noreferrer">`;
    } else if (t.type === 'link_close') {
      out += '</a>';
    } else if (t.type === 'code_inline') {
      out += escapeJSX(t.content || '');
    } else if (t.type === 'html_inline' && t.content) {
      // Preserve allowed inline HTML (e.g. colored spans stripped to content later)
      const stripped = t.content.replace(/<span[^>]*>([^<]*)<\/span>/g, '$1');
      out += escapeJSX(stripped);
    }
  }
  return out;
}

/**
 * Normalize inline HTML from editor (colored spans) before parsing: strip or convert to plain.
 */
function normalizeEditorMarkdown(input) {
  return input
    .replace(/<span style="color: #44546A; font-weight: bold;">([^<]+)<\/span>/g, '**$1**')
    .replace(/<span style="color: #4b6bf5;">\[([^\]]+)\]\(([^)]+)\)<\/span>/g, '[$1]($2)')
    .replace(/<span style="color: #44546A[^"]*">([^<]+)<\/span>/g, '$1');
}

/**
 * Parse markdown content and convert to JSX using markdown-it.
 * Preserves: section wrappers (articleOddSection/articleEvenSection), subTitle, articleText,
 * articleList, numberedList, discList, and inline bold/links.
 */
function markdownToJSX(markdown) {
  const input = typeof markdown === 'string' ? markdown : String(markdown ?? '');
  if (input.length > 2 * 1024 * 1024) {
    throw new Error('markdownToJSX: content too large (max 2MB)');
  }

  const normalized = normalizeEditorMarkdown(input);
  const md = new MarkdownIt({ html: true });
  const tokens = md.parse(normalized, {});

  let jsx = '';
  let sectionCount = 0;
  const sections = ['articleOddSection', 'articleEvenSection'];
  let currentSectionOpen = false;
  let inListItemDepth = 0;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === 'heading_open' && token.tag === 'h2') {
      if (currentSectionOpen && sectionCount > 0) {
        jsx += `                </div>\n            </div>\n\n`;
      }
      const sectionClass = sections[sectionCount % 2];
      sectionCount++;
      currentSectionOpen = true;
      jsx += `            <div className={styles.${sectionClass}}>\n`;
      jsx += `                <div className={styles.maxWidthArticleSectionWrapper}>\n`;
      jsx += `                    <h2 className={styles.subTitle}>`;
      i++;
      if (i < tokens.length && tokens[i].type === 'inline' && tokens[i].children) {
        jsx += renderInlineToJSX(tokens[i].children);
      }
      jsx += `</h2>\n\n`;
      continue;
    }

    if (token.type === 'heading_close' && token.tag === 'h2') {
      continue;
    }

    if (token.type === 'paragraph_open') {
      if (inListItemDepth > 0) {
        jsx += `                        <p>`;
      } else {
        jsx += `                    <p className={styles.articleText}>\n                        `;
      }
      continue;
    }

    if (token.type === 'paragraph_close') {
      jsx += `</p>\n`;
      if (inListItemDepth === 0) jsx += '\n';
      continue;
    }

    if (token.type === 'inline' && token.children) {
      jsx += renderInlineToJSX(token.children);
      continue;
    }

    if (token.type === 'ordered_list_open') {
      jsx += `                    <ol className={\`\${styles.articleList} \${styles.numberedList}\`}>\n`;
      continue;
    }
    if (token.type === 'ordered_list_close') {
      jsx += `                    </ol>\n\n`;
      continue;
    }
    if (token.type === 'bullet_list_open') {
      jsx += `                    <ul className={\`\${styles.articleList}\`}>\n`;
      continue;
    }
    if (token.type === 'bullet_list_close') {
      jsx += `                    </ul>\n\n`;
      continue;
    }
    if (token.type === 'list_item_open') {
      inListItemDepth++;
      jsx += `                        <li className={styles.discList} style={{\n`;
      jsx += `                            color: \`#\${articleData.article_color}\`\n`;
      jsx += `                        }}>\n`;
      continue;
    }
    if (token.type === 'list_item_close') {
      inListItemDepth--;
      jsx += `                        </li>\n`;
      continue;
    }
  }

  if (currentSectionOpen) {
    jsx += `                </div>\n            </div>\n`;
  }

  return jsx;
}

/**
 * Escape JSX special characters (but preserve HTML tags we want to keep).
 * Decodes common entities from editor (e.g. &quot;) so they can be re-escaped correctly.
 */
function escapeJSX(text) {
  if (typeof text !== 'string') return '';
  // Don't escape if it already contains HTML tags we want to preserve
  if (text.includes('<b>') || text.includes('<a>') || text.includes('<br')) {
    return text;
  }
  const decoded = text
    .replace(/&quot;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ');
  return decoded
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

