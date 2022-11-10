import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function NeedOfTheDayOff({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        {"{facepalm}"}
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/need_of_the_day_off_6.jpg"
                               width="1400" height="425"
                               alt="facepalm"
                        />
                    </div>

                    <p className={styles.articleText}>
                        Нещодавно давала нову задачку на каналі та в групах, чи ОК писати такий імейл, якщо потрібен day off?:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            I want to inform you that I want to take day off on Friday 10.08.18.
                            <br/>
                            <br/>
                            Please confirm.
                            <br/>
                            <br/>
                            Best regards,
                            [Your Name]
                        </p>
                    </div>

                    <p className={styles.articleText}>
                        Насправді, це не імейл, а просто <i>{'{facepalm}'}</i> якийсь. Так що з ним не так? Все
                    </p>

                    <p className={styles.articleText}>
                        Найперше і найголовніше - менеджера не інформують і не ставлять до відома (звісно, якщо це не
                        імейл про звільнення і то, в таки випадках є своя більш коректна процедура). І навіть, якщо ви
                        з менеджером на “ти” і п&apos;єте з ним пиво кожної п&apos;ятниці, все одно - це діловий імейл і має бути
                        певна субординація.
                    </p>

                    <p className={styles.articleText}>
                        А <i>“Please confirm.”</i> – це наказовий спосіб і в проханнях не прийнято використовувати таку форму.
                        Краще використати <i>“can you/ could you.”</i>
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Якщо потрібен day off
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/need_of_the_day_off_2.jpg"
                               width="1400" height="425"
                               alt="Якщо потрібен day off"
                        />
                    </div>

                    <p className={styles.articleText}>
                        І перш, ніж перейти до безпосередньо шаблонів, давайте розглянемо декілька must-do правил для таких імейлів:
                    </p>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        <li>
                            <p className={styles.articleText}>
                                Повідомляйте про бажання взяти day off заздалегідь. Ні, тиждень перед власне
                                бажаною датою - це не заздалегідь! Звісно, в житті трапляється багато несподіванок і може
                                статися так, що вихідний вам потрібен уже завтра. І це нормально. Але, наприклад, якщо
                                берете day off заради весілля ліпшого друга, то, давайте будемо чесними, такі речі не за
                                тиждень плануються.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                Перед тим як почати бронювати готель та квитки, переконайтеся, що на
                                проекті - не завал, що ви не залишаєте команду перед приїздом важливого клієнта, і не
                                їдете, коли вся команда овертаймить, щоб встигнути до дедлайну.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                Ви просите про day off, а не кажете, повідомляєте чи інформуєте. І у багатьох
                                випадках вам мають повне право відмовити. Ніхто навмисно не буде псувати ваші плани,
                                але про можливість відмови варто пам&apos;ятати - допомагає тримати субординацію і формулювати
                                імейли коректніше;).
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                Перед тим, як попросити day off, варто також переконатися, що інші члени
                                команди не встигли зробити це раніше. Також, знайдіть повноцінну заміну на цей день
                                і введіть її/його в курс справ, про що повідомте вашого менеджера, та при необхідності
                                і про поточний статус проекту.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                Подякуйте. Ви не зобов&apos;язані пояснювати причину, чому вам потрібен day off,
                                але подякувати, якщо прохання задовільнили/не задовільнили - потрібно.
                            </p>
                        </li>
                    </ol>

                    <p className={styles.articleText}>
                        Отже, якщо хочете зберегти хороші відносини з колегами та босом - плануйте!
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        А тепер про шаблони
                    </h2>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articlePhrase} style={{color: `#${articleData.article_color}`}}>
                        Універсального шаблону не існує.
                    </h3>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/need_of_the_day_off_5.jpg"
                               width="1400" height="425"
                               alt="А тепер про шаблони"
                        />
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Універсальний шаблон важко скласти - дуже все залежить від контексту та ваших відносин з
                        командою і менеджером. Але поділюся з вами найкращим з того, що мені доводилося отримувати чи писати.
                    </p>

                    <ul className={`${styles.articleList} ${styles.numberedList}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        <li>
                            <p className={styles.articleText}>
                                I’d much appreciate it, if you approve my day-off on 23 August, I badly need it (due to some personal reasons).
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                I’ve got travel plans for mid-August, and I’d like to take time off for that between [date] and [date]. Would that be workable?
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                I have some vacation plans for the end of August, so I would be grateful if you give me a day off on 25th.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                A personal issue&apos;s come up, and I need a day off on. Can you pls approve?
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                I still have some vacation days, and I’d like to use one of them on [date]. Is that possible? Will that work for you? Would this be a good/right time?
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                Більш формальний варіант - I am applying/requesting for a personal leave for [insert dates]. Could you, please, approve?
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                У фейсбук групі теж запропонували хороший варіант - Could you, please, provide me a day off on Friday for personal reason? The corresponding time will be worked off next Sunday. Thank you in advance.
                            </p>
                        </li>
                    </ul>

                    <h3 className={styles.articleSubSubTitle}>
                        Про статус та заміни на проекті
                    </h3>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Про статус проекту та заміну можна написати щось типу:
                    </p>

                    <ul className={`${styles.articleList} ${styles.numberedList}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        <li>
                            <p className={styles.articleText}>
                                I am a few days ahead on the new promotional video, so there is no issue about falling behind on the project.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                Both [Colleagues’ Names] will be in the office that day, so they will cover for me.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                I understand that it’s a hectic time in the office with [specific project], so should my leave be approved, I will be sure to brief [Colleagues’ Names] on the most urgent matters to ensure that things run smoothly in my absence.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                In the meantime, I’ve organised to get [Colleagues’ Names] across the most pressing matters of my [specific projects] to make sure that things run smoothly in my absence.
                            </p>
                        </li>
                    </ul>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/need_of_the_day_off_3.jpg"
                               width="1400" height="425"
                               alt="А тепер про шаблони"
                        />
                    </div>


                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Складання імейлу про day off не повинно стати стресом ні для вас, ні для вашого боса.
                        Навпаки, трохи планування та обдумування, такту та проактивності, і ви без затримок
                        відправитеся у заслужений і такий потрібний відпочинок.
                    </p>


                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={`${styles.footerContainer}`}>
                    <div style={{width: '20%'}}>
                        <Author data={articleData}/>
                    </div>
                    <div style={{width: '80%'}}>
                        <Slider data={articleData.relevantArticles} slideWidth={'45%'}/>
                    </div>
                </div>
            </div>

        </div>
    )
};
