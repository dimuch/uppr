import React from 'react';

import styles from './commonArticleStyles.module.scss';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function ContextIsTheKing({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        От, наприклад, такий імейл:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}
                         style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle}
                           style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Thank you for the detailed email.
                        </p>
                    </div>


                    <p className={styles.articleText}>
                        Саме по собі формулювання OK, але в різних контекстах його сприйняття буде змінюватися.
                    </p>

                    <p className={styles.articleText}>
                        Це запросто може бути:
                    </p>

                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                як і подяка за чітко та детально розписану ситуацію;
                            </p>
                        </li>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                так і іронія чи
                            </p>
                        </li>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                прихована критика, що хтось пише занадто довгі імейли, дає занадто багато інформації, не
                                вміє виділяти головне, обтяжує всіх своїми лонгрідами й уже не вперше.
                            </p>
                        </li>
                    </ul>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Адресат, який свято вірить в безгрішність своїх імейлів, досконалість навичок та ігнорить
                        зворотний зв&apos;язок, може сприйняти слова за щиру вдячність та пишатися собою, хоч автор іронізує.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        І, навпаки, якщо хтось і слово зайве боїться написати, то йому буде здаватися, що над ним
                        глузують чи навіть сарказмують. Тому потрібно навчитися завжди брати до уваги контекст, а не
                        розцінювати явища самі по собі. Вони не існують в якомусь вакуумі, а залежать від багатьох
                        аспектів.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Не вийде застосовувати правила, техніки, поради, фрази чи слова, не враховуючи контекст. Не
                        вийде! Вони просто не спрацюють. І ви не те, що писати не станете краще, а зіпсуєте навіть те,
                        що було, і вийде повний треш.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Ігнор контексту може споганити навіть найвдаліші та найвлучніші принципи.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        От наприклад, як проактивність (скажімо, відповісти на потенційні запитання ще до того, як їх
                        поставили).
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Так, цей принцип супер працює для customer care/service, коли ви можете передбачити всі
                        потенційні запитання клієнта, і відповідаєте на них ще до того, як їх поставили. Наприклад,
                        даєте посилання на ресурси чи додаткові завантаження, не чекаючи, що клієнт спитає, де їх можна
                        взяти.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Але така ідея нікуди не годиться для першого sales email. Бо вважаючи себе супер проактивними,
                        сейлзи пхають у перший імейл все, що треба і не треба. Коли людина ще не готова, ви ще ніхто для
                        неї, вона про вас нічого не знає і не впевнена, що хоче знати, то в неї запитань ще ніяких не
                        виникає. А ви даєте інформацію, про яку не просили, і це викликає тільки роздратування.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Тому треба дати не багато, а саме те, що важливо (і не для вас, а для них).
                    </p>
                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Шаблони НЕ ПРАЦЮЮТЬ!
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Та сама засада і з шаблонами!
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Так, темплейти/заготовки — це зручно (copy-paste і в дамках), продуктивно (не потрібно
                        винаходити велосипед кожного разу) та надійно (якщо взяти в когось авторитетного, а не Гугла, то
                        можна довіряти, що це ОК і так пишуть).
                    </p>

                    <p className={styles.articleText}>
                        Єдине, що… шаблони НЕ ПРАЦЮЮТЬ! Не працюють, бо замість того, аби взяти ключові ідеї, слова чи
                        фрази та кастомізувати їх під свою унікальну ситуацію, більшість повністю тупо копіпейстять. І
                        виходить багато чого не в тему чи занадто пафосно, чи формально, чи по-панібратськи, чи взагалі
                        фіг його розбереш, що там написано.
                    </p>

                    <p className={styles.articleText}>
                        Особливо тепер, коли стільки ботів розвелося, й інколи складається враження, що вони спілкуються
                        краще за живих людей. Бо останні, коли знайдуть вдалу фразу чи навіть цілий абзац, то давай у
                        свій лист пхати. А чи підходить вона під контекст — пофіг, так же ж класно звучить.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Сприйняття фрази змінюється залежно від контексту.
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А одна і та сама фраза в різних контекстах по-різному звучить і сприймається. І коли ви
                        використовуєте шаблон і не враховуєте цього, то ви як one trick pony.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        От, наприклад, для організації зустрічі, часто починають імейл так:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}
                         style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle}
                           style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            We need to arrange a time schedule for our next meeting.
                        </p>
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Коли цей імейл адресується команді від менеджера, який знає, що у всіх є багато важливих питань
                        для обговорення, зустріч потрібна всій команді й кожному буде там, що сказати, то ОК.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Але коли це штатний мітинг, який буде знову ні про що, де кожен буде говорити про апдейти, які й
                        так усі знають, крім менеджера… То на таку фразу виникає реакція — нам треба? Кому це &quot;нам&quot;?
                        Тобі треба ти й зустрічайся! Зрозуміло, що такого не напишуть, але враження залишиться і вплине
                        на ставлення та поведінку в майбутньому.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        І взагалі в такому випадку менеджеру краще не зустріч організовувати, а запросити апдейти
                        імейлом.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Чи, наприклад, у клієнта запитують таким чином про conference call, коли команда налажала і
                        потрібно обговорити наступні кроки усно. У клієнта одразу виникне супротив типу &quot;мені треба?&quot; Це
                        вам треба, щоб ви могли пояснити фігню, яка відбулася. А ще краще — її самі й розгребли. Про що
                        тут говорити?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Клієнта варто було б запитати, а не констатувати факт.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}
                         style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle}
                           style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Do you have any time on [day] when we could sit down for [time frame] and talk through the
                            details about [fuck up]?
                        </p>
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Так, агресія може нікуди й не подінеться, але конструктиву точно буде більше.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={`${styles.footerContainer}`}>
                    <div style={{width: '20%'}}>
                        <Author data={articleData}/>
                    </div>
                    <div style={{width: '80%'}}>
                        <Slider data={articleData.relevantArticles}/>
                    </div>
                </div>
            </div>

        </div>
    );
};
