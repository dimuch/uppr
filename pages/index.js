import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/common/header/Header';
import GoogleStat from '../components/common/googleCtat/GoogleStat';
import compStyles from './styles.module.scss';
import Footer from '../components/common/footers/footer/Footer';
import { getArticles } from '../services/blogData';
import styles from './styles.module.scss';
import loader from '../components/common/loader/loader';
import Button from '@mui/material/Button';
import { TypeAnimation } from 'react-type-animation';
import FooterBullShit from '../components/common/footers/footer-bull-shit/Footer';
import OthersArticles from '../components/blog/OthersArticles/OthersArticles';
import { useHasMounted } from '../components/common/hooks/hasMounted';
import SeeMorePostsLink from '../components/blog/SeeMorePosts/SeeMorePostsLink';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const bagdeItems = [
  {
    icon: 'icon-open-book',
    firstLine: 'навчайся',
    secondLine: 'за принципом Agile',
  },
  {
    icon: 'icon-clock',
    firstLine: 'встигай',
    secondLine: 'усе за 1.5 години',
  },
  {
    icon: 'icon-list',
    firstLine: 'обирай',
    secondLine: 'домашнє завдання',
  },
  {
    icon: 'icon-settings-1',
    firstLine: 'аналізуй',
    secondLine: 'вивчений матеріал',
  },
  {
    icon: 'icon-transfer',
    firstLine: 'закріплюй',
    secondLine: 'знання на практиці',
  },
];

const howItWorks = [
  {
    icon: 'icon-mustache-icon',
    content:
      'Відчуй на собі ефективність гнучкого Agile-принципу, який допомагає як в розробці програмного забезпечення, так і у навчанні. Готовий до змін та самовдосконалення? Тоді цей курс для Тебе!',
  },
  {
    icon: 'icon-settings-1',
    content:
      'Кожен модудь поділений на 5 етапів-ітерацій та передбачає проведення стендап-мітингів та ретроспективи.Це дає змогу отримати зворотній зв\'язок та одразу вносити корективи у процес навчання.',
  },
  {
    icon: 'icon-thumb-icon',
    content:
      'Ніхто не стоїть над тобою з указкою та не нав\'язує нудні вправи.Ти самостійно обираєш домашнє завдання і працюєш в комфортному для тебе режимі.',
  },
];

const Index = ( {top3Article, latestArticle, otherLatestArticles} ) => {
  const [isCursor, setIsCursor] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const [isCursorLast, setCursorIsLast] = useState(true);
  const last3Articles = [latestArticle[0], otherLatestArticles[0], otherLatestArticles[1]];

  const [imgDimensions, setImgDimensions] = useState({width: 700, height: 400});

  useEffect(() => {
    const windowInner = window?.innerWidth;
    const width = windowInner > 850 ? Math.round(windowInner / 3) : windowInner;
    const height = Math.round(width * 4 / 7);

    setImgDimensions(() => ( {width, height} ));
  }, []);

  return (
    <>
      <Head>
        <title>UPPR Головна</title>
        <meta name="description"
              content="Ресурс про англійську мову та як писати email"/>
        <meta name="keywords" content="education on-line, english, business, writing, skills, emails"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="yes"/>
        <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon"/>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
        <link rel="icon" href="/favicon.png"/>

        <meta name="google-site-verification" content="8Ui50OggqnZ5J1RPshJXelSAYWMPvFGWv32MSzHHlJU"/>
      </Head>
      <div className={styles.upprHomePage}>
        <Header location={'/'} search/>
        <div className={styles.background}></div>
        <div className={`${styles.screen} ${styles.screenFirst}`}>
          <div className={`${styles.column} ${styles.leftColumn}`}>
            <h1
              className={isCursor ? '' : styles.customTypeAnimationCursor1}
            >
              <TypeAnimation
                sequence={[
                  200,
                  'There\'s a better way to write',
                  () => {
                    setIsCursor(false);
                    setIsLast(true);
                  },
                ]}
                speed={20}
              />
            </h1>
            {
              isLast && (
                <>
                  &nbsp;&nbsp;&nbsp;
                  <h1
                    className={isCursorLast ? styles.emailWord : `${styles.emailWord} ${styles.customTypeAnimationCursor2}`}
                  >
                    <TypeAnimation
                      sequence={[
                        300,
                        'work emails',
                        () => setCursorIsLast(false),
                      ]}
                      speed={20}
                    />
                  </h1>
                </>
              )
            }
            <h4>
              Make your writing shine, wherever you write.
            </h4>
            <Button
              variant="outlined"
            >
              Get started
            </Button>
          </div>
          <div className={`${styles.column} ${styles.rightColumn}`}>
            <img
              className={styles.mainSectionImage}
              src={loader({src: '/assets/images/others/lady.png', width: imgDimensions.width})}
              width={imgDimensions?.width}
              height={imgDimensions?.height}
              alt={'Main UPPR page'}
            />
            <img
              className={`${styles.backgroundImage1}`}
              src={loader({src: '/assets/images/others/email.png', width: imgDimensions.width})}
              width={imgDimensions?.width}
              height={imgDimensions?.height}
              alt={'Email example'}
            />
            <img
              className={`${styles.backgroundImage2}`}
              src={loader({src: '/assets/images/others/email-2.png', width: imgDimensions.width})}
              width={imgDimensions?.width}
              height={imgDimensions?.height}
              alt={'Email example'}
            />
            <img
              className={`${styles.backgroundImage3}`}
              src={loader({src: '/assets/images/others/gmail.png', width: imgDimensions.width})}
              width={imgDimensions?.width}
              height={imgDimensions?.height}
              alt={'Email example'}
            />
          </div>

        </div>

        <div className={`${styles.screen} ${styles.screenSecond}`}>
          <div
            className={styles.phraseWrapper}
          >
            <span className={styles.quotes}>
              &ldquo;
            </span>
            <h2>
              Easy Reading Is Damn Hard Writing
            </h2>
            <span className={styles.quotes}>
              &rdquo;
            </span>
            <h4>
              Nathaniel Hawthorne.
            </h4>
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
            <SeeMorePostsLink/>
          </Stack>
          <div className={`${styles.othersArticles}`}>
            <OthersArticles items={last3Articles}/>
          </div>
        </div>
      </div>
      <Footer
        top3Article={top3Article}
      />
      <GoogleStat/>
    </>
  );
};

export default Index;

export async function getServerSideProps( context ) {
  const articles = await getArticles();

  context.res.setHeader(
    'Cache-Control',
    'public',
  );

  return {
    props: {
      ...articles,
    },
  };
}
