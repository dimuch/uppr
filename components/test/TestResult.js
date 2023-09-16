import React from 'react';
import Button from '@mui/material/Button';
import FollowMeBlock from '../blog/FollowMeBlock/FollowMeBlock';
import Yoyryk from './userMailLevelComponents/Yoyryk';
import Boryk from './userMailLevelComponents/Boryk';

import styles from './styles.module.scss';

const LEVELS = {
  'Junior' : Yoyryk,
  'Middle' :  Boryk,
  'Senior' : () => (<>Velit scelerisque in dictum non consectetur a erat nam at. Erat velit scelerisque in dictum non consectetur.</>)
}



export default function TestResult({result, resetResults}) {
  const customStyles = {
    socialSectionContent: styles.socialSectionContent
  };

  const Component = LEVELS[result.title];
  return (
    <div className={styles.testResult}>
      <div className={styles.testResultBody}>
        <hr/>
        <div className={styles.testResultCaption}>
          <p>
            Your email level:
          </p>
        </div>
        <div className={styles.testResultTitle}>
          <p>
            {result.title}
          </p>
        </div>

        <Component />

        <div className={styles.testResultControls}>
          <div>
            <FollowMeBlock
              showTitle={false}
              customStyles={customStyles}
            />
          </div>
          <Button
            variant="outlined"
            onClick={resetResults}
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  )
};
