import React from 'react';
import Head from 'next/head';

import Header from '../../components/common/header/Header';
import {useHasMounted} from '../../components/common/hooks/hasMounted';

import styles from './styles.module.scss';
import TestResultsCompare from '../../components/test/TestResultCompare';
import PageNotFound from '../../components/common/404/404';

const DEFAULT_REDIRECTS_PARAMS = {redirectLink:'/test', redirectPage:'Повернутись до тесту'};

const TestPageResults = ({userAnswers}) => {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }

  if(!userAnswers.length) {
    return (
      <PageNotFound
        redirectLink={DEFAULT_REDIRECTS_PARAMS.redirectLink}
        redirectPage={DEFAULT_REDIRECTS_PARAMS.redirectPage}
      />
    );
  }

  return <>
    <Head>
      <title>{'UPPR | Email Level Test Results'}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="yes"/>
      <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon"/>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
      <link rel="icon" href="/favicon.png"/>
    </Head>

    <div className={styles.upprTestPage}>
      <Header search location={'/test'}/>
      <div className={styles.testBody}>
        <TestResultsCompare
          answers={userAnswers}
        />
      </div>
    </div>
  </>;
};

export default TestPageResults;

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public',
  )
  const userAnswersRaw = context.query?.answer || [];

  if(!userAnswersRaw.length) {
    return {
      props: {
        userAnswers: [],
      },
    };
  }


  const parsedAnswer = [
    ...userAnswersRaw.slice(0,10),
    [...userAnswersRaw.slice(10,14)],
    ...userAnswersRaw.slice(14)
  ];

  return {
    props: {
      userAnswers: parsedAnswer,
    },
  };

}
