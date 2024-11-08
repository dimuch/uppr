import { getRelevantArticlesByCategory } from '../../../services/blogData.js';

export default async function handler(req, res) {
  const categoryId = req.query.id;
  const articles = await getRelevantArticlesByCategory(categoryId);
  res.json(articles);
}
