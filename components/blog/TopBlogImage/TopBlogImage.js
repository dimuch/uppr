import React from 'react';
import loader from '../../common/loader/loader.js';
import { Typography } from '@mui/material';

import styles from './styles.module.scss';
import { useHasMounted } from '../../common/hooks/hasMounted';

const DEFAULT_TOP_IMAGE_URL = '/assets/images/blog-articles/image_main.jpg';

export default function TopBlogImage({ caption, description, imgUrl }) {
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
          src: imgUrl || DEFAULT_TOP_IMAGE_URL,
          width: width,
        })}
        alt={caption}
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
