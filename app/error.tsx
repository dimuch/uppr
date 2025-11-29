'use client';

import React from 'react';
import PageNotFound from '../components/common/404/404';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  // Log error for debugging
  if (error) {
    console.error('Application error:', error);
  }

  // Use the same 404 component as the old 500 page did
  return <PageNotFound />;
}

