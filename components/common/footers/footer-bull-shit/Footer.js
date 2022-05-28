import React from "react";

import styles from "./styles.module.scss";
import Link from 'next/link';

const FooterBullShit = () => {
  return (
    <div className={styles.upprFooterBullShit}>
        <p>
            ЯК НЕ ПИСАТИ “БУЛШИТ” В ІМЕЙЛАХ&nbsp;
            <Link
              href="https://www.udemy.com/deschool-your-emails/?couponCode=UPPR_SITE"
              target="_blank"
            >
              дізнайтеся зараз
            </Link>
        </p>
    </div>
  );
};

export default FooterBullShit;
