import React from 'react';
import styles from './styles.module.scss';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {DEFAULT_TEST_RESULT} from './service';


export default function TestResult({result, resetResults}) {

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
        <div className={styles.testResultMessage}>
          <p>
            {result.message}
          </p>
        </div>

        <div className={styles.testResultControls}>
          <div>&nbsp;</div>
          <Button
            variant="outlined"
            onClick={resetResults}
          >
            Пройти ще раз
          </Button>
        </div>
      </div>
    </div>
  )
};
