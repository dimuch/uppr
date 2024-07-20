import React from 'react';
import Image from 'next/image';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

// eslint-disable-next-line max-len
const MEDIUM_LINK =
  'https://medium.com/@ivanka.tabachuk/case-study-i-am-writing-to-inform-or-old-school-classics-f390700eb0a6';

export default function IAmWritingToInform({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>So, Dear Mr Williams…</h2>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{
 backgroundColor: `#${articleData.article_color}` 
}}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              Dear Mr Williams
              <br />
              <br />
              I am writing to inform you that I&apos;ve started today. I also want to express my sincere gratitude for
              the opportunity you&apos;ve provided me with by entrusting the responsibilities of the project manager in
              your team. I want to ensure you that I will put all possible efforts to bring the maximum contribution to
              the project. Therefore, to start immediately I require the names and email addresses of the team members.
              Can you possibly share them with me? Can I also ask you to introduce me to the team?
              <br />
              <br />
              Please, also find attached my working plan for the next two weeks.
              <br />
              <br />
              <i>Thank you.</i>
            </p>
          </div>

          <p className={styles.articleText}>
            Як бачите, наш герой далеко не гуру імейлінгу. Чому? Адже по-книжному він усе правильно написав. Яких саме
            &quot;багів&quot; наробив молодий спеціаліст і як потрібно було сформулювати ідеї?.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>&quot;Баги&quot; в імейлі:</h2>

          <p className={styles.articleText}>
            Як я уже казала, лист вийшов дуже олдскульним. І як писали в коментарях на FB, ніби взятий з підручника по
            листуванню 20-річної давності. Тобто, в ньому все правильно, граматично і стилістично, але &quot;живі&quot;
            люди так уже не пишуть;)). Скоріше, боти якісь або ті, кому ліньки думати і легше не напружуватися та
            скопіпейстити кліше з підручника.
          </p>

          <p className={styles.articleText}>
            Хоч у випадку з ПМом (автором листа), основну роль відіграла боязнь прозвучати неввічливим та не дотриматися
            бізнес- етикету з нейтівом (босом). Але давайте психологію залишимо професіоналам, а самі, все-таки,
            перейдемо до конкретних фейлів у листі:
          </p>

          <ol className={`${styles.articleList} ${styles.numberedList} ${styles.articleLink}`}>
            <li>
              <p className={styles.articleText}>
                Не потрібно писати{' '}
                <i>
                  <b>I am writing to inform.</b>
                </i>{' '}
                Який сенс? Це ж імейл, Кеп. Звісно, ви пишете.
                <br />
                <a href="/blog/articles/junk-phrases-in-emails" target="_blank" rel="noreferrer">
                  Більше про фрази такого типу.
                </a>
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i>
                  <b>I also want to express (I want to ensure you)</b>
                </i>{' '}
                - те саме, що й №1. Навіщо повідомляти про своє бажання? Одразу екпресіть та іншурте усе, що хотіли.
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i>
                  <b>Can I also ask you to</b>
                </i>{' '}
                - те саме, що і №2. Ставте своє запитання одразу. Або якщо все ще є страх неввічливості, можна написати
                щось типу{' '}
                <i>
                  <b>Let&apos;s please schedule my introduction to the team </b>
                </i>
                чи{' '}
                <i>
                  <b>
                    I&apos;d be thankful if you shortly introduce me to the team. When can we make it/ schedule it? Send
                    me please team contacts.
                  </b>
                </i>{' '}
                - теж відносно ОК. Але все-таки початок типу{' '}
                <i>
                  <b>send me, give me, bring me</b>
                </i>{' '}
                - не найкращий, тому що використовується наказовий спосіб, а це вважається не супер ввічливою формою
                звертання, якщо ви ще не близько знайомі. Тому, краще пом&apos;якшити за допомогою{' '}
                <i>
                  <b>can</b>
                </i>{' '}
                чи{' '}
                <i>
                  <b>let&apos;s</b>
                </i>
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i>
                  <b>Please, also find attached my working plan</b>
                </i>{' '}
                - пасивна конструкція, щоє далеко не самим вдалим варіантом у сучасному бізнес середовищі. Можна
                написати просто{' '}
                <i>
                  <b>Here is my working plan(attached)</b>
                </i>{' '}
                або{' '}
                <i>
                  <b>I attach/enclose my working plan.</b>
                </i>
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>І апдейт листа.</h2>

          <p className={styles.articleText}>
            А ось, як вийшло у мого студента апдейтнути лист (звісно ще є нюанси, але якщо не вдаватися у перфекціонізм,
            то загалом - досить достойно;).
          </p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{
 backgroundColor: `#${articleData.article_color}` 
}}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              Hello Mr Williams
              <br />
              I am happy to start today and feel thankful for the chance to join your team as a PM.
              <br />
              I’ll do my best to meet your expectations and be maximum useful for the project.
              <br />
              <br />
              To promptly dive into work, can you, please, share with me the team’s emails, as well as make a short
              introduction?
              <br />
              I also attach my working plan for the next two weeks, as I see it. Do have any thoughts/comments on it?
              <br />
              <br />
              Thanks in advance.
            </p>
          </div>

          <p className={styles.articleText}>Зовсім інакше звучання? Погодьтеся.</p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Читайте цю статтю англійською на&nbsp;
            <a href={MEDIUM_LINK} target="_blank" rel="noreferrer">
              Medium.com
            </a>
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <ArticleFooter articleData={articleData} />
      </div>
    </div>
  );
}
