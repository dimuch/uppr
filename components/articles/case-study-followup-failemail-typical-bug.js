import React from 'react';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function CaseStudyFollowupFailEmailTypicalBug({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={`${styles.articleText} ${styles.articleLink}`}>
            <a href="/blog/articles/professional-follow-up-dont-write-a-trash" target="_blank" rel="noreferrer">
              Як зробити фолоапи більш людяними
            </a>
            ,{' '}
            <a href="/blog/articles/not-sure-if-you-saw-my-last-email" target="_blank" rel="noreferrer">
              позбавити їх пасивної агресії
            </a>{' '}
            та запропонувати найкращий <i>reader experience (RX)</i> вашим читачам, ми уже обговорювали.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            А тепер подивимося на <i>real-life</i> прикладі, як не потрібно фолоапити, і до того ж розглянемо черговий
            типовий баг для фолоапів. Я ще про нього не писала, але його ефект відчуває кожен, хто з ним стикається (бо
            такого бажання послати подалі не викликає навіть{' '}
            <a href="/blog/articles/case-study-delivery-director-fail-email" target="_blank" rel="noreferrer">
              It would be great if
            </a>{' '}
            чи{' '}
            <a href="/blog/articles/asap" target="_blank" rel="noreferrer">
              asap
            </a>
            ). І це <b>абсолютний фокус автора на собі</b>, власній персоні, своїх потребах. І якщо у звичайному
            робочому імейлі це ще можна якось пережити, списавши на невдалий день, то у фолоапі, особливо у{' '}
            <a href="/blog/articles/bullshit-free-sales-emails" target="_blank" rel="noreferrer">
              sales фолоапі
            </a>{' '}
            — це кричуща неповага, нуль емпатії та слабенький RX.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Ось отримала на днях:
            <br />
            <i>I know you are busy helping your team to head-hunt the best candidates.</i>
            <br />
            <b>(знаю, що зайняті важливішими справами, але то таке, напишу, бо мені ж треба)</b>.
            <br />
            <i>I am writing (facepalm) to make sure you did not forget to share our tool with your team.</i>
            <br />
            <b>
              (по-перше, якщо це важливо, то я і сама не забуду, без зайвих нагадувань. По-друге, не потрібно вказувати
              мені, що розшарювати з моєю командою, справді корисні та цінні речі вони точно отримають)
            </b>
            .
            <br />
            <i>Here&apos;s the link to it again.</i>
            <br />
            <b>(це про наздогнати та вчинити добро)</b>.
            <br />
            <i>In 30 minutes</i>
            <br />
            <b>(це забагато)</b>
            <br />
            <i>
              I can give you some ideas on how to most efficiently find people for your projects with the help of [tool]
            </i>
            <br />
            <b>
              (ще ніхто не давав згоди інструмент використовувати, як тут уже одразу застережливо (а насправді
              агресивно) пропонуються додаткові послуги. Відкидаючи усі потенційні &quot;ні&quot;, що вже неповага само
              собою, нав&apos;язують розмову, яка мені точно не потрібна, принаймні на цьому етапі.)
            </b>
            <br />
            <i>Do you have time for a call on Friday at 15.30 or Monday at noontime?</i>
            <br />
            <b>
              (наполегливо нав&apos;язують. Дедлайн можна пропонувати, але у випадку, коли була якась попередня
              домовленість. Хіба хтось уже погоджувався на дзвінок? Це як дякувати за те, чого ще не відбулося, і не
              факт, що відбудеться).
            </b>
            <br />
            <i>[Company name] has already been successfully utilizing [tool name] and are absolutely happy about it</i>
            <br />
            <b>
              (у даному випадку потрібна конкретика, які результати використання інструменту в цифрах. І ще фейл автора
              в тому, що він наводить приклад занадто малої компанії. Їхня кількість вакансій значно менша від того, що
              потрібно мені. Тобто, приклад вийшов не авторитетним)
            </b>
            .
            <br />
            <i>Let me know which of these times is convenient for you or send me a few that work for you</i>
            <br />
            <b>
              (знову вказівка, що робити. Плюс капітан очевидність — якщо мені цікаво і я захочу поговорити, то і сама
              здогадаюся запропонувати варіант, коли мені зручно).
            </b>
            <br />
            <i>I look forward to talking with you</i>
            <br />
            <b>
              (знову нав&apos;язування очікувань, коли ні про що не домовлено. Найкращий CTA завжди у питальній формі).
            </b>
            <br />
            <i>[Salesperson]</i>
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={`${styles.articleText} ${styles.articleLink}`}>
            І ще пропоную розглянути два імейли, які наведені на одному з досить відомих блогів як приклади зразкового
            сейлз-фолоапу.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            <b>1:</b>
            <br />
            <i>Hi [Prospect],</i>
            <br />
            <i>this is [Salesperson]. I am sorry we haven&apos;t been able to connect</i>
            <br />
            <b>(їм шкода, а адресатові? Навряд чи, тільки свій час зекономив)</b>
            <br />
            <i>
              When we met, you were very interested in increasing your sales [objective]. I know how busy things can get
              with work and family
            </i>
            <br />
            <b>
              (знову ж таки визнають, що адресат зайнятий і причина важлива, але who cares? Якщо don’t care, то
              принаймні не показуйте це так явно).
            </b>
            <br />
            <i>
              I want you to know that I don&apos;t mind scheduling a call before or after work hours if that would make
              it easier
            </i>
            <br />
            <b>
              (така собі зверхня поблажливість, милостиво дозволи турбувати на вихідних. Ті, у кого сім&apos;я і діти,
              точно на вихідних такими питаннями займатися не будуть).
            </b>
            <br />
            <i>Just let me know what works for you. I don&apos;t want to be a pest</i>
            <br />
            <b>
              (уже такий. І навіщо натякати читачеві про свою ущербність? Це ж робочий бізнес-імейл, то й формулюйте
              його відповідно. А то, якщо не зверху заходять, то голову попелом посипають)
            </b>
            <br />
            <i>
              but I do want to make sure we have an opportunity to talk if you still want to fast track your sales
              growth [objective]
            </i>
            <br />
            <b>(а це взагалі жах. Тут і вимога якихось гарантій для себе, і чистої води маніпуляція — </b>
            <i>if you still want to fast track your sales growth [objective]</i>.{' '}
            <b>І така до того ж груба, що навіть якщо і планували дати відповідь, то не будуть).</b>
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            <b>2:</b>
            <br />
            <i>I have not had much success reconnecting with you</i>
            <br />
            <b>(здогадайтеся самі, чому).</b>
            <br />
            <i>It might just be that you don&apos;t have any interest in talking with me</i>
            <br />
            <b>(вуаля!)</b>
            <br />
            <i>— and that&apos;s okay</i>
            <br />
            <b>(о, дякую за дозвіл, робити, як я уже роблю! Тільки проблема в тому, що дозволу то ніхто не просив).</b>
            <br />
            <i>I just need to know</i>
            <br />
            <b>(так, важливо для всіх, що вам потрібно)</b>
            <br />
            <i>whether or not to keep trying</i>
            <br />
            <b>(уже давно можна було б здогадатися).</b>
            <br />
            <i>So, to make this nice and easy for you</i>
            <br />
            <b>(дякую знову, яка зворушлива турбота про читача),</b>
            <br />
            <i>
              you can reply with a simple keystroke. Just reply with either A, B, C, D, or E and I&apos;ll know what to
              do
            </i>
            <br />
            <b>(давно вже потрібно було здогадатися, що робити — відчепитися!),</b>
            <br />
            <i>but please do reply</i>
            <br />
            <b>(таки просто так не відчепляться)</b>
            <br />
            <i>so that I can stop emailing you if you&apos;re not interested</i>
            <br />
            <b>(це взагалі звучить як погроза — продовжу далі діставати, якщо не дасте відповідь).</b>
            <br />
            <i>
              &nbsp;&nbsp;&nbsp;A. Stop emailing me with attempts to connect but continue to send invites for events.
            </i>
            <br />
            <i>
              &nbsp;&nbsp;&nbsp;B. Don&apos;t send me anything, remove me from your list. We don&apos;t currently and
              won&apos;t ever need your help.
            </i>
            <br />
            <i>&nbsp;&nbsp;&nbsp;C. I want to talk, we need some help, but the timing isn&apos;t right. Keep trying.</i>
            <br />
            <i>
              &nbsp;&nbsp;&nbsp;D. I would like to schedule a time to talk. We need some help. Please send your calendar
              link.
            </i>
            <br />
            <i>&nbsp;&nbsp;&nbsp;E. I forgot who you are. What&apos;s this about?</i>
            <br />
            <i>Thank you.</i>
            <b>(Та нема за що)</b>
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Це такий хитрющий маніпулятивний спосіб однаково отримати відповідь, хоч якусь. Але для чого? Кому не
            цікаво, той не відповідає — це ж очевидно!
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <ArticleFooter articleData={articleData} />
      </div>
    </div>
  );
}
