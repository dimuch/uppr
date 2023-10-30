import React, { useEffect, useState } from 'react';

import Head from 'next/head'
import Link from 'next/link';

import Header from "../components/common/header/Header";

import Video from "../components/common/video/Video";
import UpprLogoText from "../components/common/uppr-logo-as-text/UpprLogoText";

import TelegramIcon from "../components/common/icons/telegram-icon-2";
import FooterBullShit from "../components/common/footers/footer-bull-shit/Footer";

import GoogleStat from '../components/common/googleCtat/GoogleStat';
import compStyles from "./styles.module.scss";
import Footer from '../components/common/footers/footer/Footer';
import { getArticles } from '../services/blogData';
import styles from "./styles.module.scss";
import loader from '../components/common/loader/loader';
import Button from '@mui/material/Button';

const bagdeItems = [
  {
    icon: "icon-open-book",
    firstLine: "навчайся",
    secondLine: "за принципом Agile",
  },
  {
    icon: "icon-clock",
    firstLine: "встигай",
    secondLine: "усе за 1.5 години",
  },
  {
    icon: "icon-list",
    firstLine: "обирай",
    secondLine: "домашнє завдання",
  },
  {
    icon: "icon-settings-1",
    firstLine: "аналізуй",
    secondLine: "вивчений матеріал",
  },
  {
    icon: "icon-transfer",
    firstLine: "закріплюй",
    secondLine: "знання на практиці",
  },
];

const howItWorks = [
  {
    icon: "icon-mustache-icon",
    content:
      "Відчуй на собі ефективність гнучкого Agile-принципу, який допомагає як в розробці програмного забезпечення, так і у навчанні. Готовий до змін та самовдосконалення? Тоді цей курс для Тебе!",
  },
  {
    icon: "icon-settings-1",
    content:
      "Кожен модудь поділений на 5 етапів-ітерацій та передбачає проведення стендап-мітингів та ретроспективи.Це дає змогу отримати зворотній зв'язок та одразу вносити корективи у процес навчання.",
  },
  {
    icon: "icon-thumb-icon",
    content:
      "Ніхто не стоїть над тобою з указкою та не нав'язує нудні вправи.Ти самостійно обираєш домашнє завдання і працюєш в комфортному для тебе режимі.",
  },
];

