'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import InstagramIcon from '../../common/icons/instagram-icon';
import { Typography } from '@mui/material';

export default function InstagramImages({ instaItems, sectionTitle, shadowText = 'Follow' }) {
  const wrapperRef = useRef();
  const [scrollTop, setScrollTop] = useState(0);
  const [top, setTop] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const handleScroll = event => {
      const { top } = wrapperRef?.current?.getBoundingClientRect() || {
 top: 0 
};
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

  const wrapperAnimateClass =
    screenHeight - top > 200 ? `${styles.wrapper} ${styles.wrapperOpacityIn}` : `${styles.wrapper}`;

  return (
    <div className={styles.section}>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
      <div className={styles.sectionTitleSplitter} />
      <p className={styles.shadowTitle}>{shadowText}</p>

      <div className={wrapperAnimateClass} ref={wrapperRef}>
        {instaItems?.length > 0 &&
          instaItems.map((item, index) => {
            if (!item?.src) {
              return (
                <a key={item.alt} href={item.link} target="_blank" rel="noreferrer" className={styles.centerImage}>
                  <InstagramIcon />
                  <Typography className={styles.instaCaption} variant={'h5'}>
                    {item.alt}
                  </Typography>
                </a>
              );
            }

            return (
              <a key={item.alt + index} href={item.link} target="_blank" rel="noreferrer" className={styles.leftFirst}>
                <img src={item.src} width={item.width} height={item.height} alt={item.alt} />
                <Typography
                  className={styles.instaCaption}
                  variant={'h5'}
                  sx={{
                    color: 'black',
                    position: 'absolute',
                    top: 'calc(100% + 16px)',
                    bottom: '-2rem',
                    width: '90%',
                  }}
                >
                  {item?.title}
                </Typography>
              </a>
            );
          })}
      </div>
    </div>
  );
}
