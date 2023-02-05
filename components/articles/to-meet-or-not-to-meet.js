import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function ToMeetOrNotToMeet({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Або навіть сам факт, що до зустрічі потрібно готуватися, а потім ще й &quot;переключатися&quot; на роботу,
                        свідчить про те, що далеко не всі зустрічі є необхідними.
                    </p>

                    <h2 className={styles.subTitle}>
                        Якщо можна написати імейл — напишіть його!
                    </h2>

                    <p className={styles.articleText}>
                        Звісно, <i>face-to face</i> зустрічі — важливі, але коли можна написати імейл і заощадити (і
                        час, і гроші) — напишіть його.
                    </p>

                    <div className={styles.frameWithExampleAndTitle} style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle} style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hello Team,
                            <br/>
                            This week&apos;s [project] catch-up meeting is being cancelled since everything is on track and
                            everybody is aligned on the next steps.
                            <br/>
                            <br/>
                            I&apos;ve included key updates below, and we&apos;ll be meeting in person as usually next Tuesday.
                            <br/>
                            <br/>
                            So, to-dos for this week:
                            <br/>
                            &nbsp;&nbsp;* Reach out a client for feedback on the design — Maria
                            <br/>
                            &nbsp;&nbsp;* Send final marketing plan for approval — Andrew
                            <br/>
                            <br/>
                            Updates from this week:
                            <br/>
                            &nbsp;&nbsp;* Client shortlist finalized
                            <br/>
                            &nbsp;&nbsp;* Budget request sent to finance team
                            <br/>
                            &nbsp;&nbsp;* Launch date confirmed (Nov 30!)
                            <br/>
                            <br/>
                            Thanks.
                        </p>
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b><i>Pro TIPS</i></b>
                    </p>

                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Напишіть action items на початку імейлу, оскільки вони важливіші, ніж апдейти.
                            </p>
                        </li>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Імена відповідальних варто зробити bold, щоб точно звернули увагу.
                            </p>
                        </li>
                    </ul>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Ще одна досить типова ситуація з мітингами, коли о 13:00 колега запитує чи ви можете взяти
                        участь у зустрічі о 14:30.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Чудово, чи не так?
                    </p>
                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Відмовляйте екологічно
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Мало того, що день уже давно розписаний пріоритетними завданнями і дедлайни &quot;піджимають&quot;, так ще
                        й підготуватися потрібно, уже не кажучи про таку прикрість, як обід.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Плюс тім-плеєром залишитися теж хочеться, тим паче, що 360 degrees appraisal та salary review на
                        носі, але до кінця року купа дедлайнів.
                    </p>

                    <p className={styles.articleText}>
                        Одним словом мозок починає прискорено шукати шляхи виходу з халепи.
                    </p>

                    <p className={styles.articleText}>
                        Тому, якщо ви, звісно, не деклайните кожен мітинг і ні на що не підписувалися заздалегідь, у вас
                        є повне право відмовити.
                    </p>

                    <p className={styles.articleText}>
                        А зробити це максимально &quot;екологічно&quot; можна наступним чином:
                    </p>

                    <div className={styles.frameWithExampleAndTitle} style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle} style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hi [Name]
                            <br/>
                            Sorry, I can&apos;t attend today&apos;s meeting.
                            <br/>
                            Is there any [data/reports/insights] I can send you to help lead the conversation?
                            <br/>
                            <br/>
                            If any decisions need my input, I&apos;ll reply ASAP on [Telegram/Slack/messenger].
                            <br/>
                            <br/>
                            Or could we, possibly, get this conversation started on email—happy to lead it if needed?
                            <br/>
                            <br/>
                            Sorry again,
                            <br/>
                            <br/>
                            [Your Name]
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Ок, а якщо потрібно написати імейл-відмову від зустрічі САМОМУ Клієнту?
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Так, і таке може трапитися, тому &quot;тушуватися&quot; не потрібно. А необхідно подумати, як ефективно
                        променеджити відносини.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Звісно, всі вже проактивні імейлери й знають, що просто так щось забрати, не давши нічого
                        натомість неможливо. Особливо, якщо ми хочемо, щоб клієнт ще довго приносив гроші компанії і нам.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Що в такій ситуації можна запропонувати?
                    </p>
                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>Turn the meeting into a call</i>
                            </p>
                        </li>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>Turn the meeting into an email</i>
                            </p>
                        </li>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>Reschedule the meeting</i>
                            </p>
                        </li>
                    </ul>

                    <h3 className={styles.articleSubSubTitle}>
                        Turning the meeting into a call
                    </h3>

                    <div className={styles.frameWithExampleAndTitle} style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle} style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hi [Client&apos;s Name],
                            <br />
                            <br/>
                            Thanks for getting back to me with [issue]. I&apos;m on a business trip this week and cannot devote
                            enough time the discussion of the [issues] deserves.
                            <br/>
                            Would it be more efficient as we make this meeting a (phone) call?
                            <br/>
                            <br/>
                            Here&apos;s what I planned to talk through with you:
                            <br/>
                            &nbsp;&nbsp;- [Item 1]
                            <br/>
                            &nbsp;&nbsp;- [Item 2]
                            <br/>
                            &nbsp;&nbsp;- [Item 3]
                            <br/>
                            <br/>
                            Are you Ok with this agenda? Happy to allocate more time to some issues if you&apos;d prefer.
                            <br/>
                            Is there a day and time that works best for you this week? And, what&apos;s the best way to reach you out?
                            <br/>
                            If you&apos;d still prefer to meet in person, I would be happy to talk any time since [date].
                            <br/>
                            <br/>
                            Thanks.
                            <br/>
                            [Your Name]
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        Turning the meeting into an email
                    </h3>

                    <div className={styles.frameWithExampleAndTitle} style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle} style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hi [Client&apos;s Name],
                            <br/>
                            <br/>
                            Thanks for bringing this up.
                            <br/>
                            <br/>
                            I&apos;m in the US this week and due to time difference can discuss [issues] neither in person nor by phone.
                            <br/>
                            However, I&apos;m ready to start the dialogue now via email if that works for you?
                            <br/>
                            Here&apos;s what we can start off with:
                            <br/>
                            &nbsp;&nbsp;- [Item 1]
                            <br/>
                            &nbsp;&nbsp;- [Item 2]
                            <br/>
                            &nbsp;&nbsp;- [Item 3]
                            <br/>
                            <br/>
                            Are you Ok with this?
                            <br/>
                            <br/>
                            If you&apos;d prefer to discuss in person, I&apos;m available on [date] and would be happy to talk more about it then.
                            <br/>
                            <br/>
                            Thanks.
                            <br/>
                            [Your Name]
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        Rescheduling the meeting
                    </h3>

                    <div className={styles.frameWithExampleAndTitle} style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle} style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hello [Client&apos;s Name],
                            <br/>
                            <br/>
                            Thanks for bringing this up.
                            <br/>
                            <br/>
                            I&apos;m looking forward to discussing [agenda] with you, but, unfortunately, I cannot make it on Monday,
                            17th as I will go on a business trip, which already cannot be postponed.
                            <br/>
                            Would you be Ok to have a talk on Wednesday, 19th instead?
                            <br/>
                            <br/>
                            Thank for your consideration.
                            <br/>
                            Kind regards,
                            <br/>
                            [Your Name]
                            <br/>
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Доводилося хоч раз відмовляти клієнту у зустрічі?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <i>Have productive meetings and effective emails!</i>
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
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
