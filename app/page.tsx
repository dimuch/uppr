import React from 'react';
import { Metadata } from 'next';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footers/footer/Footer';
import { getArticles } from '../services/blogData';
import styles from '../pages/styles.module.scss';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import OthersArticles from '../components/blog/OthersArticles/OthersArticles';
import SeeMorePostsLink from '../components/blog/SeeMorePosts/SeeMorePostsLink';
import HomeHero from './HomeHero';

export const metadata: Metadata = {
  title: 'UPPR Головна',
  description: 'Ресурс про англійську мову та як писати email',
  keywords: 'education on-line, english, business, writing, skills, emails',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'UPPR Головна',
    description: 'Ресурс про англійську мову та як писати email',
    images: [
      {
        url: 'https://uppr.com.ua/assets/images/blog-articles/responsive/1200/image_main.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
  other: {
    'google-site-verification': '8Ui50OggqnZ5J1RPshJXelSAYWMPvFGWv32MSzHHlJU',
  },
};

export default async function HomePage() {
  // Fetch data directly in the Server Component
  const articles = await getArticles();
  const { top3Article, latestArticle, otherLatestArticles } = articles;
  
  const last3Articles = [latestArticle[0], otherLatestArticles[0], otherLatestArticles[1]];

  return (
    <>
      <div className={styles.upprHomePage}>
        <Header location={'/'} search />
        
        <HomeHero />

        <div className={`${styles.screen} ${styles.screenSecond}`}>
          <div className={styles.phraseWrapper}>
            <span className={styles.quotes}>&ldquo;</span>
            <h2>Easy Reading Is Damn Hard Writing</h2>
            <span className={styles.quotes}>&rdquo;</span>
            <h4>Nathaniel Hawthorne.</h4>
          </div>
        </div>

        <div className={`${styles.screen} ${styles.screenThird}`}>
          <Stack
            direction={'row'}
            sx={{
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%',
              marginBottom: '80px',
            }}
          >
            <Typography
              sx={{
                fontSize: '34px',
                fontFamily: 'Raleway-SemiBold, sans-serif',
              }}
            >
              From My Blog
            </Typography>
            <SeeMorePostsLink />
          </Stack>
          <div className={`${styles.othersArticles}`}>
            <OthersArticles items={last3Articles} />
          </div>
        </div>
      </div>
      <Footer top3Article={top3Article} />
    </>
  );
}

