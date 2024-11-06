import React from 'react';
import Head from 'next/head';

const HeadSEO = () => {
  return (
    <Head>
      <title>{'UPPR | Case Study'}</title>
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=UTF-8"
      />
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge,chrome=1"
      />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
      />
      <meta
        name="apple-mobile-web-app-capable"
        content="yes"
      />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="yes"
      />
      <link
        rel="apple-touch-icon"
        href="/favicon.png"
        type="image/x-icon"
      />
      <link
        rel="shortcut icon"
        href="/favicon.png"
        type="image/x-icon"
      />
      <link
        rel="icon"
        href="/favicon.png"
      />

      <meta
        property="og:url"
        content={'https://uppr.com.ua/case-study'}
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="article:author"
        content="https://www.facebook.com/ivanna.tabachuk"
      />
      <meta
        property="og:title"
        content={'UPPR Case study'}
      />
      <meta
        property="og:description"
        content={'Case Study for your daily cases'}
      />
      <meta
        property="og:image"
        content={'https://uppr.com.ua/assets/images/case-study/responsive/1200/case-study-top.webp'}
      />
      <meta
        property="og:image:width"
        content="1944"
      />
      <meta
        property="og:image:height"
        content="2750"
      />
      <link
        rel="canonical"
        href="https://uppr.com.ua/case-study"
      />
      <link
        rel="image_src"
        href="https://uppr.com.uaassets/images/case-study/responsive/1200/case-study-top.webp"
      />
    </Head>
  );
};

export default HeadSEO;
