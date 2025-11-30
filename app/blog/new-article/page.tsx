import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Header from '../../../components/common/header/Header';
import TopBlogImage from '../../../components/blog/TopBlogImage/TopBlogImage';
import Footer from '../../../components/common/footers/footer/Footer';
import NewArticleForm from '../../../components/blog/NewArticleForm/NewArticleForm';
import NewArticleFormSkeleton from '../../../components/blog/NewArticleForm/NewArticleFormSkeleton';
import { getArticles, getArticlesCategoriesDB, getTagsDB } from '../../../services/blogData.js';
import styles from '../styles.module.scss';

export const metadata: Metadata = {
  title: 'UPPR | New Article',
  description: 'New article page',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'UPPR | New Article',
    description: 'New article page',
    url: 'https://uppr.com.ua/blog/new-article',
    images: [
      {
        url: 'https://uppr.com.ua/assets/images/blog-articles/responsive/1200/image_main.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function NewArticlePage() {
  // Fetch all required data in parallel
  const [articles, categories, tags] = await Promise.all([
    getArticles(),
    getArticlesCategoriesDB(),
    getTagsDB(),
  ]);

  const { top3Article } = articles;

  return (
    <div className={styles.upprBlogPage}>
      <Header search location={'/blog/new-article'} />
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopBlogImage
          caption={'New article'}
          description={''}
          imgUrl={undefined}
        />

        <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
          <Suspense fallback={<NewArticleFormSkeleton />}>
            <NewArticleForm categories={categories} tags={tags} />
          </Suspense>
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

