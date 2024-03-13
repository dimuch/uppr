import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.scss';
import InstagramIcon from '../../common/icons/instagram-icon';
import {Typography} from '@mui/material';

export default function InstagramImages() {
  const wrapperRef = useRef();
  const [scrollTop, setScrollTop] = useState(0);
  const [top, setTop] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const {top} = wrapperRef?.current?.getBoundingClientRect() || {top: 0};
      const currentScreenHeight = window.innerHeight;

      setScreenHeight(currentScreenHeight);
      setTop(top);
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const wrapperAnimateClass = screenHeight - top > 200 ?
    `${styles.wrapper} ${styles.wrapperOpacityIn}` : `${styles.wrapper}`;

  return (
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Instagram</p>
        <div className={styles.sectionTitleSplitter}/>
        <p className={styles.shadowTitle}>Follow</p>

        <div className={wrapperAnimateClass} ref={wrapperRef}>
          <a href="https://www.instagram.com/p/CZJnrA_thVZ/"
             target="_blank" rel="noreferrer"
             className={styles.leftFirst}>
            <img
              src="/assets/images/blog-articles/instagram-5.jpg" width={640} height={640} alt={'image-4'}
            />
          </a>
          <a href="https://www.instagram.com/p/CUrofxnLrCy/"
             target="_blank" rel="noreferrer"
             className={styles.leftFirst}
          >
            <img
              src="/assets/images/blog-articles/instagram-2.jpg" width={640} height={640} alt={'image-1'}
            />
          </a>
          <a href="https://www.instagram.com/p/CsgdEOdt1Y9/"
             target="_blank" rel="noreferrer"
             className={styles.leftSecond}>
            <img
              src="/assets/images/blog-articles/instagram-1.jpg" width={640} height={640} alt={'image-2'}
            />
          </a>
          <a href="https://www.instagram.com/ivanna.tabachuk"
             target="_blank" rel="noreferrer"
             className={styles.centerImage}
          >
            <InstagramIcon/>
            <Typography
              className={styles.instaCaption}
              variant={'h5'}
            >
              @ivanna.tabachuk
            </Typography>
          </a>
          <a href="https://www.instagram.com/p/CaIB8pRLlJ9/"
             target="_blank" rel="noreferrer"
             className={styles.rightSecond}
          >
            <img
              src="/assets/images/blog-articles/instagram-3.jpg" width={640} height={640} alt={'image-3'}
            />
          </a>
          <a href="https://www.instagram.com/p/CY8hRtONw7T/"
             target="_blank" rel="noreferrer"
             className={styles.rightFirst}
          >
            <img
              src="/assets/images/blog-articles/instagram-4.jpg" width={640} height={640} alt={'image-4'}
            />
          </a>

          <a href="https://www.instagram.com/p/CYqsOzXIEPC/"
             target="_blank" rel="noreferrer"
             className={styles.rightFirst}
          >
            <img
              src="/assets/images/blog-articles/instagram-6.jpg" width={640} height={640} alt={'image-4'}
            />
          </a>
        </div>
      </div>
  )
}
