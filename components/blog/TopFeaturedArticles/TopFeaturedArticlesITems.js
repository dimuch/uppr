'use client';

import React from 'react';

import Grid2 from '@mui/material/Grid2';
import { Typography } from '@mui/material';

import loader from '../../common/loader/loader.js';

import styles from './styles.module.scss';
import { useHasMounted } from '../../common/hooks/hasMounted';

export default function TopFeaturedArticlesItems({ items }) {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  const windowInner = window?.innerWidth;
  const width = windowInner > 850 ? Math.round(windowInner / 3) : windowInner;
  const height = Math.round((width * 4) / 7);

  return (
    <div className={'uppr-section-content ' + styles.upprSectionContent}>
      <Grid2
        container
        spacing={3}
      >
        {items.map(article => {
          return (
            <Grid2
              key={article.title}
              size={{
 xs: 12 
}}
            >
              <Grid2
                container
                spacing={1}
                className={styles.articleContainer}
                alignContent={'center'}
              >
                <Grid2
                  size={{
 xs: 5, sm: 5 
}}
                  className={styles.articleImage}
                >
                  <img
                    src={loader({
                      src: article.image,
                      width: width,
                    })}
                    width={width}
                    height={height}
                    alt={article.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </Grid2>
                <Grid2
                  size={{
 xs: 5, sm: 7 
}}
                  className={styles.articleTitle}
                >
                  <a href={article.link}>
                    <Typography>{article.title}</Typography>
                  </a>
                </Grid2>
              </Grid2>
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}
