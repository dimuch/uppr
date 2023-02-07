import React from 'react';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';

import styles from './commonArticleStyles.module.scss';

export default function CaseStudyCanUCatchMeUp({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Отже, колега не встиг на ранішній stand-up meeting через затори на дорогах і пише вам:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}
                         style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle}
                           style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hey,
                            <br/>
                            What do I miss today? Stuck in a traffic jam. Can u catch me up?
                        </p>
                    </div>

                    <p className={styles.articleText}>
                        Яка ваша реакція на такий імейл?
                    </p>

                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Потрібно допомогти колезі.
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Чувак, треба раніше вставати!
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Блін, хто його вчив імейли писати?
                            </p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        Згідно опитування, більшість обирають — допомогти колезі, що звісно, дуже похвально. Тим
                        більше, кожен може опинитися в подібній ситуації. Але колезі слід було б написати більш <i>respectful
                        email</i>. Це він/вона просять про послугу, а не навпаки.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>Отже, основні баги:</b>
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>1.</b> навіть у неформальному імейлінгу писати просто &quot;hey&quot; — неввічливо. Імейл — це не <i>instant
                        message</i>. І я маю сумнів чи імейл взагалі адресовано мені, і лише побачивши імейл адресу,
                        переконуюся, що це не спам. Називати людину на і&apos;мя — взагалі обов&apos;язковий елемент для
                        встановлення нормальних, професійних відносин;
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>2.</b> і таке недбале звернення показує, що інформація взагалі-то не особливо потрібна, а
                        так, аби було, може, коли згодиться;
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>3.</b> в такому формулюванні проблема автора (затори на дорозі та спізнення на зустріч)
                        раптом стає проблемою адресата, адже йому/їй потрібно тепер щось робити з цим;
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>4.</b> звісно, на імейл варто відповісти, але по-перше, відповідь буде без особливого
                        бажання, по-друге, колега уже залишив після себе досить погане враження;
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>5.</b> ще важливий момент — одним реченням не опишеш, що було на мітингу. Хіба що можна
                        написати: <i>&quot;Nothing special, just a regular meeting. Check meeting minutes&quot;.</i> А детальний
                        опис займе з півгодини часу. Чужого часу! Ніхто цим не буде морочитися. А колезі напишуть
                        підійти в обідню перерву чи зателефонувати?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <i>Sure, come up to me during the lunch break.</i>
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        ОК, як тоді написати подібний імейл, але щоб звучати професійно та отримати потрібну інформацію?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Так от, якщо забрати усі баги і проявити хоч мінімальну турботу про читача, то має вийте щось
                        таке:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}
                         style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle}
                           style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hey [Name]
                            <br/>
                            <br/>
                            Unfortunately, I&quot;ve missed a meeting today because of a traffic jam. I&quot;ve come through
                            meeting minutes, but the action items on a new CRM module are not that clear for me. Can I
                            please meet with you to go over some questions I have?
                            <br/>
                            <br/>
                            Thank you,
                            <br/>
                            Jennifer
                        </p>
                    </div>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Розумієте, чому такий варіант набагато кращий? Перш за все, тому що ви не перекидаєте свою
                        проблему на когось, а показуєте, що намагалася вирішити її самостійно. Також, виказуєте повагу
                        до часу колеги, не просите повного апдейту, а лише роз&quot;яcнення одиного з пунктів, які були на
                        мітингу.
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
