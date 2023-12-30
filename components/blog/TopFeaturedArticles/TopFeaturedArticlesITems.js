import React from 'react';

import { Grid, Typography } from '@mui/material';

import loader from '../../common/loader/loader';

import styles from './styles.module.scss';
import { useHasMounted } from '../../common/hooks/hasMounted';

export default function TopFeaturedArticlesItems( {items} ) {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  const width = window.innerWidth > 850 ? Math.round(window.innerWidth / 3) : window.innerWidth;
  const height = Math.round(width * 4 / 7);

  return (
    <div className={'uppr-section-content ' + styles.upprSectionContent}>
      <Grid container spacing={3}>
        {items.map(( article ) => {
          return (
            <Grid
              item
              key={article.title}
              xs={12}
              onClick={( e ) => updateArticleViews(article)}
            >
              <Grid
                container
                spacing={1}
                className={styles.articleContainer}
                alignContent={'center'}
              >
                <Grid item xs={5} sm={5} className={styles.articleImage}>
                  <img
                    src={loader({src: article.image, width: width})}
                    width={width}
                    height={height}
                    alt={article.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}/>
                </Grid>
                <Grid item xs={5} sm={7} className={styles.articleTitle}>
                  <a href={article.link}>
                    <Typography>
                      {article.title}
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
