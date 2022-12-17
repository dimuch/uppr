import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from 'next/image';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function TenOddWordsInEmails2({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Lean and mean!
                    </h2>

                    <p className={styles.articleText}>
                        Продовжу про &quot;зайві&quot; слова в імейлах.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href="/blog/articles/ten-odd-words-in-emails" target="_blank" rel="noreferrer">5 я уже
                            детально описала</a>, тепер ще 5, якими &quot;грішать&quot; сучасні імейлери;).
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        1. Sorry
                    </h3>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/ten_odd_words_in_emails_2_7.jpg"
                               width="1400" height="425"
                               alt="Sorry"
                        />
                    </div>

                    <p className={styles.articleText}>
                        Як на мене, слово <i><b>&quot;sorry&quot;</b></i> настільки уже &quot;заюзане&quot; в сучасній комунікації, що
                        втратило свою
                        щирість та початкове значення. Часто його взагалі не помічають. І ще частіше — використовують
                        просто так, аби було, без особливої потреби. Наприклад:
                    </p>

                    <p className={styles.articleText}>
                        <b><i>Sorry, I can’t do Monday — does Tuesday work?</i></b>
                    </p>

                    <p className={styles.articleText}>
                        Навіщо тут <i><b>&quot;sorry&quot;</b></i> ? За що вибачатися? Це скоріше вибачення за звичкою, ніж за
                        необхідністю.
                    </p>

                    <p className={styles.articleText}>
                        <i><b>&quot;I apologize,&quot;</b></i> (з доповненнями типу <i><b>sincerely</b></i>) набагато рідше
                        вживається, тому і має більшу
                        важливість та значущість. Та й звучить щиріше і … набагато професійніше.
                    </p>

                    <p className={styles.articleText}>
                        Недарма <i>Gmail plugin</i> <b>Just Not Sorry</b> користується популярністю і, якщо навести
                        курсор на <i><b>&quot;sorry&quot;</b></i> у вашому імейлі, попереджає:
                        <br/>
                        <b><i>&quot;Using ‘sorry’ frequently undermines your gravitas and makes you appear unfit for
                            leadership&quot;.</i></b>
                    </p>


                    <p className={styles.articleText}>
                        Отже, наступного разу перед тим, як вибачатися, зробіть паузу і подумайте, чи це справді те, що
                        ви хочете зараз сказати? Якщо ні, розірвіть зачароване коло безкінечних <i><b>&quot;sorry&quot;</b></i>
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <h2 className={styles.subTitle}>
                        No action is required? - What?
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/ten_odd_words_in_emails_2_5.jpg"
                               width="1400" height="425"
                               alt="No action is required? - What?"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        2. FYI
                    </h3>

                    <p className={styles.articleText}>
                        Звісно, ви знаєте, що <b>FYI</b> означає <b>&quot;For Your Information&quot;</b> і використовується, щоб
                        поділитися
                        інформацією, яку ви вважаєте актуальною для адресата. В основних визначеннях фрази присутні
                        слова <b><i>additional, short, mention, announcement</i></b>. А <b>Quora</b>-мчани навіть
                        додають
                        <i><b>information that’s not considered important</b></i>.
                    </p>

                    <p className={styles.articleText}>
                        Але одне очевидно – <b><i>no action is required!</i></b>
                    </p>

                    <p className={styles.articleText}>
                        Наприклад, нормально використати <b>FYI</b> в таких випадках:
                        <br/>
                        <b><i>FYI free donuts in the kitchen.</i></b>
                        <br/>
                        <b><i>FYI, tomorrow’s staff meeting is scheduled for 10 A.M.</i></b>
                        <br/>
                        <b><i>For your information, there is no plane on Sunday.</i></b>
                    </p>

                    <p className={styles.articleText}>
                        Але часто у невмілих руках та незнаючих головах <b>FYI</b> перетворюється на пасивно-агресивний
                        інструмент комунікації. Бо що роблять? Форвардять імейл-опуси з полотнами попередньої
                        скоріше-всього-нікому-непотрібної історії та зверху над усім цим ставлять <b>FYI</b> =
                        “Розбирайся, мовляв, сам.”
                    </p>

                    <ol className={`${styles.articleList}`}>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                Такий підхід - не просто “0” поваги до адресатів, це повна зневага до них самих і їх
                                часу;
                            </p>
                        </li>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                Сама суть слова викривляється. Пам’ятаєте, <b><i>no action is required</i></b>? Так,
                                якщо треба розібратися з усієї тією писаниною, то ще й який <b><i>action
                                required</i></b>
                            </p>
                        </li>
                        <li className={styles.discList}>
                            <p className={styles.articleText}>
                                Цікаво, чи хтось таки пробує розібратися в тих полотнах тексту? Хіба що
                                через <b>FOMO</b> ;)
                            </p>
                        </li>
                    </ol>

                    <p className={styles.articleText}>
                        Тому, якщо все-таки потрібно переслати імейл з довжелезною історією, обґрунтуйте хоча б, навіщо
                        це комусь знати.
                    </p>

                    <p className={styles.articleText}>
                        А в ідеалі використайте <b>TL;DR</b> і підсумуйте, щоб читач сам вирішив, чи продовжувати йому
                        це читати.
                    </p>

                    <p className={styles.articleText}>
                        Взагалі, найкраща стратегія - перед тим, як написати <b>FYI</b>, запитайте себе, чи справді
                        необхідна
                        ця інформація адресатам? Допоможе вона їм якимось чином чи це просто ще одне “сміття”
                        в <b>inbox</b>?
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <h2 className={styles.subTitle}>
                        Чи справді таке уже kind ваше kindly?
                    </h2>


                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/ten_odd_words_in_emails_2_2.jpg"
                               width="1400" height="425"
                               alt="Kindly"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        3. Kindly
                    </h3>

                    <p className={styles.articleText}>
                        Якщо ви продовжуєте писати <b><i>&quot;kindly&quot;</i></b> у ваших імейлах (а це найчастіше трапляється у
                        фразах <b><i>kindly be advised/reminded/informed</i></b> ), то краще або викиньте його взагалі,
                        або
                        замініть. Від нього не лише віє нальотом вікторіанства, воно ще й звучить недоладно і в багатьох
                        контекстах
                        сприймається як:
                    </p>

                    <table className={`${styles.table}`}
                           style={{color: `#${articleData.article_color}`}}
                    >
                        <tbody>
                        <tr>
                            <td>
                                поблажливо-зверхнє
                            </td>
                            <td>
                                You are kindly requested to return the enclosed form within 30 days.
                            </td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td>
                                саркастично-іронічне
                            </td>
                            <td>
                                Kindly send payment at your earliest convenience.
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <p className={styles.articleText}>
                        Звісно, все залежить від того, як прочитають, але <b><i>to be on the safe side</i></b> краще
                        викинути двоякі
                        трактування і зробити ваш месидж максимально чітким.
                    </p>

                    <p className={styles.articleText}>
                        Так, знаю, усі хочуть здатися ввічливими та формальними, тому і пишуть <b><i>&quot;kindly be
                        advised&quot;</i></b>.
                        Але чи насправді воно таке уже ввічливе? Чи ви справді виражаєте <b><i>kindness</i></b>,
                        коли пишете <b><i>kindly</i></b> ?
                    </p>

                    <p className={styles.articleText}>
                        Просте <b><i>&quot;please&quot;</i></b> зовсім не менш ввічливе і підійде для багатьох ситуацій.
                    </p>

                    <p className={styles.articleText}>
                        <b><i>Kindly be advised that the check is overdue.</i></b>
                        <br/>
                        Якщо таке напише юрист-едвайзер, який вас консультує з певних питань, то ОК – більш-менш
                        сприймається.
                        У всіх інших випадках — звучить надто зарозуміло як для щоденного спілкування.
                    </p>

                    <p className={styles.articleText}>
                        До того ж, коли пишуть <b><i>&quot;kindly be advised&quot;</i></b>, часто нічого не радять,
                        а просто інформують/розповідають. Тоді взагалі <b><i>double nonsense</i></b> писати цю фразу.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        It&apos;s really, really so!
                    </h2>
                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/ten_odd_words_in_emails_2_6.jpg"
                               width="1400" height="425"
                               alt="Really"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        4. Maybe
                    </h3>

                    <p className={styles.articleText}>
                        Якщо хочете звучати “не в курсі”, “не в темі”, невпевнено та непрофесійно, тоді в кожному
                        реченні пишіть <b><i>maybe</i></b>. Звісно, у вас повне право бути невпевненим / невпевненою,
                        але зрідка.
                        Тож зрідка і пишіть maybe у ваших імейлах.
                    </p>
                    <p className={styles.articleText}>
                        Погодьтеся, мало що так погано звучить, як <b><i>&quot;I&apos;ll
                        maybe have it done today by 3 pm&quot;</i></b>.
                    </p>
                    <p className={styles.articleText}>
                        Те саме стосується <b><i>probably, perhaps</i></b> тощо.
                    </p>

                    <h3 className={styles.articleSubSubTitle}>
                        5. Always
                    </h3>

                    <p className={styles.articleText}>
                        Ви роздаєте інструкції чи команди? Або скаржитеся, що бойфренд завжди спізнюється на побачення?
                        <br/>
                        Ні.
                        <br/>
                        То навіщо вам <b><i>always</i></b>? <b><i>Always</i></b> придає висловлюванню догматичної,
                        надмірної експертності та демонструє вашу закритість до альтернатив та обговорення.
                    </p>


                    <h3 className={styles.articleSubSubTitle}>
                        6. Never
                    </h3>

                    <p className={styles.articleText}>
                        Ситуація аналогічна <b><i>always</i></b>. Якщо ви не цитуєте Черчилля, то і без <b><i>never</i></b> точно
                        можете обійтися. І, зрештою, ніколи не кажи ніколи.
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
    )
};
