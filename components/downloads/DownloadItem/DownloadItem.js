import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import loader from '../../common/loader/loader';
import { Typography } from '@mui/material';
import { useHasMounted } from '../../common/hooks/hasMounted';
import DownloadLink from './components/DownloadLink';

export default function DownloadItem({ item }) {
  const hasMounted = useHasMounted();

  if ( !hasMounted ) {
    return null;
  }

  const width = window.innerWidth > 875 ? Math.round(window.innerWidth / 3) : window.innerWidth;
  const height = Math.round(width * 22 / 27);

  return (
    <div className={styles.downloadLink}>
      <div
        className={styles.downloadImage}
      >
        <div
          className={styles.overlay}
        >
          <DownloadLink
            item={item}
          />
        </div>
        <img
          src={loader({
 src: item.image, width: width 
})}
          alt={item.title}
          width={width}
          height={height}
        />
      </div>
      <div className={styles.downloadContent}>
        <div className={styles.caption}>
          <Typography
            variant={'body1'}
          >
            {item.caption}
          </Typography>
        </div>
        <Typography
          variant="caption">
          {item.category}
        </Typography>
      </div>
    </div>
    );
}
