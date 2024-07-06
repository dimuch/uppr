import React from 'react';
import Image from 'next/image';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from '../../components/articles/commonArticleStyles.module.scss';

export default function PleaseFindAttached({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Чи є сенс кожного разу писати &quot;please find attached&quot;?</h2>
          <p className={styles.articleText}>
            Серед усіх цих пропозицій, пітчів, узгоджень, апдейтів та контрактів, вкладення доводиться надсилати та
            отримувати не то що кожного дня, а мало чи не кожної години. І найчастіша текстовка до імейлу з вкладенням
            залишається така звична для нас фраза <i>&quot;Please find attached.&quot;</i> Або інші її варіації, типу
            <i>&quot;Attached please find,&quot;</i>, <i>&quot;Please kindly find the attached file&quot; </i>,{' '}
            <i>&quot;Enclosed please find,&quot;</i>, <i>&quot;Please find attached herewith.&quot;</i>
          </p>

          <p className={styles.articleText}>
            Але чи є в ній і досі сенс, і чи потрібно її використовувати кожного разу, коли надсилаєте вкладення?
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <h3 className={styles.articlePhrase} style={{ color: `#${articleData.article_color}` }}>
          Короткі, &quot;розмовні&quot; імейлі - тренд!
        </h3>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>Моя відповідь, ні.</p>

          <p className={styles.articleText}>
            По-перше, <i>&quot;Please find attached&quot;</i> звучить застаріло та занадто формально. Плюс, існують
            альтернативи, більш розмовні та сучасні. Але про це - пізніше.
          </p>

          <p className={styles.articleText}>
            По-друге, ця фраза взагалі не потрібна в багатьох випадках. В імейлі і так видно, що там є атач.
          </p>

          <p className={styles.articleText}>
            Але практично на кожній лекції, тренігу чи воркшопі, який я проводжу, неодмінно виникає тривала дискусія,
            щодо списку застарілих кліше, коли серед них опиняється &quot;Please find attached&quot;. Ідею про те, що
            бізнес став набагато більш персоналізованим за останні роки, і що бізнес комунікація відповідно
            підлаштовується, наприклад, світовою тенденцією до спрощення текстів (KISS принцип) та написання імейлів у
            більш розмовному стилі – ще більш-менш сприймають. Але от те, що це означає заміняти та уникати
            &quot;неживих&quot;, антикварних фраз, бо вони шкодять активній персоналізованій комунікації і створюють
            додаткову непотрібну відстань з читачем - прийняти важко.
          </p>

          <p className={styles.articleText}>
            Якраз на цьому моменті багато схвальних кивків чи нейтральних позіхів змінюються на скептичний подив та
            саркастичне &quot;хоч цю нам залиште.&quot;, а то і обурливе – &quot;я - незгоден.&quot;
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Усі так пишуть</h2>

          <p className={styles.articleText}>
            Аргументація незгоди проста – фраза як фраза, і зовсім не застаріла, усі так пишуть, нейтіви в тому числі. А
            here is the [report], як альтернатива, нікуди не годиться - занадто неформально і взагалі не ввічливо так
            казати. Ще чого доброго, бос побачить і пожурить, чи клієнт поскаржиться, що це ви собі надумали
            фамільярничати.
          </p>

          <p className={styles.articleText}>ОК, загалом страхи зрозумілі, хоч і безпідставні.</p>

          <p className={styles.articleText}>
            По-перше, я завжди наголошую, що усе потрібно розглядати лише в конкретному контексті, тому для написання
            хороших імейлів потрібно досконало володіти цим контекстом – розуміти, що за ситуація склалася, знати, хто
            ваш читач, і якого результату ви хочете досягти вашим імейлом в короткострокові та довгостроковій
            перспективі (мати імейл стратегію).
          </p>

          <p className={styles.articleText}>
            По-друге, все, що я розповідаю – не для того, що б наставити когось на &quot;шлях праведний&quot;, не
            претендую на істину останньої інстанції, і не роздаю індульгенції на мовні звороти, а просто ділюся своєю
            думкою та досвідом, який працював для мене у моїх ситуаціях, для того, щоб ви розуміли, що є альтернатива
            клішейному книжному спілкуванню. Щоб була можливість спробувати різні підходи і вибрати, що працює для вас.
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Ввічливі слова - це ще не ввічливість</h2>

          <p className={styles.articleText}>
            Але основне, що призводить до такої реакції – це невірне розуміння неформальності та ввічливості. Роки
            школи, університету та курсів з матеріалами стандартизованих підручників та викладачами, більшість з яких не
            стикалася з реальними бізнес- кейсами та з живими клієнтами, змусили свято повірити, якщо ви не напічкаєте
            текст розкланюваннями, солодко-приторними could you be so kind, та нещирим at your earliest convenience,
            тощо, то тавро грубіяна – гарантовано. А неформальність часто сприймається як заклик усім підряд писати hey
            buddy та hugs and kisses. Проте, це обширна тема і про неї варто окремо писати.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Індульгенція на &quot;Please find attached&quot;</h2>

          <p className={styles.articleText}>
            Якщо вам так подобається – пишіть &quot;Please find attached&quot;. Варто розуміти, що ця фраза сама по собі
            нічого не змінить, і чи є вона, чи її немає – однаково. Увесь текст/імейл і підхід повинні бути живим,
            розмовними, партнерськими, персоналізованими, сфокусованим на читачеві, проактивним та націленим на GJD. І
            одна фраза погоди не зробить.
          </p>

          <p className={styles.articleText}>
            Але якщо ви прагнете покращити та модернізувати ваш імейлінг, то одним з перших кроків має стати очистка
            письма від фрази типу &quot;Please find attached&quot;.
          </p>

          <p className={styles.articleText}>
            І насамкінець, обіцяні{' '}
            <a href="/blog/articles/please-find-attached-2" target="_blank" rel="noreferrer">
              альтернативи
            </a>
            .
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <ArticleFooter articleData={articleData} />
      </div>
    </div>
  );
}
