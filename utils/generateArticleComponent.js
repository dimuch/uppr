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
 * Normalize inline HTML from editor (colored spans) before parsing: strip or convert to plain.
 */
function normalizeEditorMarkdown(input) {
  return input
    .replace(/<span style="color: #44546A; font-weight: bold;">([^<]+)<\/span>/g, '**$1**')
    .replace(/<span style="color: #4b6bf5;">\[([^\]]+)\]\(([^)]+)\)<\/span>/g, '[$1]($2)')
    .replace(/<span style="color: #44546A[^"]*">([^<]+)<\/span>/g, '$1');
}

/**
 * Convert markdown to HTML using markdown-it, then to JSX-safe string (class → className).
 */
function markdownToJSX(markdown) {
  const input = typeof markdown === 'string' ? markdown : String(markdown ?? '');
  if (input.length > 2 * 1024 * 1024) {
    throw new Error('markdownToJSX: content too large (max 2MB)');
  }

  const normalized = normalizeEditorMarkdown(input);
  const md = new MarkdownIt({ html: true });
  const html = md.render(normalized);

  // Make HTML valid in JSX: class → className
  const jsxSafe = html.replace(/\s+class=/g, ' className=').trim();
  return jsxSafe ? `\n            ${jsxSafe.split('\n').join('\n            ')}\n            ` : '';
}

/**
 * Generate React component file from markdown content
 */
function generateArticleComponent(title, markdownContent, articleColor = 'FF603B') {
  const componentName = titleToComponentName(title);
  const fileName = titleToFileName(title);
  const jsxContent = markdownToJSX(markdownContent);

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

