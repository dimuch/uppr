import React from 'react';
import Image from "next/image";

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';


export default function HopeYouAreWell({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        <i>I hope this email finds you well.</i>
                        <br/>
                        <i> Hi there! I hope you’re doing well.</i>
                        <br/>
                        <i> I hope you’re having a great week.</i>
                        <br/>
                        <i> I hope all is well.</i>
                        <br/>
                        <i> Hope you are well.</i>
                        <br/>
                        <i> I hope things are well with you.</i>
                    </p>

                    <p className={styles.articleText}>
                        читається на початку чи не кожного імейлу.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/hope_you_are_well_1.jpg"
                            width="1400"
                            height="425"
                            alt="hope you are well"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        {'{facepalm}'}
                    </h2>

                    <p className={styles.articleText}>
                        Хоча цю фразу безжалісно критикують та тролять, багато імейлерів продовжують надавати їй
                        перевагу, як найліпшому <b><i>opener</i></b>.
                    </p>

                    <p className={styles.articleText}>
                        <b><i> “Why shouldn’t I be well? Have you heard that I’m not? Do I have a reputation for
                            instability? If I’ve got a cold, is this going to mess with whatever it is you’re pestering
                            me about? It’s always people who don’t know me who want me to be well.”</i></b> - наполягає
                        автор <a href="https://www.themuse.com/"/><i>The Muse.</i>
                    </p>

                    <p className={styles.articleText}>
                        <b><i>Judith Kallos,</i></b> автор <a
                        href="https://www.amazon.com/Email-Etiquette-Made-Judith-Kallos/dp/1430313811"/><i>&quot;Email
                        Etiquette Made Easy&quot;</i> ділиться своєю думкою <b><i>“I get what you are saying: that it is too
                        common and then, in my opinion, not always sincere. Your opening greeting would be contingent on
                        how well you know the person, right?”</i></b>
                    </p>

                    <p className={styles.articleText}>
                        <b><i> Catharine Hamm,</i></b> редактор <b><i>&quot;Los Angeles Times&quot;</i></b>, теж дратується, коли
                        їй пишуть <b><i>“I hope you are well” - emails. “It is by God’s grace that I am well, but what
                        if I weren’t? To these people I say this: Building a relationship means helping me do my job,
                        not asking me
                        how I am. It means understanding my market, not trying to understand my psyche. It means
                        identifying and
                        addressing my journalistic needs, not helping me find my personal center.”</i></b>
                    </p>

                    <p className={styles.articleText}>
                        Я особисто відношу фрази типу <b><i>“Hope this email finds you well”</i></b> до фраз-невидимок
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <h2 className={styles.subTitle}>
                        Фраза-невидимка.
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/hope_you_are_well_2.jpg"
                            width="1400"
                            height="425"
                            alt="hope you are well"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        Взагалі досить зрозуміло, чому цю фразу та їй подібні так часто використовують - зі страху
                        здатися
                        грубим та неввічливим невігласом. І справді, інколи при бракові інформації про людину вона стає
                        в пригоді.
                    </p>

                    <p className={styles.articleText}>
                        Але в інших випадках (в більшості випадків) фраза <b><i>“Hope this email finds you
                        well”</i></b> - просто неефективна. Вона занадто стандартна, тому, з перших букв здогадавшись,
                        що написано, її не дочитають, проігнорять.
                    </p>

                    <p className={styles.articleText}>
                        Тобто по суті вона - <b><i>senseless</i></b> і функцію свою не виконує. Ось що таке
                        фраза-невидимка, як
                        <b><i>I look forward to</i></b>, як <b><i>I have a great week/day.</i></b>
                    </p>

                    <p className={styles.articleText}>
                        Як починати імейли без цього звичного <b><i>opener</i></b>?
                    </p>

                    <p className={styles.articleText}>
                        Чим замінити <b><i>&quot;Hope this email finds you well&quot;?</i></b>
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <h3 className={styles.articleSubSubTitle}>
                        #1. Взагалі нічим.
                    </h3>

                    <p className={styles.articleText}>
                        Так, я серйозно, просто переходьте одразу до справи. Усі зайняті, так чому б не використовувати
                        час ефективніше?
                    </p>

                    <p className={styles.articleText}>
                        Подумайте: ви не витрачаєте часу, щоб це написати <b><i>&quot;Hope this email finds you well&quot;</i></b>,
                        а хтось — щоб це читати!
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <h3 className={styles.articleSubSubTitle}>
                        #2. Щось щире та персональне.
                    </h3>

                    <p className={styles.articleText}>
                        Чим більше ви знайомі з читачем, тим краще це працює. А якщо незнайомі, буде нагода
                        познайомитися ближче.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/hope_you_are_well_3.jpg"
                            width="1400"
                            height="425"
                            alt="Щось щире та персональне"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        Щирість залежить від вашого ставлення та інтересу до людини. А персональне? Соцмережі вам у
                        поміч.
                    </p>

                    <p className={styles.articleText}>
                        Хочете результату - виконайте домашку. Зайдіть в соцмережі та подивіться, чим людина займається,
                        цікавиться, пише або читає. І напишіть речення чи два, показавши персональне відношення і його
                        важливість для вас, обізнаність з роботою та інтересами адресата.
                    </p>

                    <p className={styles.articleText}>
                        Побачили, що клієнт встановив новий персональний рекорд з бігу? Запитайте:<b><i>&quot;How did you
                        feel after your Sunday 10K?&quot;</i></b>
                    </p>

                    <p className={styles.articleText}>
                        Чи що він/вона займається садівництвом? - <b><i>&quot;Hope you made most of the gardening weather
                        this weekend.&quot;</i></b>
                    </p>

                    <p className={styles.articleText}>
                        Колега у відрядженні: <b><i>&quot;I hope you’re keeping warm during this frost in New York.&quot;</i></b>
                    </p>

                    <p className={styles.articleText}>
                        Якщо не знайшли &quot;зачіпки&quot; (головне не писати якусь маячню, все має бути щиро, пам&apos;ятаєте),
                        нічого страшного, наступного разу пощастить, а поки дивіться пункт 1.
                    </p>

                    <p className={styles.articleText}>
                        І я зовсім не маю на увазі включати режим нишпорки і стежити. Але мати клієнтів та колег
                        &quot;в друзях&quot; - хороша ідея і може стати у пригоді для побудови ділових стосунків та зробити внесок
                        у <b><i>ROR</i></b>
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <h3 className={styles.articleSubSubTitle}>
                        #3. &quot;I know you’re overloaded/overwhelmed/swamped, so I’ll be brief.&quot;
                    </h3>

                    <p className={styles.articleText}>
                        Мені подобається цей <b><i>opener</i></b>, і я часто використовую його з колегами, якщо не
                        виходить відразу перейти до пункту 1. І полюбляю, коли мені таке пишуть. Це показує, що
                        відправник
                        цінує мій час і докладає зусиль, щоб лист вийшов максимально коротким.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/hope_you_are_well_4.jpg"
                            width="1400"
                            height="425"
                            alt="I know you’re overloaded/overwhelmed/swamped"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>


                    <p className={styles.articleText}>
                        Єдине правило: якщо ви уже написали цей <b><i>opener</i></b>, то будьте таки <b><i>brief</i></b>,
                        а не пишіть імейл-опус.
                    </p>

                    <h3 className={styles.articleSubSubTitle}>
                        Ще, як альтернатива, в певних контекстах підійде:
                    </h3>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                Send you my best wishes.
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                Greetings from snowy Kyiv.
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                Greetings to you and [Name].
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                I hope you enjoyed your trip to ____.
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                Welcome back to work! I hope you had a wonderful vacation.
                            </p>
                        </li>
                    </ol>

                </div>
            </div>

            <div className={styles.articleOddSection}>
                <ArticleFooter articleData={articleData}/>
            </div>

        </div>
    );
};
