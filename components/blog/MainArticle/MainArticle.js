'use client';

import React, { useEffect, useState } from 'react';

import Grid2 from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { getDate } from '../../../helpers/getDate';

import loader from '../../common/loader/loader.js';

import styles from './styles.module.scss';

export default function MainArticle({ items }) {
  const [mainArticleData, setMainArticleData] = useState({
    ...items[0],
    published: getDate(new Date(items[0].published)),
  });

  const [imgDimensions, setImgDimensions] = useState({
    width: 700,
    height: 400,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = Math.round((window.innerWidth * 2) / 3);
      const height = Math.round((width * 4) / 7);
      setImgDimensions({
        width,
        height,
      });
    }
  }, []);

  const updateArticleViews = mainArticleData => {
    mainArticleData.views += 1;
  };

  if (!mainArticleData) {
    return null;
  }

  const { width, height } = imgDimensions;

  return (
    <div
      className={styles.mainArticleWrappper}
      onClick={e => updateArticleViews(mainArticleData)}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        <div
          className={styles.category}
          style={{
            backgroundColor: `#${mainArticleData.categoryColor}`,
          }}
        >
          <Typography variant={'subtitle2'}>{mainArticleData?.name?.toUpperCase()}</Typography>
        </div>
        <img
          className={styles.image}
          src={loader({
            src: mainArticleData.image,
            width: width,
          })}
          width={width}
          height={height}
          alt={mainArticleData.title}
        />
      </div>
      <div className={'uppr-article-details ' + styles.upprArticleDetails}>
        <Grid2 size={{
 md: 12 
}} className="title">
          <a href={mainArticleData.link}>
            <Typography variant={'h3'}>{mainArticleData.title}</Typography>
          </a>
        </Grid2>
        <Grid2 size={{
 md: 12 
}} className="description">
          <Typography>{mainArticleData.description}</Typography>
        </Grid2>
        <Grid2 size={{
 md: 12 
}} className={'summary ' + styles.summary}>
          <Grid2
            container
            justifyContent={'space-between'}
          >
            <Grid2
              size={{
 md: 10 
}}
              className="left-part"
            >
              <Grid2 container>
                <Typography
                  variant={'subtitle2'}
                  className={'summary-item ' + styles.summaryItem}
                >
                  {mainArticleData.published}
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2
              size={{
 md: 2 
}}
              className="right-part"
            >
              <a href={mainArticleData.link}>
                <Typography
                  variant={'subtitle2'}
                  className={'read-more ' + styles.readMore}
                >
                  Читати &rarr;
                </Typography>
              </a>
            </Grid2>
          </Grid2>
        </Grid2>
      </div>
    </div>
  );
}
