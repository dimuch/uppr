'use client';

import React from 'react';
import Grid2 from '@mui/material/Grid2';
import { Typography } from '@mui/material';

import loader from '../../../common/loader/loader.js';
import { getDate } from '../../../../helpers/getDate';
import { linesLimiterConfig } from '../../../../helpers/linesLimiterConfig';

import styles from '../styles.module.scss';
import { useHasMounted } from '../../../common/hooks/hasMounted';

export default function ArticleCard({ item, isDescription = true }) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const windowInner = window?.innerWidth;
  const width = windowInner > 850 ? Math.round(windowInner / 3) : windowInner;
  const height = Math.round((width * 4) / 7);
  return (
    <a href={item?.link}>
      <div className={styles.wrapper}>
        <Grid2 size={{
 xs: 12 
}}>
          <img
            className={styles.image}
            src={loader({
              src: item?.image,
              width: width,
            })}
            alt={item?.title}
            width={width}
            height={height}
          />
        </Grid2>
        <Grid2 size={{
 md: 12 
}}>
          <Grid2
            container
            textAlign={'center'}
            alignItems={'center'}
            className={styles.upprArticleDetails}
          >
            <Grid2
              className={styles.category}
              style={{
                backgroundColor: `#${item?.categoryColor}`,
              }}
            >
              <Typography variant={'subtitle2'}>{item?.name?.toUpperCase()}</Typography>
            </Grid2>
            <Grid2
              className={styles.title}
              size={{
 sm: 12 
}}
            >
              <Typography
                textAlign={'center'}
                variant={'h3'}
                sx={{
                  ...linesLimiterConfig(2),
                  minHeight: 76,
                }}
              >
                {item.title}
              </Typography>
            </Grid2>
            {isDescription && (
              <Grid2
                className="description"
                size={{
 md: 12 
}}
                sx={linesLimiterConfig(3)}
              >
                <Typography>{item.description}</Typography>
              </Grid2>
            )}
            <Grid2
              size={{
 md: 12 
}}
              className={'summary ' + styles.summary}
            >
              <Typography
                variant={'subtitle2'}
                className={'summary-item ' + styles.summaryItem}
              >
                {getDate(new Date(item.published))}
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </div>
    </a>
  );
}
