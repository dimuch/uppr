import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from "next/image";
import Link from 'next/link';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function PleaseFindAttached2({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Альтернативи
                    </h2>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                <a href="#file-without-explanation">Файл без пояснення.</a>
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                <a href="#here-is">&quot;Here is ...&quot;</a>
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                <a href="#this-x-verb">&quot;This [Х] + verb ...&quot;</a>
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                <a href="#i-am-sharing-x-with-you">&quot;I&apos;m sharing [X] with you.&quot;</a>
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                <a href="#let-me-know">&quot;Let me know if you have any questions about the attached ….&quot;</a>
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                <a href="#doc-promised-you">Here’s that document I promised you.</a>
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                <a href="#empty-email">Порожній імейл</a>
                            </p>
                        </li>
                    </ol>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Чим коротше, тим краще
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/please_find_attached_2_1.jpg"
                            width="1400"
                            height="425"
                            alt="Якщо потрібен day off"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <h3 className={styles.articleSubSubTitle} id="file-without-explanation">
                        # 1. Просто прикріпіть файл без пояснення
                    </h3>

                    <p className={styles.articleText}>
                        UX більшості поштових клієнтів передбачає, що ви з легкістю, без зайвих слів помітите вкладення.
                        А ще, якщо
                        &quot;натякнуть&quot; про нього в темі листа, то міскомунікація взагалі не можлива.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Weekly progress report.</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hey [Name],
                            <br/>
                            <br/>
                            Nearly doubled my efforts on crafting texts.
                            <br/>
                            But it is still difficult to predict if we meet the deadline.
                            <br/>
                            Plan to involve a freelance-copywriter next week.
                            <br/>
                            <br/>
                            Let me know if you have any questions before our call tomorrow.
                            <br/><br/>
                            [Your Name]
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle} id="here-is">
                        # 2. &quot;Here is&quot;
                    </h3>

                    <p className={styles.articleText}>
                        Мій улюблений варіант - &quot;Here’s [Х]&quot;. Коротко, чітко, мило і по-суті.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Updated vacation policy.</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hi [Name],
                            <br/>
                            <br/>
                            Thanks for your help. Here’s a final version of the vacation policy
                            update.
                            <br/>
                            Looking forward to discussing it with you.
                            <br/>
                            <br/>
                            [Your Name]
                        </p>
                    </div>

                    <p className={styles.articleText}>
                        або просто
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Updated vacation policy.</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hi [Name],
                            <br/>
                            <br/>
                            Here’s that document I promised.
                            <br/>
                            If you have any questions, please let me know.
                            <br/>
                            <br/>
                            [Your Name]
                        </p>
                    </div>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/please_find_attached_2_2.jpg"
                            width="1400"
                            height="425"
                            alt="Якщо потрібен day off"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <h3 className={styles.articleSubSubTitle} id="ihave-attached">
                        # 3: &quot;I’ve attached&quot;
                    </h3>

                    <p className={styles.articleText}>
                        Ще одна персоналізована альтернатива для тих, хто не уявляє імейл з вкладенням без слова
                        attached.
                    </p>

                    <p className={styles.articleText}>
                        Наприклад:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Re: More product details needed.</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hi [Name],
                            <br/>
                            <br/>
                            I’ve attached our marketing deck describing our product and
                            clients.
                            <br/>
                            Also, you can visit our site www.xxxxxxxxx.com
                            <br/>
                            <br/>
                            Thanks
                            <br/>
                            [Name]
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle} id="this-x-verb">
                        # 4: &quot;This [X] + verb …&quot;
                    </h3>

                    <p className={styles.articleText}>
                        Про вкладення також можна сповістити наступним чином: &quot;This case study includes …&quot; чи &quot;This
                        presentation explains …&quot;
                    </p>

                    <p className={styles.articleText}>
                        Наприклад:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>ABC + DEF Proposal.</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            [Name],
                            <br/>
                            <br/>
                            Thanks for sharing with me ABC&apos;s goals and challenges for the upcoming year.
                            <br/>
                            The proposal includes prices and lists services with consideration of all discussed
                            yesterday.
                            <br/>
                            Looking forward to your decision.
                            <br/>
                            <br/>
                            Best,
                            <br/>
                            [Name]
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle} id="i-am-sharing-x-with-you">
                        # 5: &quot;I’m sharing [X] with you.&quot;
                    </h3>

                    <p className={styles.articleText}>
                        Ще один чудовий варіант, який тонко демонструє вашу націленість на співпрацю та побудову
                        партнерських відносин.
                    </p>

                    <p className={styles.articleText}>
                        Наприклад:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Job description samples.</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            [Name],
                            <br/>
                            <br/>
                            I found these job description samples. I’m sharing a PDF with you, maybe it
                            would be useful for your team.
                            <br/>
                            <br/>
                            Let me know if you have any follow up questions.
                            <br/>
                            <br/>
                            Best,
                            <br/>
                            [Name]
                        </p>
                    </div>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/please_find_attached_2_3.jpg"
                            width="1400"
                            height="425"
                            alt="Якщо потрібен day off"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <h3 className={styles.articleSubSubTitle} id="let-me-know">
                        # 6: &quot;You&apos;ll find the attachment below.&quot;
                    </h3>

                    <p className={styles.articleText}>
                        Якщо жоден з попередніх не підходить і є занепокоєння, що ваше вкладення не помітять, особливо у
                        випадку довгого
                        імейлу, напишіть <i>&quot;You&apos;ll find the attachment below.&quot;</i>.
                    </p>

                    <p className={styles.articleText}>
                        Наприклад:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Cooperation process_final approve.</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            [Name],
                            <br/>
                            <br/>
                            Hope you’re having a productive day.
                            <br/>
                            I put the cooperation process we agreed on in the form of a presentation
                            <br/>
                            You&apos;ll find it below.
                            <br/>
                            Please, approve.
                            <br/>
                            <br/>
                            Best,
                            <br/>
                            [Name]
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle} id="doc-promised-you">
                        # 7: &quot;Let me know if you have questions about the attached …&quot;
                    </h3>

                    <p className={styles.articleText}>
                        Ще один варіант, який об&apos;єднує call to action та інформація про атач.
                    </p>

                    <p className={styles.articleText}>
                        Наприклад:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Sales figures for Q3 2018.</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hi [Name],
                            <br/>
                            <br/>
                            Hope your vacation went well and you got in plenty of sea time.
                            <br/>
                            Please let me know if you have any questions about the attached sales figures.
                            <br/>
                            <br/>
                            Best,
                            <br/>
                            [Name]
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle} id="empty-email">
                        # 8: Порожній імейл
                    </h3>

                    <p className={styles.articleText}>
                        Так, Ви правильно прочитали. Якщо ціль вашого імейлу просто надіслати вкладення – надішліть без зайвих пояснень.
                        І це не є неввічливість у певних випадках.
                    </p>
                    <p className={styles.articleText}>
                        Наприклад, ситуація: ви надсилаєте колезі вкладення у .docx форматі. Але він у відрядженні і зі смартфону
                        зручніше читати .pdf, тому просить вас надіслати переформатований файл. Абсолютно нормально просто переслати,
                        дублювати текст попереднього листа немає сенсу, а писати щось типу <i>&quot;Hope this will be more comfortable for you&quot;</i> –
                        може прозвучати саркастично.
                    </p>

                    <p className={styles.articleText}>
                        Отже, як бачите світ клином не зійшовся на &quot;please find attached&quot;, альтернативи є. Обирайте свою!
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Читайте цю статтю англійською на&nbsp;
                        <a target="_blank" rel="noreferrer"
                           href="https://medium.com/@ivanka.tabachuk/the-world-is-larger-than-please-find-attached-5fa704e47262?postPublishedType=repub"
                        >
                            Medium.com
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
