import React from 'react';
import Head from 'next/head';

import { useHasMounted } from '../../../components/common/hooks/hasMounted';

import * as DownloadDocuments from '../../../components/downloads/documents';
import Header from '../../../components/common/header/Header';
import PageNotFound from '../../404';

import GoogleStat from '../../../components/common/googleCtat/GoogleStat';
import { getDownloadDataByCaptionDB } from '../../../services/downloadsData';
import Footer from '../../../components/common/footers/footer/Footer';
import { getArticles } from '../../../services/blogData';

export default function DownloadDetails({ downloadData, top3Article }) {
  const DownloadPage = DownloadDocuments[downloadData?.downloadComponent];

  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  if (!DownloadPage) {
    return <PageNotFound redirectLink={'/downloads'} redirectPage={'Повернутись до завантажень'} />;
  }

  return (
    <>
      <Head>
        <title>{downloadData?.caption} | UPPR Downloads</title>
        <meta name="description" content={downloadData?.description} />
        <meta name="keywords" content="education on-line, english, business, writing, skills, emails" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="yes" />
        <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:url" content={'https://uppr.com.ua' + downloadData?.downloadLink} />
        <meta property="og:type" content="website" />
        <meta property="article:author" content="https://www.facebook.com/ivanna.tabachuk" />
        <meta property="og:title" content={downloadData?.caption + '| UPPR Downloads'} />
        <meta property="og:description" content={downloadData?.description} />
        <meta property="og:image" content={'https://uppr.com.ua' + downloadData?.image} />
        <meta property="og:image:width" content="1944" />
        <meta property="og:image:height" content="2750" />
        <link rel="canonical" href={'https://uppr.com.ua' + downloadData?.link} />
        <meta name="google-site-verification" content="8Ui50OggqnZ5J1RPshJXelSAYWMPvFGWv32MSzHHlJU" />
        <script type="application/ld+json" dangerouslySetInnerHTML={addJsonLdData(downloadData)} key="product-jsonld" />
      </Head>

      <Header search location={'/downloads'} />
      <div style={{ overflow: 'hidden' }}>
        <DownloadPage data={downloadData} />
      </div>

      <Footer top3Article={top3Article} />
      <GoogleStat />
    </>
  );
}

export async function getServerSideProps(context) {
  const downloadCaption = context.params[':downloadCaption']?.toLowerCase();
  if (downloadCaption === 'undefined') {
    return {
      props: {
        downloadData: {},
      },
    };
  }

  try {
    context.res.setHeader('Cache-Control', 'public, stale-while-revalidate=59');
    const articles = await getArticles();
    const downloadData = await getDownloadDataByCaptionDB(downloadCaption);

    return {
      props: {
        top3Article: articles?.top3Article,
        downloadData,
      },
    };
  } catch (e) {
    console.log(`WRONG DOWNLOAD CAPTION: ${downloadCaption}`);
    return {
      props: {
        downloadData: {},
      },
    };
  }
}

function addJsonLdData(downloadData) {
  return {
    __html: JSON.stringify({
      '@context': 'https://schema.org/',
      '@type': 'WebPage',
      breadcrumb: `UPPR | Downloads | ${downloadData.caption}`,
      mainEntity: {
        '@type': 'Book',
        author: 'http://www.example.com/author.html',
        bookFormat: 'http://schema.org/EBook',
        datePublished: `${downloadData.publishedDate}`,
        image: `${downloadData.image}`,
        inLanguage: 'English',
        name: `${downloadData.author}`,
        numberOfPages: 15,
        relatedLink: 'https://uppr.com.ua/blog',
      },
      author: {
        '@type': 'Person',
        name: `${downloadData.author}`,
      },
      publisher: {
        '@type': 'Organization',
        name: '[UP]PR',
        logo: {
          '@type': 'ImageObject',
          url: 'https://uppr.com.ua/assets/images/blog-articles/logo.jpg',
          width: 503,
        },
      },
      description: `${downloadData.description}`,
    }),
  };
}
