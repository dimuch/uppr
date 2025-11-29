import React from 'react';
import { Metadata } from 'next';
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
import Footer from '../../components/common/footers/footer/Footer';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'UPPR | Блог',
  description: 'The coolest blog ever about writing, emails',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'UPPR | Блог',
    description: 'The coolest blog ever about writing, emails',
    url: 'https://uppr.com.ua/blog',
    images: [
      {
        url: 'https://uppr.com.ua/assets/images/blog-articles/responsive/1200/image_main.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function BlogPage() {
  // Fetch all data in parallel for better performance
  const [articleCategories, articles, downloads, tags, articlesByCategories] = await Promise.all([
    getArticlesCategoriesDB(),
    getArticles(),
    getDownloadsDB(),
    getTagsDB(),
    getArticlesByCategoryDB(),
  ]);

  const { latestArticle, otherLatestArticles, top3Article } = articles;

  return (
    <div className={styles.upprBlogPage}>
      <Header search location={'/blog'} />
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopBlogImage
          caption={'My Blog'}
          description={'You are never too good to email better!'}
          imgUrl={undefined}
        />

        <div className={`uppr-article-categories ${styles.upprArticleCategories}`}>
          <CategoriesList items={articleCategories} selectedCategory={undefined} />
        </div>

        <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
          <SelectedAllCategories
            latestArticle={latestArticle}
            otherLatestArticles={otherLatestArticles}
            top3Article={top3Article}
            downloads={downloads}
            tags={tags}
            articlesByCategories={articlesByCategories}
            domainName={''}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer top3Article={top3Article} />
      </div>
    </div>
  );
}

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic';

