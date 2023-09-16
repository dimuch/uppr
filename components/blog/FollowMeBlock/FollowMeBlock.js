import React from 'react';

import {Grid, Typography} from '@mui/material';

import styles from './styles.module.scss';

import InstagramIcon from '../../common/icons/instagram-icon';
import FacebookIcon from '../../common/icons/facebook-icon';
import LinkedInIcon from '../../common/icons/linkedin-icon';
import TelegramIcon2 from '../../common/icons/telegram-icon-2';

export default function FollowMeBlock({showTitle = true, customStyles={socialSectionContent:''}}) {
  const wrapperItemsBlockClassName =
    `uppr-section-content ${customStyles.socialSectionContent} ${styles.socialSectionContent}`;

  return (
    <>
      {
        showTitle && (
          <Grid container alignItems="center"
                className={styles.upprSectionTitle}
          >
            <Grid item md={12} xs={12}>
              <Typography variant={'h5'}>Follow Me</Typography>
            </Grid>
          </Grid>
        )
      }

      <div
        className={wrapperItemsBlockClassName}
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
            <TelegramIcon2/>
          </a>
        </div>
      </div>
    </>

  )
}
