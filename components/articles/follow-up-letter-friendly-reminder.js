import React from 'react';
import Image from "next/image";

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function FollowUpLetterFriendlyReminder({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Як це зробити правильно, щоб отримувач виконав завдання, про яке ми
                        нагадуємо? Коли варто
                        надсилати лист-нагадування?
                    </h2>

                    <p className={styles.articleText}>
                        Думаю, перше питання, на яке слід відповісти, скільки зачекати: день, тиждень, ще довше?
                        Відповідь частково
                        залежить від ваших попередніх домовленостей з іншою стороною.
                    </p>

                    <p className={styles.articleText}>
                        Якщо є конкретна дата, про яку ви домовлялися, то надсилати &quot;м&apos;який&quot; лист - нагадування варто
                        уже на
                        наступний день після прострочення домовленого терміну.
                    </p>

                    <p className={styles.articleText}>
                        Чекати не варто, бо у багатьох випадках чекання тільки погіршує ситуацію і зменшує шанси взагалі
                        коли-небудь отримати відповідь.
                    </p>

                    <p className={styles.articleText}>
                        Якщо стосовно відповіді, на яку ви очікуєте, не було попередніх домовленостей, то в такому
                        випадку варто
                        зачекати декілька днів або тиждень, особливо, коли ви просите про послугу. Наприклад, у випадку
                        job application.
                    </p>
                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Давайте розглянемо конкретний приклад:<b>нагадування про пропущений дедлайн</b>.
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>Тема</b> такого <b>листа</b> (якщо вам хочеться пропустити тему - не робіть цього). Про
                        важливість та
                        правильний вибір теми листа можна більше послухати на нашому&nbsp;
                        <a href="https://www.youtube.com/watch?v=robO4iCpH8A&amp;t=2s"
                           target="_blank" rel="noreferrer"
                        >
                            YouTube каналі
                        </a>.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/follow_up_letter_friendly_reminder_2.jpg"
                            width="1400"
                            height="425"
                            alt="Невже з цим не можна нічого зробити?"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        <b>Перше речення</b>. Оскільки ми говорили, що це має бути дружнє нагадування, то і тон повинен
                        бути відповідним,
                        незважаючи на те, як ви почуваєтеся в даній ситуації. Навіть у листах-нагадуваннях ми думаємо
                        про читача!
                    </p>

                    <p className={styles.articleText}>
                        <b>Основне повідомлення</b>. Тут вам знадобиться вся ваша ввічливість та наполегливість. Чітко
                        поясніть, що саме
                        було затримано (дата, робота, завдання, оплата), і коли воно повинне бути виконане.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articlePhrase} style={{color: `#${articleData.article_color}`}}>
                        Для того, щоб привернути увагу до листа, в темі можна написати - <b>Response required</b>, а
                        потім,
                        наприклад, назву проекту
                        стосовно якого буде іти мова.
                    </h3>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        <b>Заклик до дії</b>. Напишіть конкретно, що повинно бути зроблено.
                        У деяких випадках, можна попросити про повернення коштів, наприклад, при затримці доставки.
                        Також хороша ідея запропонувати допомогу, наприклад, відповісти на запитання чи надати додаткові
                        деталі по
                        завданню.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад:</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hi Julie
                            <br/>
                            <br/>
                            Your design ideas for new features are very interesting. Thanks for your work, however, you
                            are behind on
                            Phase 1 and it prevents us from moving on to the next project phase.
                            <br/>
                            <br/>
                            Please, let me know the revised completion date for Phase 1 by the end of the day and if you
                            are having
                            trouble with this phase, I would be happy to help answer any questions you may have. You can
                            reach me at: 00000000
                        </p>
                    </div>

                    <p className={styles.articleText}>
                        І закінчити можна фразою: <b>Thanks for your prompt attention to this matter.</b>
                    </p>

                    <p className={styles.articleText}>
                        Оскільки вона звучить позитивно та припускає, що адресат виконає завдання.
                    </p>

                    <p className={`${styles.articleText}`}>
                        Не пишіть: <b>Look forward to your reply asap.</b>
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Ті, хто відвідував мій тренінг чи слухав курс знають про
                        всю марність&nbsp;
                        <a href="https://www.youtube.com/watch?v=p5yTg0yJMGw"
                           target="_blank" rel="noreferrer"
                        >
                            ASAP
                        </a>.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Краще зателефонуйте.
                    </h2>

                    <p className={styles.articleText}>
                        Лист-нагадування - це досить ефективний інструмент, проте, інколи, варто зателефонувати.
                        Особливо, коли ви уже надсилали лист-нагадування, а на нього не зреагували.
                        Також, якщо є сенс обговорити додаткові деталі чи передомовитися про дати виконання, то дзвінок
                        буде
                        менш часо-затратним.
                    </p>

                    <Image
                        src="/assets/images/blog-articles/follow_up_letter_friendly_reminder_3.jpg"
                        width="1400"
                        height="425"
                        alt="Невже з цим не можна нічого зробити?"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Тому, давайте жити дружно і поважати час один одного!
                    </h2>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <ArticleFooter articleData={articleData}/>
            </div>

        </div>
    );
};
