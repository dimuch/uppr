import { NextResponse } from 'next/server';
import { addInfoDownloadsStat } from '../../../services/downloadsData.js';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { downloadId, downloadedCounter } = body;

    // add info about user result to stat DB
    await addInfoDownloadsStat(downloadId, downloadedCounter);

    return NextResponse.json({
      data: '',
      message: '',
    });
  } catch (error) {
    console.error('Error updating download statistics:', error);
    return NextResponse.json(
      {
        data: [],
        message: 'Error occurred',
      },
      { status: 400 }
    );
  }
}

