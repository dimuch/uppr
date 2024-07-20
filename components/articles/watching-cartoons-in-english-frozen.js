import React from 'react';
import Image from 'next/image';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function WatchingCartoonsInEnglishFrozen({ articleData }) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData} />
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>Дивимося мультики англійською</h2>

          <p className={styles.articleText}>
            Насправді, я дуже довго думала, кого ж все таки поставити на перше місце - Ріо чи Крижане Серце, адже
            мультфільми однаково класно зроблені та мега корисні для поповнення словника англійської. І Ріо виграв лише,
            як би не парадоксально це звучало, більшою позитивністю негативних героїв. Але серед усіх мульт-сюжетів
            останніх років - цей для мене виявився не тривіальним та з досить непередбачуваною кінцівкою;).
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={`${styles.articlePhrase}`} style={{
 color: `#${articleData.article_color}` 
}}>
            &quot;Some people are worth melting for.&quot;
          </h3>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>
            Якщо коротко, то мультфільм про те, як хоробра Анна вирушає в подорож,щоб звільнити своє королівство від
            кайданів льоду сестри Ельзи та власне знайти її саму. Супутниками у цій пригоді виступили Крістоф, людина з
            гір, однорогий олень та балакучий сніговик Олаф.
          </p>

          <p className={styles.articleText}>
            От саме про мультики ми сьогодні поговоримо. Адже є багато плюсів, щоб провести вечір за чашкою какао та
            мультиком англійською. І не бійтеся впасти &quot;в дитинство&quot; - сучасні діснеївські, піксарівські та
            ін. мультики уже давно піднімають досить дорослі теми та нетривіальні проблеми. Тому, навіть вимогливі
            <i>business english learners</i>, знайдуть масу фраз, якими можна козирнути з клієнтами на бізнес зустрічі.
          </p>

          <p className={styles.articleText}>
            Саме Олаф,як на мене, є найбільш вдалим персонажем, який розтопить не одне крижане серце своїм позитивом та
            фразою&nbsp;
            <b>
              <i>Some people are worth melting for.</i>
            </b>
          </p>

          <div className={styles.articleIframeContainer}>
            <iframe src="https://www.youtube.com/embed/YAuQxZBf55Y" allowFullScreen />
          </div>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={`${styles.articlePhrase}`} style={{
 color: `#${articleData.article_color}` 
}}>
            І ще він так мило каже:
            <br />
            <i>&quot;Hi, I&apos;m Olaf and I like warm hugs.&quot;</i>
          </h3>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>
            Крім того, він говорить просто чудовою англійською, а зустріч Олафа з Анною та Крістофом, мабуть одна з
            найкращих моментів мультфільму.
          </p>

          <div className={styles.articleIframeContainer}>
            <iframe src="https://www.youtube.com/embed/YgGIHzo5Hic" allowFullScreen />
          </div>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            Попрактикуйтеся та заповніть пропуски їх діалогу.&nbsp;
            <a
              href="https://drive.google.com/file/d/0B_HdrUABlRZodFFJT3BPTHMyMDg/view"
              target="_blank"
              rel="noreferrer"
            >
              Посилання на завдання
            </a>
          </p>

          <p className={styles.articleText}>
            А &quot;добрі люди&quot; на YouTube уже зробили підбірку найкращих моментів з Олафом, тому, якщо немає часу
            переглянути увесь мультфільм - це для вас.
          </p>

          <div className={styles.articleIframeContainer}>
            <iframe src="https://www.youtube.com/embed/D0vymWac_4M" allowFullScreen />
          </div>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={styles.articleSubSubTitle}>Невичерпне джерело розмовних фразових дієслів.</h3>

          <p className={styles.articleText}>
            <b>Olaf:</b> <u>Hands down</u> (без сумніву, стовідсотково), this is the best day of my life.
            <br />
            <br />
            <b>Anna:</b> No! Why? <u>Why do you shut me out</u> (виключити, відгородитися, віддалитися, не впускати)?
            Why do you shut the world out? What are you so afraid of?
            <br />
            <br />
            <b>Anna:</b> I got engaged, but then <u>she freaked out</u> (була приголомшена/шокована) because I&apos;d
            only just met him, you know that day. She said she wouldn&apos;t bless the marriage and…
            <br />
            <br />
            <b>Kristoff:</b> [Interrupts] <u>Hang on</u> (постривай/зажди), you mean to tell me you got engaged to
            someone you just met that day?
            <br />
            <br />
            {/* eslint-disable-next-line max-len */}
            <b>Olaf:</b> I guess I was wrong. I guess Kristoff doesn&apos;t love you enough <u>to leave you behind</u>{' '}
            (залишити).
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={styles.articleSubSubTitle}>
            А один такий діалог, і список must-learn нової розмовної лексики готовий.
          </h3>
          <p className={styles.articleText}>
            <i>[Hans and a weakened Anna lean in to kiss. But then Hans stops and smiles evilly]</i>
            <br />
            <br />
            <b>Hans:</b> Oh, Anna. If only there was someone out there who loved you.
            <br />
            <i>[Gets up and leaves]</i>
            <br />
            <b>Anna:</b> What?
            <br />
            <i>[Shocked, she turns to see him walking to a window]</i>
            <br />
            <b>Anna:</b> Y-You said you did.
            <br />
            <b>Hans:</b> <i>[Closing the curtains]</i> As thirteenth in line in my own kingdom,{' '}
            <u>I didn&apos;t stand a chance</u> (не мати шансу, stand a chance - мати хороші шанси - можна використати,
            говорячи і про нову посаду/роботу, і про робочі чи особисті відносини).{' '}
            <i>I knew, I&apos;d have to marry into the throne somewhere.</i>
            <br />
            <b>Anna:</b> What-what are you talking about?
            <br />
            <b>Hans:</b> <i>[puts out a candle]</i> As heir, Elsa was preferable, of course, but{' '}
            {/* eslint-disable-next-line max-len */}
            <u>no one was getting anywhere with</u> (добитися успіху - практично взаємозамінне зі словом success) her.{' '}
            <u>But you</u> (лише ти).
            <br />
            <b>Anna:</b> Hans?
            <br />
            <b>Hans:</b> You were so desperate for love, you were willing to marry me,<u>just like that!</u> (запросто,
            неждано-негадано, на рівному місці)
            <br />
            <i>[He picks up a pitcher of water and goes to the fireplace]</i>
            <br />
            <b>Hans:</b> I figured after we married, I&apos;d have to stage a little accident for Elsa.
            <br />
            <i>
              [He pours water onto the fire, putting it out. Anna reaches out to stop him, but collapses onto the floor]
            </i>
            <br />
            <b>Anna:</b> Hans, no! Stop!<b>Hans:</b> But then she doomed herself, and <u>you were dumb</u> (тупий - може
            згодитися де завгодно) enough to go after her.
            <br />
            <b>Anna:</b> Please.
            <br />
            <b>Hans:</b> <i>[chuckles]</i> All that&apos;s left now is to kill Elsa and bring back summer.
            <br />
            <b>Anna:</b> <i>[bravely]</i> <u>You&apos;re no match for</u> (і близько не стояти, не рівня - вживається
            для порівняння людей,ідей, речей) Elsa.
            <br />
            <b>Hans:</b> No, you&apos;re no match for Elsa. I, on the other hand, am the hero who&apos;s going to save
            Arendelle from destruction.
            <br />
            <i>[Hans walks to the door]</i>
            <br />
            <b>Anna:</b> <i>[angrily]</i> You won&apos;t get away with this!
            <br />
            <b>Hans:</b> Oh I already have.
            <br />
            <i>[Hans leaves, locking the door behind him]</i>
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={`${styles.articlePhrase}`} style={{
 color: `#${articleData.article_color}` 
}}>
            Не зважаючи на серйозність попереднього діалогу, в мультику є також дуже багато різних &quot;підколок&quot;.
          </h3>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>
            Наприклад:
            <br />
            <b>Kristoff:</b> Whoa. Now that&apos;s ice. I might cry.
            <br />
            <b>Anna:</b> Go ahead.<u>I won&apos;t judge</u> (я не засуджую).
            <br />
            <b>Kristoff:</b> [to Anna, who put her feet on his sled] Whoa, whoa, whoa, put your feet down. This is fresh
            lacquer. Seriously, <u>were you raised in a barn?</u>(Ти де виховувалася?)
            <br />
            <i>[Spits on sled to clean it]</i>
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h3 className={`${styles.articlePhrase}`} style={{
 color: `#${articleData.article_color}` 
}}>
            Шедевром також є і саундтрек до мультфільму, кіно версія якого виконана{' '}
            <u>
              <a href="https://en.wikipedia.org/wiki/Idina_Menzel" target="_blank" rel="noreferrer">
                Ідіною Мензел.
              </a>
            </u>{' '}
            Пісня отримала премію<b>&quot;Оскар&quot;</b> за кращу пісню до фільму, премію<b>&quot;Гремі&quot;</b>, кіно
            премію<b>&quot;Вибір критиків&quot;</b>, і була номінована на<b>&quot;Золотий глобус&quot;</b>. Вражає,
            правда?
          </h3>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={`${styles.articleText} ${styles.articleLink}`}>
            І у вас є можливість прослухати її з користю прямо зараз.
            <br />
            <a
              href="https://drive.google.com/file/d/0B_HdrUABlRZob0F1a3NZeWhEams/view"
              target="_blank"
              rel="noreferrer"
            >
              Посилання на завдання
            </a>
          </p>

          <div className={styles.articleIframeContainer}>
            <iframe src="https://www.youtube.com/embed/YVVTZgwYwVo" allowFullScreen />
          </div>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            А тим, кому набридло пропуски заповнювати - сюди.
            <br />
            <a
              href="https://drive.google.com/file/d/0B_HdrUABlRZoRTBpZFdZTFNWVTg/view"
              target="_blank"
              rel="noreferrer"
            >
              Посилання на завдання
            </a>
          </p>
        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={`${styles.articleText} ${styles.articleLink}`}>Не втрималася - ще трохи Олафа наостанок:</p>

          <p className={`${styles.articleText} ${styles.articleLink}`}>
            <b>Kristoff:</b> Hey guys!
            <br />
            <b>Anna:</b> They&apos;re rocks.
            <br />
            <b>Kristoff:</b> <i>[off in the distance]</i> You are a sight for sore eyes.
            <br />
            <b>Olaf:</b> <i>[whispering]</i> He&apos;s crazy!
            <br />
            <b>Kristoff:</b> Hey, whoa, I don&apos;t even recognize you. You&apos;ve lost so much weight.
            <br />
            <b>Olaf:</b> <i>[whispering to Anna]</i> I&apos;ll distract them while you run.
            <br />
            <i>[loud, slow voice]</i>
            <br />
            <b>Olaf:</b> Hi, Sven&apos;s family! It&apos;s nice to meet you!
            <br />
            <i>[whispering]</i>
            <br />
            <b>Olaf:</b> Because I love you, Anna, I insist you run.
            <br />
            <i>[loud, slow voice]</i>
            <br />
            <b>Olaf:</b> I understand you&apos;re love experts. Ooh!
            <br />
            <i>[whispering]</i>
            <br />
            <b>Olaf:</b> Why aren&apos;t you running?
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <ArticleFooter articleData={articleData} />
      </div>
    </div>
  );
}
