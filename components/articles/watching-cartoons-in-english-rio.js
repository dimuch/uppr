import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from "next/image";
import Link from 'next/link';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function WatchingCartoonsInEnglishRio({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Дивимося мультики англійською
                    </h2>

                    <p className={styles.articleText}>
                        Про користь перегляду відео мовою оригіналу для розвитку слухової навички знають всі. Запитайте
                        викладача
                        на курсах чи репетитора, чи знайомих, хто вчить англійську, що подивитися мовою оригіналу, і
                        напевно
                        почуєте - серіал &quot;Друзі&quot;. Він і прикольний, і не складно, і разом зі слуханням можна вивчити
                        парочку
                        крутих (зазвичай сленгових) фраз і виділитися при нагоді.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={`${styles.articlePhrase}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        Дивитися можна не лише серіал &quot;Друзі&quot;:Р
                    </h3>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <p className={styles.articleText}>
                        Без образ для &quot;Друзів&quot;, але дивитися можна не лише фільми чи серіали, але й:
                    </p>
                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p>YouTube блогерів (читайте в наступних постах наші рекомендації);</p>
                        </li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p>TED (про найкращі TED talks теж напишемо пізніше);</p>
                        </li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p>та мультфільми.</p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        От саме про мультики ми сьогодні поговоримо. Адже є багато плюсів, щоб провести вечір за чашкою
                        какао та
                        мультиком англійською. І не бійтеся впасти &quot;в дитинство&quot; - сучасні діснеївські,
                        піксарівські та
                        ін.
                        мультики уже давно піднімають досить дорослі теми та нетривіальні проблеми. Тому, навіть
                        вимогливі
                        <i>business english learners</i>, знайдуть масу фраз, якими можна козирнути з клієнтами на
                        бізнес зустрічі.
                    </p>

                    <p className={styles.articleText}>
                        Наприклад, Зоотрополіс та Ріо чудово для цього підійдуть. І я вже мовчу про насолоду від цих
                        шедеврів анімації.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        Отже, номер 1 в моєму списку must-watch - &quot;Ріо&quot;
                    </h3>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Історія пригод Голубчика (Blue), одомашненого рідкісного ари та незалежної, свободолюбивої
                        Перлинки
                        (Jewel) розгортається серед барв та небезпек Ріо де Жанейро. І як бонус - шикарна графіка поряд
                        з
                        незабутньою візуалізацією карнавалу. Це ж Ріо, як без карнавалу?
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/watching_cartoons_in_english_rio_1.jpg"
                            width="1400"
                            height="425"
                            alt="Rio"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={`${styles.articlePhrase}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        Чудовий, яскравий, сонячний мультфільм з не менш крутими та сучасними діалогами, щоб
                        поповнити словник розмовної англійської.
                    </h3>
                </div>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Наприклад, можна внести до свого словника як conversation starter:
                    </p>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p><b>- What&apos;s up, ...?</b> (як справи?)</p>
                        </li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p><b>- Where you been hiding&apos; yourself, man?</b> (Де ти пропадав, друзяко?);</p>
                        </li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p>
                                І запамятати <b>Hold up! Rewind!</b> (Зажди! Перемотай назад (повтори ще раз)!
                            </p>
                        </li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p>
                                Чи розпрощатися <b>See you around.</b>
                            </p>
                        </li>
                    </ul>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        Let&apos;s clear the air! - Easy-breezy, my friend!
                    </h3>

                    <p className={styles.articleText}>
                        Після перегляду ви точно почне вживати <b>Just clear the air!</b> в значені вияснити все,
                        розставити крапки
                        над &quot;і&quot;, чи <b>but you get my point!</b> в значенні ти мене розумієш, а неулюблене багатьох
                        - <b>
                        you understand me</b> ;)
                    </p>

                    <p className={styles.articleText}>
                        Мультфільмі також багато лексичних цікавинок типу <b>easy-breezy</b> (простіше простого).
                        В нагоді також може стати фраза Найджела <b>I used to be quite a looker</b> - звісно використана
                        про когось
                        іншого))).
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/watching_cartoons_in_english_rio_2.jpg"
                            width="1400"
                            height="425"
                            alt="Rio phrases"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        <b>А діалог того ж Найджела з провідником мавп – просто вершина бізнес
                            переговорів))).</b>
                        <br/>
                        <b>Nigel:</b> There are two blue macaws out there, and I need your
                        multitude of eyes to help me find them.
                        <br/>
                        <b>Lead marmoset:</b> Oh, yeah? What&apos;s in it for us?
                        <br/>
                        <b>Nigel:</b> Well, that&apos;s a fair question.
                        <br/>
                        <i>[he suddenly takes the lead marmoset and flies high into the sky]</i>
                        <br/>
                        <b>Nigel:</b> Let&apos;s discuss it.
                        <br/>
                        <i>[Nigel drops him]</i>
                        <br/>
                        <b>Nigel:</b> I certainly see your point.
                        <br/>
                        <i>[to the lead marmoset as he&apos;s falling down]</i>
                        <br/>
                        <b>Nigel:</b> But what could I possibly do for you in return? Hmm?
                        <br/>
                        <b>Lead marmoset:</b> Save me! Save me!
                        <br/>
                        <b>Nigel:</b> Oh? Well, that&apos;s a thought. Yeah. But is it enough? I don&apos;t want to feel like I&apos;m
                        cheating you.
                        <br/>
                        <b>Lead marmoset:</b> Help me! Help me! Help me! We&apos;ll do it! We&apos;ll do it!
                        Save me! Please! Save meeeee!
                        <br/>
                        <i>[just before he hits the ground, he stops as Nigel catches him]</i>
                        <br/>
                        <b>Nigel:</b> All right, you&apos;ve twisted my wing. Deal. Now then, anymore questions?
                        <br/>
                        <i>[the group of monkeys remain silent]</i>
                        <br/>
                        <b>Nigel:</b> No? Good. You will spread out and you will find these macaws by the end of the
                        day, or it&apos;s flying lessons for everyone! Go!
                        <br/>
                        <i>[the group of monkeys all scream with fright and run off]</i>
                        <br/>
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={`${styles.articlePhrase}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        Не кожен вміє так домовлятися;)!!!
                    </h3>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        І на завершення про цей мульт, пропоную тим, хто уже вніс перегляд &quot;Ріо&quot; в плани на вечір
                        суботи, завантажити і виконати вправи.
                    </p>

                    <ol className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Вправа:&nbsp;
                                <a href="https://drive.google.com/file/d/0B_HdrUABlRZoV21WSnBaRWpUOFk/view"
                                   rel="noreferrer" target="_blank">
                                    Fill the gaps
                                </a>
                            </p>
                        </li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Вправа:&nbsp;
                                <a href="https://drive.google.com/file/d/0B_HdrUABlRZobXplR284a3NTVlk/view"
                                   rel="noreferrer" target="_blank">
                                    Match the quotes with characters
                                </a>
                            </p>
                        </li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Вправа:&nbsp;
                                <a href="https://drive.google.com/file/d/0B_HdrUABlRZoamRkaVBpYXZtMUE/view"
                                   rel="noreferrer" target="_blank">
                                    Write TRUE/FALSE
                                </a>
                            </p>
                        </li>
                    </ol>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А для більш &quot;лінивих чи зайнятих&quot; - послухати&nbsp;
                        <a href="https://www.youtube.com/watch?v=PZheNUuK8jg" rel="noreferrer" target="_blank">
                            пісню
                        </a>&nbsp;
                        та заповнити&nbsp;
                        <a href="https://drive.google.com/file/d/0B_HdrUABlRZoUGFOUElpeS02eXc/view" rel="noreferrer"
                           target="_blank">
                            пропуски.
                        </a>
                    </p>

                </div>
            </div>

            <div className={styles.articleOddSection}>
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
    );
};
