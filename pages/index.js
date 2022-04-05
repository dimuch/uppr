import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import Header from "./components/header/Header";

import Video from "./components/video/Video";
import UpprLogoText from "./components/uppr-logo-as-text/UpprLogoText";

import TelegramIcon from "./components/icons/telegram-svgrepo-com";
import FooterBullShit from "./components/footers/footer-bull-shit/Footer";

const bagdeItems = [
  {
    icon: "icon-open-book",
    firstLine: "навчайся",
    secondLine: "за принципом Agile",
  },
  {
    icon: "icon-clock",
    firstLine: "встигай",
    secondLine: "усе за 1.5 години",
  },
  {
    icon: "icon-list",
    firstLine: "обирай",
    secondLine: "домашнє завдання",
  },
  {
    icon: "icon-settings-1",
    firstLine: "аналізуй",
    secondLine: "вивчений матеріал",
  },
  {
    icon: "icon-transfer",
    firstLine: "закріплюй",
    secondLine: "знання на практиці",
  },
];

const howItWorks = [
  {
    icon: "icon-mustache-icon",
    content:
      "Відчуй на собі ефективність гнучкого Agile-принципу, який допомагає як в розробці програмного забезпечення, так і у навчанні. Готовий до змін та самовдосконалення? Тоді цей курс для Тебе!",
  },
  {
    icon: "icon-settings-1",
    content:
      "Кожен модудь поділений на 5 етапів-ітерацій та передбачає проведення стендап-мітингів та ретроспективи.Це дає змогу отримати зворотній зв'язок та одразу вносити корективи у процес навчання.",
  },
  {
    icon: "icon-thumb-icon",
    content:
      "Ніхто не стоїть над тобою з указкою та не нав'язує нудні вправи.Ти самостійно обираєш домашнє завдання і працюєш в комфортному для тебе режимі.",
  },
];

