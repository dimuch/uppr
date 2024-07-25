import React from 'react';
import Head from 'next/head';

import Header from '../../components/common/header/Header';
import Test from '../../components/test/Test';
import { useHasMounted } from '../../components/common/hooks/hasMounted';

import GoogleStat from '../../components/common/googleCtat/GoogleStat';
import styles from './styles.module.scss';
import { getArticles } from '../../services/blogData';
import Footer from '../../components/common/footers/footer/Footer';

const TestPage = ({ top3Article }) => {
  return (
    <>
      <Head>
        <title>UPPR | Email Level Test</title>
        <meta
          name="description"
          content="Wanna check if your emails are effective and modern enough?"
        />
        <meta
          name="keywords"
          content="test, education on-line, english, business, writing, skills, emails"
        />
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
          content="https://uppr.com.ua/test"
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
          content="UPPR Email Level Test | UPPR"
        />
        <meta
          property="og:description"
          content="Wanna check if your emails are effective and modern enough?"
        />
        <meta
          property="og:image"
          content="https://uppr.com.ua/assets/images/blog-articles/responsive/1200/test.webp"
        />
        <meta
          property="og:image:width"
          content="1200"
        />
        <meta
          property="og:image:height"
          content="450"
        />
        <link
          rel="canonical"
          href="https://uppr.com.ua/test"
        />
        <link
          rel="image_src"
          content="https://uppr.com.ua/assets/images/blog-articles/responsive/1200/test.webp"
        />
      </Head>

      <div className={styles.upprTestPage}>
        <Header
          search
          location={'/test'}
        />
        <div className={styles.testBody}>
          <Test />
        </div>
        <Footer top3Article={top3Article} />
      </div>

      <GoogleStat />
    </>
  );
};
export default TestPage;

export async function getServerSideProps(context) {
  const articles = await getArticles();

  context.res.setHeader('Cache-Control', 'public');

  return {
    props: {
      ...articles,
    },
  };
}
