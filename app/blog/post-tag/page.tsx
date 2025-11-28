import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../../components/common/header/Header';
import { getArticlesByTagsNameDB, getTagsDB } from '../../../services/blogData.js';
import TopBlogImage from '../../../components/blog/TopBlogImage/TopBlogImage';
import PostTagClient from './PostTagClient';
import styles from './styles.module.scss';

type Props = {
  searchParams: Promise<{ selectedTag?: string }>;
};

export const metadata: Metadata = {
  title: 'Статті по тегах | UPPR Блог',
  description: 'Знайдіть статті за тегами',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default async function PostTagPage({ searchParams }: Props) {
  const params = await searchParams;
  const tagName = params.selectedTag || '';
  
  // Fetch data in parallel
  const [articleTags, articlesByTags] = await Promise.all([
    getTagsDB(tagName),
    getArticlesByTagsNameDB(tagName).catch((e) => {
      console.log(`WRONG TAG: ${tagName}`, '\n', e);
      return [];
    }),
  ]);

  if (!articlesByTags?.length) {
    notFound();
  }

  return (
    <div className={styles.upprBlogPage}>
      <Header search location={'/blog'} />
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopBlogImage />
        <PostTagClient articlesByTags={articlesByTags} articleTags={articleTags} />
      </div>
    </div>
  );
}

// Enable ISR with 1 week revalidation
export const revalidate = 604800;

