import React from 'react';

import {Grid, Typography} from '@mui/material';

import styles from './styles.module.scss';
import Link from 'next/link';
import InstagramIcon from '../../common/icons/instagram-icon';
import FacebookIcon from '../../common/icons/facebook-icon';
import TelegramIcon from '../../common/icons/telegram-svgrepo-com';
import LinkedInIcon from '../../common/icons/linkedin-icon';
import TelegramAlternativeIcon from '../../common/icons/telegram-icon';

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

      <Grid container alignItems="center"
            className={styles.upprSectionTitle}
      >
        <Grid item md={12} xs={12}>
          <Typography variant={'h5'}>Follow Me</Typography>
        </Grid>
      </Grid>
      <div
        className={'uppr-section-content ' + styles.socialSectionContent}
      >
        <div className={styles.socialLink}>
          <a href="https://www.instagram.com/ivanna.tabachuk"
             target="_blank" rel="noreferrer"
          >
            <InstagramIcon/>
          </a>
        </div>
        <div item xs={3} className={styles.socialLink}>
          <a href="https://www.facebook.com/ivanna.tabachuk"
             target="_blank" rel="noreferrer"
          >
            <FacebookIcon/>
          </a>
        </div>
        <div item xs={3} className={styles.socialLink}>
          <a href="https://www.linkedin.com/in/ivannatabachuk"
             target="_blank" rel="noreferrer"
          >
            <LinkedInIcon/>
          </a>
        </div>
        <div item xs={3} className={styles.socialLink}>
          <a href="https://t.me/emailingskills"
             target="_blank" rel="noreferrer"
          >
            <TelegramAlternativeIcon/>
          </a>
        </div>
      </div>

    </Grid>
  )
}
