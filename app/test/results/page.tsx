import React from 'react';
import { Metadata } from 'next';
import Header from '../../../components/common/header/Header';
import styles from '../styles.module.scss';
import TestResultsClient from './TestResultsClient';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'UPPR | Email Level Test Results',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

interface Props {
  searchParams: Promise<{ answer?: string | string[] }>;
}

function parseAnswers(userAnswersRaw: string | string[] | undefined): any[] {
  if (!userAnswersRaw) {
    return [];
  }

  // Convert to array if it's a string
  const answerArray = Array.isArray(userAnswersRaw) ? userAnswersRaw : [userAnswersRaw];

  if (!answerArray.length) {
    return [];
  }

  // Parse the answer array into the specific format
  const parsedAnswer = [
    ...answerArray.slice(0, 10),
    [...answerArray.slice(10, 14)],
    ...answerArray.slice(14),
  ];

  return parsedAnswer;
}

export default async function TestResultsPage({ searchParams }: Props) {
  const params = await searchParams;
  const userAnswersRaw = params.answer;
  const userAnswers = parseAnswers(userAnswersRaw);

  return (
    <div className={styles.upprTestPage}>
      <Header search location={'/test'} />
      <div className={styles.testBody}>
        <TestResultsClient userAnswers={userAnswers} />
      </div>
    </div>
  );
}

// Set cache control headers
export const dynamic = 'force-dynamic';

