import React from 'react';
import PageNotFound from '../components/common/404/404';

const DEFAULT_REDIRECTS_PARAMS = {
  redirectLink: '/blog',
  redirectPage: 'Повернутись до блогу',
};

export default function NotFound() {
  return (
    <PageNotFound
      redirectLink={DEFAULT_REDIRECTS_PARAMS.redirectLink}
      redirectPage={DEFAULT_REDIRECTS_PARAMS.redirectPage}
    />
  );
}

