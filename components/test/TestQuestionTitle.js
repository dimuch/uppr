import React from 'react';

import { Typography } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';

import { DEFAULT_TEST_ANSWER, isQuestionNumberDefault } from './service';
import styles from './styles.module.scss';

export default function TestQuestionTitle({ questionTitle, questionNumber, subQuestionNumber, isComplex }) {
  const questionOrder = questionNumber;
  //isQuestionNumberDefault(subQuestionNumber) ? subQuestionNumber + 1 : questionNumber;

  if (subQuestionNumber > DEFAULT_TEST_ANSWER) {
    return null;
  }

  const questionTitleStyle = isComplex ? `${styles.questionTitle} ${styles.questionTitleNested}` : styles.questionTitle;

  return (
    <FormLabel id="test-options">
      <h5 className={questionTitleStyle}>
        {questionOrder}
        {'. '}
        {questionTitle}
      </h5>
    </FormLabel>
  );
}
