import React from 'react';

import Image from "next/image";
import Link from 'next/link';

import Header from '../header/Header';

import styles from './404.module.scss';

export default function PageNotFound({ redirectPage, redirectLink }) {
    return (
        <div className={styles.errorPage}>
            <Header search/>
            <div className={styles.rvGeneralError}>
                <Image
                    className={styles.rvErrorImg}
                    src='/assets/404.svg'
                    width="402"
                    height="386"
                    alt='Page Not Found'
                />
                <div className={styles.rvTitle}>
                    <h3>Ooooopppss</h3>
                    <h1>Сторінка відсутня</h1>
                </div>
                <p className={styles.rvHrDivider}></p>
                <p className={styles.rvErrorMessage}>
                    Ви намагаєтесь перейти на неіснуючу сторінку. Перевірте посилання.
                </p>
                <p className={styles.rvHomeLink}>
                    <Link href={redirectLink}>{redirectPage}</Link>
                </p>
            </div>
        </div>
    );
};
