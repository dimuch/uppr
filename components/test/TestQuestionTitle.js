import React from 'react';

import {Typography} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

import {DEFAULT_TEST_ANSWER} from './service';
import styles from './styles.module.scss';

export default function TestQuestionTitle({questionTitle, questionNumber, subQuestionNumber}) {
  const questionOrder = questionNumber; //isQuestionNumberDefault(subQuestionNumber) ? subQuestionNumber + 1 : questionNumber;

  if(subQuestionNumber > DEFAULT_TEST_ANSWER) {
    return null;
  }

  return (
    <FormLabel id="test-options">
      <h5
        className={styles.questionTitle}
      >
        {questionOrder}
        {'. '}
        {questionTitle}
      </h5>
    </FormLabel>
  );
};
