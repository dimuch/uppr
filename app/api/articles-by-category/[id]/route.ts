import { NextResponse } from 'next/server';
import { getRelevantArticlesByCategory } from '../../../../services/blogData.js';

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, { params }: Props) {
  try {
    const { id } = await params;
    const articles = await getRelevantArticlesByCategory(id);
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles by category ID:', error);
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

