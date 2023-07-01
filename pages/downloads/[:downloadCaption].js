import React, {useState} from 'react';
import Head from 'next/head'
import Header from '../../components/common/header/Header';
import {useHasMounted} from '../../components/common/hooks/hasMounted';
import {getDownloadDataByCaptionDB} from '../../services/downloadsData';

const PAGE_NOT_FOUND='PageNotFound';

export default function ArticlePageWrapper({downloadData}) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  console.log('downloadData', downloadData);

  return (
    <>
      <Head>
        <title>{downloadData.title} | UPPR Блог</title>
        <meta name="description" content={downloadData.description}/>
        <meta name="keywords" content="education on-line, english, business, writing, skills, emails"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="yes"/>
        <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon"/>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
        <link rel="icon" href="/favicon.png"/>

        <meta property="og:url" content={'https://uppr.com.ua' + downloadData.link}/>
        <meta property="og:type" content="website"/>
        <meta property="article:author" content="https://www.facebook.com/ivanna.tabachuk"/>
        <meta property="og:title" content={downloadData.title + '| UPPR Блог'}/>
        <meta property="og:description" content={downloadData.description}/>
        <meta property="og:image" content={'https://uppr.com.ua' + downloadData.image}/>
        <meta property="og:image:width" content="700"/>
        <meta property="og:image:height" content="400"/>
        <link rel = "canonical" href={'https://uppr.com.ua' + downloadData.link} />
        <meta name="google-site-verification" content="8Ui50OggqnZ5J1RPshJXelSAYWMPvFGWv32MSzHHlJU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLdData(downloadData)}
          key="product-jsonld"
        />
      </Head>

      <Header search location={'/downloads'}/>

      {downloadData.caption}

    </>
  )
};

export async function getServerSideProps({res, params}) {
  const downloadData = await getDownloadDataByCaptionDB(params[':downloadCaption']);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=604800, stale-while-revalidate=59'
  )

  return {
    props: {
      downloadData: downloadData,
    },
  };
}

function addJsonLdData(downloadData) {
  return {
    // __html: JSON.stringify({
    //   "@context": "https://schema.org/",
    //   "@type": "BlogPosting",
    //   "mainEntityOfPage": {
    //     "@type": "WebPage",
    //     "@id": `${downloadData.link}`,
    //     "relatedLink": "https://uppr.com.ua/blog",
    //   },
    //   "headline": `${downloadData.title} | UPPR Блог`,
    //   "url": `${downloadData.link}`,
    //   "image": {
    //     "@type": "ImageObject",
    //     "url": `${downloadData.image}`,
    //     "width": 700,
    //     "height": 400,
    //   },
    //   "datePublished": `${downloadData.published}`,
    //   "author": {
    //     "@type": "Person",
    //     "name": `${downloadData.author}`,
    //   },
    //   "publisher": {
    //     "@type": "Organization",
    //     "name": "[UP]PR",
    //     "logo": {
    //       "@type": "ImageObject",
    //       "url": "https://uppr.com.ua/assets/images/blog-articles/logo.jpg",
    //       "width": 503,
    //     },
    //   },
    //   "description": `${downloadData.description}`
    // }),
  }
}
