import React from 'react';

import { LoaderIcon } from '../icons';
import styles from './styles.module.scss';

const DataLoader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <LoaderIcon/>
      </div>
    </div>
  )
};

export default DataLoader;
