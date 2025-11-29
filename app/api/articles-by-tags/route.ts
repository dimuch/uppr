import { NextResponse } from 'next/server';
import { getArticles, getArticlesByTagsNameDB } from '../../../services/blogData.js';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchedTags = searchParams.get('selectedTag') || '';

    if (!searchedTags.length) {
      const { latestArticle, otherLatestArticles: articles } = await getArticles();
      return NextResponse.json([...latestArticle, ...articles]);
    }

    const articles = await getArticlesByTagsNameDB(searchedTags);
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles by tags:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch articles',
      },
      {
        status: 500,
      }
    );
  }
}

