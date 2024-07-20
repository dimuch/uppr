import React from 'react';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function ProfessionalFollowUpDontWriteATrash( { articleData } ) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData}/>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Ну от, найбільш трешові <a href="/blog/articles/not-sure-if-you-saw-my-last-email"
                                       target="_blank" rel="noreferrer"><i>opening lines для follow-up
            emails</i></a> розібрали. Поглянемо, як все-таки варто починати професійний фолоап. Тобто такий, коли ви
            нікого ні в що носом не тикаєте, не натякаєте, не агресуєте, і не пишете всього
            того, що робить фолоап таким ненависним різновидом ділового імейлінгу.
          </p>

          <h2 className={styles.subTitle}>
            Якщо ви фолоапите, значить вам більше треба!
          </h2>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Нагадаю: основна &quot;засада&quot; з фолоапами — це те, що ви уже один раз писали. І якщо необхідно
            нагадувати (це один з найпоширеніших різновидів фолоапу, але не єдиний), то значить вас
            проігнорували (будемо називати речі своїми іменами) з тієї чи іншої причини, і вам доводиться
            писати вдруге. Тож ви потрапляєте у більш залежну позицію, бо ви — більше зацікавлені, ніж адресат.
            Виходить, що вам більше треба, ніж йому, і це вже дратує. Плюс, ви
            виконуєте подвійну роботу, а це дратує у квадраті.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Але фокус в тому, що чим більше ви виказуєте своє роздратування, тим більше ви демонструєте свою
            залежність. А це 100% програшна позиція і далеко не проактивна.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            От наприклад, візьмемо ситуацію, класика жанру — рекрутер обіцяв дати фідбек по співбесіді,
            продекларував ось це легендарне &quot;ми вам перетелефонуємо за тиждень&quot;. Вже другий закінчується,
            а віз і нині там, і ви вирішуєте профолоапити й запитати, що там і як там? Написали один раз —
            тиша.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Як ви буде почуватися, коли вирішуватимете чи писати вдруге? Так, будете для себе
            виправдовувати та раціоналізувати поведінку рекрутера. Напевно, імейл загубився, їм же ж багато
            резюме приходить на день. Може, пропустили ваш лист чи він в спам потрапив? А може, рекрутер у
            відпустці чи захворів? Різне буває.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Як ви буде почуватися у такій ситуації як професіонал? Чи постраждає ваш професійний імідж? А
            самооцінка? У будь-якому разі цим другим фолоапом ви показуєте, що вам більше потрібна ця
            робота, ніж ви їм як фахівець. І питання не в тому, добре це чи погано, а в тому, щоб бачити
            реальний стан речей та діяти відповідно.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>
            Як написати фолоап, щоб вам таки відповіли?
          </h2>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Отже, як зробити так, щоб ваш фолоап був у професійних межах, нікого не нервував (ні вас, ні
            читача),
            але водночас виконував свою функцію — таки отримати відповідь на запит?
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Сподіваюся, мої поради допоможуть виконати вам це майже <i>mission-impossible</i> завдання.
          </p>

          <h3 className={styles.articleSubSubTitle}>
            Ще раз сформулюйте ваш запит.
          </h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Так, усе настільки просто. І це знову ж таки про <a href="/blog/articles/kiss-emails"
                                                                target="_blank"
                                                                rel="noreferrer"><i>KISS</i></a>, пам&apos;ятаєте? Майте
            розум і такт скоротити комунікацію до мінімуму. Дотримуйтесь підходу Річарда Баха <i>&quot;Good
            writing is all about the power of the deleted word&quot;</i>.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Тобто, просто ще раз напишіть вашу думку, питання чи прохання, без оцієї всієї
            пасивно-агресивної лексики. Без вгадувань та припущень в стилі &quot;може ви не побачили&quot;, &quot;може
            імейл потрапив у спам &quot;. І без підлабузництва типу &quot;пишу, бо не отримав відповіді на попередній
            імейл&quot; і
            &quot;чи тобі вдалося подивитися мій вчорашній імейл?&quot;. Нагадую: по-перше, адресат і так знає, що не
            відповів вам, і не факт, що почувається від цього добре. А по-друге, такі фразочки сприймаються,
            як критика, висміювання, глузування і прихована ворожість.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Також інколи може бути не зайвим ще раз перевірити свої формулювання. Наскільки чітко підібрані
            слова, і чи дійсно читачеві зрозуміло, що ви від нього хочете? Якщо запит був довгим, то
            повторіть основну ідею, але у двох-трьох влучно сформульованих реченнях. І, нарешті, встановіть
            дедлайн. Так, неодмінно вкажіть, на коли потрібна відповідь. Повірте <i>&quot;I need/ I&apos;d be grateful
            for your input on Х
            by [date/time]&quot;</i> не заслужить вам репутацію <i>pushy and bossy person</i>, а от від невиконаної
            роботи чи завалених термінів лейбл <i>&quot;incompetent&quot;</i> може &quot;причепитися&quot; надовго.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            А може статися і з точністю до навпаки — недостатньо інформації для відповіді, адже диявол
            завжди в деталях. Тому подумайте, що може бути потрібно читачеві, щоб таки відповісти вам.
          </p>

          <h3 className={styles.articleSubSubTitle}>
            Напишіть правильно початковий імейл.
          </h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Правда в тому, що якби ви писали правильно початковий імейл, то і фолоапити не прийшлося б (у
            більшості випадків). Але що уже вдіяєш, після бою...
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Що таке правильно?
          </p>
          <ul className={`${styles.articleList}`}>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                <a href="/blog/articles/context-is-the-king" target="_blank" rel="noreferrer">Задайте
                  контекст</a>.
              </p>
            </li>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                Дайте усю необхідну та релевантну інформацію, але не більше, ніж справді потрібно.
              </p>
            </li>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                Завершіть чітким та зрозумілим CTA <i>(call to action)</i>.
              </p>
            </li>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                Передайте відповідальність, установивши дедлайн.
              </p>
            </li>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                І структуруйте імейл так, щоб на нього було легко відповісти. Наприклад, просто &quot;так&quot; чи
                &quot;ні&quot;.
              </p>
            </li>
          </ul>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Дійсно, один з найкращих способів уникнути подальших фолоапів — це обговорити всі очікування з
            самого початку. І писати так, щоб зрозуміло було читати й легко відповідати.
          </p>

          <h3 className={styles.articleSubSubTitle}>
            Попросіть.
          </h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Як я вже писала, немає нічого поганого в тому, що вам більше потрібно. Основне — те, як ви на це
            реагуєте.
            І коли вам щось дійсно потрібно терміново, і це робочий момент, то абсолютно нормально прямо та
            ввічливо <a href="/blog/articles/case_study_delivery_director_fail-email" target="_blank"
                        rel="noreferrer">попросити</a>:
          </p>
          <ul className={`${styles.articleList}`}>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                <i>Can you look at my last email?</i>
              </p>
            </li>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                <i>Can I have a reply regarding X today?</i>
              </p>
            </li>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                <i>Can you please reply to my last email, regarding ...</i>
              </p>
            </li>
          </ul>

          <h3 className={styles.articleSubSubTitle}>
            Запитайте.
          </h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Якщо прохання не підходить до контексту або ви не хочете використовувати таку форму, сформулюйте
            ваш фолоап у вигляді запитання:
          </p>

          <ul className={`${styles.articleList}`}>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                <i>What do you think about [the initial request]?</i>
              </p>
            </li>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                <i>Do you have time to review/complete [the initial request] today/by the end of the
                  week?</i>
              </p>
            </li>
            <li className={`${styles.discList}`}>
              <p className={`${styles.articleText} ${styles.articleLink}`}>
                <i>Would you like to jump on a quick call/meet-up to discuss [the initial request]?</i>
                <br/>
                Але цю опцію можна використовувати, тільки якщо ви справді вважаєте, що це може
                допомогти прискорити процес. А не як спосіб маніпуляції чи залякування (в тому сенсі, що
                одразу кинуться вам відповідати, аби тільки ви не дзвонили і не виносили мозок по
                телефону).
              </p>
            </li>
          </ul>

          <h3 className={styles.articleSubSubTitle}>
            Зателефонуйте.
          </h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Знаю, це, мабуть, найменш популярний варіант, але дієвий. Насправді, багато речей можна швидше
            пояснити у телефонній розмові. І рішення по телефонуприймаються набагато швидше, ніж через імейл. Звісно, не
            завжди можна зателефонувати, особливо якщо вас та адресата розділяють континенти та часові
            пояси. Та ще один бенефіт використання телефону для фолоапів — це те, що після того, як ви не
            змогли додзвонитися, ви з чистою душею можете написати.
          </p>
          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle}
               style={{
 backgroundColor: `#${articleData.article_color}` 
}}><i>A phone call follow-up:</i></p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              <i>Hey Sarah</i>,
              <br/>
              <i>I was calling about [the initial request]</i>.
              <br/>
              <i>[Description and solutions]</i>
              <br/>
              <i>Looking forward to your reply today. If it’s easier for you, please give me a call back
                to discuss.</i>
              <br/>
              <br/>
            </p>
          </div>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Але навіть якщо ви таки поговорили і розв&apos;язали питання в телефонній розмові, однаково напишіть фолоап
            як
            підсумок вашої бесіди, щоб зафіксувати рішення та <i>make it official</i>.
          </p>

          <div className={styles.frameWithExampleAndTitle}>
            <p className={styles.exampleTitle}
               style={{
 backgroundColor: `#${articleData.article_color}` 
}}>&nbsp;</p>
            <p className={`${styles.articleText}  ${styles.exampleText}`}>
              <i>Thanks for your time. Glad we got an opportunity to speak about X.</i>,
              <br/>
              <i>So, we decided/discussed that you will do X and I will do Y by the end of next week.</i>
            </p>
          </div>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Від ефективних фолоапів, насправді, виграють усі. Якщо й не одразу, то у довгостроковій
            перспективі так точно. Тому немає сенсу накручувати себе та впадати у контрпродуктивне
            роздратування. Залишайтеся спокійними й позитивними, висловлюйтеся прямо і по суті, встановлюйте
            очікування, підкреслюйте важливі моменти, пишіть чіткі <i>CTA</i> — і буде вам відповідь!
          </p>

        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <ArticleFooter articleData={articleData}/>
      </div>

    </div>
  );
};
