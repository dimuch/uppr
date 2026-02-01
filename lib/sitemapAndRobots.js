const { promises: fs } = require('fs');
const path = require('path');

const SITEMAP_RELATIVE = path.join('public', 'sitemap.txt');
const ROBOTS_RELATIVE = path.join('public', 'robots.txt');
const BASE_URL = 'https://uppr.com.ua';

/**
 * Appends a new blog article URL to sitemap.txt and inserts an Allow rule into robots.txt.
 * @param {string} articleSlug - URL slug for the article (e.g. "reader-eXperience-RX")
 * @returns {Promise<{ success: boolean; error?: string }>}
 */
async function addArticleToSitemapAndRobots(articleSlug) {
	try {
		const cwd = process.cwd();
		const sitemapPath = path.join(cwd, SITEMAP_RELATIVE);
		const robotsPath = path.join(cwd, ROBOTS_RELATIVE);

		const newArticleUrl = `${BASE_URL}/blog/articles/${articleSlug}`;
		const newRobotsAllow = `Allow: /blog/articles/${articleSlug}`;

		// Sitemap: append new URL
		const sitemapContent = await fs.readFile(sitemapPath, 'utf-8');
		const sitemapTrimmed = sitemapContent.trimEnd();
		const updatedSitemap =
			sitemapTrimmed + (sitemapTrimmed.endsWith('\n') ? '' : '\n') + newArticleUrl + '\n';
		await fs.writeFile(sitemapPath, updatedSitemap);

		// Robots: insert new Allow after the last "Allow: /blog/articles/" line
		const robotsContent = await fs.readFile(robotsPath, 'utf-8');
		const lastBlogArticleAllowIndex = robotsContent.lastIndexOf('Allow: /blog/articles/');
		if (lastBlogArticleAllowIndex !== -1) {
			const lineEnd = robotsContent.indexOf('\n', lastBlogArticleAllowIndex);
			const insertIndex = lineEnd !== -1 ? lineEnd + 1 : lastBlogArticleAllowIndex;
			const updatedRobots =
				robotsContent.slice(0, insertIndex) + newRobotsAllow + '\n' + robotsContent.slice(insertIndex);
			await fs.writeFile(robotsPath, updatedRobots);
		} else {
			const allowBlogIndex = robotsContent.indexOf('Allow: /blog\n');
			const insertIndex = allowBlogIndex !== -1 ? allowBlogIndex + 'Allow: /blog\n'.length : 0;
			const updatedRobots =
				robotsContent.slice(0, insertIndex) + newRobotsAllow + '\n' + robotsContent.slice(insertIndex);
			await fs.writeFile(robotsPath, updatedRobots);
		}

		return { success: true };
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		return { success: false, error: message };
	}
}

module.exports = {
	addArticleToSitemapAndRobots,
};
