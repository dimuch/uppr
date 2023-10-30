import React from "react";

import styles from "./styles.module.scss";
import UpprLogoText from '../../uppr-logo-as-text/UpprLogoText';
import Link from 'next/link';
import FollowMeBlock from '../../../blog/FollowMeBlock/FollowMeBlock';
import { HomeIcon } from '../../icons';
import TopFeaturedArticlesItems from '../../../blog/TopFeaturedArticles/TopFeaturedArticlesITems';

const Footer = ({ top3Article= []  }) => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.firstColumn}>
          <UpprLogoText isInText={false} isInHeader/>
          <div className={styles.divider}></div>
          <FollowMeBlock showTitle={false} />
        </div>
        <div className={styles.secondColumn}>
          <p className={styles.sectionTitle}>
            Pages
          </p>
          <div className={styles.divider}></div>
          <Link href="/" className={styles.link}>
            <HomeIcon className={styles.homeIcon} />
          </Link>
          <Link href="/blog" className={styles.link}>
            Блог
          </Link>
          <Link href="/test" className={styles.link}>
            Test
          </Link>
          <Link href="https://englishplus.com.ua"
                target="_blank"
                className={styles.link}
          >
            Тренінг
          </Link>
          <Link href="https://www.udemy.com/course/deschool-your-emails/"
                target="_blank"
                className={styles.link}
          >
            Онлайн курс
          </Link>
        </div>
        <div className={styles.thirdColumn}>
          <p className={styles.sectionTitle}>
            Top featured
          </p>
          <div className={styles.divider}></div>
          <div className={styles.top3ArticlesCustom}>
            <TopFeaturedArticlesItems
              items={top3Article.slice(0,2)}
            />
          </div>
        </div>
        <div className={styles.fourthColumn}>
          <p className={styles.sectionTitle}>
            Useful
          </p>
          <div className={styles.divider}></div>
          <Link href="/public/public-offer" className={styles.link}>
            Публічна оферта
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
