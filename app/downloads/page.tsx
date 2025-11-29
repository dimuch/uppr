import React from 'react';
import { Metadata } from 'next';
import { getDownloadsByCategoryDB, getDownloadsCategoriesDB } from '../../services/downloadsData';
import Header from '../../components/common/header/Header';
import TopBlogImage from '../../components/blog/TopBlogImage/TopBlogImage';
import styles from './styles.module.scss';
import { Grid, Typography } from '@mui/material';
import { getArticles } from '../../services/blogData';
import Footer from '../../components/common/footers/footer/Footer';
import DownloadItem from '../../components/downloads/DownloadItem/DownloadItem';

export const metadata: Metadata = {
  title: 'UPPR | Downloads',
  description: 'Page where you can find useful resources',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    url: 'https://uppr.com.ua/downloads',
    type: 'website',
    title: 'UPPR Downloads',
    description: 'Page where you can find useful resources',
    images: [
      {
        url: 'https://uppr.com.ua/assets/images/blog-articles/responsive/1200/image_main.webp',
        width: 1944,
        height: 2750,
      },
    ],
  },
  other: {
    'article:author': 'https://www.facebook.com/ivanna.tabachuk',
  },
  alternates: {
    canonical: 'https://uppr.com.ua/downloads',
  },
};

export default async function DownloadsPage() {
  // Fetch data in parallel
  const [downloadsData, categoriesData, articlesData] = await Promise.all([
    getDownloadsByCategoryDB(),
    getDownloadsCategoriesDB(),
    getArticles(),
  ]);

  const { downloads } = downloadsData;
  const { categories } = categoriesData;
  const { top3Article } = articlesData;

  return (
    <div className={styles.upprBlogPage}>
      <Header search location={'/downloads'} />
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopBlogImage caption={'My Downloads'} description={'The best downloads!'} imgUrl={undefined} />

        <div className={styles.upprArticlesContent}>
          <div className={styles.downloadsWrapper}>
            <Grid container spacing={1} alignItems="center">
              <Grid item md={6} xs={12}>
                <Typography variant={'h5'}>Downloads</Typography>
              </Grid>
              <Grid item md={6} xs={12}></Grid>
            </Grid>
          </div>

          <div className={styles.downloads}>
            {downloads?.map((item: any) => {
              return <DownloadItem key={item.caption} item={item} />;
            })}
          </div>
        </div>
      </div>

      <Footer top3Article={top3Article} />
    </div>
  );
}

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic';

