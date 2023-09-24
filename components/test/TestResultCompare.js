import React, {useMemo} from 'react';

import TopTestImage from '../blog/TopTestImage/TopTestImage';

import styles from './styles.module.scss';
import {allQuestions, DEFAULT_ANSWERS, getCorrectAnswers} from './service';
import TestQuestion from './TestQuestion';


export default function TestResultsCompare({answers = DEFAULT_ANSWERS}) {
  const correctAnswers = useMemo(() => getCorrectAnswers(), []);
  const questions = useMemo(() => allQuestions(), []);

  console.log('correctAnswers ======> ', correctAnswers);
  console.log('answers ======> ', answers);

  return (
    <div className={styles.upprPageContentWrapper}>
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopTestImage/>
      </div>
      <div className={styles.wave}></div>
      <div className={styles.upprContent} id="test">
        <ol>
          {
            questions.map((nextQuestion, index) => {
              const questionNumber = (index + 1);
              return (
                <TestQuestion
                  key={index}
                  questionNumber={questionNumber}
                  answer={answers[questionNumber - 1]}
                  correctAnswer={correctAnswers[questionNumber - 1]}
                  question={nextQuestion}
                  onOptionSelect={() => {
                  }}
                />
              )
            })
          }
        </ol>
      </div>
    </div>
  )
};

