import React from 'react';
import Image from 'next/image';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function EightyTwentyHowToLearnRight({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>80/20 у вивченні англійської мови</h2>

          <p className={styles.articleText}>
            Думаю, усі чули про правило 80/20 (його ще називають принципом &quot;Парето&quot;), але, як заведено, усі
            чули і ніхто не використовує:):). А насправді він дійсно досить суттєво вам може допомогти вивчити
            англійську. Як саме?
          </p>

          <p className={styles.articleText}>
            Запам’ятайте просту істину: 80% часу використовується 20% мови (фраз та граматики). А 20% - це не так уже й
            багато і складно, погодьтеся? І не потрібно вивчати англійську роками, витрачаючи час та гроші на школи та
            вчителів, які вчать &quot;усіх усьому&quot;. Очевидно, що дизайнеру-фрілансеру буде потрібна інакша лексика
            та навики, ніж сейлз менеджеру, який відвідує конференції та пише запити на LinkedIn. А 20% для HR
            менеджера, який проводить тренінги, буде відрізнятися від 20% HRа, який відповідальний за компенсації чи
            івенти.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Яких саме 20% потрібно вчити?</h2>

          <p className={styles.articleText}>
            Звісно, виникає логічне питання:&quot;Як же все-таки визначити, яких саме 20% потрібно вчити?&quot;.
            Відповідь проста - все залежить від ваших цілей.
          </p>

          <p className={styles.articleText}>
            Сформулюйте конкретну вимірну ціль на певний період навчання. Пам&apos;ятаєте завітний SMART у постановці
            цілей? Використайте його для ваших цілей у вивчені мови.
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>
            Не &quot;вільно спілкуватися з англомовними замовниками&quot;,а &quot;через місяць чітко, логічно та
            послідовно, зв’язними реченнями, без тавтологій описувати логіку роботи елементів інтерфейсу на &quot;дейлі
            мітінгу&quot;, чи&quot;на наступній ретроспективі чітко та конкретно протягом 3-х хвилин non-stop
            розповідати про підсумки своєї роботи, чого навчився (-лась) і що буду робити по-іншому&quot;. Ціль з
            граматики можна сформулювати так(не потрібно особливо вдаватися в термінологію):&quot;за 10 занять зменшити
            кількість that, what, which, who на 70%, замінивши коротшими та більш розмовними формулюваннями&quot;.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>Спробуйте чесно і максимально конкретно відповісти на запитання:</p>
          <ol
            className={`${styles.articleList} ${styles.numberedList}`}
            style={{
 color: `#${articleData.article_color}` 
}}
          >
            <li>
              <p className={styles.articleText} style={{
 color: `#${articleData.article_color}` 
}}>
                Для чого мені англійська?
              </p>
            </li>
            <li>
              <p className={styles.articleText} style={{
 color: `#${articleData.article_color}` 
}}>
                З ким я зазвичай спілкуюся?
              </p>
            </li>
            <li>
              <p className={styles.articleText} style={{
 color: `#${articleData.article_color}` 
}}>
                На які теми?
              </p>
            </li>
            <li>
              <p className={styles.articleText} style={{
 color: `#${articleData.article_color}` 
}}>
                З чим саме виникають найбільші труднощі?
              </p>
            </li>
          </ol>

          <p className={styles.articleText}>
            Поставивши ціль, необхідно впевнитися, що досягнути її можливо? Пам’ятайте: ваша ціль повинна бути
            максимально мотивуючою для вас.
          </p>

          <p className={styles.articleText}>
            Після цього напишіть, як ви будете рухатися до вашої цілі і визначтеся, які наступні конкретні кроки ви
            зробите. Неодмінно помічайте усі ваші успіхи та прогрес.
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Ще один важливий момент -</h2>

          <p className={styles.articleText}>
            не витрачайте час на суто професійну лексику!Ви її і так знаєте. Спеціалізована література та курси,
            наприклад, Англійська для ІТ, зазвичай виявляються безглуздим марнуванням часу. Тільки загляньте в типовий
            підручник - процесори, слоти, кардрідери – чи ви дійсно не знаєте, що таке pull request, чи to report a bug?
            Рідко хто з викладачів може допомогти розібратися з проектною документацією, але, на щастя, є і такі!
          </p>

          <p className={styles.articleText}>
            Якщо все-таки виникає сумнів, чи належить конкретна фраза чи зворот до тих ваших 20%, то спробуйте
            протестити фразу, запитавши себе, яким чином вона може мені бути корисна, і де я можу її використати в
            своєму спілкуванні? Є труднощі з прикладом? Скоріше всього ця фраза чи слово вам дійсно не потрібні і не
            згодяться в майбутньому, а якщо так, то ваш мозок просто відмовиться її запам’ятовувати чи забуде при першій
            нагоді.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={styles.articlePhrase} style={{
 color: `#${articleData.article_color}` 
}}>
            До ваших 20% неодмінно додайте &quot;ходові&quot; вирази, наприклад, декілька способів вибачитися,
            подякувати, не погодитися, не образивши нікого.
          </h3>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Наша рубрика на Instagram
            <a href="https://www.instagram.com/uppr_english/" target="_blank" rel="noreferrer">
              10WaysToTell
            </a>
            &nbsp; постійно поповнюється новими фразами такого типу.
          </p>

          <div className={`${styles.articlePicture} ${styles.articlePicture50}`}>
            <Image
              src="/assets/images/blog-articles/eighty_twenty_how_to_learn_right_1.jpg"
              width={800}
              height={800}
              alt="10WaysToTell"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
            <Image
              src="/assets/images/blog-articles/eighty_twenty_how_to_learn_right_2.jpg"
              width={800}
              height={800}
              alt="10WaysToTell"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>

          <p className={styles.articleText}>
            Також неодмінно включіть у ваш список The art of small talk, без цього нікуди. Чи на кухні, чи в черзі за
            кавою, чи в ліфті, чи за обідом, рано чи пізно прийдеться поговорити не про роботу і потрібно бути готовим.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Основна біда принципу 80/20 - це перфекціонізм.</h2>

          <p className={styles.articleText}>
            Так хочеться усе та одразу. Коли я вперше потрапила на платформу Corsera, одразу підписалася на 80 курсів,
            на Udemy витратила 310 доларів на курси, з яких я пройшла повністю 6 на Corsera та 4 - на Udemy. Не супер
            мотивуючі результати!((( Так і з 80/20, виникає розчарування від своєї непродуктивності, небажання рухатися
            маленькими кроками та само-критика. І в такій ситуації, з таким емоційним налаштуванням будь-який поважаючий
            себе перфекціоніст просто все кине. А ну його! І зануриться з головою в якусь іншу надмірність.
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Що ж все-таки робити?</h2>

          <p className={styles.articleText}></p>

          <ol
            className={`${styles.articleList} ${styles.numberedList}`}
            style={{
 color: `#${articleData.article_color}` 
}}
          >
            <li>
              <p className={styles.articleText} style={{
 color: `#${articleData.article_color}` 
}}>
                Вчитися мистецтву маленьких кроків – baby steps
              </p>
            </li>
            <li>
              <p className={styles.articleText} style={{
 color: `#${articleData.article_color}` 
}}>
                Та плануванню.
              </p>
            </li>
            <li>
              <p className={styles.articleText} style={{
 color: `#${articleData.article_color}` 
}}>
                І пам’ятайте: хваліть себе
              </p>
            </li>
          </ol>

          <h3 className={styles.articleSubSubTitle}>– тоді усе неодмінно вийде!</h3>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <ArticleFooter articleData={articleData} />
      </div>
    </div>
  );
}
