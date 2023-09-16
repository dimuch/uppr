import React from 'react';

import Link from 'next/link';
import {Grid, Typography} from '@mui/material';
import FollowMeBlock from '../FollowMeBlock/FollowMeBlock';
import styles from './styles.module.scss';

export default function InformationBlock({tags}) {
  return (
    <Grid
      item
      md={4}
    >
      <Grid container alignItems="center"
            className={styles.upprSectionTitle}
      >
        <Grid item md={12} xs={12}>
          <Typography variant={'h5'}>Tags</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={'flex-start'}
        alignItems={'center'}
        className={'uppr-section-content ' + styles.upprSectionContent}
      >
        {
          tags.map(item => {
            return (
              <Grid item key={item.name}
                    className={styles.tagItem}
              >
                <Link href={`/blog/post-tag?selectedTag=${item.name}`}>
                  <Typography variant={'body2'}>
                    {item.name}
                  </Typography>
                </Link>
              </Grid>
            )
          })
        }
      </Grid>
      <Grid
        item
        md={4}
      >
        <FollowMeBlock showTitle/>
      </Grid>
    </Grid>
  )
}
