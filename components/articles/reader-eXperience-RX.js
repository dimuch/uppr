import React from 'react';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function ReaderEXperienceRX({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={`${styles.articleText} ${styles.articleLink}`}>
            В дизайні існує поняття <i>UX (User Experience)</i>. Аналогічно в імейлінгу можна ввести поняття{' '}
            <i>RX (Reader Experience)</i>.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            <i>UX</i> — це те, який досвід/враження отримує користувач від роботи з вашим інтерфейсом, чи вдається йому
            досягти мети й на скільки просто або складно це зробити. От, по суті, те саме і з RX. Це той досвід і те
            враження, яке читач отримує від взаємодії з вашим текстом/імейлом/повідомленням.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Коли я кажу про досвід, то маю на увазі усі аспекти взаємодії вашого тексту з читачем. Як читається, легкий
            чи навантажений текст, яке загальне враження створює? А яке відчуття від конкретних формулювань, який тон у
            повідомлення, як звучить і сприймається? Важливо навіть, як оформлений імейл, який шрифт і розмір, буліти й
            виділення, а також поділ на параграфи. Все має значення.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Навряд чи ваш читач, зайнятий своїми справами, сяде і подумає чи озвучить щось типу &quot;ось тут кривенько
            сформульовано, тут не логічно, тут відступити треба було і кому поставити&quot;. Авжеж, ні. Але враження від
            вашого тексту залишиться, розумієте?
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            І ваше основне завдання як автора імейлу і <i>RX-дизайнера</i> в такому випадку — зробити це враження
            максимально позитивним. Звісно, ви не можете змусити читача думати так, як вам треба. Але взяти на себе
            відповідальність за те, яке враження створює ваш імейл, і докласти максимум зусиль, щоб читач отримав
            чудовий <i>RX</i>,вам точно під силу.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Основне завдання <i>UX-дизайнера</i> — переконатися, що продукт інтуїтивно зрозумілий і перетікає плавно від
            одного кроку до іншого. Так і ваше завдання як автора імейлу — зробити його логічним, поступово вводити
            необхідну інформацію і послідовно вести читача за своїм плином думок. Тобто, як і в <i>UX</i>, розробити
            сценарій end-to-end взаємодії читача з вашим текстом. Що про нього будуть думати, як говорити, як реагувати?
            Як будуть вас сприймати в якості автора тексту?
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Постійно тримайте reader-focus</h2>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Типовий процес роботи у створенні <i>UX-дизайну</i> охоплює опис портрету користувача, створення прототипу,
            тестування, внесення правок і навчання по ходу. Так і ви як <i>RX-дизайнер</i> свого імейлу або серії
            імейлів повинні тримати постійний <i>reader-focus</i>. А отже, знати того, кому пишете, і як найкраще цій
            людині подати інформацію, протестувати ваш вибір лексики та формулювань, логіку подачі, відстежити реакцію
            (чи зробили необхідні вам дії? як швидко і точно?). Внести корективи та зробити висновки на майбутнє.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Цікаво, що у випадку з правками чи помилками в <i>UX-дизайні</i> — до них природно ставляться, як до частини
            процесу та шансу покращити досвід користувачів. Виправили й рухаються далі. Водночас для авторів імейлів —
            обурливо, коли читач (читай — користувач тексту) просить повторити, уточнити, пояснити чи пише, що взагалі
            не розуміє, про що текст. Таких зазвичай клеймують “тупими”, а зі своїм текстом та стилем написання не
            роблять нічого.
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={`${styles.articlePhrase}`} style={{
 color: `#${articleData.article_color}` 
}}>
            Чому б не почати сприймати себе <i>RX-дизайнером</i> власного тексту, і не намагатися стати найкращим в цій
            новій професії? Чому б не зробити себе на 100% відповідальним за якість своєї писанини та зрозумілість її
            аудиторії? Чому б, отримавши фідбек, не внести правки та зробити для себе висновки на майбутнє? В цій
            ситуації найкраща порада — будь, як <i>UX-дизайнер!</i>
          </h3>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Одна з основних особливостей, що вирізняє хорошого <i>UX-дизайнера</i> — цікавість до людей, бажання
            покопатися в них, намагання зрозуміти, що їм насправді потрібно, і придумати, як це реалізувати. Непогана
            риса для авторів імейлів, чи не так? Адже хороший <i>RX</i> якраз і відрізняє фокус на читачах, на їх
            потребах, максимальна повага до цих потреб та написання тексту відповідно.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Як крутий <i>UX</i> завжди націлений на покращення та полегшення життя користувачів, так і крутий імейл
            спрощує життя, мінімізує зусилля. Такий лист завжди легко читати й ще легше на нього відповідати.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Ось подумайте, усіх же бісять тупі аплікейшен та непродумані дизайнерські рішення (з точки зору досвіду
            користувача). Якась мала деталь в інтер&apos;єрі автомобіля або &quot;не там&quot; розташована кнопка зіпсує
            усе враження від користування. А гадаєте, людей не бісять ваші непродумані імейли? Така сама історія, як і з
            усім решта.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Основним трендом <i>UX-дизайну</i> вважається простота. Нескладний інтерфейс, легке зчитування і дії. Нічого
            не нагадує? Підкажу —{' '}
            <a href="/blog/articles/kiss-emails" target="_blank" rel="noreferrer">
              KISS
            </a>
            .
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Якщо інтерфейс простий та зрозумілий, то досягти результату можна меншими зусиллями. Так і з імейлами: якщо
            вони цілісні, зрозумілі та красиві, то і ви, й ваші читачі досягнете бажаних результатів швидше і простіше.
            Правильно розставляйте акценти, подавайте інформацію логічно, мінімізуйте вірогідність помилки чи
            непорозуміння. Подумайте, як зробити так, щоб читач вирішив виконати певну дію, і щоб в жодному разі не
            потрапив у глухий кут.
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Information architecture</h2>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            В <i>UX-дизайні</i> оперують таким поняттям, як <i>IA (information architecture)</i>. Це теорія і практика
            організації інформаційних матеріалів для якомога легшого, простішого та зрозумілішого керування ними. Вона
            часто невидима, але це є інтерактивним, безперервно зростаючим фундаментом продуктів, думок і ідей. Про{' '}
            <i>IA</i> часто говорять, що це <i>tool for making sense of mess</i>. Це поняття не завадить взяти на
            озброєння й імейлерам, щоб перетворити mess власних думок та формулювань у текст, який makes sense для їх
            читачів.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            <i>UX</i> — це не просто гарний інтерфейс і милі анімашки. Це маленький акронім для дуже розлогого поняття,
            яке завжди охоплює бачення більшої картини. Це увесь шлях користувача з точки входу до точки виходу.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            І правильно підібрані слова — тільки частина <i>RX</i>, бо до написання імейлу потрібно підходити комплексно
            і все має працювати <i>in concert. RX</i> — це завжди система. Не вийде просто припинити вживати якісь
            фразочки і скоротити текст. Має змінитися весь підхід до написання. Потрібно будувати усю стратегію і
            розуміти, як цей імейл вписується у більшу картину вашої комунікації з даним читачем. Як він сприяє розвитку
            вашого імейл-бренду? Яких цілей він допоможе вам досягнути? Колись мені сказали, що це навіть нагадує{' '}
            <i>Design Thinking!</i> Все може бути.
          </p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Але поки давайте хоча б станемо <i>RX-дизайнерами</i> власних імейлів і архітекторами досвіду — чудового
            досвіду спілкування з нами.
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <ArticleFooter articleData={articleData} />
      </div>
    </div>
  );
}
