import React, { useState } from 'react';
import styles from './styles.module.scss';
import loader from '../../common/loader/loader.js';
import { Typography } from '@mui/material';
import { useHasMounted } from '../../common/hooks/hasMounted';

export default function CaseStudyItem({ item, onToggleModal }) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const width = window.innerWidth > 875 ? Math.round(window.innerWidth / 3) : window.innerWidth;
  const height = Math.round((width * 22) / 27);

  return (
    <div className={styles.downloadLink}>
      <div className={styles.downloadImage}>
        <div
          className={styles.overlay}
          onClick={() => onToggleModal(item)}
        />
        <img
          src={loader({
            src: item.imageThumb,
            width: width,
          })}
          alt={item.title}
          width={width}
          height={height}
        />
      </div>
      <div className={styles.downloadContent}>
        <div className={styles.caption}>
          <Typography
            onClick={() => onToggleModal(item)}
            sx={{
              fontFamily: 'Raleway-Regular, sans-serif',
            }}
          >
            {item.title}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ res, resolvedUrl }) {
  const articleURL = resolvedUrl.split('?')[0];

  // const articleData = await getArticlesDataByIdDB(articleURL);

  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=10');

  return {
    props: {
      // articleData: articleData,
    },
  };
}
