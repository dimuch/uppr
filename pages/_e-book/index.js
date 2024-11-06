import React, { useEffect, useMemo, useRef, useState } from 'react';
import Header from '../../components/common/header/Header';

import { getPaymentFormInitParams } from '../../services/eBookData.js';

import styles from './styles.module.scss';

const encType = 'application/x-www-form-urlencoded';
const action = 'https://www.liqpay.ua/api/3/checkout';

export default function Ebook({ data, signature, orderId, resultPageId }) {
  const [userEmail, setUserEmail] = useState('');
  const paymentSubmitBtnRef = useRef();

  const isDisabled = useMemo(() => {
    if (!userEmail) true;

    return !(userEmail?.length > 0 && userEmail.includes('@'));
  }, [userEmail]);

  const onChange = e => {
    const value = e.target.value;
    setUserEmail(() => value);
  };

  const onSubmitForm = async e => {
    e.preventDefault();

    ('onSubmitForm ===>>');

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
    } catch (e) {
      console.log(e);
    }
  };

  const processPayment = async e => {
    e.preventDefault();

    paymentSubmitBtnRef.current.click();

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
      <Header
        search
        location={'/e-book'}
      />

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

export async function getServerSideProps() {
  const { data, signature, orderId, resultPageId } = await getPaymentFormInitParams();

  return {
    props: {
      data,
      signature,
      orderId,
      resultPageId,
    },
  };
}
