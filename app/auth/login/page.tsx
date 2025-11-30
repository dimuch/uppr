'use client';

import React, { Suspense } from 'react';
import Header from '../../../components/common/header/Header';
import Footer from '../../../components/common/footers/footer/Footer';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <div>
      <Header search location="/auth/login" />
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
      <Footer top3Article={[]} />
    </div>
  );
}

