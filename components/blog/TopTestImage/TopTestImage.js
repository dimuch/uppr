import React, {useState} from 'react';
import loader from '../../common/loader/loader';
import {Typography} from '@mui/material';

import {Wave} from '../../common/icons';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';

export default function TopTestImage ({isPassTestButton}) {

  const [isTryTestVisible, setIsTryTestVisible] = useState(true);
  const width = window.innerWidth;
  const height = Math.round(width / 1.5);

  return (
    <div className={`uppr-blog-main-picture ${styles.upprBlogMainPicture}`}>
      <img
          src={loader({src:'/assets/images/blog-articles/test-top-image.jpg', width: width})}
          alt="Main blog picture"
          width={width}
          height={height}
      />
      <div className={styles.shadow}></div>
      <div className={styles.wave}>
        <Wave />
      </div>
      <div className={styles.titleTextWrapper}>
        <h2 className={styles.pageTitle} >
          <img
            src='/assets/images/uppr.png'
            alt="UPPR Logo"
            width={100}
          />
          Wanna check if your emails are effective and modern enough?
        </h2>
        {
          isPassTestButton && isTryTestVisible && (
            <a href="#test"
               className={styles.ctaButton} onClick={() => setIsTryTestVisible(false)}
            >
              Take the Test
            </a>
          )
        }
      </div>
    </div>
  )
}
