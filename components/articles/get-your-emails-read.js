import React from 'react';
import Image from 'next/image';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function GetYourEmailsRead({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Бути прочитаним — основна дилема багатьох авторів</h2>

          <p className={styles.articleText}>
            Попри всі старання, бажання і місцями агресію різних месенджерів, статистично імейли залишаються домінантним
            засобом комунікації. Тільки проблема в тому, що, можливо, занадто домінантним. Через надмірно велику
            кількість імейлів навіть адекватним авторам (імейлерам) доводиться боротися за увагу читачів.
          </p>

          <p className={styles.articleText}>
            А маркетологам та сейлзам дістається поповній. Як вони не вивертаються та що тільки не вигадують, а{' '}
            <i>reply rates та open rates</i> тільки падають з року в рік. Виникає враження, що з кнопкою <i>DELETE</i>
            &nbsp;зріднилися багато адресатів.
          </p>

          <p className={styles.articleText}>Бути почутим/прочитаним — основна дилема багатьох авторів.</p>

          <p className={styles.articleText}>
            Який найкращий і перевірений спосіб привернути увагу до свого листа, щоб його помітили, прочитали, а в
            ідеалі — ще й відповіли?
          </p>

          <p className={styles.articleText}>
            Спробуйте почати з того, що будете у кожному своєму імейлі дотримуватися ось цих простих правил. Або хоча б
            одного. І ваші імейли уже значно відрізнятимуться.
          </p>

          <h3 className={styles.articleSubSubTitle}>1.Пишіть короткі імейли!</h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            <a href="/blog/articles/subject-line" target="_blank" rel="noreferrer">
              Шкоду від довгих імейлів
            </a>{' '}
            я уже детально описувала. З такою глобальною перевантаженістю інформацією, коли навичка читати давно
            переросла у звичку пробігтися очима, ця порада виглядає максимально логічною. Усі й так дуже зайняті, то
            навіщо надсилати один одному талмуди інформації, а потім ще ображатися, що їх ніхто не читає. Пишіть рівно
            стільки інформації, скільки потрібно. З імейлом, як зі стравою, яку ви готуєте за рецептом: все повинно бути
            у певній пропорції та в певній послідовності. Якщо додати зайвий інгредієнт, то може і можна буде їсти, але
            навряд чи смакуватиме. Так і ваш імейл не повинен містити зайвих слів, щоб по-справжньому
            &quot;смакувати&quot; читачеві.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Cut to the chase</h2>

          <h3 className={styles.articleSubSubTitle}>2.Пишіть найважливіше спочатку</h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Як, не потрібно починати з <i>І am writing to…</i> чи ще якогось безглуздого вступу. Переходьте одразу до
            суті. Ви ж не шкільне есе пишете?! Та не в олімпіаді берете участь. Це ділове листування, тому, як кажуть в
            Голлівуді — <i>cut to the chase</i>. ставлення до ASAP дивіться{' '}
            <a href="https://www.youtube.com/watch?v=p5yTg0yJMGw" target="_blank" rel="noreferrer">
              тут
            </a>
          </p>

          <h3 className={styles.articleSubSubTitle}>3.Підсумуйте імейл в темі</h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            <a href="/blog/articles/subject-line" target="_blank" rel="noreferrer">
              Пишіть адекватну тему імейлу.
            </a>{' '}
            Написавши &quot;привіт&quot;, &quot;запитання&quot; чи ще якусь фігню, ви марнуєте чудову можливість уже з
            самого початку скоротити імейл та створити образ себе як професіонала, який дбає про час інших. Тема — це
            щось на зразок самері вашого імейлу. Вона повинна розповісти, про що ваш імейл, і чому на нього варто
            витрачати час зараз. Крім того, недовикористовуючи тему, ви втрачаєте можливість &quot;запихнути&quot; туди
            різні каверзні моменти та зекономити час
          </p>

          <h3 className={styles.articleSubSubTitle}>4.Перефокусуйтеся</h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Почніть з них, а не з вас. Кожного максимально цікавить її/його персона, а не ви, тому перенесіть фокус із
            себе на читача. Завжди ключовою в комунікації була аудиторія, тому і писати потрібно так, щоб читач:
            <br />
            &nbsp;&nbsp;1. зрозумів вас;
            <br />
            &nbsp;&nbsp;2.відчув себе важливим.
            <br />
            Ці два пункти – практично гарантія відповіді на ваш імейл. Чи не найосновніше та дуже протверезливе правило
            комунікації стверджує, що ніхто вам нічого не винен. Тому приберіть з вашої комунікації (і не тільки
            письмової) ось ці егоїстичні <i>I need…/I want.</i> Нікому не цікаво читати, що <i>you need</i>, особливо
            вашим клієнтам. Людей цікавлять їхні проблеми, їхня ситуація, їхні завдання та цілі.
          </p>

          <h3 className={styles.articleSubSubTitle}>5.Один месидж — один імейл</h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Ну, добре — два, але це абсолютний максимум. Взагалі-то правило з розряду емпіричних. Імейл — це не бізнес
            зустріч. На мітингу чим більше питань з адженди вдається обговорити, тим продуктивнішою вважається зустріч.
            З імейлами усе навпаки: чим менше, тим краще. Тому не намагайтеся втиснути в один імейл усі питання, які вас
            цікавлять, ніби вже потім ніколи не буде шансу запитати. Якщо у вас ще залишилися інші питання — напишіть
            іншого листа.
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={styles.articlePhrase} style={{ color: `#${articleData.article_color}` }}>
            Тон імейлу - це той секретний секрет, який вбереже вас від купи misunderstanding!
          </h3>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={styles.articleSubSubTitle}>6.Стежте за тоном</h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Тон — важливий для будь-якого імейлу, навіть найпростішого. Це саме той нюанс і секретний секрет, який
            вбереже вас від купи <i>misunderstanding</i> в майбутньому. Відсутність жестів та виразу обличчя в імейлах
            призводять до того, що навіть просте речення може бути неправильно витлумачене.
            <a href="https://t.me/emailingskills/156" target="_blank" rel="noreferrer">
              Ось я колись давала приклад такого випадку.
            </a>
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Простий імейл від замовника, якого просять заепрувити зміни:
            <br />
            <i>I am going on vacation next week. Let’s talk when I return.</i>
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Упс!
            <br />
            Що це означає? Що його уже дістали? Що самі нічого не можуть вирішити? Чи замовник взагалі не зрозумів, що
            від нього хочуть? Чи робіть як знаєте, а йому треба відпочити? Чи так він показує, шо це складне питання і
            не має сенсу його зараз похапцем вирішувати?
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Хто зна!
            <br />
            Такий імейл транслює незрозумілий месидж. І вашому читачеві нічого не залишається, як почати проектувати
            свої страхи чи невпевненість, і дофантазовувати чужі думки та емоції в такому імейлі.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            А через 10 днів замовник повертається на роботу повен сил та енергії, а адресат уже накрутив себе вище хмар,
            і сердиться за це емоційне виснаження. Чи можна говорити про нормальні відносини в такій ситуації? Навряд!
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>А все почалося з дуже простого імейлу.</p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={styles.articlePhrase} style={{ color: `#${articleData.article_color}` }}>
            To err is human, to edit, divine
          </h3>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={styles.articleSubSubTitle}>7.Подбайте про спелінг та граматику</h3>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Годі й придумати більш яскравого показника недбалості в імейлі, ніж граматичні, лексичні та орфографічні
            помилки. І які б не були просунуті <i>spelling-checkers</i>, все одно перечитуйте вашу писанину самі й
            уважно. Нещодавно натрапила на фразу <i>To err is human, to edit, divine</i>. Думаю, вона красномовніша за
            будь-які пояснення взагалі.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Читайте цю статтю англійською на{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://medium.com/@ivannatabachuk/emails-that-get-replies-what-are-they-336a082486de"
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
