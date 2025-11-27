import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/common/header/Header';
import Test from '../../components/test/Test';
import { getArticles } from '../../services/blogData';
import Footer from '../../components/common/footers/footer/Footer';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'UPPR | Email Level Test',
  description: 'Wanna check if your emails are effective and modern enough?',
  keywords: 'test, education on-line, english, business, writing, skills, emails',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'UPPR Email Level Test | UPPR',
    description: 'Wanna check if your emails are effective and modern enough?',
    url: 'https://uppr.com.ua/test',
    type: 'website',
    images: [
      {
        url: 'https://uppr.com.ua/assets/images/blog-articles/responsive/1200/test.webp',
        width: 1200,
        height: 450,
      },
    ],
  },
  alternates: {
    canonical: 'https://uppr.com.ua/test',
  },
  other: {
    'article:author': 'https://www.facebook.com/ivanna.tabachuk',
  },
};

export default async function TestPage() {
  // Fetch articles data for footer
  const articles = await getArticles();
  const { top3Article } = articles;

  return (
    <div className={styles.upprTestPage}>
      <Header search location={'/test'} />
      <div className={styles.testBody}>
        <Test />
      </div>
      <Footer top3Article={top3Article} />
    </div>
  );
}

