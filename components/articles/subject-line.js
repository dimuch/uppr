import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from "next/image";
import Link from 'next/link';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function SubjectLine({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Subject line часто недооцінюють
                    </h2>

                    <p className={styles.articleText}>
                        <i>Subject line</i> або тема - це дуже важливий елемент імейлу, хоча і часто недооцінений та
                        недовикористаний.
                    </p>

                    <p className={styles.articleText}>
                        Це - і перше враження (поряд з ім&apos;ям та email адресою відправника - це перше, що бачить
                        отримувач, пробігаючись очима по вхідних).
                    </p>

                    <p className={styles.articleText}>
                        І тригер рішення про те, чи відкривати лист і чи/що відповідати (статистично 64% імейлів
                        відкривається в залежності від актуальності теми).
                    </p>

                    <p className={styles.articleText}>
                        Але найкраще у темі імейлу - те, що це чудовий і функціональний інструмент, який може значно
                        скоротити сам імейл - <i>KISStool</i> для <i>KISSemails</i>.
                    </p>
                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Subject Line у стилі KISS
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/subject_line_1.jpg"
                            width="1400"
                            height="425"
                            alt="Subject Line у стилі KISS"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        Отже, які основні критерії <i>Subject Line</i> у стилі <i>KISS (Keep It Short&Simple)</i>?
                    </p>

                    <p className={styles.articleText}>
                        <b>1. <i>Just do it.</i></b> Перш за все, вона має бути. Уявляєте роздратування людини, якій
                        потрібно відкривати імейл без
                        теми, щоб дізнатися що там і наскільки терміново? + Такі листи часто губляться і &quot;випадково&quot;
                        видаляються.
                    </p>

                    <p className={styles.articleText}>
                        P.S. “?????!!!!!!!!!????!!!:);Р” - не вважається темою😋.
                    </p>

                    <p className={styles.articleText}>
                        <b>2. <i>SMART it.</i></b> Її можна просмартувати. Ну, майже, як ціль. <i>SMART - specific,
                        meaningful, appropriate, relevant, thoughtful (розшифровка Shirley Taylor).</i> Бо це і є по
                        суті індикатор цілі імейлу. Основне питання, на яке повинна відповідати тема - це &quot;Що в середині
                        імейлу?&quot;
                    </p>

                    <p className={styles.articleText}>
                        <b>3. <i>Keep it short and focused, and sweet.</i></b> Переходьте одразу до суті та не
                        “патякайте” зайве. У вас - не більше 50 символів (деякі джерела рекомендують 30-40).?&quot;
                    </p>

                    <p className={styles.articleText}>
                        <b>4. <i>Keyword it.</i></b> Вона має містити ключові слова (по зменшенню важливості) для того,
                        щоб у разі потреби можна було швидко знайти та відфільтрувати ваш лист.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/subject_line_2.jpg"
                            width="1400"
                            height="425"
                            alt="Subject Line у стилі KISS"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        <b>PRO TIP:</b> мій улюблений інструмент для ефективної теми імейлу - [...].
                    </p>

                    <p className={styles.articleText}>
                        В залежності від контексту, можна використати <i>[Action Required], [Reminder], [Urgent], [FYI],
                        [Follow-up], [Your Input Required].</i>
                    </p>

                    <p className={styles.articleText}>
                        Наприклад,
                        <br/>
                        <i>[Need Your Review]</i> Adjustments to program brochure або [action required] reply by Friday.
                    </p>

                    <p className={styles.articleText}>
                        І так, в темі ОК використовувати такі “заборонені” слова:)
                    </p>

                    <p className={styles.articleText}>
                        Отже, вияснили, що <i>&quot;Following up&quot;, &quot;Question&quot;, &quot;Information&quot;, &quot;Update&quot;</i> - не відповідають
                        жодному критерію з попереднього поста. Хіба що першому (добре, що є хоч такі - краще, ніж
                        ніяких😀)!
                    </p>

                    <p className={styles.articleText}>
                        Залежно від контексту, їх можна перефразувати на щось типу:
                    </p>

                    <ul className={styles.articleList}>
                        <li>
                            <p className={styles.articleText}>
                                <b>Following up</b> - [Follow-up] deadline for Phase 1 / Marketing Manager interview
                                follow-up
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText}>
                                <b>Question</b> - Question about the upcoming leadership program
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText}>
                                <b>Information</b> - Change of company picnic location
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText}>
                                <b>Update</b> - Update on company payroll procedure-2019
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Тема може бути цілим листом!
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/subject_line_7.jpg"
                            width="1400"
                            height="425"
                            alt="Тема може бути цілим листом!"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        Ще один класна “фішка” по <i>subject line</i>, яка явно недовикористана (і дарма) - це те, що
                        тема може бути цілим листом! Особливо, це корисно для тих, чиї компанії не дозволяють
                        інстант-месенджерів на роботі.
                    </p>

                    <p className={styles.articleText}>
                        Наприклад, чому б не написати в темі:
                        <br/>
                        <i>See you tomorrow at 8:00 am at Cups&Cake near the office.</i>
                    </p>

                    <p className={styles.articleText}>
                        <b>ProTIP:</b> лише не забудьте написати <i>EOM (EndOfMessage)</i> в кінці теми. Це слугує
                        чудовим індикатором, що імейл відкривати не потрібно, і увесь месидж - в темі. Економія часу та
                        вклад у <i>ROR (ReturnOnRelationship).</i>
                    </p>

                    <p className={styles.articleText}>
                        Найчастіше &quot;тема як імейл&quot; використовується для:
                    </p>

                    <ul className={styles.articleList}>
                        <li>
                            <p className={styles.articleText}>
                                <b>підтвердження</b>
                                <br/>
                                - <i>Confirmation of a meeting at 10:00 tomorrow.</i>
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText}>
                                <b>прохання/запит</b>
                                <br/>
                                - <i>May I borrow your office @ 2 pm today?</i>
                                <br/>
                                - <i>Please call me when you are free.</i>
                                <br/>
                                - <i>Employee Survey: Please take by <a href="/blog/articles/acronyms-which-you-should-use-in-emails" target="_blank" rel="noreferrer">EOD</a></i>
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText}>
                                <b>нагадування/фолоапу</b>
                                <br/>
                                - <i>[Need our approval] Contract due COB.</i>
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText}>
                                <b>запрошення</b>
                                <br/>
                                - <i>Coffee, Friday at 9?/Free to catch up over coffee next week?</i>
                            </p>
                        </li>
                    </ul>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Попрактикуємося?
                    </h2>

                    <p className={styles.articleText}>
                        Яка найкраща тема для імейлу:
                        <br/>
                        <i>Hi Julie,</i>
                        <br/>
                        <i>big thanks for your work. I carefully examined the mockup, and have several concerns. When
                            can we discuss them?</i>
                    </p>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}
                        style={{color: `#${articleData.article_color}`}}>
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                Thanks for the mockup
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                Nuances in the mockup
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                Mockup discussion
                            </p>
                        </li>
                    </ol>

                    <p className={styles.articleText}>
                        Думаю, навіть не варто пояснювати, що - остання.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Найефективніший інструмент KISS-імейлів?
                    </h2>

                    <Image
                        src="/assets/images/blog-articles/subject_line_8.jpg"
                        width="1400"
                        height="425"
                        alt="Найефективніший інструмент KISS-імейлів?"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />

                    <p className={styles.articleText}>
                        І наостанок про тему листа: чому вона належить до найефективніших інструментів KISS-імейлів?
                        Тому, що правильно написана тема може допомогти:
                    </p>
                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                уникнути/не писати/викинути зайві слова, фрази і навіть цілі речення з імейлу. І
                                відповідно писати коротше, простіше та зрозуміліше, “без води“ та бла-бла-бла;
                            </p>
                        </li>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                і вдало сформулювати &quot;складні&quot; моменти.
                            </p>
                        </li>
                    </ul>

                    <h3 className={styles.articleSubSubTitle}>
                        Як?
                    </h3>

                    <p className={styles.articleText}>
                        <b>1.</b> Ніби й знаєте, що переходити потрібно одразу до суті, але все ще почуваєтеся
                        некомфортно
                        без <i>I am writing to… /Just a quick reminder.../Just checking in…?</i> Винесіть
                        слова <i>reminder</i> чи <i>checking in</i> у тему (найкраще у квадратні дужки) і не
                        потрібно буде витрачати місце на безглузді вступи.
                    </p>
                    <p className={styles.articleText}>
                        Те саме стосується <i>Status updates, Next steps, Meeting follow-ups.</i>
                        <br/>
                        Наприклад, замість вступу <i>Here is the weekly status update on Х,</i> напишіть тему <i>Status
                        update on Х</i>, а імейл почніть з основного:
                        <br/>
                        <i>John,</i>
                        <br/>
                        <i>The phase 2 started a bit later than we planned due to...</i>
                    </p>


                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>2.</b> Пишете імейл із атачем? Замість того, щоб писати застаріле <a
                        href={'/blog/articles/please-find-attached'}  target="_blank" rel="noreferrer">Please find
                        attached</a> чи навіть дещо кращі <a href='/blog/articles/please-find-attached-2' target="_blank" rel="noreferrer">замінники</a>,
                        назвіть імейл іменем вкладення, а в тексті листа напишіть необхідну інформацію.
                    </p>

                    <p className={styles.articleText}>
                        Наприклад:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}
                         style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle}
                           style={{backgroundColor: `#${articleData.article_color}`}}>SL:Weekly progress report</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            <i>Hey [Name],</i>
                            <br/>
                            <i>Nearly doubled my efforts on crafting texts.</i>
                            <br/>
                            <i>But it is still difficult to predict if we meet the deadline.</i>
                            <br/>
                            <i>Plan to involve a freelance-copywriter next week.</i>
                            <br/>
                            <i>Let me know if you have any questions before our call tomorrow.</i>
                            <br/>
                            <br/>
                            <i>[Your Name]</i>
                        </p>
                    </div>

                    <Image
                        src="/assets/images/blog-articles/subject_line_5.jpg"
                        width="1400"
                        height="425"
                        alt="Найефективніший інструмент KISS-імейлів?"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />

                    <p className={styles.delimiter}></p>

                    <p className={`${styles.articleText}`}>
                        <b>3.</b> Боїтеся прозвучати занадто <i>pushy, bossy чи impolite</i>, коли пишете про
                        терміновість чи дедлайни? Винесіть ці “незручні” моменти в тему імейлу. <i>[Due
                        tomorrow]/[Today]/[Timely Request] – Need your approval for ...</i>
                    </p>

                    <p className={`${styles.articleText}`}>
                        <b>4.</b> Використовуйте тему як контекст. Замість того, щоб в тексті писати <i>We met at the
                        sales conference last Monday</i>, назвіть імейл <i>Followup after the sales conference last
                        Monday.</i> ️Чи якщо імейлите по чиїйсь рекомендації вкажіть це в темі - <i>Referred by Jane
                        Brown for technical writer position.</i>
                    </p>

                    <p className={`${styles.articleText}`}>
                        <b>5.</b> Замість представлення, наприклад, коли надсилаєте резюме чи цікавитеся результатами співбесіди
                        <br/>
                        <i> - Human resources assistant application — John Smith.</i>
                        <br/>
                        <i> - John Smith following up on sales position.</i>
                    </p>


                    <p className={`${styles.articleText}`}>
                        <b>6.</b> Ну, і те, що тема може бути імейлом, я уже писала!
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Ефективних та розумних вам тем в імейлах! 🤛
                    </h2>
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
