import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';
import loader from '../../common/loader/loader.js';
import { Typography } from '@mui/material';
import { useHasMounted } from '../../common/hooks/hasMounted';
import { titleToSlug } from '../../../utils/caseStudySlug.js';

export default function CaseStudyItem({ item, onItemClick }) {
  const hasMounted = useHasMounted();
  const router = useRouter();

  if (!hasMounted) {
    return null;
  }

  const width = window.innerWidth > 875 ? Math.round(window.innerWidth / 3) : window.innerWidth;
  const height = Math.round((width * 22) / 27);
  const slug = titleToSlug(item.title);
  const href = `/case-study/${slug}`;

  const handleClick = (e) => {
    e.preventDefault();
    // Open modal immediately (optimistic update)
    if (onItemClick) {
      onItemClick(item);
    }
    // Then update URL without causing full page reload
    router.push(href);
  };

  return (
    <div className={styles.downloadLink}>
      <div className={styles.downloadImage}>
        <div
          className={styles.overlay}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={loader({
            src: item.imageThumb,
            width: width,
          })}
          alt={item.title}
          width={width}
          height={height}
        />
      </div>
      <div className={styles.downloadContent}>
        <div className={styles.caption}>
          <Typography
            onClick={handleClick}
            sx={{
              fontFamily: 'Raleway-Regular, sans-serif',
              minHeight: '3rem',
              cursor: 'pointer',
            }}
          >
            {item.title}
          </Typography>
        </div>
      </div>
    </div>
  );
}
