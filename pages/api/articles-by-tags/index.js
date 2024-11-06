import { getArticles, getArticlesByTagsNameDB } from '../../../services/blogData.js';

export default async function handler(req, res) {
  const searchedTags = req.query.selectedTag || '';

  if (!searchedTags.length) {
    const { latestArticle, otherLatestArticles: articles } = await getArticles();
    res.json([].concat(latestArticle, articles));
    return;
  }

  const articles = await getArticlesByTagsNameDB(searchedTags);
  res.json(articles);
}
