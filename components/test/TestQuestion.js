import React from 'react';

import FormControl from '@mui/material/FormControl';

import TestOptionsList from '../../components/test/TestOptionsList';
import TestQuestionTitle from './TestQuestionTitle';
import { DEFAULT_ANSWERS, DEFAULT_TEST_ANSWER } from './service';
import ComplexTestQuestionComponent from './TestQuestionComponents/ComplexTestQuestionComponent';
import SimpleTestQuestionComponent from './TestQuestionComponents/SimpleTestQuestionComponent';

const randomKey = Math.random();

export default function TestQuestion({
  question,
  questionNumber,
  answer,
  correctAnswer = DEFAULT_ANSWERS,
  onOptionSelect,
}) {
  if (question?.isComplex) {
    return (
      <ComplexTestQuestionComponent
        isComplex
        question={question}
        questionNumber={questionNumber}
        onOptionSelect={onOptionSelect}
        answer={answer}
        correctAnswer={correctAnswer}
      />
    );
  }

  return (
    <SimpleTestQuestionComponent
      question={question}
      questionNumber={questionNumber}
      onOptionSelect={onOptionSelect}
      answer={answer}
      correctAnswer={correctAnswer}
    />
  );
}
