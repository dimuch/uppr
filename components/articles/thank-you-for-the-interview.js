import React from 'react';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

// eslint-disable-next-line max-len
const TALANTLY_LINK = `https://talantly.com/en/recruiter%20notes/talent%20notes/2019/10/28/joy-and-pain-of-phone-interview-tips-and-common-techniques/`;

export default function ThankYouForTheInterview({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Якщо ні, то ви робите кар&apos;єрну помилку</h2>

          <p className={styles.articleText}>
            <b>Навіщо дякувати за співбесіду?</b>
          </p>

          <p className={styles.articleText}>
            Надсилання імейлу-подяки за співбесіду показує не тільки вдячність за надану можливість та вашу ввічливість,
            але й професійність підходу. Добре спланований та написаний імейл-подяка, по-перше, ще раз нагадає про вашу
            кандидатуру, кваліфікацію і навички, по-друге, збільшить ваші шанси бути найнятим. Особливо якщо інші нічого
            не надсилатимуть. Адже інтерв&apos;юер запросив вас та витратив свій час на спілкування, а час, як відомо,
            дорого коштує.
          </p>

          <p className={styles.articleText}>
            І навіть якщо співбесіда пройшла не зовсім вдало, подякувати все одно варто. Тому що це досвід, а за нього
            варто бути вдячним.
          </p>

          <p className={styles.articleText}>
            <b>Коли найкраще надсилати лист-подяку?</b>
          </p>

          <p className={styles.articleText}>За 24 чи 48 годин після співбесіди.</p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Що писати?</h2>

          <p className={`${styles.articleText}`} style={{ color: `#${articleData.article_color}` }}>
            В темі:
          </p>

          <ol className={`${styles.articleList}`}>
            <li className={styles.discList}>
              <p className={styles.articleText}>Thank you, [Name]</p>
            </li>
            <li className={styles.discList}>
              <p className={styles.articleText}>Thanks for the opportunity, [Name];</p>
            </li>
            <li className={styles.discList}>
              <p className={styles.articleText}>It was a pleasure to learn more about [Company Name];</p>
            </li>
            <li className={styles.discList}>
              <p className={styles.articleText}>Appreciate your time discussing the [Job Title] with me.</p>
            </li>
          </ol>

          <p className={`${styles.articleText}`} style={{ color: `#${articleData.article_color}` }}>
            У вступі:
          </p>

          <ol className={`${styles.articleList}`}>
            <li className={styles.discList}>
              <p className={styles.articleText}>
                подякуйте за приділений час та надану інформацію про посаду та компанію;
              </p>
            </li>
            <li className={styles.discList}>
              <p className={styles.articleText}>
                акцентуйте на своїй зацікавленості в компанії та посаді (тільки якщо це дійсно так).
              </p>
            </li>
          </ol>

          <p className={`${styles.articleText}`} style={{ color: `#${articleData.article_color}` }}>
            В основній частині:
          </p>

          <ol className={`${styles.articleList}`}>
            <li className={styles.discList}>
              <p className={styles.articleText}>
                ще раз підкресліть, чому ви підходите на дану посаду, виділивши окремі конкретні моменти співбесіди;
              </p>
            </li>
            <li className={styles.discList}>
              <p className={styles.articleText}>
                або напишіть про навички чи досягнення, які ви не встигли обговорити під час співбесіди;
              </p>
            </li>
            <li className={styles.discList}>
              <p className={styles.articleText}>також можна згадати спільних знайомих, якщо це релевантно.</p>
            </li>
          </ol>

          <p className={`${styles.articleText}`} style={{ color: `#${articleData.article_color}` }}>
            На завершення:
          </p>

          <ol className={`${styles.articleList}`}>
            <li className={styles.discList}>
              <p className={styles.articleText}>ще раз подякуйте за шанс та можливість;</p>
            </li>
            <li className={styles.discList}>
              <p className={styles.articleText}>
                нагадайте, що з нетерпінням чекаєте на відповідь за результатами та бажаєте компанії знайти найкращого
                кандидата на дану посаду (навіть якщо це будете не ви).
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Після телефонної співбесіди:</h2>

          <p className={`${styles.articleText}`}>
            <a href={TALANTLY_LINK} target="_blank" rel="noreferrer">
              Після телефонної співбесіди
            </a>{' '}
            імейл повинен бути дещо коротшим (адже попереду ще очна зустріч) і може виглядати наступним чином:
          </p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{ backgroundColor: `#${articleData.article_color}` }}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              <i>Dear [Interviewer],</i>
              <br />
              <br />
              <i>
                Thank you for taking time to speak with me about the [position] at [Company]. I feel that my background
                in (digital content writing, coupled with my technical knowledge) makes me a perfect fit for this role.
              </i>
              <br />
              <br />
              <i>Also, as agreed, I attach my (writing samples).</i>
              <br />
              <br />
              <i>Additionally, you can check out this web page for which I wrote content and designed the layout.</i>
              <br />
              <br />
              <i>Thanks again and look forward to your reply./Hope for the interview invitation.</i>
              <br />
              <br />
              <i>[Your Name]</i>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Після особистої співбесіди:</h2>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{ backgroundColor: `#${articleData.article_color}` }}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              <i>Dear [Interviewer],</i>
              <br />
              <br />
              <i>
                Thank you for a great conversation about the [Job Title] on [date], as well as for a welcoming and
                positive attitude to me. It was a pleasure to meet you and the team during the interview.
              </i>
              <br />
              <br />
              <i>
                As we discussed, I have the [skills, achievements, or qualifications the interviewer focused on during
                the interview], which will match with your current team&apos;s skill set. Your integral answers to my
                questions about the day to day tasks also convinced me that this is a role I&apos;d enjoy and where I
                can grow, while adding value to your [department].
              </i>
              <br />
              <br />
              <i>Please contact me on [X] if you have any additional questions.</i>
              <br />
              <br />
              <i>Thank you again for your time and thoughtful consideration.</i>
              <br />
              <br />
              <i>Best wishes,</i>
              <br />
              <i>[Your Name]</i>
            </p>
          </div>

          <p className={`${styles.articleText}`}>Або</p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{ backgroundColor: `#${articleData.article_color}` }}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              <i>Dear [Interviewer],</i>
              <br />
              <br />
              <i>I&apos;m grateful for your time talking to me about the [Position] at [Company] last [day].</i>
              <br />
              <br />
              <i>
                I&apos;ve already mentioned how excited I am about [creating/helping/bringing in new clients/develop
                world-class content etc.], and after the interview, my interest even grew. I am convinced with my
                background in [industry] and skills in [job-specific skills, soft skills or tools for the job] I&apos;ll
                quickly become an effective contributor to your team.
              </i>
              <br />
              <br />
              <i>
                Thank you again for the opportunity, and I look forward to hearing from you [date provided during the
                interview].
              </i>
              <br />
              <br />
              <i>Best wishes,</i>
              <br />
              <i>[Your Name]</i>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Після другої співбесіди:</h2>

          <p className={styles.articleText}>
            Ще більш важливим може виявитися імейл після другої співбесіди, яку зазвичай проводить майбутній
            безпосередній керівник або провідний спеціаліст компанії/відділу/команди.
          </p>

          <p className={styles.articleText}>Імейл можна сформулювати так:</p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{ backgroundColor: `#${articleData.article_color}` }}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              <i>Dear [Interviewer],</i>
              <br />
              <br />
              <i>
                Thank you for taking time from your schedule to chat with me. Working with your team on [project] sounds
                inspiring for me. The chance to make an impact on [Company Name]&apos;s success, while working with
                collaborative and talented people, makes me feel excited.
              </i>
              <br />
              <br />
              <i>
                In fact, several ideas came to my mind after our discussion. So, I am sharing with you in the attachment
                a rough proposal of my ideas. Whether this is something you&apos;ve already considered or is on point,
                it would be great to get the chance to discuss it when I join your team.
              </i>
              <br />
              <br />
              <i>
                Please, let me know if there&apos;s anything you need regarding my application. Thank you for your time
                and I look forward to hearing from you.
              </i>
              <br />
              <br />
              <i>Best wishes,</i>
              <br />
              <i>[Your Name]</i>
            </p>
          </div>

          <p className={styles.articleText}>
            Звісно, ідеї та пропозиції стосовно майбутньої роботи можуть виникнути лише в тому випадку, якщо ви дійсно
            зацікавлені у вакансії, співбесіда пройшла продуктивно та конструктивно, і якщо ви — проактивний спеціаліст.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Персоналізований &quot;thank you&quot;-імейл</h2>

          <p className={styles.articleText}>
            І, думаю, зрозуміло, що чим більш персоналізований та конкретизований буде &quot;thank you&quot;-імейл, тим
            більше з нього толку.
          </p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle} style={{ backgroundColor: `#${articleData.article_color}` }}>
              &nbsp;
            </p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              <i>Dear [Interviewer],</i>
              <br />
              <br />
              <i>
                Thank you for meeting with me today. It was great to hear about [Company]&apos; goals for streamlining
                your software and placing an emphasis on quality UX design, and how you see the engineering department
                playing a role in these initiatives. [Company] seems like a wonderful place to work — I really admire
                the mission that drives your business and hope to work with your team to implement some ideas I
                mentioned around redesigning the homepage.
              </i>
              <br />
              <br />
              <i>
                Please, let me know if there&apos;s anything else you need from me to move the hiring process forward.
              </i>
              <br />
              <br />
              <i>Best regards,</i>
              <br />
              <i>[Your Name]</i>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>
            Звісно, для того, щоб написати &quot;thank you&quot;-email потрібен час та зусилля, але це — чудовий шанс,
            щоб stand out of the crowd. Використайте його!
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Читайте цю статтю англійською на{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@ivannatabachuk/post-interview-thank-you-email-537442d5c445"
            >
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
