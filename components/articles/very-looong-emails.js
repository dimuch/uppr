import React from 'react';

import styles from '../../components/articles/commonArticleStyles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import Author from '../blog/Author/Author';
import Slider from '../blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';

export default function VeryLooongEmails({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Your email isn’t getting read because it is too long
                    </h2>
                    <p className={styles.articleText}>
                        Готова побитися об заклад, що є. І скоріше за все, ці імейли дооовгі й нечіткі. Чи ви не можете
                        розібратися, що взагалі від вас хочуть. Чи довго (читайте — складно) відповідати.
                    </p>

                    <p className={styles.articleText}>
                        <i>
                            "One of the top reasons your email isn’t getting read is because it is too long," — говорить
                            експерт з менеджменту Сraig Jarrow.
                        </i>
                    </p>

                    <p className={styles.articleText}>
                        Ще при спілкуванні англійською наживо більшості вистачає глузду коротко формулювати свої думки
                        (а якщо ні, то принаймні працюють над цим чи розуміють потребу). Або співрозмовник "допомагає"
                        не розтікатися думкою, перебиваючи "потік свідомості" або банально рівень недостатній для довгих
                        та складних зворотів. А от коли діло доходить до імейлів, то тут дають собі волю розгулятися.
                    </p>

                    <p className={styles.articleText}>
                        І щонайгірше — особливо коли англійська на високому рівні — то впихають невпихуване. Бо навіщо
                        її стільки
                        років вчили (не для того мама квіточку ростила), щоб тепер формулювати коротко і просто?! Як це
                        так писати
                        по суті? А як же синоніми? А звороти (завороти)? А розкланювання? Ні, тут викладають усе, що
                        знають або
                        нагуглили. І повторюють по декілька разів, щоб точно "дійшло" до адресата.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/very_looong_emails_1.jpg"
                            width="1400"
                            height="425"
                            alt="Your email isn’t getting read because it is too long"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}/>
                    </div>

                    <p className={styles.articleText}>
                        1. <b>Але це <i>time waste</i> чистої води.</b> Подвійний причому. Ви марнуєте час, щоб написати
                        цей <i> bullsh*t</i>, протилежна сторона — щоб це прочитати. А ніхто, і ви в тому числі, не хоче
                        витрачати свій безцінний час, блукаючи хащами хитромудрих зворотів, пафосних ментальних
                        конструкцій чи банальних нудотних формальностей. Тому не марнуйте час і місце на екрані на
                        непотрібні беззмістовні фрази.
                    </p>

                    <p className={styles.articleText}>
                        І зрештою спробуйте поставити себе на місце читача вашого дооовгого імейлу. У вас самих є час це
                        все читати, розбирати ще й відповідати?
                        <br/>
                        Ага, отож-бо й воно.
                    </p>

                    <p className={styles.articleText}>
                        Тобто у довгого імейлу від самого початку набагато менше шансів, що:
                        <br/>
                        &nbsp;&nbsp;a) його прочитають
                        <br/>
                        &nbsp;&nbsp;б) його прочитають уважно.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Зайняті люди пишуть короткі імейли
                    </h2>

                    <p className={styles.articleText}>
                        Моя відповідь, ні.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/very_looong_emails_2.jpg"
                            width="1400"
                            height="425"
                            alt="Зайняті люди пишуть короткі імейли"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}/>
                    </div>

                    <p className={styles.articleText}>
                        2. А ще подумайте, <b>хто зазвичай пише найкоротші імейли?</b> Зайняті люди. Так от, щоб про вас
                        так думали, казали та вважали вас таким, не потрібно постійно повторювати, що у вас немає часу
                        чи що ви зайняті. Покажіть себе на ділі! Прислів'я "справи говорять голосніше за слова"
                        залишається актуальним до сьогодні. І в імейлінгу також.
                    </p>

                    <p className={styles.articleText}>
                        3. Доведено, що психологічно <b>довгі імейли також збільшують тривожність </b> у читача: чи все
                        я зрозумів(ла)? чи на всі деталі звернув(ла) увагу? чи не пропустив(ла) я чогось важливого? А
                        тривожна — це малоефективна та неуважна людина + ніхто не любить себе так почувати. Тож як до
                        вас будуть ставитися, якщо ви зі своїми імейлами тільки посилюєте цю тривожність?
                    </p>

                    <p className={styles.articleText}>
                        4. Не забувайте, що багато хто читає листи зі смартфону, а довгі скроли усіх дратують, якщо
                        звісно палець не стомиться раніше.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Може, краще поговорити?
                    </h2>

                    <p className={styles.articleText}>
                        Якщо ваш імейл переходить до стадії дооовгого, то запитайте себе: може, краще поговорити з
                        людиною?
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/very_looong_emails_3.jpg"
                            width="1400"
                            height="425"
                            alt="Зайняті люди пишуть короткі імейли"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}/>
                    </div>

                    <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                        На мою думку, основні причини дооовгих імейлів:
                    </p>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                <b>Про випендрьож з англійською я вже казала.</b> Прикро, але буває.
                            </p>
                        </li>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                <b>Ви самі не розумієте, що хочете сказати.</b> Ось це найбільший "капець" і з ним
                                найважче боротися. Бо відомо, що <i>clear writing = clear thinking</i>, а останнє так
                                швидко не зміниш.
                            </p>
                        </li>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                <b>Ви — спамер.</b>
                                Це частіше трапляється у великих корпораціях. Для того, щоб створити ілюзію постійної
                                зайнятості та звершення великих справ. Або тому, що “всі так роблять”, працівники
                                грішать написанням довгих апдейтів, щоб тримати інших в курсі (keep in the loop).
                            </p>
                        </li>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                <b>FYI.</b> Замість того, щоб коротко пояснити чи підсумувати те, що адресатові потрібно
                                знати, форвардите полотна історії, пересилаючи навіть те, що не потрібно знати.
                                Більшого <i>disrespect</i> годі й вигадати, але <i>who cares?</i>
                            </p>
                        </li>
                    </ul>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/very_looong_emails_5.jpg"
                            width="1400"
                            height="425"
                            alt="Зайняті люди пишуть короткі імейли"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}/>
                    </div>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                <b>Це мав би бути не імейл.</b> Не потрібно писати імейл, якщо краще зустрітися, Чи
                                зателефонувати. Інколи набагато швидше та продуктивніше скористатися іншим засобом
                                спілкування.
                            </p>
                        </li>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                <b>Варто написати кілька імейлів.</b> Золоте правило: одна тема — один імейл. Не
                                навалюйте усе до купи та не змішуйте мухи з котлетами, бо комусь це розгрібати. А
                                зрештою ви теж постраждаєте, якщо розгребуть неправильно чи не те, чи проігнорують.
                            </p>
                        </li>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                <b>Ви не редагуєте/вичитуєте свої імейли.</b> Ось це — те, що я називаю “потік
                                свідомості” (нехай вибачить мені Джеймс Джойс), коли ви виливаєте на адресата свою думку
                                в тому вигляді, в якому вона з'явилася у вас в голові. Хотілося б сподіватися, що
                                більшість мислять структурно, але зазвичай там хаос. Найкраще, що ви можете зробити —
                                стати собі найприскіпливішим редактором та критиком.
                            </p>
                        </li>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                <b>У вас є СТРАХ:</b>
                                <br/>
                                &nbsp;&nbsp;а) виглядати непрофесійно,
                                <br/>
                                &nbsp;&nbsp;б)звучати формально/неввічливо,
                                <br/>
                                &nbsp;&nbsp;в) що вас не зрозуміють, якщо ви напишете коротко.
                            </p>
                        </li>
                    </ul>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Остання — мабуть, найпоширеніша причина, але про неї іншим разом.
                    </p>
                    <h2 className={styles.subTitle}>
                        А вам вдається контролювати довжину своїх імейлів?
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`} >
                        Читайте цю статтю англійською на <a rel="noreferrer" target="_blank"
                                                            href="https://medium.com/@ivannatabachuk/your-very-looong-emails-833993e350fc">Medium.com</a>
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
