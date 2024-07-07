import React from 'react';
import styles from '../../articles/commonArticleStyles.module.scss';
import Author from '../Author/Author';
import Slider from '../Slider/Slider';
import OthersArticles from '../OthersArticles/OthersArticles';
import InstagramImages from '../InstagramImages/InstagramImages';

const instaImagesConfig = [
  {
    link: 'https://www.instagram.com/p/CZJnrA_thVZ/',
    src: '/assets/images/blog-articles/instagram-5.jpg',
    width: '640',
    height: '640',
    alt: 'Think in advance',
  },
  {
    link: 'https://www.instagram.com/p/CUrofxnLrCy/',
    src: '/assets/images/blog-articles/instagram-2.jpg',
    width: '640',
    height: '640',
    alt: 'Can u catch me up',
  },
  {
    link: 'https://www.instagram.com/p/CsgdEOdt1Y9/',
    src: '/assets/images/blog-articles/instagram-1.jpg',
    width: '640',
    height: '640',
    alt: 'Rule of thumb',
  },
  {
    link: 'https://www.instagram.com/ivanna.tabachuk',
    src: null,
    width: null,
    height: null,
    alt: '@ivanna.tabachuk',
  },
  {
    link: 'https://www.instagram.com/p/CaIB8pRLlJ9/',
    src: '/assets/images/blog-articles/instagram-3.jpg',
    width: '640',
    height: '640',
    alt: 'Rule of thumb',
  },
  {
    link: 'https://www.instagram.com/p/CY8hRtONw7T/',
    src: '/assets/images/blog-articles/instagram-4.jpg',
    width: '640',
    height: '640',
    alt: 'Can you please give me...',
  },
  {
    link: 'https://www.instagram.com/p/CYqsOzXIEPC/',
    src: '/assets/images/blog-articles/instagram-6.jpg',
    width: '640',
    height: '640',
    alt: 'Look forward to hearing from you',
  },
];

export default function ArticleFooter({ articleData }) {
  let width;
  if (typeof window !== 'undefined') {
    width = window?.outerWidth;
  }

  if (!articleData) {
    return null;
  }

  return (
    <>
      <div className={`${styles.footerContainer}`}>
        <div className={styles.authorBlock}>
          <Author data={articleData} />
        </div>
        {width > 1024 && (
          <div className={styles.relevantArticles}>
            <Slider data={articleData.relevantArticles} />
          </div>
        )}
        {width < 1024 && (
          <div className={styles.relevantArticles}>
            <h2 className={styles.subTitle}>Статті по темі</h2>
            <OthersArticles items={articleData.relevantArticles} isDescription={false} />
          </div>
        )}
      </div>
      <InstagramImages instaItems={instaImagesConfig} />
    </>
  );
}
