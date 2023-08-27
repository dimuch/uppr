import React from 'react';
import styles from './styles.module.scss';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';


export default function TestResult({result}) {
  return (
    <div className={styles.testResult}>
      <div className={styles.testResultBody}>
        <hr/>
        <div className={styles.testResultCaption}>
          <Typography>
            Your email level:
          </Typography>
        </div>
        <div className={styles.testResultTitle}>
          <Typography variant='h4'>
            {result.title}
          </Typography>
        </div>
        <div className={styles.testResultMessage}>
          <Typography>
            {result.message}
          </Typography>
        </div>

        <div className={styles.testResultControls}>
          <div>&nbsp;</div>
          <Button
            variant="outlined"
            color="secondary"
          >
            Пройти ще раз
          </Button>
        </div>
      </div>
    </div>
  )
};
