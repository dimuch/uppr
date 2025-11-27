'use client';

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { TypeAnimation } from 'react-type-animation';
import Stack from '@mui/material/Stack';
import loader from '../components/common/loader/loader';
import styles from './styles.module.scss';

export default function HomeHero() {
  const [isCursor, setIsCursor] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const [isCursorLast, setCursorIsLast] = useState(true);

  const [imgDimensions, setImgDimensions] = useState({
    width: 700,
    height: 400,
  });

  useEffect(() => {
    const windowInner = window?.innerWidth;
    const width = windowInner > 850 ? Math.round(windowInner) : windowInner;
    const height = Math.round((width * 4) / 7);

    setImgDimensions(() => ({
      width,
      height,
    }));
  }, []);

  return (
    <div className={`${styles.screen} ${styles.screenFirst}`}>
      <div className={`${styles.column} ${styles.leftColumn}`}>
        <Stack>
          <Stack
            sx={{
              display: 'inline',
              minHeight: '110px',
            }}
          >
            <h1 className={isCursor ? '' : styles.customTypeAnimationCursor1}>
              <TypeAnimation
                sequence={[
                  200,
                  "There's a better way to write",
                  () => {
                    setIsCursor(false);
                    setIsLast(true);
                  },
                ]}
                speed={20}
              />
            </h1>
            {isLast && (
              <>
                &nbsp;&nbsp;&nbsp;
                <h1
                  className={
                    isCursorLast ? styles.emailWord : `${styles.emailWord} ${styles.customTypeAnimationCursor2}`
                  }
                >
                  <TypeAnimation
                    sequence={[300, 'work emails', () => setCursorIsLast(false)]}
                    speed={20}
                  />
                </h1>
              </>
            )}
          </Stack>
          <h4>Make your writing shine, wherever you write.</h4>
        </Stack>
        <Button variant="outlined">Get started</Button>
      </div>
      <div className={`${styles.column} ${styles.rightColumn}`}>
        <img
          className={styles.mainSectionImage}
          src={loader({
            src: '/assets/images/others/main_index.png',
            width: imgDimensions.width,
            quality: 90,
          })}
          width={imgDimensions?.width}
          height={imgDimensions?.height}
          alt={'Main UPPR page'}
        />
      </div>
    </div>
  );
}

