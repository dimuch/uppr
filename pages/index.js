import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/common/header/Header';
import GoogleStat from '../components/common/googleCtat/GoogleStat';
import Footer from '../components/common/footers/footer/Footer';
import { getArticles } from '../services/blogData';
import styles from './styles.module.scss';
import loader from '../components/common/loader/loader';
import Button from '@mui/material/Button';
import { TypeAnimation } from 'react-type-animation';
import OthersArticles from '../components/blog/OthersArticles/OthersArticles';
import SeeMorePostsLink from '../components/blog/SeeMorePosts/SeeMorePostsLink';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const Index = ({ top3Article, latestArticle, otherLatestArticles }) => {
  const [isCursor, setIsCursor] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const [isCursorLast, setCursorIsLast] = useState(true);
  const last3Articles = [latestArticle[0], otherLatestArticles[0], otherLatestArticles[1]];

  const [imgDimensions, setImgDimensions] = useState({ width: 700, height: 400 });

  useEffect(() => {
    const windowInner = window?.innerWidth;
    const width = windowInner > 850 ? Math.round(windowInner) : windowInner;
    const height = Math.round((width * 4) / 7);

    setImgDimensions(() => ({ width, height }));
  }, []);

  return (
    <>
      <Head>
        <title>UPPR Головна</title>
        <meta name="description" content="Ресурс про англійську мову та як писати email" />
        <meta name="keywords" content="education on-line, english, business, writing, skills, emails" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="yes" />
        <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" />

        <meta name="google-site-verification" content="8Ui50OggqnZ5J1RPshJXelSAYWMPvFGWv32MSzHHlJU" />
      </Head>
      <div className={styles.upprHomePage}>
        <Header location={'/'} search />
        <div className={`${styles.screen} ${styles.screenFirst}`}>
          <div className={`${styles.column} ${styles.leftColumn}`}>
            <Stack>
              <Stack
                sx={{
                  display: 'inline',
                  minHeight: '110px',
                }}
              >
                <h1 className={isCursor ? '' : styles.customTypeAnimationCursor1}>
                  <TypeAnimation
                    sequence={[
                      200,
                      "There's a better way to write",
                      () => {
                        setIsCursor(false);
                        setIsLast(true);
                      },
                    ]}
                    speed={20}
                  />
                </h1>
                {isLast && (
                  <>
                    &nbsp;&nbsp;&nbsp;
                    <h1
                      className={
                        isCursorLast ? styles.emailWord : `${styles.emailWord} ${styles.customTypeAnimationCursor2}`
                      }
                    >
                      <TypeAnimation sequence={[300, 'work emails', () => setCursorIsLast(false)]} speed={20} />
                    </h1>
                  </>
                )}
              </Stack>
              <h4>Make your writing shine, wherever you write.</h4>
            </Stack>
            <Button variant="outlined">Get started</Button>
          </div>
          <div className={`${styles.column} ${styles.rightColumn}`}>
            <img
              className={styles.mainSectionImage}
              src={loader({ src: '/assets/images/others/main_index.png', width: imgDimensions.width })}
              width={imgDimensions?.width}
              height={imgDimensions?.height}
              alt={'Main UPPR page'}
            />
          </div>
        </div>

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
      <GoogleStat />
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const articles = await getArticles();

  context.res.setHeader('Cache-Control', 'public');

  return {
    props: {
      ...articles,
    },
  };
}
