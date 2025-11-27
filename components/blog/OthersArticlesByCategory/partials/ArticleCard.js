'use client';

import React from 'react';
import { Grid, Typography } from '@mui/material';

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
        <Grid
          item
          xs={12}
        >
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
        </Grid>
        <Grid
          item
          md={12}
        >
          <Grid
            container
            textAlign={'center'}
            alignItems={'center'}
            className={styles.upprArticleDetails}
          >
            <Grid
              item
              className={styles.category}
              style={{
                backgroundColor: `#${item?.categoryColor}`,
              }}
            >
              <Typography variant={'subtitle2'}>{item?.name?.toUpperCase()}</Typography>
            </Grid>
            <Grid
              item
              className={styles.title}
              sm={12}
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
            </Grid>
            {isDescription && (
              <Grid
                item
                className="description"
                md={12}
                sx={linesLimiterConfig(3)}
              >
                <Typography>{item.description}</Typography>
              </Grid>
            )}
            <Grid
              item
              md={12}
              className={'summary ' + styles.summary}
            >
              <Typography
                variant={'subtitle2'}
                className={'summary-item ' + styles.summaryItem}
              >
                {getDate(new Date(item.published))}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </a>
  );
}
