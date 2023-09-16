import React, {useMemo, useState} from 'react';
import {useHasMounted} from '../common/hooks/hasMounted';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import TopTestImage from '../blog/TopTestImage/TopTestImage';
import TestQuestion from './TestQuestion';
import TestResult from './TestResult';

import {
  CHUNK,
  DEFAULT_TEST_ANSWER,
  QUESTIONS_QUANTITY,
  TEST_ANSWERS,
  DEFAULT_TEST_RESULT,
  emailEffectivenessTest, isQuestionNumberDefault, DEFAULT_ANSWERS,
} from './service';

import DataLoader from '../common/dataLoader/DataLoader';
import styles from './styles.module.scss';

const domainName = '';
const random = Math.random();

const Test = () => {
  const hasMounted = useHasMounted();

  const [step, setStep] = useState(0);
  const questions = useMemo(() => emailEffectivenessTest(), []);
  const nextStepQuestions = useMemo(() => questions[step], [step, questions]);

  const [answers, setAnswer] = useState(DEFAULT_ANSWERS);
  const [result, setResult] = useState(DEFAULT_TEST_RESULT);

  const [isLoading, setIsLoading] = useState(false);

  const onStepChange = (diff) => {
    setStep(() => (step + diff));
  }

  const onOptionSelect = (index, questionNumber, subQuestionNumber) => {
    const copyAnswers = [...answers].map(item => [...item]);
    const subIndex = isQuestionNumberDefault(subQuestionNumber) ? subQuestionNumber : 0;
    copyAnswers[questionNumber][subIndex] = index;
    setAnswer(() => {
      return copyAnswers;
    })
  }

  const onTestSubmit = () => {
    const userAnswers = answers.flat(Infinity)
    let userResult = 0;
    TEST_ANSWERS.forEach((answer, index) => {
      userResult += (+(answer === userAnswers[index]));
    });

    let title = 'Proffi';

    if (userResult <= 5) {
      title = 'Yoyryk';
    }

    if (userResult > 5 && userResult <= 10) {
      title = 'Boryk';
    }

    setIsLoading(() => true);

    setTimeout(() => {
      setIsLoading(() => false);
      setResult(() => ({
        title,
        isTestSubmitted: true,
      }))
    }, 800);
  }

  const resetResults = () => {
    setResult(DEFAULT_TEST_RESULT);
    setStep(0);
    setAnswer(DEFAULT_ANSWERS);
  }

  const selectedOptions = answers
    .slice(0, step * CHUNK + CHUNK)
    .filter(answer => answer[0] !== DEFAULT_TEST_ANSWER);
  const isNextButtonAvailable = (step < questions.length - 1);
  const isNextButtonDisabled = (selectedOptions.length !== (step + 1) * CHUNK);
  const isSubmitButtonDisabled = (selectedOptions.length !== QUESTIONS_QUANTITY);

  if (!hasMounted) {
    return null;
  }

  return <>
    <DataLoader isLoading={isLoading}/>
    {
      !result.isTestSubmitted && (
        <div className={styles.upprPageContentWrapper}>
          <div className={`uppr-page-content ${styles.upprPageContent}`}>
            <TopTestImage/>
          </div>
          <div className={styles.wave}></div>
          <div className={styles.upprContent} id="test">
            <ol>
              {
                nextStepQuestions.map((nextQuestion, index) => {
                  const questionNumber = (index + 1) + (step * CHUNK);
                  return (
                    <TestQuestion
                      key={random + index}
                      questionNumber={questionNumber}
                      answer={answers[questionNumber - 1]}
                      question={nextQuestion}
                      onOptionSelect={onOptionSelect}
                    />
                  )
                })
              }
            </ol>

            <Stack spacing={2} direction="row" className={styles.stepButtons}>
              {
                (step !== 0) && (
                  <Button
                    variant="outlined"
                    onClick={() => onStepChange(-1)}
                  >
                    Back
                  </Button>
                )
              }
              {
                (step === 0) && (
                  <>&nbsp;</>
                )
              }
              {isNextButtonAvailable && (
                <Button
                  variant="outlined"
                  onClick={() => onStepChange(1)}
                  disabled={isNextButtonDisabled}
                >
                  Next
                </Button>
              )}
              {!isNextButtonAvailable && (
                <Button
                  variant="outlined"
                  onClick={onTestSubmit}
                  disabled={isSubmitButtonDisabled}
                >
                  Get Results
                </Button>
              )}
            </Stack>
          </div>
        </div>
      )
    }
    {
      result.isTestSubmitted && (
        <TestResult
          result={result}
          resetResults={resetResults}
        />
      )
    }
  </>;
};

export default Test;
