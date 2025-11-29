import { NextResponse } from 'next/server';
import { addInfoEmailLevelStat } from '../../../services/testData.js';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { answer, title, score } = body;

    // add info about user result to stat DB
    await addInfoEmailLevelStat(answer, title, score);

    return NextResponse.json({
      data: '',
      message: '',
    });
  } catch (error) {
    console.error('Error saving test result:', error);
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

