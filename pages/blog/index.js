import React from 'react';
import Head from 'next/head';

import { useHasMounted } from '../../components/common/hooks/hasMounted';
import Header from '../../components/common/header/Header';
import TopBlogImage from '../../components/blog/TopBlogImage/TopBlogImage';
import CategoriesList from '../../components/blog/CategoriesList/CategoriesList';
import SelectedAllCategories from '../../components/blog/SelectedAllCategories/SelectedAllCategories';
import {
  getArticles,
  getArticlesByCategoryDB,
  getArticlesCategoriesDB,
  getDownloadsDB,
  getTagsDB,
} from '../../services/blogData.js';

import GoogleStat from '../../components/common/googleCtat/GoogleStat';
import Footer from '../../components/common/footers/footer/Footer';
import styles from './styles.module.scss';

const domainName = '';
export default function Blog({
  articleCategories,
  latestArticle,
  otherLatestArticles,
  top3Article,
  downloads,
  tags,
  articlesByCategories,
}) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{'UPPR | Блог'}</title>
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
          property="og:title"
          content={'UPPR | Блог'}
        />
        <meta
          property="og:description"
          content="The coolest blog ever about writing, emails"
        />
        <meta
          property="og:image"
          content="https://uppr.com.ua/assets/images/blog-articles/responsive/1200/image_main.webp"
        />
        <meta
          property="og:url"
          content={`https://uppr.com.ua/blog`}
        />
      </Head>
      <div className={styles.upprBlogPage}>
        <Header
          search
          location={'/blog'}
        />
        <div className={`uppr-page-content ${styles.upprPageContent}`}>
          <TopBlogImage
            caption={'My Blog'}
            description={'You are never too good to email better!'}
          />

          <div className={`uppr-article-categories ${styles.upprArticleCategories}`}>
            {/*<CategoriesList items={articleCategories} />*/}
          </div>

          <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
            <SelectedAllCategories
              latestArticle={latestArticle}
              otherLatestArticles={otherLatestArticles}
              top3Article={top3Article}
              downloads={downloads}
              tags={tags}
              articlesByCategories={articlesByCategories}
              domainName={domainName}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <Footer
            top3Article={top3Article}
            domainName={domainName}
          />
        </div>
      </div>

      <GoogleStat />
    </>
  );
}

export async function getServerSideProps(context) {
  const articleCategories = await getArticlesCategoriesDB();
  const articles = await getArticles();
  const downloads = await getDownloadsDB();
  const tags = await getTagsDB();
  const articlesByCategories = await getArticlesByCategoryDB();

  context.res.setHeader('Cache-Control', 'public');

  return {
    props: {
      ...articles,
      articleCategories,
      downloads,
      tags,
      articlesByCategories,
    },
  };
}
