'use client';

import React from 'react';
import { useHasMounted } from '../../../components/common/hooks/hasMounted';
import TestResultsCompare from '../../../components/test/TestResultCompare';
import PageNotFound from '../../../components/common/404/404';

const DEFAULT_REDIRECTS_PARAMS = {
  redirectLink: '/test',
  redirectPage: 'Повернутись до тесту',
};

interface TestResultsClientProps {
  userAnswers: any[];
}

export default function TestResultsClient({ userAnswers }: TestResultsClientProps) {
  const hasMounted = useHasMounted();
  
  if (!hasMounted) {
    return null;
  }

  if (!userAnswers.length) {
    return (
      <PageNotFound
        redirectLink={DEFAULT_REDIRECTS_PARAMS.redirectLink}
        redirectPage={DEFAULT_REDIRECTS_PARAMS.redirectPage}
      />
    );
  }

  return <TestResultsCompare answers={userAnswers} />;
}