const Index = () => {
  const styles = useStyles();

  const [compStyles, setCompStyles] = useState();

  useEffect(() => {
    setCompStyles(styles);
  }, []);

  return (
    <div className="uppr-home-page">
      <Header />
      <Video videoSrc={"/assets/video/intro.mp4"} />
      <div className={"uppr-section " + compStyles?.section}>
        <div className={"uppr-section-title " + compStyles?.sectionTitle}>
          <div className="uppr-first-line">
            <Typography variant={"h4"}>ДОСИТЬ БУТИ INTERMEDIATE!</Typography>
          </div>
          <div className="uppr-first-line">
            <Typography variant={"h4"}>ТИ МОЖЕШ СТАТИ&nbsp;</Typography>
            <UpprLogoText onlyLogo={true} baseTypography={3} />
          </div>
        </div>

        <div className={"uppr-section-content"}>
          <div
            className={"uppr-learning-strategy " + compStyles?.sectionContent}
          >
            <ul className={compStyles?.badgeList}>
              {bagdeItems.map((item, index) => {
                return (
                  <li className={"uppr-badge " + compStyles?.badge} key={index}>
                    <div
                      className={"uppr-icon-wrapper " + compStyles?.iconWrapper}
                    >
                      <div className={"uppr-font-icon " + item.icon} />
                    </div>
                    <div
                      className={
                        "badge-first-line " + compStyles?.badgeFirstLine
                      }
                    >
                      {item.firstLine}
                    </div>
                    <div
                      className={
                        "badge-second-line " + compStyles?.badgeSecondLine
                      }
                    >
                      {item.secondLine}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={"uppr-section-content"}>
          <div className={"uppr-comments " + compStyles?.comments}>
            <Typography variant={"h4"}>
              Ідеальна англійська не передається генетично.
            </Typography>
            <Typography variant={"h4"}>
              Знання мови треба вдосконалювати самостійно.
            </Typography>
            <br />
            <Typography variant={"h4"}>
              Якщо ти застряв на рівні intermediate
            </Typography>
            <Typography variant={"h4"}>
              та чекаєш знак згори &mdash; це він.
            </Typography>
          </div>
        </div>

        <div className={"uppr-section-content"}>
          <div
            className={
              "uppr-how-it-works-wrapper " + compStyles?.howItWorksWrapper
            }
          >
            <div className={"uppr-how-it-works " + compStyles?.howItWorks}>
              <Typography variant={"h4"}>ЯК МИ ПРАЦЮЄМО</Typography>
            </div>
          </div>
          <div>
            <ul>
              {howItWorks.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      "uppr-how-it-works-item " + compStyles?.howItWorksItem
                    }
                  >
                    <div className="uppr-content-left-side">
                      <div
                        className={
                          "uppr-icon-wrapper " + compStyles?.iconWrapper
                        }
                      >
                        <div className={"uppr-font-icon icon-hexagon-icon"} />
                        <div
                          className={
                            "uppr-icon-wrapper " + compStyles?.iconWrapper
                          }
                        >
                          <div className={"uppr-font-icon " + item.icon} />
                        </div>
                      </div>
                    </div>
                    <div className="uppr-content-right-side">
                      <Typography variant={"h6"}>{item.content}</Typography>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={"uppr-section-content"}>
          <div
            className={"uppr-telegram-channel " + compStyles?.telegramChannel}
          >
            <div className="telegram-block">
              <div className="icon-telegram">
                <TelegramIcon />
              </div>
              <Typography variant={"h4"}>Канал в телеграмі</Typography>
              <a href="https://t.me/emailingskills" target="_blank">
                <Typography variant={"button"}>
                  {" "}
                  Підписатись на канал{" "}
                </Typography>
              </a>
            </div>
          </div>
        </div>

        <div className={"uppr-section-content"}>
          <div className={"uppr-final-message " + compStyles?.finalMessage}>
            <Typography variant={"h4"}>Розвиток - це просто.</Typography>
            <Typography variant={"h4"}>
              Будь простіше і записуйся на курс!
            </Typography>
          </div>
        </div>
        <FooterBullShit />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    position: "relative",
    marginTop: "-14.4rem",
    zIndex: 1,
  },
  sectionTitle: {
    padding: "2rem 0 6rem;",
    margin: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
    "& h4": {
      fontWeight: "bold",
      color: "white",
    },
    "& .uppr-first-line": {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "center",
    },
    "& span": {
      color: "white",
    },
  },
  sectionContent: {
    backgroundColor: "#ededeb",
  },
  badgeList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "relative",
    top: "-6rem",
    margin: 0,
    listStyle: "none",
  },
  badge: {
    margin: "2rem 2rem 1rem",
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f3f5f7",
    boxShadow: "0px 10px 23px -6px rgb(0 0 0 / 10%)",
  },
  iconWrapper: {
    fontSize: "6rem",
    fontFamily: "uppr-icon-font",

    "& .uppr-icon-wrapper": {
      fontSize: "3rem",
    },
  },
  badgeFirstLine: {
    marginTop: "1rem",
    fontFamily: "Museo-Sans-Cyrl-Bold",
    fontSize: "2rem",
    textTransform: "uppercase",
  },
  badgeSecondLine: {
    marginTop: ".5rem",
    fontFamily: "Museo-Sans-Cyrl-Reg",
    fontSize: "1.5rem",
  },
  comments: {
    padding: "3rem 0 0",
    textAlign: "center",
    marginBottom: "0rem",
    top: " -3rem",
    backgroundColor: "white",
    position: "relative",
    "& h4": {
      fontFamily: "Futura-Book !important",
    },
  },
  howItWorksWrapper: {
    backgroundColor: "#f3f5f7",
    display: "flex",
    justifyContent: "center",
  },
  howItWorks: {
    textAlign: "center",
    "& h4": {
      textTransform: "uppercase",
      fontFamily: "Museo-Sans-Cyrl-Bold !important",
      backgroundColor: "#d4d4d4",
      padding: "1.25rem 1rem 1rem",
    },
  },
  howItWorksItem: {
    margin: "auto",
    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "82%",
    "& .uppr-icon-wrapper": {
      position: "relative",
      marginRight: "2rem",
      color: "#a4a4a4",
      "& .uppr-icon-wrapper": {
        position: "absolute",
        padding: "0",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#4d4d4d",
      },
    },
    "& h6": {
      fontFamily: "Museo-Sans-Cyrl-Reg !important",
      textAlign: "center",
    },
  },
  telegramChannel: {
    minHeight: "75vh",
    backgroundColor: "#f3f5f7",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .icon-telegram": {
      width: "7rem",
      height: "7rem",
      margin: "0 auto 2rem",
    },
    "& h4": {
      marginBottom: "4rem",
    },
    "& a": {
      marginTop: "4rem",
      textDecoration: "none",
      padding: "1rem 3rem",
      border: "1px solid #95a6b8",
      cursor: "pointer",
      backgroundColor: "transparent",
      transition: "background-color ease-out .3s",
      "&:hover": {
        backgroundColor: "#e1e6eb",
      },
    },
  },
  finalMessage: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    "& h4": {
      fontFamily: "Museo-Sans-Cyrl-Bold !important",
      color: "white",
    },
  },
}));

export default Index;
