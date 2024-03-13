import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';
import { LoaderIcon } from '../../common/icons';
import { Typography } from '@mui/material';

export default function SeeMorePostsButton( {handleClick, isLoading, isShowMorePressed }) {
    return (
      <div className={styles.showMoreBtn}
           onClick={handleClick}>
        {
          isLoading && (
            <div className={styles.loader}>
              <LoaderIcon/>
            </div>
          )
        }
        {
          !isLoading && <Typography>{!isShowMorePressed ? 'See All Posts' : 'Show Less'}</Typography>
        }
      </div>
    )
}
