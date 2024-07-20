import React from 'react';

import { Grid, Typography } from '@mui/material';
import * as Icons from '../../common/icons/index';

import styles from './styles.module.scss';
import Link from 'next/link';

export default function Downloads({ items }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={'wrapper ' + styles.wrapper}>
      <Grid
        item
        md={12}
        className={'uppr-section-title ' + styles.upprSectionTitle}
      >
        <Grid
          container
          spacing={1}
          alignItems="center"
        >
          <Grid
            item
            md={12}
            xs={12}
          >
            <Typography variant={'h5'}>Downloads</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        md={12}
        className={'uppr-section-content ' + styles.upprSectionContent}
      >
        {items.slice(0, 4).map(article => {
          const Icon = Icons[article.icon];
          return (
            <Grid
              container
              spacing={3}
              className={'wrapper-download ' + styles.wrapperDownload}
              alignItems={'center'}
              key={article.caption}
            >
              <Grid
                item
                xs={1}
                className="image"
              >
                <Icon />
              </Grid>
              <Grid
                item
                xs={10}
                className="title"
              >
                <a href={`${article?.detailsLink || article?.downloadLink}`}>{article.caption}</a>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Link href={'/downloads'}>
        <Typography
          sx={{
            fontFamily: 'Raleway-Regular, sans-serif',
            fontSize: '.8rem',
            padding: '.5rem 1rem',
            lineHeight: 1.5,
            float: 'right',
            display: 'inline',

            '&:hover': {
              color: '#4b6bf5',
              boxShadow: 'none',
            },
          }}
        >
          more downloads here...
        </Typography>
      </Link>
    </div>
  );
}
