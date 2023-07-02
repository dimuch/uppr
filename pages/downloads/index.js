import React from 'react';
import Head from 'next/head';

import {useHasMounted} from '../../components/common/hooks/hasMounted';
import Header from '../../components/common/header/Header';
import TopBlogImage from '../../components/blog/TopBlogImage/TopBlogImage';

import {getDownloadsByCategoryDB} from '../../services/downloadsData';
import styles from './styles.module.scss';
import {Grid, Typography} from '@mui/material';
import loader from '../../components/common/loader/loader';

const domainName = '';
export default function Downloads({downloadsByCategories}) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const width = window.innerWidth > 875 ? Math.round(window.innerWidth / 3) : window.innerWidth;
  const height = Math.round(width * 22 / 27);

  return <>
    <Head>
      <title>{'UPPR | Downloads'}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="yes"/>
      <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon"/>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
      <link rel="icon" href="/favicon.png"/>
    </Head>
    <div className={styles.upprBlogPage}>
      <Header search location={'/downloads'}/>
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopBlogImage/>

        <div className={styles.upprArticlesContent}>
          <div className={styles.downloadsWrapper}>
            <Grid container spacing={1} alignItems="center">
              <Grid item md={8} xs={12}>
                <Typography variant={'h5'}>Downloads</Typography>
              </Grid>
              <Grid item md={4} xs={12}>
                Categories
              </Grid>
            </Grid>
          </div>

          <div className={styles.downloads}>
            {
              downloadsByCategories.map(item => {
                return (
                  <a href={item.downloadLink}
                     className={styles.downloadLink}
                     target={'_blank'} rel="noreferrer"
                     key={item.caption}
                  >
                    <div
                      className={styles.downloadImage}
                    >
                      <div
                        className={styles.overlay}
                      >
                        <a
                          className={styles.linkAsButton}
                          href={`/downloads/${item.caption.replaceAll(' ', '_')}`}
                          target={'_blank'} rel={'noreferrer'}
                        >
                          Опис
                        </a>
                      </div>
                      <img
                        src={loader({src: item.image, width: width})}
                        alt={item.title}
                        width={width}
                        height={height}
                      />
                    </div>
                    <div className={styles.downloadContent}>
                      <div className={styles.caption}>
                        <Typography
                          variant={'body1'}
                        >
                          {item.caption}
                        </Typography>
                      </div>
                      <Typography
                        variant="caption">
                        {item.category}
                      </Typography>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  </>;
}

export async function getServerSideProps(context) {
  const downloadsByCategories = await getDownloadsByCategoryDB();

  context.res.setHeader(
    'Cache-Control',
    'public',
  )

  return {
    props: {
      downloadsByCategories: downloadsByCategories.downloads,
    },
  };
}
