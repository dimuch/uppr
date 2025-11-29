import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/common/header/Header';
import TopBlogImage from '../../components/blog/TopBlogImage/TopBlogImage';
import styles from './styles.module.scss';
import { Grid, Typography } from '@mui/material';
import Footer from '../../components/common/footers/footer/Footer';
import { getCaseStudiesAll } from '../../services/caseStudy.js';
import { getArticles } from '../../services/blogData';
import CaseStudyClient from './CaseStudyClient';

export const metadata: Metadata = {
  title: 'Case Study | UPPR',
  description: 'Turning Missteps into Mastery',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    title: 'Case Study | UPPR',
    description: 'Turning Missteps into Mastery',
    url: 'https://uppr.com.ua/case-study',
    images: [
      {
        url: 'https://uppr.com.ua/assets/images/case-study/case-study-top.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function CaseStudyPage() {
  // Fetch data in parallel
  const [caseStudyData, articlesData] = await Promise.all([
    getCaseStudiesAll(),
    getArticles(),
  ]);

  const { caseStudy } = caseStudyData;
  const { top3Article } = articlesData;

  return (
    <div className={styles.upprBlogPage}>
      <Header search location={'/case-study'} />
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopBlogImage
          caption={'Case Study'}
          description={'Turning Missteps into Mastery'}
          imgUrl={'/assets/images/case-study/case-study-top.jpg'}
        />

        <div className={styles.upprArticlesContent}>
          <div className={styles.downloadsWrapper}>
            <Grid container spacing={1} alignItems="center">
              <Grid item md={6} xs={12}>
                <Typography variant={'h5'}>Case Study</Typography>
              </Grid>
              <Grid item md={6} xs={12}></Grid>
            </Grid>
          </div>

          <CaseStudyClient caseStudy={caseStudy} />
        </div>
      </div>

      <Footer top3Article={top3Article} />
    </div>
  );
}

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic';

