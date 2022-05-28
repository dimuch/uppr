import React from "react";
import { Typography } from "@material-ui/core";

import Header from "../components/common/header/Header";

import Video from "../components/common/video/Video";
import UpprLogoText from "../components/common/uppr-logo-as-text/UpprLogoText";

import TelegramIcon from "../components/common/icons/telegram-svgrepo-com";
import FooterBullShit from "../components/common/footers/footer-bull-shit/Footer";

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

import compStyles from "./styles.module.scss";

const Index = () => {
  return (
    <div className="uppr-home-page">
      <Header location={"/"}/>
      <Video videoSrc={"/assets/video/intro.mp4"} />
      <div className={"uppr-section " + compStyles?.section}>
        <div className={"uppr-section-title " + compStyles?.sectionTitle}>
          <div className={compStyles.firstLine}>
            <Typography variant={"h4"}>ДОСИТЬ БУТИ INTERMEDIATE!</Typography>
          </div>
          <div className={compStyles.firstLine}>
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
                          "uppr-icon-wrapper " + compStyles.howIconWrapperFirst
                        }
                      >
                        <div className={"uppr-font-icon icon-hexagon-icon"} />
                        <div
                          className={
                            "uppr-icon-wrapper " +
                            compStyles.howIconWrapperSecond
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
              <div className={compStyles.iconTelegram}>
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

export default Index;
