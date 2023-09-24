import React from 'react';

import FormControl from '@mui/material/FormControl';
import TestQuestionTitle from '../TestQuestionTitle';
import TestQuestion from '../TestQuestion';

const randomKey = Math.random();

export default function ComplexTestQuestionComponent({question, questionNumber, answer, correctAnswer, onOptionSelect}) {
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
                correctAnswer={correctAnswer}
                onOptionSelect={onOptionSelect}
              />
            )
          })
        }
      </ol>
    </li>
  );
};
