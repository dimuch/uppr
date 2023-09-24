import React, {useEffect, useMemo, useRef, useState} from 'react';
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
import useMakeRequest, {POST_REQ_METHOD} from '../common/hooks/makeRequest';

import styles from './styles.module.scss';
import PageNotFound from '../common/404/404';

const domainName = '';
const UPDATE_STAT_INFO = '/api/test'
const random = Math.random();
const DEFAULT_REDIRECTS_PARAMS = {redirectLink: '/test', redirectPage: 'Повернутись до тесту'};


const Test = () => {
  const hasMounted = useHasMounted();
  const {makeRequest, isLoading, error, data} = useMakeRequest();

  const [step, setStep] = useState(0);
  const questions = useMemo(() => emailEffectivenessTest(), []);
  const nextStepQuestions = useMemo(() => questions[step], [step, questions]);

  const [answers, setAnswer] = useState(DEFAULT_ANSWERS);
  const [userResultParams, setUserResultParams] = useState({});
  const [result, setResult] = useState(DEFAULT_TEST_RESULT);

  const firstQuestionRef = useRef();

  const onStepChange = (diff) => {
    setStep(() => (step + diff));
    setTimeout(() => {
      firstQuestionRef.current.scrollIntoView({behavior: 'smooth'})
    }, 200)
  }

  const onOptionSelect = (index, questionNumber, subQuestionNumber) => {
    const copyAnswers = [...answers].map(item => [...item]);
    const subIndex = isQuestionNumberDefault(subQuestionNumber) ? subQuestionNumber : 0;
    copyAnswers[questionNumber][subIndex] = index;
    setAnswer(() => {
      return copyAnswers;
    })
  }

  const onTestSubmit = async () => {
    const userAnswers = answers.flat(Infinity)
    let userResult = 0;
    TEST_ANSWERS.forEach((answer, index) => {
      userResult += (+(answer === userAnswers[index]));
    });

    let title = 'Senior';

    if (userResult <= 5) {
      title = 'Junior';
    }

    if (userResult > 5 && userResult <= 10) {
      title = 'Middle';
    }

    setUserResultParams(() => ({
      title,
      score: userResult,
      answer: userAnswers,
    }))

    await makeRequest(UPDATE_STAT_INFO, POST_REQ_METHOD, {
      answer: JSON.stringify(userAnswers),
      title,
      score: userResult,
    });
  }

  useEffect(() => {
    if (!data) {
      return
    }

    setResult(() => ({
      ...userResultParams,
      isTestSubmitted: true,
    }));

  }, [data]);

  useEffect(() => {
    if (!error) {
      return
    }
  }, [error]);

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

  if (error) {
    return (
      <PageNotFound
        redirectLink={DEFAULT_REDIRECTS_PARAMS.redirectLink}
        redirectPage={DEFAULT_REDIRECTS_PARAMS.redirectPage}
      />
    )
  }

  return <>
    <DataLoader isLoading={isLoading}/>
    {
      !result.isTestSubmitted && (
        <div className={styles.upprPageContentWrapper}>
          <div className={`uppr-page-content ${styles.upprPageContent}`}>
            <TopTestImage isPassTestButton={true}/>
          </div>
          <div className={styles.wave}></div>
          <div className={styles.upprContent} id="test" ref={firstQuestionRef}>
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
