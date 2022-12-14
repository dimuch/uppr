import React from 'react';

import styles from '../../components/articles/commonArticleStyles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import Author from '../blog/Author/Author';
import Slider from '../blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';

export default function Asap({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Will you share your feedback ASAP?</h2>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p>&quot;Could you, please, return the signed agreement ASAP?&quot;</p>
                        </li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p>&quot;Will you share your feedback ASAP?&quot;</p>
                        </li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p>&quot;Get back to me ASAP&quot;</p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        Щось типу цього, я думаю, ви бачили сотні разів у своєму Inbox. Але чи думали ви про те, як
                        почувається адресат від вашого ASAP? Мене кожного разу буквально “пересмикує”. Думаю, і
                        більшість дорослих людей, професіоналів своєї справи, не порадує те, що хтось намагається
                        “рулити” їх часом, вимагаючи ASAP-дій. Навіть від боса, який ніби й “має право”, таке отримати
                        не особливо приємно.
                    </p>

                    <p className={styles.articleText}>
                        І якщо запит терміновий для іншої людини – це зовсім не означає, що він також має бути
                        терміновим для мене. Такий підхід ніби вказує на “недоважливість” планів, часу та завдань
                        отримувача. Плюс, командний тон <b>ASAP</b> відбиває будь-яке бажання не те що ставити у
                        пріоритет, а взагалі виконувати.
                    </p>

                    <p className={styles.articleText}>
                        І що важливо, <b>ASAP – &quot;as soon as possible&quot;</b> – насправді досить розмитий спосіб
                        повідомити про терміновість. Ви пишете <b>as soon as possible</b>, ОК,
                        мені <b>possible</b> через тиждень! Вам так підійде?
                    </p>

                    <p className={styles.articleText}>
                        <b>ASAP</b> не ставить ніяких часових рамок і залишає багато простору для польоту фантазії!
                        Отже, <b>ASAP</b> – не найкращий варіант спілкування ні з колегами, ні з підлеглими.
                    </p>

                    <p className={styles.articleText}>
                        Як тоді замінити, таке звичне і все ще улюблене багатьма <b>ASAP?</b> Ось деякі варіанти.
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Альтернативи
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/asap_1.jpg"
                               width="1400" height="425"
                               alt="asap альтернативи"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                    </h3>

                    <p className={styles.articleText}>
                        <b>#1. &quot;... by [date and time] because [reason]&quot;.</b>
                        <br/>
                        <b>“Please submit your specs by Thursday at 4 pm, I badly need them because … [reason]”.</b>
                        <br/>
                        У вас є дедлайн? Як на мене, найкращий варіант – прямо сказати, коли вам потрібно
                        рішення/інформація тощо. Чомусь вважається, що вказати в імейлі конкретний дедлайн – це грубо та
                        неввічливо. 🤔
                    </p>

                    <p className={styles.articleText}>
                        Навпаки! Ви таким чином виказуєте максимальну повагу до свого читача, до його/її часу. Адже,
                        знаючи терміни, можна планувати й таки виконати ваше прохання.
                    </p>

                    <p className={styles.articleText}>
                        І думаю, ви розумієте, якщо адресат не збирається для вас нічого робити, то результату не буде
                        ні з <b>ASAP</b>, ні без нього.
                    </p>

                    <p className={styles.articleText}>
                        Ще часто формулювання з конкретними термінами відносять до занадто вимогливих. Зовсім ні. Тим
                        більше, якщо ви адекватно обґрунтували причину свого поспіху. Але якщо все-таки боїтеся видатися
                        pushy, чи хочете проявити ще більшу турботу та повагу до отримувача, чи сумніваєтеся, що
                        завдання посильне за такий проміжок часу, напишіть в кінці:
                        <br/>
                        <b>“Does this timeline meet your expectations?/Does this timeline fit your plan/schedule/to-do
                            list?”.</b>
                    </p>

                    <p className={styles.articleText}>
                        Зрештою, якщо хтось не встигає, завжди можна відповісти:
                        <br/>
                        <b>“My schedule is jam-packed now, so I think I’ll need a few more days/hours”.</b>
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Знаючи дедлайн, можна планувати!
                    </h2>

                    <p className={styles.articleText}>
                        <b>#2.“I normally wouldn’t ask for such a quick turnaround, but [reason for urgency]. It would
                            be
                            great if you could address this by [date and time]”.</b>
                        <br/>
                        Мега ввічлива та емпатійна опція попереднього варіанту!
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/asap_4.jpg"
                               width="1400" height="425"
                               alt="знаючи дедлайн, можна планувати!"
                        />
                    </div>

                    <p className={styles.articleText}>
                        <b>#3. “It would be great/I would be grateful if you could address this by [date and time]”.</b>
                        <br/>
                        Ще один варіант з вказанням дедлайну – підійде для тих, хто не хоче (або вважає зайвим)
                        пояснення причин <b>urgency.</b>
                    </p>

                    <p className={styles.articleText}>

                    </p>

                    <p className={styles.articleText}>
                        <b># 4. “When you have a chance [in the next day, this week]”.</b>
                        <br/>
                        Написавши <b>&quot;when you have a chance&quot;</b>, ви проявляєте турботу та повагу до вашого
                        читача, не
                        командуєте, не створюєте <b>rush</b>, даєте можливість видихнути та запланувати допомогу вам, а
                        вказавши дедлайн &mdash; <b>help to make it happen on time</b>.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={`${styles.subTitle}`}>
                        Повага та турбота про читача - найголовніше!
                    </h2>

                    <p className={styles.articleText}>
                        <b>#5. “Is [date and time] feasible for [task]?”.</b>
                        <br/>
                        Хоча я уже писала, що повідомляти адресатів про дедлайни – абсолютно нормально, але якщо вам
                        ствердне формулювання є все ще неприйнятним, використайте форму пропозиції:
                        <br/>
                        <b>&quot;Is [date and time] feasible/suitable/workable/achievable/attainable/appropriate for
                            [task]?&quot;.</b>
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/asap_3.jpg"
                               width="1400" height="425"
                               alt="asap альтернативи"
                        />
                    </div>

                    <p className={styles.articleText}>
                        Отримаєте у відповідь:
                        <br/>
                        <b>“I need more time”, ОК, “Okay, would it be feasible for you to send me initial comments by
                            that date?”.</b>
                        <br/>
                        Такий “хід” варто зробити, щоб отримувач ”закомітився” зайнятися завданням до дедлайну.
                        Своєрідна запорука прогресу щодо завдання і його виконання в домовлений термін.
                    </p>

                    <p className={styles.articleText}>
                        <b>#6. &quot;This is time-sensitive&quot;.</b>
                        <br/>
                        Немає дедлайну, але результат потрібен швидко, напишіть <b>&quot;This is
                        time-sensitive&quot;.</b> 4
                        прості слова, які і передають <b>need for speed,</b> не мають усіх недоліків <b>ASAP.</b>
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/asap_2.jpg"
                               width="1400" height="425"
                               alt="asap альтернативи"
                        />
                    </div>

                    <p className={styles.articleText}>
                        <b>#7. &quot;I’d be grateful if you got to this [before X and Y]&quot;.</b>
                        <br/>
                        Варіант, який підійде скоріше менеджерам або тим, хто має право роздавати завдання та виставляти
                        пріоритети. Тим більше, що такий підхід є насправді <b>mindful</b>, адже бос не просто безладно
                        навантажує додатковою роботою, а показує рівень важливості кожного завдання. Продуктивність без
                        зайвого стресу!
                    </p>

                    <p className={styles.articleText}>
                        <b>#8. &quot;[Timely ask]&quot;.</b>
                        <br/>
                        Хочете привернути чиюсь увагу і одночасно акцентувати на терміновості? Кращого варіанту, ніж
                        додати <b>&quot;[timely ask]&quot;</b> (чи схожий варіант) у тему листа, не знайти. Єдине:
                        намагайтеся не
                        зловживати таким способом, бо якщо у вас усі імейли будуть <b>&quot;[timely ask]&quot;</b>, то
                        на них
                        швидко перестануть реагувати.
                    </p>

                    <p className={styles.articleText}>
                        Отже, якщо існує стільки кращих опцій, то можна і видалити <b>ASAP</b> зі свого лексикону?
                        Правда?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Читайте цю статтю англійською на <a
                        href="https://medium.com/@ivannatabachuk/read-this-asap-1985b8066bbc" target="_blank"
                        rel="noreferrer">
                        Medium.com
                    </a>
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
