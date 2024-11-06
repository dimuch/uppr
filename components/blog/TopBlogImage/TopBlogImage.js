import React from 'react';
import loader from '../../common/loader/loader.js';
import { Typography } from '@mui/material';

import styles from './styles.module.scss';
import { useHasMounted } from '../../common/hooks/hasMounted';

export default function TopBlogImage({ caption, description }) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const width = window.innerWidth;
  const height = Math.round(width / 1.5);

  return (
    <div className={`uppr-blog-main-picture ${styles.upprBlogMainPicture}`}>
      <img
        src={loader({
          src: '/assets/images/blog-articles/image_main.jpg',
          width: width,
        })}
        alt="Main blog picture"
        width={width}
        height={height}
      />
      <div className={styles.titleTextWrapper}>
        <Typography
          variant={'h3'}
          className={styles.pageTitle}
        >
          {caption}
        </Typography>
        <div className={styles.pageTitleSeparator}></div>
        <Typography className={styles.pageSubTitle}>{description}</Typography>
      </div>
    </div>
  );
}
