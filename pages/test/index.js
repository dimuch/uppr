import React from 'react';
import Head from 'next/head';

import Header from '../../components/common/header/Header';
import Test from '../../components/test/Test';
import {useHasMounted} from '../../components/common/hooks/hasMounted';

import styles from './styles.module.scss';

// const domainName = '';

const TestPage = () => {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  return <>
    <Head>
      <title>{'UPPR | Email Level Test'}</title>
      <meta property="og:type" content="website"/>
      <meta property="og:site_name" content="UPPR"/>
      <meta property="og:title" content="Email Level Test"/>
      <meta property="og:description" content="Wanna check if your emails are effective and modern enough?"/>
      <meta property="og:url" content="https://uppr.com.ua/test"/>
      <meta property="og:locale" content="en_US"/>
      <meta property="og:image" content="https://uppr.com.ua/assets/images/blog-articles/responsive/1680/test.webp"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="yes"/>
      <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon"/>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
      <link rel="icon" href="/favicon.png"/>
    </Head>

    <div className={styles.upprTestPage}>
      <Header search location={'/test'}/>
      <div className={styles.testBody}>
        <Test/>
      </div>
    </div>
  </>;
};

export default TestPage;
