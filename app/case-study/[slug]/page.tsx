import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../../components/common/header/Header';
import TopBlogImage from '../../../components/blog/TopBlogImage/TopBlogImage';
import Footer from '../../../components/common/footers/footer/Footer';
import { getCaseStudyByTitle, getCaseStudiesAll } from '../../../services/caseStudy.js';
import { slugToTitle } from '../../../utils/caseStudySlug.js';
import { getArticles } from '../../../services/blogData';
import CaseStudyClient from '../CaseStudyClient';
import ModalComponent from '../../../components/caseStudy/CaseStudyItem/components/ModalComponent/ModalComponent';
import styles from '../styles.module.scss';
import Grid2 from '@mui/material/Grid';
import { Typography } from '@mui/material';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slugToTitle(slug);
  
  let caseStudyData;
  try {
    caseStudyData = await getCaseStudyByTitle(title);
  } catch (e) {
    return {
      title: 'Case Study Not Found | UPPR',
    };
  }

  if (!caseStudyData) {
    return {
      title: 'Case Study Not Found | UPPR',
    };
  }

  return {
    title: `${caseStudyData.title} | UPPR Case Study`,
    description: 'Turning Missteps into Mastery',
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
      shortcut: '/favicon.png',
    },
    openGraph: {
      title: `${caseStudyData.title} | UPPR Case Study`,
      description: 'Turning Missteps into Mastery',
      url: `https://uppr.com.ua/case-study/${slug}`,
      images: [
        {
          url: `https://uppr.com.ua${caseStudyData.imageModalHeader}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function CaseStudySlugPage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug);

  const [caseStudyData, articlesData, selectedCaseStudy] = await Promise.all([
    getCaseStudiesAll(),
    getArticles(),
    getCaseStudyByTitle(title),
  ]);

  const { caseStudy } = caseStudyData;
  const { top3Article } = articlesData;

  // If case study not found, show 404
  if (!selectedCaseStudy) {
    notFound();
  }

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
            <Grid2 container spacing={1} alignItems="center">
              <Grid2 size={{
                md: 6, xs: 12 
              }}>
                <Typography variant={'h5'}>Case Study</Typography>
              </Grid2>
              <Grid2 size={{
                md: 6, xs: 12 
              }}></Grid2>
            </Grid2>
          </div>

          <CaseStudyClient caseStudy={caseStudy} />
        </div>
      </div>

      <ModalComponent isModalOpen={true} data={selectedCaseStudy} />
      <Footer top3Article={top3Article} />
    </div>
  );
}

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic';
