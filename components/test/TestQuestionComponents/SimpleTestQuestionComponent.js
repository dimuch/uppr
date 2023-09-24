import React from 'react';

import FormControl from '@mui/material/FormControl';
import TestQuestionTitle from '../TestQuestionTitle';
import TestQuestion from '../TestQuestion';
import {DEFAULT_TEST_ANSWER} from '../service';
import TestOptionsList from '../TestOptionsList';

const randomKey = Math.random();

export default function SimpleTestQuestionComponent({question, questionNumber, answer, correctAnswer, onOptionSelect}) {
  const [mainQuestionNumber=0, subQuestionNumber = DEFAULT_TEST_ANSWER] = questionNumber.toString().split('_');
  const QuestionBodyComp = question?.questionBody;

  return (
    <li key={randomKey + mainQuestionNumber}>
      <FormControl>
        <TestQuestionTitle
          questionTitle={question.questionTitle}
          questionNumber={mainQuestionNumber}
          subQuestionNumber={subQuestionNumber}
        />

        <QuestionBodyComp/>

        <TestOptionsList
          questionOptions={question.questionOptions}
          questionNumber={mainQuestionNumber - 1}
          subQuestionNumber={subQuestionNumber}
          answer={answer}
          correctAnswer={correctAnswer}
          onOptionSelect={onOptionSelect}
        />
      </FormControl>
    </li>
  )
};
