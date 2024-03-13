import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';
import { LoaderIcon } from '../../common/icons';
import { Typography } from '@mui/material';

export default function SeeMorePostsLink() {
  return (
    <div className={styles.showMoreLink}>
      <Link
        href="/blog"
        className={styles.link}
      >
        See All Posts
      </Link>
    </div>
  );
}
