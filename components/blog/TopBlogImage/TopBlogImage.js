import React from 'react';
import loader from '../../common/loader/loader';
import {Typography} from '@mui/material';

import styles from './styles.module.scss';

export default function TopBlogImage () {

  const width = window.innerWidth;
  const height = Math.round(width * 17 / 30);

  return (
    <div className={`uppr-blog-main-picture ${styles.upprBlogMainPicture}`}>
      <img
          src={loader({src:'/assets/images/blog-articles/blog_main.webp', width: width})}
          alt="Main blog picture"
          width={width}
          height={height}
      />
      <div className={styles.titleTextWrapper}>
        <Typography variant={"h3"} className={styles.pageTitle}>My Blog</Typography>
        <div className={styles.pageTitleSeparator}></div>
        <Typography className={styles.pageSubTitle}>You are never too good to email better!</Typography>
      </div>
    </div>
  )
}
