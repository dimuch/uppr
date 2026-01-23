const fs = require('fs');
const path = require('path');

/**
 * Update components/articles/index.js to export the new component
 */
function updateArticleIndex(componentName, fileName) {
  try {
    const indexPath = path.join(process.cwd(), 'components', 'articles', 'index.js');

    if (!fs.existsSync(indexPath)) {
      console.warn('index.js not found, skipping export update');
      return {
        success: false, error: 'index.js not found'
      };
    }

    const indexContent = fs.readFileSync(indexPath, 'utf8');

    // Check if export already exists
    const exportPattern = new RegExp(`export\\s+\\{\\s*default\\s+as\\s+${componentName}\\s*\\}\\s+from`, 'i');
    if (exportPattern.test(indexContent)) {
      console.log(`Export for ${componentName} already exists`);
      return {
        success: true, skipped: true
      };
    }

    // Generate export statement
    const fileNameWithoutExt = fileName.replace(/\.js$/, '');
    const exportStatement = `export { default as ${componentName} } from './${fileNameWithoutExt}';\n`;

    // Add export at the end (before the PageNotFound export if it exists)
    let newContent = indexContent;

    // Find the last export before PageNotFound
    const pageNotFoundIndex = newContent.indexOf("export { default as PageNotFound }");

    if (pageNotFoundIndex !== -1) {
      // Insert before PageNotFound
      newContent = newContent.slice(0, pageNotFoundIndex) + exportStatement + newContent.slice(pageNotFoundIndex);
    } else {
      // Append at the end
      newContent = newContent.trim() + '\n' + exportStatement;
    }

    fs.writeFileSync(indexPath, newContent, 'utf8');

    return {
      success: true,
      exportAdded: true,
    };
  } catch (error) {
    console.error('Error updating article index:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

module.exports = {
  updateArticleIndex,
};

