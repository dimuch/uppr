import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function KissEmails({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Keep It Short and Simple!
                    </h2>

                    <p className={styles.articleText}>
                        Ви знаєте, що таке <i>KISS</i>? Крім прямого значення, звісно?
                    </p>

                    <p className={styles.articleText}>
                        <i>Keep It Short and Simple!</i> Квінтесенція якісного та ефективного ділового імейлінгу. Саме
                        якісного, бо коли скоротити кількість до мінімуму, то якраз і залишиться якість.
                    </p>
                    <p className={styles.articleText}>
                        Але справа ця не з легких. Хоча і можлива. І основне з чого варто почати — це дотримуватися двох
                        логічних складових <i>KISS</i>, а саме: стислості та простоти. І ключове тут, щоб обидві
                        складові <i>KISS emails</i> були присутні, вони рівнозначно важливі.
                    </p>

                    <p className={styles.articleText}>
                        У вас будуть виходити примітивні тексти, якщо будете намагатися писати тільки коротко. А якщо
                        візьмете тільки принцип простоти за основу, то стисло навряд чи вийде. Обидва принципи
                        повинні <i>work in concert</i>.
                    </p>
                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Писати коротко
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Якось <i>Blaise Pascal</i> писав другу,
                        <br/>
                        <i>&quot;Sorry, friend, for writing such a long letter, I didn&apos;t have time to write a short one.&quot;</i>
                    </p>

                    <p className={styles.articleText}>
                        Так, як не парадоксально, але набагато важче і довше писати коротко. Довго і складно — це
                        запросто. Сідаєш за ноут, створюєш новий лист і вихлюпуєш хаос зі своїх думок. А от коли кожна
                        буква на рахунку, то кожне слово зважуєш, перефразовуєш сотні разів, змінюєш форму, замінюєш на
                        синонім тощо.
                    </p>

                    <p className={styles.articleText}>
                        Тому не обдумувати слова, а матеріалізувати свій потік свідомості у символи на екрані набагато
                        легше, ніж зробити так, щоб кожне слово було змістовним, кожна фраза несла певну цінність
                        читачеві. І тому далеко не кожен це робить.
                    </p>

                    <p className={styles.articleText}>
                        Підрахували, що в середньому на прочитання імейлу витрачається 15-20 секунд. Тобто все, що не
                        вписується в цей час прочитання, вважайте пройде повз читача. Тому ваше завдання сформулювати
                        думку так, щоб вкластися в цей проміжок. І не кажіть, що це неможливо. Твіттер довів, що
                        практично будь-яку ідею можна передати за допомогою 140 символів.
                    </p>

                    <p className={styles.articleText}>
                        Я зовсім не закликаю рахувати символи, це як калорії, скоріше всього толку буде мало, а стресу —
                        багато. Просто дотримуйтеся емпіричного правила — <i>make your emails easier to respond to than
                        coming back to them later</i>.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Писати просто
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        З написанням просто — інша проблема. Усі вирішили, що коли просто, то це:
                    </p>

                    <ul className={`${styles.articleList}`}>
                        <li>
                            <p className={styles.articleText}>
                                <i style={{color: `#${articleData.article_color}`}}>1. примітивно або</i>
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText}>
                                <i style={{color: `#${articleData.article_color}`}}>2. непрофесійно або</i>
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText}>
                                <i style={{color: `#${articleData.article_color}`}}>3. неввічливо/претензійно або</i>
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText}>
                                <i style={{color: `#${articleData.article_color}`}}>4. неінформативно</i>
                            </p>
                        </li>
                    </ul>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Зовсім ні. Все залежить від того, як ви сформулюєте та підберете слова.
                        <br/>
                        <b>1. Просто — не означає примітивно.</b> Це імейл, а не художній твір. Вам не потрібно вражати
                        вашого університетського викладача оригінальністю композиції чи знанням художніх засобів. Тому
                        ваші навіть відмінні знання лексики англійської мови — не найкращий спосіб вразити
                        бізнеспартнера. Коли я закликаю писати просто, я не маю на увазі на рівні 5-річної дитини.
                        Навпаки, якщо ви спробуєте писати так, щоб кожне слово мало значення та вагу і працювало на вас,
                        то просто не вийде писати примітивно. Ви автоматично буде підбирати слова, які передадуть суть
                        вашої думки/потреба, а не пояснюватиме її з усіх боків загальновживаними кліше
                    </p>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        От порівняйте:
                        <br/>
                        <i>She pitched her idea to me over the business lunch.</i> (10 слів)
                        <br/>
                        <i>She tried to persuade me to choose her idea to invest over the business lunch.</i> (14 слів)
                    </p>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Або
                        <br/>
                        <i>Please, examine the document.</i> (4 слова)
                        <br/>
                        <i>Please, look through the document carefully.</i> (6 слів)
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Так, можливо, в масштабах речення різниця за кількістю слів не значуща. Але в масштабах ділового
                        імейла ви її відчуєте: і коли будете писати, і коли будете читати. А з точки зору підбору слів —
                        то взагалі небо і земля.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articlePhrase} style={{color: `#${articleData.article_color}`}}>
                        Професійний імейл — це імейл, який досить відповісти &quot;так&quot; або &quot;ні&quot;!
                    </h3>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>2. Просто — не означає непрофесійно.</b> Чомусь деякі люди вважають, якщо вони не навернуть
                        тривимірних граматичних конструкцій та не використають ось це &quot;фейспалмне&quot; <i>herewith</i> і
                        <i>before mentioned</i>, а замість звичного <i>start</i> не будуть писати <i>commence</i>,
                        то їх репутація фахівця з англійською рівня <i>proficient</i> постраждає. Знаєте, що набагато
                        більше покаже ваш професіоналізм? Імейл, написаний так, щоб на нього потрібно було максимум
                        відповісти &quot;так&quot; або &quot;ні&quot; — повага до часу та зусиль інших. Пам&apos;ятайте, найкраще закінчення
                        імейлу не <i>&quot;Looking forward to your reply&quot;</i>, а <i>&quot;No action needed./No response
                        required&quot;</i>.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Попередні приклади також чудово демонструють, що саме за допомогою вірного підбору слів і можна
                        продемонструвати рівень та професіоналізм.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>3. Просто — не означає неввічливо</b>. Бізнесова комунікація змінилася. З колегами,
                        партнерами та стейкхолдерами ми спілкуємося в дружньому та привітному стилі. Іі почуваємося
                        відносно вільно та розслаблено. Принаймні намагаємося. А імейли залишилися, ніби родом з XIX
                        століття. Якщо бізнес став набагато більш персоналізованим, а усна комунікація —- менш
                        формальною з усіма похідними наслідками, то чому б це не застосувати до імейлів? Чому б не
                        замінити формалізми та шаблонні звороти на щось більш персоналізоване та щире? Так, тут уже
                        простим копіпейстом не обійдешся. Потрібно напружитися, подумати, підібрати &quot;правильні&quot; слова, а
                        це важко і вимагає часу, але варте того. Я завжди наголошую, що ввічливі слова — це ще не
                        ввічливість. Наприклад, ситуація про <a href="/blog/articles/thanks-in-advance" target="_blank"
                                                                rel="noreferrer"><i>thanks in advance</i></a>, яку ми
                        розглядали. Увесь підхід має бути ввічливим.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>4. Просто — не означає неінформативно</b>. Щоб було інформативно, потрібно з усією
                        серйозністю та відповідальністю поставитися знову ж таки до підбору слів. Кожне слово повинно
                        працювати на вас, тому повикидайте усі слова, які не несуть змістового навантаження. Кожного
                        разу запитуйте себе, чи потрібно це слово тут? Чи зміниться сенс та звучання речення, якщо я
                        приберу це слово? Якщо ні, то сміливо викиадайте — <i>less is new more</i>.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articlePhrase} style={{color: `#${articleData.article_color}`}}>
                        Коротких та простих імейлів вам!
                    </h3>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Читайте цю статтю англійською на <a target="_blank"
                                                            href="https://medium.com/@ivannatabachuk/kiss-emails-39a91ff0e430"
                                                            rel="noreferrer">Medium.com</a>
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
