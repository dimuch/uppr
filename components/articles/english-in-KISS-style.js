import React from 'react';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function EnglishInKISSStyle({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Англійська в стилі KISS. Абревіатури</h2>

          <p className={styles.articleText}>
            Перш за все нагадую, що <b>KISS</b> - це keep it short and simple. Отже, один з самих простих та дуже
            практичних інструментів <b>KISS</b> імейлів, який допомагає економити час та символи - це абревіатури.
          </p>

          <p className={styles.articleText}>
            Звісно, про такі супер популярні, як <b>FW</b> (Forward), <b>BTW</b> (By The Way), <b>FYI</b> (For your
            Information), <b>THX</b> (Thanks), <b>PLS</b> (Please), я і згадувати не буду - усі їх знають та
            користуються.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>
            <span style={{
 color: `#${articleData.article_color}` 
}}>ASAP</span> насправді зовсім не так швидко як
            хотілося б!!!
          </h2>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Єдине, що я не рекомендую, захоплюватися <b>ASAP</b> (хоча далеко не всі зі мною згодні). Чому? Моє
            ставлення до ASAP дивіться{' '}
            <a href="https://www.youtube.com/watch?v=p5yTg0yJMGw" target="_blank" rel="noreferrer">
              тут
            </a>
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>
            Які ще абревіатури можна використовувати і не боятися бути занадто неформальним чи збити читача з пантелику?
          </h2>

          <p className={styles.articleText}>
            Коли необхідно вказати дедлайн, то до дати ще приписують <b>EOB</b> (End of Business Day - кінець робочого
            дня). Якщо можна сказати end, то можна сказати і start - <b>SOB</b> (Start of Business Day).
          </p>

          <p className={styles.articleText}>
            Інколи з датами можуть уточнювати годинні пояси. Це особливо актуально, якщо ви працюєте з клієнтами з США
            чи Китаю. Наприклад, <b>EOB CET</b> (Сentral European Time). Якщо ви пишете колегам, партнерам чи клієнтам,
            то достатньо буде написати <i>Please, reply today EOB</i>.
          </p>

          <p className={styles.articleText}>
            Використовують також абревіатури <b>EOW</b> (End of Week – кінець тижня) та <b>EOQ</b> (End of Quarter –
            кінець кварталу). Або уточнити і написати Q1 - перший квартал. <i>We need to finalize budgeting by EOQ1</i>
            &nbsp;чи написати в темі <i>goals review for Q1</i>.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3
            className={`${styles.articleSubSubTitle} ${styles.articleLink}`}
            style={{
 color: `#${articleData.article_color}` 
}}
          >
            Можна в листах зустріти і TBD (To Be Determined) или TBA (To Be Announced), коли інформація по термінах та
            даті ще не відома. Маючи на увазі відпустку, пишуть не vacation, а PTO (paid time off), а якщо ви плануєте
            взяти додатковий вихідний, то пишете OOO (Out of office). EOM ми уже згадували, коли говорили про тему
            листа. Для тих, хто пропустив -- відео&nbsp;
            <a href="https://www.youtube.com/watch?v=robO4iCpH8A&t=1s" target="_blank" rel="noreferrer">
              напам&apos;ятайка
            </a>
          </h3>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Для листування з колегами також підійде:</h2>

          <ol className={`${styles.articleList} ${styles.numberedList} ${styles.enlargedFont}`}>
            <li>TMI – Too Much Information</li>
            <li>NP – No Problem</li>
            <li>YW – You are Welcome</li>
            <li>GJ – Good Job</li>
            <li>WBR – With Best Regards</li>
            <li>TIA – Thanks In Advance</li>
            <li>GLHF – Good Luck Have Fun</li>
            <li>LDL/LTL – Let’s Discuss Later/ Let’s talk later</li>
            <li>TTYL – Talk To You Later/Type To You</li>
          </ol>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>
            Якщо ви фани месенджерів типу Skype, Slack, Viber, What’s up, то сміливо використовуйте:
          </h2>

          <ol className={`${styles.articleList} ${styles.numberedList} ${styles.enlargedFont}`}>
            <li>2G2BT – Too good to be true</li>
            <li>J2LYK – Just To Let You Know</li>
            <li>B4N – Bye For Now</li>
            <li>G2g – Got To Go</li>
            <li>F2F – Face To Face</li>
            <li>AFK – Away From Keyboard</li>
            <li>AFC – Away From Computer</li>
            <li>BRB – Be Right Back</li>
            <li>SYS – See You Soon</li>
            <li>CU – See You – До зустрічі</li>
            <li>AFAIK – As Far As I Know</li>
          </ol>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>
            Але, що занадто, то не здорово)). Не забувайте про золоте правило – завжди думати про читача і не
            перевантажувати лист надмірною кількістю абревіатур. Ціль – спростити, а не ускладнити імейл.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <ArticleFooter articleData={articleData} />
      </div>
    </div>
  );
}
