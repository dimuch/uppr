import React from 'react';
import PageNotFound from '../../../components/common/404/404';

export default function NotFound() {
  return (
    <PageNotFound
      redirectLink="/blog"
      redirectPage="Повернутись до блогу"
    />
  );
}

