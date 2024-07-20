import React from 'react';
import Image from 'next/image';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function BestIsNotAlwaysTheBest({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Thanks? For what?</h2>

          <p className={styles.articleText}>
            Дуже дивно, але все ще так часто в кінці імейлу можна побачити стандартне “thanks”. І байдуже, що дякувати
            нізащо. Але ми ще раз підкреслюємо свою ввічливість цим дефолтним “thanks”, роблячи і собі, і іншим ведмежу
            послугу, бо потім, коли ми справді вдячні звичайне thank, без додаткових завірянь звучить якось мілкувато.
          </p>

          <p className={styles.articleText}>
            Інший стандарт Best regards та Best wishes. Але знову ж таки, стандарт і типовість, далеко не панацея,
            навіть для формального офісного стилю. Існує ще безліч способів завершити лист. Ось деякі з них.Вони
            допоможуть бути вам більш креативним та оригінальними. Але не перестарайтеся, все має відповідати ситуації
            та підходити до певного контексту.
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.articleList30}>
          <ul className={`${styles.articleList} ${styles.enlargedFont}`}>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              All my best
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Best
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Cordially
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Faithfully
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Goodbye
            </li>
          </ul>

          <ul className={`${styles.articleList} ${styles.enlargedFont}`}>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Looking Forward
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Regards
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Respectfully
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Sending you the best
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Sincerely / Sincerely yours
            </li>
          </ul>

          <ul className={`${styles.articleList} ${styles.enlargedFont}`}>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Speak with you soon
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Take Care
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Warm regards / Warm wishes
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Warmly
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Wishing you a wonderful day
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Yours / Yours truly
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>А для прихильників більш неформальної комунікації</h2>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.articleList30}>
          <ul className={`${styles.articleList} ${styles.enlargedFont}`}>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Cheers
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Enjoy your day/ week/ day of the week)
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Good luck
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Happy [Monday]
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Have a great day
            </li>
          </ul>

          <ul className={`${styles.articleList} ${styles.enlargedFont}`}>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Here’s to a great [Monday]
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Hope this helps
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Hope you’re making it through
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Make it a great day
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Pleasure catching up with you
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              See you tomorrow
            </li>
          </ul>

          <ul className={`${styles.articleList} ${styles.enlargedFont}`}>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Sending Good Vibes
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Talk soon
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Take care
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Until next time
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              You’re the Best
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Your Friend
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>А коли дійсно є за що бути thank you</h2>

          <h3 className={styles.articleSubSubTitle}>І щоб виказати вдячність</h3>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.articleList30}>
          <ul className={`${styles.articleList} ${styles.enlargedFont}`}>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              All My Thanks
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              I Can’t Thank You Enough
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              I Owe You
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Many Thanks
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Much Appreciated
            </li>
          </ul>

          <ul className={`${styles.articleList} ${styles.enlargedFont}`}>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Thank You in Advance
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Thanks a Million
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Thanks for Reading
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Thanks for Your Consideration
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Thanks for Your Help
            </li>
          </ul>

          <ul className={`${styles.articleList} ${styles.enlargedFont}`}>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              With Appreciation
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              With Gratitude
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              You’re a Lifesaver
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Thanks So Much
            </li>
            <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
              Thank You for Everything
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>Ваше завершення листа повинно відповідати певному контексту.</p>
          <p className={styles.articleText}>Коротко кажучи, знайте вашого читача.</p>
          <p className={styles.articleText}>
            Як і в усній бесіді, так і в імейлі для боса, клієнта та колеги ви скоріше всього доберете різні фрази.
          </p>
          <p className={styles.articleText}>А які ви використовуєте найчастіше? Додасте щось новеньке до списку?</p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <ArticleFooter articleData={articleData} />
      </div>
    </div>
  );
}
