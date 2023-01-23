import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from "next/legacy/image";
import Link from 'next/link';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function JunkPhrasesInEmails({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Бути &quot;в тренді&quot; у всьому
                    </h2>

                    <p className={styles.articleText}>
                        Багато моїх клієнтів працюють у сфері ІТ і тому частіше інших повторюють, як мантру, ідею про
                        те, що все
                        постійно змінюється дуже швидко і потрібно бути в тренді. Але бути в тренді, з точки зору
                        листування з
                        клієнтами та колегами, уперто відмовляються. Вірніше, дуже хочуть, але чомусь наступають на одні
                        і ті самі
                        граблі і баги повторюються.
                    </p>

                    <p className={styles.articleText}>
                        Далеко не єдиним, але одним з перших baby step, може стати відмова від фраз, які не додають ні
                        сенсу, ні
                        позитиву у ваше речення, а лише зайві символи, роблячи сам лист в стилі &quot;многабукв&quot;.
                    </p>

                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Отже, самі &quot;капосні&quot; фрази у вашому листі:
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/junk_phrases_in_emails_5.jpg"
                               width="1400" height="425"
                               alt="Отже, самі &quot;капосні&quot; фрази у вашому листі"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        I&apos;M WRITING TO
                    </h3>

                    <p className={styles.articleText}>
                        Звісно &quot;ви пишете &quot;. Це ж імейл. Captain Obvious. То навіщо ще раз писати очевидне?
                        Чому одразу
                        не перейти
                        до суті і не написати все, що ви хочете сказати? Звісно, в багатьох ситуаціях pleasantry або
                        social opening
                        в стилі &apos;Hope you are well&apos; допустимо і бажано. Але після цього не має
                        сенсу &quot;розтікатися …&quot;
                    </p>

                    <p className={styles.articleText}>
                        Знаю, знаю, в ситуації, коли потрібно повідомити клієнту про факап команди чи підлеглому, що
                        його відпустку
                        потрібно буде відкласти, чи написати лист kind-of-a-big-boss, то так і кортить зайти здалеку і
                        почати &quot;I have
                        a question to ask …&quot;, &quot;I want to inform you…&quot;, чи &quot;I am writing to …&quot; .
                        Тим більше, для багатьох
                        це звучить
                        так ввічливо! А насправді, такий початок лише забирає місце в листі, відволікаючи увагу читача.
                    </p>

                    <h3 className={styles.articleSubSubTitle}>
                        Як усе таки починати лист? Запитайте себе - яка в мене ціль?
                    </h3>

                    <p className={styles.articleText}>
                        Якщо потрібно поставити запитання, то напишіть це запитання одразу. <i>Не &quot;I would like to
                        know
                        when you are
                        available on Monday.&quot;, а &quot;When are you available on Monday?&quot;</i> Якщо ціль
                        відповісти на
                        запитання, чи надати
                        інформацію, то надавайте її, і відповідайте одразу. <i>Get right to the point!</i>
                    </p>

                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articlePhrase} style={{color: `#${articleData.article_color}`}}>
                        Презентуйте факти прямолінійно.
                    </h3>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/junk_phrases_in_emails_4.jpg"
                               width="1400" height="425"
                               alt="I&apos;M AFRAID"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        I&apos;M AFRAID
                    </h3>

                    <p className={styles.articleText}>
                        Часто чую (і що там грішити, сама так раніше думала), що <i>&quot;I&apos;m
                        afraid&quot;</i> пом&apos;якшує фрази при
                        передачі негативного
                        месиджа чи неприємної новини, тому часто можна зустріти - <i>&quot;I&apos;m afraid we have
                        chosen another
                        candidate for the
                        job,&quot;</i> чи <i>&quot;I&apos;m afraid the task is done not at the level I&apos;ve
                        expected.&quot;</i> Але <i>&quot;I&apos;m
                        afraid&quot;</i> тільки погіршуєте
                        ситуацію. Почавши читати, людина уже знає результат і ще не дочитавши речення, засмучується.
                        Очікування смерті -
                        гірше самої смерті, як відомо.
                    </p>

                    <p className={styles.articleText}>
                        Набагато краще одразу презентувати факти прямолінійно. Напишіть просто <i>&quot;We have chosen
                        another candidate&quot;</i> чи
                        <i>&quot;The task is done not at the level I would have expected.&quot;</i> Як показує практика,
                        голі
                        факти сприймаються менш емоційно
                        та сприяють об&apos;єктивному обговоренню ситуації.
                    </p>

                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        UNFORTUNATELY
                    </h3>

                    <p className={styles.articleText}>
                        Тоді як усе-таки писати ввічливо, витримувати дистанцію, але водночас - не занадто формально?
                        Відповідь -
                        проста. Позитивне формулювання.
                    </p>

                    <p className={styles.articleText}>
                        От, наприклад, &quot;unfortunately&quot;. Його вживають, коли людині шкода або вона хоче
                        вибачитися. <i>&quot;Unfortunately,
                        we
                        need to reschedule the meeting.&quot; &quot;Unfortunately, I will not be able to
                        attend.&quot;</i> Явно
                        негативне значення.
                    </p>

                    <p className={styles.articleText}>
                        Чому б не написати щось більш заохочувальне? <i>&quot;I&apos;ll need to change the timing of our
                        meeting.
                        If 2 p.m. works for
                        you, that would be great for me as well.&quot;</i>
                    </p>

                    <p className={styles.articleText}>
                        Чи у другому випадку, <i>&quot;I&apos;m grateful that you invited me. I&apos;ll be in
                        Berlin that week but would love to meet another time.&quot;</i>
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        I HOPE
                    </h3>

                    <p className={styles.articleText}>
                        Зовсім не менш зловживань в листах фразою <i>&quot;I hope&quot;</i>. Сама по
                        собі &quot;надія&quot; ще он як добре,
                        а от коли ви пишете: <i>&quot;I hope we&apos;ll meet our target,&quot;</i> ваша фраза звучить
                        пасивно (навіть
                        пасивно-агресивно), і лише додає
                        наліт невпевненості та безвідповідальності вашій персоні. До того ж, виглядає ніби ви ,чи то
                        виправдовуєтеся, чи то захищаєтеся. Чому б не написати: <i>&quot;I really want us to meet our
                        target,
                        and I know we can get
                        there&quot;?</i>
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Фокус на читача
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/junk_phrases_in_emails_1.jpg"
                               width="1400" height="425"
                               alt="I&apos;M AFRAID"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        I DO NOT KNOW
                    </h3>

                    <p className={styles.articleText}>
                        Виявляється – це не лише улюблена фраза студентів. Але сказати чи написати I do not know - це
                        ніколи не вихід і
                        не варіант. Ніколи і у жодному разі. Це як мінімум не професійно, і як максимум - буде коштувати
                        довіри клієнта,
                        колеги чи партнера.
                    </p>

                    <p className={styles.articleText}>
                        Ви готові ризикувати? Думаю, що ні.
                    </p>

                    <p className={styles.articleText}>
                        Тому забудьте цю фразу і пишіть щось в стилі:
                    </p>

                    <ul className={`${styles.articleList} ${styles.discList}`}>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                I don&apos;t have enough information to answer your question.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                I don&apos;t have the information I need to
                                give an answer. But I&apos;ll find it.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                I don&apos;t have the data at hand, but
                                I&apos;ll get it to you later today.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                Good question. I&apos;ll find out.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                Based on what we know today, my thoughts
                                are…
                            </p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        Інколи, залежно від контексту, можна використати:
                    </p>

                    <ul className={`${styles.articleList} ${styles.discList}`}>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                Let&apos;s have a quick brainstorm.
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                I know an expert who can help with this.
                            </p>
                        </li>
                    </ul>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/junk_phrases_in_emails_2.jpg"
                               width="1400" height="425"
                               alt="I&apos;M AFRAID"
                        />
                    </div>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        IF YOU HAVE ANY QUESTIONS, DON&apos;T HESITATE TO CONTACT ME
                    </h3>

                    <p className={styles.articleText}>
                        Для мене залишається загадкою, чому і досі так багато людей закінчують імейл цією фразою.
                        Мабуть, знову ж таки,
                        думають, що вона допомагає звучати більш ввічливо? Але, якщо ваш лист був написаний у холодному,
                        претензійному
                        тоні, то ця фраза в кінці ситуацію не врятує. І правда в тому, що звучить вона жахливо
                        заїжджено, і вказує не на
                        гарні манери, а на невпевненість автора.
                    </p>

                    <p className={styles.articleText}>
                        Коли я читаю, <i>&quot;if you have any questions, please don&apos;t hesitate to
                        contact me,&quot;</i> одразу виникає думка, які у мене можуть бути питання? І чому у мене
                        повинні бути запитання? Тут не
                        вистачає якоїсь інформації? Чи автор сам не знає і хоче, щоб я допомогла додатковими
                        запитаннями?
                    </p>

                    <p className={styles.articleText}>
                        Якщо ви пишете з думкою про читача, то ви опишете ситуацію максимально чітко і передбачите усі
                        потенційні
                        запитання.
                    </p>

                    <p className={styles.articleText}>
                        Закінчуйте імейл чимось більш позитивним. Наприклад:
                    </p>

                    <ul className={`${styles.articleList} ${styles.discList}`}>
                        <li style={{color: `#${articleData.article_color}`}}>I suggest we proceed with the project.</li>
                        <li style={{color: `#${articleData.article_color}`}}>Let us discuss details at the meeting.</li>
                        <li style={{color: `#${articleData.article_color}`}}>I&apos;ll look forward to your agreement.
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>I&apos;ll set up the schedule for our work
                            together.
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        Такі заключні речення створять вам імідж впевненого в собі професіонала, чиїй думці можна
                        довіряти, а
                        рекомендаціям слідувати
                    </p>

                    <p className={styles.articleText}>
                        Звісно, даний список далеко не вичерпний, але для початку шляху до усвідомленого імейлінгу
                        згодиться.
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
