import React from 'react';
import Image from "next/image";

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function TenOddWordsInEmails({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Той випадок, коли less is more
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/ten_odd_words_in_emails_4.jpg"
                            width="1400"
                            height="425"
                            alt="Той випадок, коли less is more"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        300 мільйонів людей по всьому світу намагаються донести свою думку за допомогою максимум 140
                        символів. Емоджі в месенджерах плодяться з шаленою швидкістю, а самою популярною соцмережею
                        у Штатах вважається Snapchat (хоч в назві і присутнє слово chat, але додаток зовсім не про
                        слова).
                    </p>

                    <p className={styles.articleText}>
                        Це значить, що у людей не вистачає ні часу, ні уваги читати більше слів, ніж насправді потрібно.
                        Ви хочете, щоб ваші читачі та слухачі зрозуміли ваш месидж, ще й зреагували на нього, чи не так?
                        Тоді, як мінімум, почніть з того, що видаліть &quot;зайві&quot; слова з ваших текстів/імейлів. Ось перші 5
                        з них:
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        The most useless word in the English language:
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/ten_odd_words_in_emails_2.jpg"
                            width="1400"
                            height="425"
                            alt="The most useless word in the English language"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        1. Very
                    </h3>

                    <p className={styles.articleText}>
                        <i>Very important, very clever, very interesting.</i> Ось як часто говорять і пишуть. Але в мові
                        є
                        достатньо колоритних та емоційно-забарвлених слів, які і без very опишуть усе, що потрібно.
                        Правильно підібрані слова не потребують додаткових акцентів, а якщо потребують, значить
                        підібрані
                        некоректно, тому їх потрібно замінити.
                    </p>

                    <p className={styles.articleText}>
                        <i>Very</i>, покликане підсилювати прикметники, дієслова та прислівники, насправді лише відбирає
                        у
                        фрази конкретику і робить її більш розмитою. <i>Very important</i> &mdash; це <i>imperative,
                        very clever &mdash; brilliant, very intersting &mdash; fascinating/captivating.</i> Писати <i>very
                        + sth</i>
                        &mdash; це лінивий підхід до використання мови та висловлення думки.
                    </p>

                    <p className={styles.articleText}>
                        Флоренс Кінг, американська письменниця, радить уникати слова <i>very</i>, тому, що це
                        <i> &quot;the most useless word in the English language…. More than useless, it is treacherous
                            because
                            it invariably weakens what it is intended to strengthen&quot;.</i>
                    </p>

                    <p className={styles.articleText}>
                        Плюс
                        <i> very</i>&nbsp;
                        &mdash; дуже суб’єктивне. Комусь дуже холодно, а комусь - нормально, а для дитини, наприклад,
                        навіть низький буде здаватися дуже високим.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Отже, раджу розширити свій словниковий запас і писати максимально конкретно, називаючи речі
                        своїми іменами.&nbsp;
                        <a href="../../Strong_words_(instead_of_very).pdf" target="_blank" rel="noreferrer"
                           onClick={() => {
                               gtag('event', 'click_on_odd_words_link', {
                                   'event_label': 'odd_word_pdf',
                                   'event_category': 'click_on_link',
                                   'non_interaction': true,
                               })
                           }}>
                            Ось деякі слова,
                        </a>
                        &nbsp;які ви можете вживати замість
                        <i> &nbsp;very&nbsp;</i>
                        . Звісно, список неповний,
                        але я надіюся, що принаймні з цим списком ви зробите своє мовлення та письмо багатшим.
                        Але пам&apos;ятайте, що усі синоніми контекстуальні.
                    </p>

                    <h3 className={styles.articleSubSubTitle}>
                        2. That
                    </h3>

                    <p className={styles.articleText}>
                        Явно зайве слово у багатьох контекстах та ситуаціях. Відкрийте будь-який документ і порахуйте
                        скільки разів ви використали&nbsp;
                        <i>that</i>
                        &nbsp;? А тепер спробуйте видалити з них &nbsp;
                        <i> that</i>
                        &nbsp;. Думаю, у 50% випадків, речення не втратить сенсу.
                    </p>

                    <p className={styles.articleText}>
                        Знову ж таки, в англійській є багато інструментів, які дозволять вам сказати речення без &nbsp;
                        <i>that,</i>  &nbsp;
                        зберігаючи зміст, наприклад, &nbsp;
                        i reported verbs.&nbsp;
                        Порівняйте:
                    </p>


                    <table className={`${styles.table}`}
                           style={{color: `#${articleData.article_color}`}}
                    >
                        <thead>
                        <tr>
                            <th>
                                Варіант №1
                            </th>
                            <th>
                                Варіант №2
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                She said that she hadn’t done anything wrong
                            </td>
                            <td>
                                She <u>denied doing</u> anything wrong.
                            </td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <td>
                                He told that he would come not time
                            </td>
                            <td>
                                He promised to come on time.
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <p className={styles.articleText}>
                        Другий варіант явно виграє.
                    </p>

                    <p className={styles.articleText}>
                        Перш за все - чітко та без зайвих слів. А ще не потрібно згадувати правила утворення непрямої
                        мови та узгодження. Залишається тільки вивчити, після яких дієслів потрібен герундій, а після
                        яких - інфінітив.
                    </p>

                    <p className={styles.articleText}>
                        А також добре проштудіюйте тему relative clauses, то паралельно з that зможете позбутися усіх
                        зайвих who, which when where тощо.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <h3 className={styles.articlePhrase}>
                        It’s JUST taking up
                        <br/>
                        valuable email space.
                    </h3>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/ten_odd_words_in_emails_3.jpg"
                            width="1400"
                            height="425"
                            alt="Just"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        3. Just
                    </h3>

                    <p className={styles.articleText}>
                        <i>&quot;Just checking in to see what time works for this meeting....&quot;</i>
                        <br/>
                        <i>&quot;Just wondering if you have had a chance to review…&quot;</i>
                        <br/>
                        <i>&quot;Just wanted to know if you had some time to chat about…&quot;</i>
                        <br/>
                        <i>&quot;Just following up to see if you’ve read my last three emails…&quot;</i>
                    </p>

                    <p className={styles.articleText}>
                        Ще одне слово-паразит, яке входить до ряду вибачальних слів і послаблює речення.
                        Таке звичне і незначне односкладове слово може применшити та нівелювати усе, що ви чи ваша
                        команда робите.
                    </p>

                    <p className={styles.articleText}>
                        Розумієте, &nbsp;
                        <i>&quot;just&quot;</i>&nbsp;&mdash;
                        &nbsp; це таке собі малюсіньке, зовсім крихітне та дріб’язкове словечко, незначене і навіть
                        мізерне. І саме такий сенс воно привносить у ваш імейл-месидж, і ваш імідж
                        <i> (stupid-little-me approach).</i>.
                    </p>

                    <p className={styles.articleText}>
                        <i>&quot;Just&quot;</i>&nbsp;
                        зменшує та мінімізує значення усього, що слідує після нього.
                        І у багатьох закрадається підозра, що якщо вони скажуть/напишуть
                        <i>&nbsp;&quot;just&quot;,&nbsp;</i>
                        то їх прохання від цього стане легше виконувати, чи воно спричинить менше незручностей, тощо.
                    </p>

                    <p className={styles.articleText}>
                        Але&nbsp;
                        <i>&quot;just&quot;</i>&nbsp;
                        лише принижує усе, що ви маєте сказати, і звучить, ніби ви вибачаєтеся. Але за що? За те, що вам
                        необхідно робити свою роботу?!
                    </p>

                    <p className={styles.articleText}>
                        Для багатьох
                        <i>&nbsp;&quot;just&quot;&nbsp;</i>
                        &mdash; це їх зона комфорту, зона їх ввічливості та формальності, а значить професіоналізму.
                    </p>

                    <p className={styles.articleText}>
                        Але повірте, або навіщо вірити &mdash; проекспериментуйте і не напишіть
                        <i>&nbsp;&quot;just&quot;&nbsp;</i>
                        у вашому наступному імейлі. Що станеться? Нічого. Ніхто не образиться і не запідозрить хамства,
                        а навпаки - будуть відповідати більш охоче. Вірте у важливість того, що ви хочете сказати і люди
                        теж повірять.
                    </p>

                    <p className={styles.articleText}>
                        Але повірте, або навіщо вірити &mdash; проекспериментуйте і не напишіть
                        <i>&nbsp;&quot;just&quot;&nbsp;</i>
                        у вашому наступному імейлі. Що станеться? Нічого. Ніхто не образиться і не запідозрить хамства,
                        а навпаки - будуть відповідати більш охоче. Вірте у важливість того, що ви хочете сказати і люди
                        теж повірять.
                    </p>

                    <p className={styles.articleText}>
                        Але це не єдина темна сторона
                        <i>&nbsp;&quot;just&quot;.&nbsp;</i>
                        Навіть гірше, коли вживають
                        <i>&nbsp;&quot;just&quot;&nbsp;</i>
                        на мітингу чи в імейлі при поставленні задачі чи делегуванні. Це слово автоматично знижує
                        важливість та складність завдання. А навіть, якщо щось не видається вам складним &mdash; це
                        зовсім не значить, що інші такої ж самої думки. Можливо є якісь нюанси, які ви не враховуєте,
                        але через них завдання стає
                        <i>&nbsp;challenging.&nbsp;</i>
                        Порівняйте,
                        <br/>
                        <i> &quot;I need you to head up this project&quot; &nbsp;</i>
                        i
                        &nbsp;<u>versus</u>&nbsp;
                        <i> &quot;I just need you to head up this project.&quot;</i>
                    </p>

                    <p className={styles.articleText}>
                        Чи&nbsp;<i> just add this feature and the client will be happy.</i>
                    </p>

                    <p className={styles.articleText}>
                        <i> Just add?</i>
                    </p>

                    <p className={styles.articleText}>
                        Ага. На цю фічу може знадобитися 4 дні роботи усієї команди, а є й інші пріоритети.
                    </p>

                    <p className={styles.articleText}>
                        Або
                        &nbsp;<i>just solve this problem.</i>&nbsp;
                        Якби усе було так просто.
                    </p>

                    <p className={styles.articleText}>
                        Отже, викиньте
                        &nbsp;<i>just</i>&nbsp; з вашого мовлення та письма.
                    </p>

                    <p className={styles.articleText}>
                        <i>It’s JUST taking up valuable email space.</i>
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articlePhrase}>
                        It&apos;s really, really so!
                    </h3>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/ten_odd_words_in_emails_6.jpg"
                            width="1400"
                            height="425"
                            alt="Really"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        4. Really
                    </h3>

                    <p className={styles.articleText}>
                        <i>Really</i> схоже на <i>very</i>. Справді / насправді. Навіщо підсилювати речення?
                        Чи ви думаєте, що хтось сумнівається у ваших словах?
                        Це слово теж позбавляє ваше речення сили, а значить і впливу. Викинувши його, ви не втратите
                        нічого, а лише здобудете більш коротке, точне, зрозуміле спілкування.
                    </p>

                    <h3 className={styles.articleSubSubTitle}>
                        5. Actually
                    </h3>

                    <p className={styles.articleText}>
                        В усній комунікації
                        &nbsp;<i>actually</i>&nbsp;
                        звучить та сприймається більш-менш нормально, тому що інтонаційно та не вербально можна
                        зробити необхідні акценти, але на письмі воно може зіграти злий жарт. Oсь, наприклад:
                    </p>

                    <p className={styles.articleText}>
                        <i>
                            <b>
                                &quot;I actually think we need to wait for the scheme to be launched officially before
                                writing about it&quot;
                            </b>
                        </i>
                    </p>

                    <p className={styles.articleText}>
                        звучить самовдоволено та зарозуміло у порівнянні з тим самим реченням тільки без
                        &nbsp;<i>actually</i>&nbsp; &mdash;
                    </p>

                    <p className={styles.articleText}>
                        <i>
                            <b>
                                &quot;I think we need to wait for the scheme to be launched officially before writing about
                                it.&quot;
                            </b>
                        </i>
                    </p>

                    <p className={styles.articleText}>
                        <i>
                            Actually
                        </i>&nbsp;
                        вносить відтінок повчальності та правки у висловлювання, акцентуючи на тому, що читач не
                        правий чи щось не правильно зрозумів. Наприклад,
                    </p>

                    <p className={styles.articleText}>
                        <i>
                            <b>
                                &quot;I actually, meant a different thing&quot;
                            </b>
                        </i>
                    </p>

                    <p className={styles.articleText}>
                        Чи
                    </p>

                    <p className={styles.articleText}>
                        <i>
                            <b>
                                &quot;Actually, it’s the same link we sent last week.&quot;
                            </b>
                        </i>
                    </p>

                    <p className={styles.articleText}>
                        Взагалі, моїм натхненням та поштовхом, щоб припинити використовувати слово <b><i>&quot;actually&quot;</i></b>
                        &nbsp;був пост Carolyn Kopprasch, Chief Happiness Officer в компанії Buffer.
                    </p>

                    <p className={styles.articleText}>
                        ЇЇ основна ідея, що слово <b><i>&quot;actually&quot;</i></b>&nbsp; найчастіше використовується для того,
                        щоб виправити когось, наприклад, як в діалозі:
                    </p>
                    <p className={styles.articleText}>
                        <b><i>- The list of clients looks not quit correct, so I changed it.</i></b>
                    </p>

                    <p className={styles.articleText}>
                        <b><i>- Actually, I pulled it from the [company] website!</i></b>
                    </p>

                    <p className={styles.articleText}>
                        Звісно відповідь ненайгірша, проте набагато краще було б відповісти:
                    </p>

                    <p className={styles.articleText}>
                        <b><i>- Thanks for your feedback! I used the list because I found it on their site.</i></b>
                    </p>

                    <p className={styles.articleText}>
                        У другому варіанті набагато більше поваги та турботи про читача. Альтернативами
                        до <b><i>&quot;actually&quot;</i></b>
                        &nbsp;можуть стати такі слова як <b><i>definitely, got it, I see, great point, makes sense,
                        understandable</i></b>
                        &nbsp;або взагалі перефразуйте, як у прикладі вище.
                    </p>

                    <p className={styles.articleText}>
                        І неважливо пишете ви імейл вашому CEO, запрошуєте друга на пиво, чи продаєте продукт,
                        ці слова вам ні до чого. Приємним бонусом, якщо ви відмовитеся від них, стане те, що ваш
                        текст звучатиме розумніше.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href="/blog/articles/ten-odd-words-in-emails-2" target="_blank">
                            Ще 5 &quot;зайвих&quot; слів у наступній статті.
                        </a>
                    </p>

                </div>
            </div>

            <div className={styles.articleOddSection}>
                <ArticleFooter articleData={articleData}/>
            </div>

        </div>
    );
};