const Index = ({top3Article}) => {
const Index = () => {
  const [imgDimensions, setImgDimensions] = useState({width:700, height:400});

  useEffect(() => {
    const width = window.innerWidth > 850 ? Math.round(window.innerWidth / 3) : window.innerWidth;
    const height = Math.round(width * 4 / 7);

    setImgDimensions(() => ({width, height}));
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

          <meta name="google-site-verification" content="8Ui50OggqnZ5J1RPshJXelSAYWMPvFGWv32MSzHHlJU" />
        </Head>
        <div className="uppr-home-page">
          <Header location={"/"} search/>
          <div className={`${styles.screen} ${styles.screenFirst}`}>
            <div className={`${styles.column} ${styles.leftColumn}`}>
              <h1>
                There's a better way to write
              </h1>
              <h4>
                Make your writing shine with our all-in-one AI tool, wherever you write.
              </h4>
              <Button
                variant="outlined"
              >
                Get started
              </Button>
            </div>
            <div className={`${styles.column} ${styles.rightColumn}`}>
              <img
                src={loader({src:'/assets/images/others/test.png', width: imgDimensions.width})}
                width={imgDimensions?.width}
                height={imgDimensions?.height}
                alt={'Main UPPR page'}
              />
            </div>

          </div>
          <div className={`${styles.screen} ${styles.screenSecond}`}>

          </div>

          {/*<div className={"uppr-section " + styles?.section}>*/}
          {/*  <div className={"uppr-section-title " + styles?.sectionTitle}>*/}
          {/*    <div className={styles.firstLine}>*/}
          {/*      <h4>ДОСИТЬ БУТИ INTERMEDIATE!</h4>*/}
          {/*    </div>*/}
          {/*    <div className={styles.firstLine}>*/}
          {/*      <h4>ТИ МОЖЕШ СТАТИ&nbsp;</h4>*/}
          {/*      <UpprLogoText onlyLogo={true} isInText/>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className={"uppr-section-content"}>*/}
          {/*    <div*/}
          {/*      className={"uppr-learning-strategy " + styles?.sectionContent}*/}
          {/*    >*/}
          {/*      <ul className={styles?.badgeList}>*/}
          {/*        {bagdeItems.map((item, index) => {*/}
          {/*          return (*/}
          {/*            <li className={"uppr-badge " + styles?.badge} key={index}>*/}
          {/*              <div*/}
          {/*                className={"uppr-icon-wrapper " + styles?.iconWrapper}*/}
          {/*              >*/}
          {/*                <div className={"uppr-font-icon " + item.icon} />*/}
          {/*              </div>*/}
          {/*              <div*/}
          {/*                className={*/}
          {/*                  "badge-first-line " + styles?.badgeFirstLine*/}
          {/*                }*/}
          {/*              >*/}
          {/*                {item.firstLine}*/}
          {/*              </div>*/}
          {/*              <div*/}
          {/*                className={*/}
          {/*                  "badge-second-line " + styles?.badgeSecondLine*/}
          {/*                }*/}
          {/*              >*/}
          {/*                {item.secondLine}*/}
          {/*              </div>*/}
          {/*            </li>*/}
          {/*          );*/}
          {/*        })}*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className={"uppr-section-content"}>*/}
          {/*    <div className={"uppr-comments " + styles?.comments}>*/}
          {/*      <h4>Ідеальна англійська не передається генетично.</h4>*/}
          {/*      <h4>Знання мови треба вдосконалювати самостійно.</h4>*/}
          {/*      <br />*/}
          {/*      <h4>Якщо ти застряв на рівні intermediate</h4>*/}
          {/*      <h4>та чекаєш знак згори &mdash; це він.</h4>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className={"uppr-section-content"}>*/}
          {/*    <div*/}
          {/*      className={*/}
          {/*        "uppr-how-it-works-wrapper " + styles?.howItWorksWrapper*/}
          {/*      }*/}
          {/*    >*/}
          {/*      <div className={"uppr-how-it-works " + styles?.howItWorks}>*/}
          {/*        <h4>ЯК МИ ПРАЦЮЄМО</h4>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <ul className={styles.howItWorksList}>*/}
          {/*        {howItWorks.map((item, index) => {*/}
          {/*          return (*/}
          {/*            <li*/}
          {/*              key={index}*/}
          {/*              className={*/}
          {/*                "uppr-how-it-works-item " + styles?.howItWorksItem*/}
          {/*              }*/}
          {/*            >*/}
          {/*              <div className="uppr-content-left-side">*/}
          {/*                <div*/}
          {/*                  className={*/}
          {/*                    "uppr-icon-wrapper " + styles.howIconWrapperFirst*/}
          {/*                  }*/}
          {/*                >*/}
          {/*                  <div className={"uppr-font-icon icon-hexagon-icon"} />*/}
          {/*                  <div*/}
          {/*                    className={*/}
          {/*                      "uppr-icon-wrapper " +*/}
          {/*                      styles.howIconWrapperSecond*/}
          {/*                    }*/}
          {/*                  >*/}
          {/*                    <div className={"uppr-font-icon " + item.icon} />*/}
          {/*                  </div>*/}
          {/*                </div>*/}
          {/*              </div>*/}
          {/*              <div className="uppr-content-right-side">*/}
          {/*                <h6>{item.content}</h6>*/}
          {/*              </div>*/}
          {/*            </li>*/}
          {/*          );*/}
          {/*        })}*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className={"uppr-section-content"}>*/}
          {/*    <div*/}
          {/*      className={"uppr-telegram-channel " + styles?.telegramChannel}*/}
          {/*    >*/}
          {/*      <div className={styles.telegramBlock}>*/}
          {/*        <div className={styles.iconTelegram}>*/}
          {/*          <TelegramIcon />*/}
          {/*        </div>*/}
          {/*        <h4>Канал в телеграмі</h4>*/}
          {/*        <Link href="https://t.me/emailingskills" passHref*/}
          {/*              target="_blank" without rel="noreferrer"*/}
          {/*        >*/}
          {/*          <button className={styles.signIn}>*/}
          {/*            &nbsp;Підписатись на канал&nbsp;*/}
          {/*          </button>*/}
          {/*        </Link>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className={"uppr-section-content"}>*/}
          {/*    <div className={"uppr-final-message " + styles?.finalMessage}>*/}
          {/*      <h4>Розвиток - це просто.</h4>*/}
          {/*      <h4>Будь простіше і записуйся на курс!</h4>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <FooterBullShit />*/}
          {/*</div>*/}
            <div className={"uppr-section-content"}>
              <div className={"uppr-final-message " + compStyles?.finalMessage}>
                <h4>Розвиток - це просто.</h4>
                <h4>Будь простіше і записуйся на курс!</h4>
              </div>
            </div>
            <FooterBullShit />
            <Footer
              top3Article={top3Article}
            />
          </div>

        <GoogleStat />
      </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const articles = await getArticles();

  context.res.setHeader(
    'Cache-Control',
    'public',
  )

  return {
    props: {
      ...articles,
    },
  };
}
