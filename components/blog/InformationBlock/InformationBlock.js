import React from 'react';

import Link from 'next/link';
import Grid2 from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import FollowMeBlock from '../FollowMeBlock/FollowMeBlock';
import styles from './styles.module.scss';

export default function InformationBlock({ tags }) {
  return (
    <Grid2 size={{
 md: 4 
}}>
      <Grid2 container alignItems="center"
            className={styles.upprSectionTitle}
      >
        <Grid2 size={{
 md: 12, xs: 12 
}}>
          <Typography variant={'h5'}>Tags</Typography>
        </Grid2>
      </Grid2>
      <Grid2
        container
        justifyContent={'flex-start'}
        alignItems={'center'}
        className={'uppr-section-content ' + styles.upprSectionContent}
      >
        {
          tags.map(item => {
            return (
              <Grid2 key={item.name}
                    className={styles.tagItem}
              >
                <Link href={`/blog/post-tag?selectedTag=${item.name}`}>
                  <Typography variant={'body2'}>
                    {item.name}
                  </Typography>
                </Link>
              </Grid2>
            )
          })
        }
      </Grid2>
      <Grid2 size={{
 md: 4 
}}>
        <FollowMeBlock showTitle/>
      </Grid2>
    </Grid2>
  )
}
