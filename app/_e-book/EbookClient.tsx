'use client';

import React, { useMemo, useRef, useState } from 'react';
import Header from '../../components/common/header/Header';
import styles from './styles.module.scss';

const encType = 'application/x-www-form-urlencoded';
const action = 'https://www.liqpay.ua/api/3/checkout';

interface EbookClientProps {
  data: string;
  signature: string;
  orderId: string;
  resultPageId: string;
}

export default function EbookClient({ data, signature, orderId, resultPageId }: EbookClientProps) {
  const [userEmail, setUserEmail] = useState('');
  const paymentSubmitBtnRef = useRef<HTMLButtonElement>(null);

  const isDisabled = useMemo(() => {
    if (!userEmail) return true;

    return !(userEmail?.length > 0 && userEmail.includes('@'));
  }, [userEmail]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(() => value);
  };

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('onSubmitForm ===>>');

    const params = {
      method: 'POST',
      body: new URLSearchParams({
        data,
        signature,
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    try {
      const res = await fetch(action, params);
      console.log('Payment response:', res);
    } catch (e) {
      console.log(e);
    }
  };

  const processPayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentSubmitBtnRef.current) {
      paymentSubmitBtnRef.current.click();
    }

    // const params = {
    //   method: "POST",
    //   body: JSON.stringify({}),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // try {
    //   const res = await fetch(reqUrl, params);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <div className={styles.upprEBookPage}>
      <Header search location={'/e-book'} />

      {/*<form onSubmit={processPayment}>*/}
      {/*  <label htmlFor="email">*/}
      {/*    Email*/}
      {/*    <input*/}
      {/*      name="email"*/}
      {/*      id="email"*/}
      {/*      value={userEmail}*/}
      {/*      onChange={onChange}*/}
      {/*    />*/}
      {/*  </label>*/}
      {/*  <button type="submit" disabled={isDisabled}>*/}
      {/*    Buy*/}
      {/*  </button>*/}
      {/*</form>*/}

      {/*<div className={`uppr-page-content ${styles.upprPageContent}`}>*/}
      {/*  <form encType={encType} action={action}>*/}
      {/*    <input type="hidden" name="data" value={data} />*/}
      {/*    <input type="hidden" name="signature" value={signature} />*/}
      {/*    <button type="submit" ref={paymentSubmitBtnRef}>*/}
      {/*      Buy*/}
      {/*    </button>*/}
      {/*  </form>*/}
      {/*</div>*/}
    </div>
  );
}

