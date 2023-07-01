import React from "react";

import styles from "./styles.module.scss";
import UpprLogoText from '../../uppr-logo-as-text/UpprLogoText';
import Link from 'next/link';

const Footer = ({ search, location }) => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.headerLeftBlock}>
          <UpprLogoText isInText={false} isInHeader/>
        </div>
        <div className={styles.headerRightBlock}>
          <Link href="/" className={styles.link}>
            Домашня
          </Link>
          <Link href="/public/public-offer" className={styles.link}>
            Публічна оферта
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
