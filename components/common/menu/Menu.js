import React from "react";

import Link from "next/link";

import styles from "./styles.module.scss";

const Menu = ({ location }) => {
  return (
    <div className={`main-menu main-menu-desktop`}>
      <ul className={`uppr-main-menu ${styles.upprMainMenu}`}>
        <li>
          <Link href="/">
            <a className={location === "/" ? styles.active : ""}>Домашня</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={location === "/blog" ? styles.active : ""}>Блог</a>
          </Link>
        </li>
        <li>
          <Link href="/e-book">
            <a className={location === "/e-book" ? styles.active : ""}>
              E-book
            </a>
          </Link>
        </li>
        <li>
          <Link href="/e-resources">
            <a className={location === "/e-resources" ? styles.active : ""}>
              Resources
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://englishplus.com.ua">
            <a  target="_blank">Тренінг</a>
          </Link>
        </li>
        <li>
          <Link href="https://www.udemy.com/course/deschool-your-emails/">
            <a target="_blank">Онлайн курс</a>
          </Link>
        </li>
        <li>
          <Link href="/contact-us">
            <a className={location === "/contact-us" ? styles.active : ""}>
              Контакти
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
