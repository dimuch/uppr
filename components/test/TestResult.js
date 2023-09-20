import React from 'react';
import Button from '@mui/material/Button';
import FollowMeBlock from '../blog/FollowMeBlock/FollowMeBlock';
import JuniorEmailLevel from './userMailLevelComponents/JuniorEmailLevel';
import MiddleEmailLevel from './userMailLevelComponents/MiddleEmailLevel';
import SeniorEmailLevel from './userMailLevelComponents/SeniorEmailLevel';

import styles from './styles.module.scss';
import loader from '../common/loader/loader';

const LEVELS = {
  'Junior' : JuniorEmailLevel,
  'Middle' : MiddleEmailLevel,
  'Senior' : SeniorEmailLevel,
}

const LEVELS_IMAGES = {
  'Junior' : '/assets/images/blog-articles/junior-email-level.jpg',
  'Middle' : '/assets/images/blog-articles/middle-email-level.jpg',
  'Senior' : '/assets/images/blog-articles/senior-email-level.jpg',
}

export default function TestResult({result, resetResults}) {
  const width = window.innerWidth;
  const height = Math.round(width / 1.5);

  const customStyles = {
    socialSectionContent: styles.socialSectionContent
  };

  const Component = LEVELS[result.title];
  const imageHref = LEVELS_IMAGES[result.title];

  return (
    <div className={styles.testResult}>
      <div className={styles.testResultBody}>
        <hr/>
        <div className={styles.testResultCaption}>
          <img
            src={loader({src:imageHref, width: width})}
            alt="Main test result"
            width={width}
            height={height}
          />
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
