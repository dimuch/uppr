import React, {useMemo, useState} from 'react';
import {useHasMounted} from '../common/hooks/hasMounted';

import {Typography} from '@mui/material';
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
  emailEffectivenessTest, isQuestionNumberDefault, getLevelParams,
} from './service';

import {Wave} from '../common/icons';
import DataLoader from '../common/dataLoader/DataLoader';
import styles from './styles.module.scss';

const domainName = '';
const random = Math.random();

const Test = () => {
  const hasMounted = useHasMounted();

  const [step, setStep] = useState(0);
  const questions = useMemo(() => emailEffectivenessTest(), []);
  const nextStepQuestions = useMemo(() => questions[step], [step]);

  const [answers, setAnswer] = useState(new Array(QUESTIONS_QUANTITY).fill([DEFAULT_TEST_ANSWER]));

  const [result, setResult] = useState({
    message: '',
    title: '',
    isTestSubmitted: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const onStepChange = (diff) => {
    setStep(() => (step + diff));
  }

  const onOptionSelect = (index, questionNumber, subQuestionNumber) => {
    const copyAnswers = [...answers].map(item => [...item]);
    const subIndex =  isQuestionNumberDefault(subQuestionNumber) ? subQuestionNumber : 0;
    copyAnswers[questionNumber][subIndex] = index;

    console.log('copyAnswers', copyAnswers);

    setAnswer(() => {
      return copyAnswers;
    })
  }

  const onTestSubmit = () => {
    const userAnswers =  answers.flat(Infinity)
    console.log('submited', userAnswers);
    let userResult = 0;
    TEST_ANSWERS.forEach((answer, index) => {
      userResult += (+(answer === userAnswers[index]));
    });

    let title = 'Proffi';
    let message = '';

    if(userResult<=5) {
      title='Yoyryk';
      message='';
    }

    if(userResult>5 && userResult <= 10) {
      title='Boryk';
      message='';
    }

    console.log(message);

    setIsLoading(() => true);

    setTimeout(() => {
      setIsLoading(() => false);
      setResult(() => ({
        title,
        message: getLevelParams(title),
        isTestSubmitted: true,
      }))
    }, 800);
  }

  const selectedOptions = answers
    .slice(0, step * CHUNK + CHUNK)
    .filter(answer => answer[0] !== DEFAULT_TEST_ANSWER);
  const isNextButtonAvailable = (step < questions.length - 1);
  const isNextButtonDisabled = (selectedOptions.length !== (step + 1) * CHUNK);
  const isSubmitButtonDisabled = (selectedOptions.length !== QUESTIONS_QUANTITY);

  console.log(selectedOptions.length, QUESTIONS_QUANTITY, selectedOptions.length !== QUESTIONS_QUANTITY);

  if (!hasMounted) {
    return null;
  }

  return <>
    <DataLoader isLoading={isLoading} />
    {
      !result.isTestSubmitted && (
        <div className={styles.upprPageContentWrapper}>
          <div className={`uppr-page-content ${styles.upprPageContent}`}>
            <TopTestImage/>
          </div>
          <div className={styles.wave}></div>
          <div className={styles.upprContent} id="test" >
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
                    Попередній крок
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
                  color="success"
                  onClick={() => onStepChange(1)}
                  disabled={isNextButtonDisabled}
                >
                  Наступний крок
                </Button>
              )}
              {!isNextButtonAvailable && (
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={onTestSubmit}
                  disabled={isSubmitButtonDisabled}
                >
                  Надіслати
                </Button>
              )}
            </Stack>
          </div>
        </div>
      )
    }
    {
      result.isTestSubmitted && (
        <TestResult result={result}/>
      )
    }
  </>;
};

export default Test;
