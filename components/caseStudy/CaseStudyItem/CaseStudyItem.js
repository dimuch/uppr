import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import loader from '../../common/loader/loader.js';
import { Typography } from '@mui/material';
import { useHasMounted } from '../../common/hooks/hasMounted';
import { titleToSlug } from '../../../utils/caseStudySlug.js';

export default function CaseStudyItem({ item }) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const width = window.innerWidth > 875 ? Math.round(window.innerWidth / 3) : window.innerWidth;
  const height = Math.round((width * 22) / 27);
  const slug = titleToSlug(item.title);
  const href = `/case-study/${slug}`;

  return (
    <div className={styles.downloadLink}>
      <div className={styles.downloadImage}>
        <Link href={href} className={styles.overlay} />
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
          <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              sx={{
                fontFamily: 'Raleway-Regular, sans-serif',
                minHeight: '3rem',
                cursor: 'pointer',
              }}
            >
              {item.title}
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}
