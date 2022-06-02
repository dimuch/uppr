import {getArticlesByCategoryDB} from '../../../services/blogData';

export default async function handler (req, res) {
    const articles = await getArticlesByCategoryDB();
    res.json(articles);
}
