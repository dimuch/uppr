import { NextResponse } from 'next/server';
import { getArticlesByCategoryDB } from '../../../services/blogData.js';

export async function GET() {
  try {
    const articles = await getArticlesByCategoryDB();
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles by category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

