import React from 'react';

import FormControl from '@mui/material/FormControl';

import TestOptionsList from '../../components/test/TestOptionsList';
import TestQuestionTitle from './TestQuestionTitle';
import {DEFAULT_TEST_ANSWER} from './service';

const randomKey = Math.random();

export default function TestQuestion({question, questionNumber, answer, onOptionSelect}) {
  if (question?.isComplex) {
    return (
      <li key={randomKey + questionNumber}>
        <FormControl>
          <TestQuestionTitle
            questionTitle={question.questionTitle}
            questionNumber={questionNumber}
            isComplex
          />
        </FormControl>
        <ol>
          {
            question.questionOptions.map((nextQuestion, index) => {
              return (
                <TestQuestion
                  key={`${randomKey}-${questionNumber}-${index}`}
                  questionNumber={`${questionNumber}_${index}`}
                  question={nextQuestion}
                  answer={answer}
                  onOptionSelect={onOptionSelect}
                />
              )
            })
          }
        </ol>
      </li>
    );
  }

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
          onOptionSelect={onOptionSelect}
        />
      </FormControl>
    </li>
  )
};
