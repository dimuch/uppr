import { getArticlesByCategoryDB } from '../../../services/blogData.js';

export default async function handler(req, res) {
  const articles = await getArticlesByCategoryDB();
  res.json(articles);
}
