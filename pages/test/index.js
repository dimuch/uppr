import React from 'react';
import Head from 'next/head';

import Header from '../../components/common/header/Header';
import TopTestImage from '../../components/blog/TopTestImage/TopBlogImage';
import {useHasMounted} from '../../components/common/hooks/hasMounted';

import styles from './styles.module.scss';

const domainName = '';
export default function Test() {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const width = window.innerWidth > 875 ? Math.round(window.innerWidth / 3) : window.innerWidth;
  const height = Math.round(width * 22 / 27);

  return <>
    <Head>
      <title>{'UPPR | Test'}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="yes"/>
      <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon"/>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
      <link rel="icon" href="/favicon.png"/>
    </Head>

    <div className={styles.upprBlogPage}>
      <Header search location={'/downloads'}/>
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopTestImage/>
      </div>
    </div>
  </>;
}
