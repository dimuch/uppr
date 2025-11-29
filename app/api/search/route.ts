import { NextResponse } from 'next/server';
import { searchInArticlesParamsDB } from '../../../services/blogData.js';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('text') || '';

    const [result] = await searchInArticlesParamsDB(searchText);

    return NextResponse.json({
      data: result,
      message: '',
    });
  } catch (error) {
    console.error('Error searching articles:', error);
    return NextResponse.json(
      {
        data: [],
        message: 'Error occurred',
      },
      {
        status: 400,
      }
    );
  }
}

