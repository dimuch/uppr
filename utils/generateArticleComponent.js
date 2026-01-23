const fs = require('fs');
const path = require('path');

/**
 * Convert title to component name (PascalCase)
 * Example: "Will you share your feedback ASAP?" -> "WillYouShareYourFeedbackAsap"
 */
function titleToComponentName(title) {
  return title
    .split(/[\s\-_]+/)
    .map(word => {
      // Handle special cases like "ASAP" -> "Asap"
      if (word.toUpperCase() === word && word.length > 1) {
        return word.charAt(0) + word.slice(1).toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
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
 * Parse markdown content and convert to JSX
 * Handles:
 * - Headings (## -> h2 with subTitle)
 * - Lists (- -> ul with articleList, li with discList)
 * - Paragraphs (-> p with articleText)
 * - Bold text (**text** -> <b>text</b>)
 * - Links ([text](url) -> <a> with articleLink)
 * - Colored spans (convert back to classNames)
 */
function markdownToJSX(markdown) {
  let jsx = '';
  let sectionCount = 0;
  const sections = ['articleOddSection', 'articleEvenSection'];
  let currentSectionOpen = false;

  // Split by lines and process
  const lines = markdown.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    // Check if it's a heading
    if (line.startsWith('## ')) {
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

    // Check if it's a list item
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

    // Regular paragraph - collect until empty line or heading
    let paragraphLines = [];
    while (i < lines.length) {
      const currentLine = lines[i].trim();
      if (!currentLine || currentLine.startsWith('## ')) {
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
 * Save component file to filesystem
 */
function saveArticleComponent(title, markdownContent, articleColor = 'FF603B') {
  try {
    const { fileName, content } = generateArticleComponent(title, markdownContent, articleColor);
    const componentsDir = path.join(process.cwd(), 'components', 'articles');
    const filePath = path.join(componentsDir, fileName);

    // Ensure directory exists
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, {
        recursive: true
      });
    }

    // Write file
    fs.writeFileSync(filePath, content, 'utf8');

    return {
      success: true,
      fileName,
      filePath,
      componentName: generateArticleComponent(title, markdownContent, articleColor).componentName,
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
};

