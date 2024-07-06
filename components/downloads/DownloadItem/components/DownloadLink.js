import React from 'react';
import styles from '../styles.module.scss';
import { useHasMounted } from '../../../common/hooks/hasMounted';

export default function DownloadLink({ item }) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  console.log('item', item);

  if (item.isDirectDownload) {
    return (
      <a
        className={styles.linkAsButton}
        href={item.downloadLink}
        target={'_blank'} rel={'noreferrer'}
      >
        Завантажити
      </a>
    );
  }

  return (
    <a className={styles.linkAsButton} href={item.detailsLink} target={'_blank'} rel={'noreferrer'}>
      Опис
    </a>
  );
}
