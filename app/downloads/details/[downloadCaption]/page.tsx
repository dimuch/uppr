import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as DownloadDocuments from '../../../../components/downloads/documents';
import Header from '../../../../components/common/header/Header';
import { getDownloadDataByCaptionDB, getDownloadsByCategoryDB } from '../../../../services/downloadsData.js';
import Footer from '../../../../components/common/footers/footer/Footer';
import { getArticles } from '../../../../services/blogData.js';

type Props = {
  params: Promise<{ downloadCaption: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { downloadCaption } = await params;

  let downloadData;
  try {
    downloadData = await getDownloadDataByCaptionDB(downloadCaption);
  } catch (e) {
    return {
      title: 'Download Not Found | UPPR Downloads',
    };
  }

  if (!downloadData) {
    return {
      title: 'Download Not Found | UPPR Downloads',
    };
  }

  return {
    title: `${downloadData.caption} | UPPR Downloads`,
    description: downloadData.description,
    keywords: 'education on-line, english, business, writing, skills, emails',
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
      shortcut: '/favicon.png',
    },
    openGraph: {
      url: `https://uppr.com.ua${downloadData.downloadLink}`,
      type: 'website',
      title: `${downloadData.caption} | UPPR Downloads`,
      description: downloadData.description,
      images: [
        {
          url: `https://uppr.com.ua${downloadData.image}`,
          width: 1944,
          height: 2750,
        },
      ],
    },
    other: {
      'article:author': 'https://www.facebook.com/ivanna.tabachuk',
    },
    alternates: {
      canonical: `https://uppr.com.ua${downloadData.downloadLink}`,
    },
  };
}

export default async function DownloadDetailsPage({ params }: Props) {
  const { downloadCaption } = await params;

  let downloadData;
  try {
    downloadData = await getDownloadDataByCaptionDB(downloadCaption);
  } catch (e) {
    console.log(`WRONG DOWNLOAD CAPTION: ${downloadCaption}`, e);
    notFound();
  }

  if (!downloadData) {
    notFound();
  }

  const DownloadPage = DownloadDocuments[downloadData.downloadComponent];

  if (!DownloadPage) {
    notFound();
  }

  const { top3Article } = await getArticles();

  return (
    <>
      <Header search location={'/downloads'} />
      <div
        style={{
          overflow: 'hidden',
        }}
      >
        <DownloadPage data={downloadData} />
      </div>
      <Footer top3Article={top3Article} />
    </>
  );
}

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic';

