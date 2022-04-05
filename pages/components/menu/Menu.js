import React from "react";
import { Typography } from "@material-ui/core";

import styles from "./styles.module.scss";

const Menu = ({ location }) => {
  return (
    <div className={`main-menu main-menu-desktop`}>
      <ul className={`uppr-main-menu ${styles.upprMainMenu}`}>
        <Typography variant={"body1"} component={"li"}>
          <a href={"/"}>Домашня</a>
        </Typography>
        <Typography variant={"body1"} component={"li"}>
          <a
            className={location === "/blog.html" ? "active" : ""}
            href={"/blog.html"}
          >
            Блог
          </a>
        </Typography>
        <Typography variant={"body1"} component={"li"}>
          <a href="">Послуги</a>
        </Typography>
        <Typography variant={"body1"} component={"li"}>
          <a
            className={location === "/e-book.html" ? "active" : ""}
            href={"/resources.html"}
          >
            Resources
          </a>
        </Typography>
        <Typography variant={"body1"} component={"li"}>
          <a href="https://english-me.com" target="_blank">
            Тренінг
          </a>
        </Typography>
        <Typography variant={"body1"} component={"li"}>
          <a
            href="https://www.udemy.com/course/deschool-your-emails/"
            target="_blank"
          >
            Онлайн курс
          </a>
        </Typography>
        <Typography variant={"body1"} component={"li"}>
          <a href={"/contact-us.html"}>Контакти</a>
        </Typography>
      </ul>
    </div>
  );
};

export default Menu;
