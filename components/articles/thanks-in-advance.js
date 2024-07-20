import React from 'react';
import Image from 'next/image';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function ThanksInAdvance({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}></h2>

          <p className={styles.articleText}>
            <i>&quot;Thanks in Advance&quot;</i> - ще одна суперечлива фраза. Досить часто її пишуть в кінці
            імейлу-прохання, але водночас опитування показують, що для багатьох вона звучить грубо, егоїстично та{' '}
            <i>careless</i>.
          </p>

          <p className={styles.articleText}>
            І таких людей можна зрозуміти, якщо придивитися пильніше та задуматися. Написавши{' '}
            <i>
              &quot;Thanks in advance&quot;, &quot;Thank you for your consideration&quot; чи &quot;Thank you in advance
              for your help&quot;
            </i>
            , ви, по-перше, припускаєте, що ваш читач беззаперечно виконає ваше прохання, що уже само собою
            самовпевнено.
          </p>

          <p className={styles.articleText}>
            А по-друге, владою наданою ... (хтозна-ким) ви скасовуєте право адресата сказати &apos;Ні&apos;!
          </p>

          <p className={styles.articleText}>
            От чому <i>&quot;Thanks in advance&quot;</i> сприймається <i>disrespectful та careless</i>, і якщо ви дбаєте
            про <i> ROR (ReturnOnRelationship)</i> - краще використовуйте альтернативи.
          </p>

          <p className={styles.articleText}>
            Звісно, все залежить від контексту, але <i>&quot;Thank you in advance&quot;</i> досить часто читається як
            <i>&quot;I expect you to do this&quot;</i>, і від цього нікуди не дінешся. Тому, щоб не звучати самовпевнено
            та безцеремонно, заміняємо більш &quot;безпечними&quot; опціями:
          </p>
          <ul className={`${styles.articleList}`}>
            <li>
              <p className={styles.articleText}>
                <i style={{
 color: `#${articleData.article_color}` 
}}>1. CTA (Call To Action)</i>
                <br />
                Взагалі, як на мене, найкращий варіант завершення практично будь-якого листа - це <i>CTA</i>, який до
                того ж статистично подвоює <i>response rate!</i>
                <br />
                <i>Do you think you’d have time to …?</i>
                <br />
                Такий <i>CTA</i> сприймається як опція, а не очікування, що робить його і ввічливим, і ефективним.
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i style={{
 color: `#${articleData.article_color}` 
}}>2. Thanks for considering this/my request</i>
                <br />
                Таке завершення може чудово спрацювати, оскільки немає нав&apos;язаних очікувань про обов&apos;язковість
                виконання. Акцент на тому, що навіть думки &quot;стосовно&quot; і то будуть цінні. Але все одно
                рекомендую доповнити такий варіант хоч мінімальним <i>CTA</i>, а то можуть <i>consider...</i> і так
                нічого не зробити;).
              </p>
            </li>
          </ul>

          <ul className={`${styles.articleList}`}>
            <li>
              <p className={styles.articleText}>
                <i style={{
 color: `#${articleData.article_color}` 
}}>3. In any case, thank you</i>
                <br />
                Ще один спосіб сказати, що <i>&quot;Whether you agree or not, I value your consideration&quot;</i>.
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i style={{
 color: `#${articleData.article_color}` 
}}>4. In the meantime, thanks (for your time).</i>
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i style={{
 color: `#${articleData.article_color}` 
}}>
                  5. I’d really appreciate your help with X/this situation.
                </i>
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i style={{
 color: `#${articleData.article_color}` 
}}>6. I’d be grateful if you could finish/do X.</i>
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i style={{
 color: `#${articleData.article_color}` 
}}>7. I hope this is possible.</i>
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i style={{
 color: `#${articleData.article_color}` 
}}>
                  8. I hope you will be able to provide the information/help/support.
                </i>
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i style={{
 color: `#${articleData.article_color}` 
}}>
                  9. Please, let me know if this isn’t feasible for you (by [date]).
                </i>
              </p>
            </li>
            <li>
              <p className={styles.articleText}>
                <i style={{
 color: `#${articleData.article_color}` 
}}>10. Thanks</i>
                <br />І врешті-решт, можна просто написати &quot;дякую&quot;.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Але чи справді фраза &quot;thanks in advance&quot; є універсальним злом?</h2>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Так-от, є два випадки, коли я вважаю <i>&quot;thanks in advance&quot;</i> припустимим, і сама його
            використовую.
          </p>

          <p className={styles.articleText}>
            <b>️1. After-agreement follow-up.</b>
            <br />
            Це коли ви усно, в телефонному режимі або через імейл уже домовилися, що хтось щось
            зробить/надішле/подивиться/etc. Наприклад, після зустрічі можна написати:
          </p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{
 backgroundColor: `#${articleData.article_color}` 
}}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              Hi [Name],
              <br />
              thanks for the productive meeting.
              <br />
              <br />
              As agreed, I am sending you salaries range for the upcoming project and waiting for the final price
              proposal draft from you
              <br />
              <br />
              Thanks in advance for your part.
              <br />
            </p>
          </div>

          <p className={styles.articleText}>Або такий імейл може бути у формі reminder:</p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{
 backgroundColor: `#${articleData.article_color}` 
}}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              Hi [Name],
              <br />
              thanks for the productive meeting. As agreed look forward to receiving the final price proposal draft from
              you.
              <br />
              <br />
              Thanks in advance for your part.
              <br />
            </p>
          </div>

          <p className={styles.articleText}>
            <b>2. У випадку попередньо домовленої стандартної, погодженої, налагодженої процедури.</b>
          </p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{
 backgroundColor: `#${articleData.article_color}` 
}}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              Dear [Name],
              <br />
              Here is information on October bonuses:
              <br />
              ...
              <br />
              <br />
              ...
              <br />
              <br />
              Thanks in advance for your part.
              <br />
            </p>
          </div>

          <p className={styles.articleText}>
            От і все. А писати <i>&quot;thanks in advance&quot;</i> після кожного прохання, тому що так
            нормально/треба/мається на увазі/всі вам зобов’язані/повинні - не варто. Але якщо ви все таки (як і
            більшість) належите до прихильників та шанувальників <i>&quot;thanks in advance&quot;</i>, які й чути не
            хочуть про те, що вона звучить вимогливо та вказує на відсутність поваги, то погляньте на приклад, як
            паршивенько може виглядати ось це <i>&quot;thanks in advance&quot;</i> у здавалося б звичайному імейлі і
            тільки підлити масла у вогонь.
          </p>

          <p className={styles.articleText}>
            Отже, <i>case study based on real events.</i>
          </p>

          <p className={styles.articleText}>
            Минулого тижня пише рекрутеру ПМ, назвемо його Паша для зручності (цитую):
          </p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{
 backgroundColor: `#${articleData.article_color}` 
}}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              Hi [Name],
              <br />
              Can you send me CVs of the guys, I interviewed yesterday?
              <br />
              <br />
              Thanks in advance for your part.
              <br />
            </p>
          </div>

          <p className={styles.articleText}>
            Для повного розуміння контексту: резюме кандидатів ПМу надсилаються заздалегідь, ще коли домовляються про
            співбесіду.
          </p>

          <p className={styles.articleText}>
            І от наш умовний Паша мало того, що офіційно підтверджує, що він лінтюх із безладом в <i>Inbox</i> (легше
            комусь написати й делегувати, ніж самому &quot;поритися&quot; в недавніх листах). Так ще й оцим{' '}
            <i>&quot;thanks in advance&quot;</i> демонструє Его завбільшки з <i>open-space</i>, бо навіть не припускає,
            що його прохання можуть не виконати (#нумижколеги та #щоцеважко). Він уже і подякував наперед, ніби воно
            виконане.
          </p>

          <p className={styles.articleText}>
            В такій ситуації навряд чи рекрутер в захваті кинеться шукати CVs. І буде правий.
            <br />
            Ок, то що ж робити з таким Пашею?
          </p>

          <p className={styles.articleText}>
            З такої ситуації, звісно, навряд чи елегантно вийдеш.
            <br />
            &nbsp;&nbsp;1. Можна, наприклад, ігнорувати імейл і навіть заради спортивного інтересу подивитися, що Паші
            легше - написати ще раз чи пошукати CV у власній пошті?
            <br />
            &nbsp;&nbsp;2. Або відповісти щось типу (без вкладення, звісно):
          </p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{
 backgroundColor: `#${articleData.article_color}` 
}}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              Hi Pasha,
              <br />
              <br />
              I sent you the CVs on 22 Oct. Please, check your inbox to avoid double work for both of us in the future.
              <br />
              <br />
              Thanks.
              <br />
            </p>
          </div>

          <p className={styles.articleText}>Якщо є кращі пропозиції - пишіть, опублікую.</p>
          <p className={styles.articleText}>Щоб ви зробили в такій ситуації?</p>
          <p className={styles.articleText}>
            (Не розглядаємо варіант, що Паша видалив CVs чи не отримував їх раніше - <i>it&apos;s not the case</i>).
          </p>

          <p className={styles.articleText}>
            <i>Thanks in advance for reading this!</i> 😈
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Читайте цю статтю англійською на{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@ivannatabachuk/thanks-in-advance-or-not-b6675c1ea0ae"
            >
              Medium.com
            </a>
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <ArticleFooter articleData={articleData} />
      </div>
    </div>
  );
}
