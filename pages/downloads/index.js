import React from 'react';
import Head from 'next/head';

import { getDownloadsByCategoryDB, getDownloadsCategoriesDB } from '../../services/downloadsData';

import Header from '../../components/common/header/Header';
import TopBlogImage from '../../components/blog/TopBlogImage/TopBlogImage';

import styles from './styles.module.scss';
import { Grid, Typography } from '@mui/material';
import GoogleStat from '../../components/common/googleCtat/GoogleStat';
import { getArticles } from '../../services/blogData';
import Footer from '../../components/common/footers/footer/Footer';
import DownloadItem from '../../components/downloads/DownloadItem/DownloadItem';

const domainName = '';
export default function Downloads({ downloads, categories, top3Article }) {
  return (
    <>
      <Head>
        <title>{'UPPR | Downloads'}</title>
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
          content={'https://uppr.com.ua/downloads'}
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
          content={'UPPR Downloads'}
        />
        <meta
          property="og:description"
          content={'Page where you can find useful resources'}
        />
        <meta
          property="og:image"
          content={'https://uppr.com.ua/assets/images/blog-articles/responsive/1200/image_main.webp'}
        />
        <meta
          property="og:image:width"
          content="1944"
        />
        <meta
          property="og:image:height"
          content="2750"
        />
        <link
          rel="canonical"
          href={'https://uppr.com.ua/downloads'}
        />
        <link
          rel="image_src"
          href="https://uppr.com.ua/assets/images/blog-articles/responsive/1200/image_main.webp"
        />
      </Head>
      <div className={styles.upprBlogPage}>
        <Header
          search
          location={'/downloads'}
        />
        <div className={`uppr-page-content ${styles.upprPageContent}`}>
          <TopBlogImage
            caption={'My Downloads'}
            description={'The best downloads!'}
          />

          <div className={styles.upprArticlesContent}>
            <div className={styles.downloadsWrapper}>
              <Grid
                container
                spacing={1}
                alignItems="center"
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Typography variant={'h5'}>Downloads</Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                ></Grid>
              </Grid>
            </div>

            <div className={styles.downloads}>
              {downloads.map(item => {
                return (
                  <DownloadItem
                    key={item.caption}
                    item={item}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <Footer top3Article={top3Article} />
        <GoogleStat />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const downloads = await getDownloadsByCategoryDB();
  const categories = await getDownloadsCategoriesDB();
  const { top3Article } = await getArticles();

  context.res.setHeader('Cache-Control', 'public');

  return {
    props: {
      top3Article,
      ...downloads,
      ...categories,
    },
  };
}
