import React from 'react';

import styles from './commonArticleStyles.module.scss';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function StupidEmailsIntroductions({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Не потрібно беззмістовних вступних фраз, не потрібно формалізмів, не потрібно зайвих букв. Не
                        починайте і не продовжуйте імейл з того, що не додає йому ніякого value. Так, і навіть у
                        незручній ситуації, коли потрібно повідомити клієнту про факап чи підлеглому, що його відпустку
                        потрібно буде відкласти. Знаю, що так і кортить зайти здалеку і почати <i>&quot;I want to inform
                        you…&quot; чи &quot;I am writing to …&quot;</i>. Тим паче, що багатьом це здається вершиною ввічливості та
                        етикету! А насправді, такий початок лише забирає місце, та тягне кота за хвоста.
                    </p>

                    <p className={styles.articleText}>
                        Звісно, в багатьох ситуаціях pleasantry або social opening допустимо і бажано. Але після цього
                        не має сенсу &quot;розтікатись мислію по древу&quot;.
                    </p>

                    <p className={styles.articleText}>
                        Тому краще викиньте усі преамбули.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Ось найбільш &quot;хітові&quot;:
                    </p>

                    <h3 className={styles.articleSubSubTitle}>
                        1. I&apos;m writing to...
                    </h3>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Найбільший <i>&#123;facepalm&#125;</i>. Інші &quot;зайві&quot; фрази хоч чимось замінити можна, і хоч якусь роль в
                        імейлі вони виконують, і певне смислове навантаження несуть.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А писати в імейлі, що ви пишете - повна нісенітниця. Звісно ви пишете - це ж імейл, Кеп! Що ще
                        ви можете робити? То навіщо всіх про це повідомляти? Аби було?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Тоді уже логічніше було б написати щось типу <i>&quot;I am typing you to …&quot;</i>.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        На зустрічі з кимось ви ж не кажете: &quot;я зустрічаюся з тобою...&quot; Чи кажете?;)
                    </p>

                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Як усе таки починати лист?
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Як тоді починати імейл, якщо не з <i>I am writing to...?</i>
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Так і починайте - одразу до справи.
                    </p>

                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>I am writing to confirm the meeting/appointment... = Ok, agreed, see you at [time]
                                    there.</i>
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>I am writing to find out… = What is/are...?</i>
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>I am writing to invite… = Can you/Could you…?</i>
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>I am writing to update… = Here is an update on.../The news is…</i>
                            </p>
                        </li>
                    </ul>


                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        2. Just a short reminder about...
                    </h3>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Але &quot;хитренькі&quot; імейлери дурять самих себе: &quot;ок, щоб не було старомодно, та не <i>I am writing
                        to…</i>, напишу-но я розмовне (сленгове, дружнє) <i>just a short reminder about/ just a short
                        notice about...</i>
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Але це те ж саме, що й <i>I am writing to…!!!</i>
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А, ні, не те саме, ще гірше. Бо крім того, що воно &quot;ні до чого&quot;, то ще й панібратське та зі <a
                        target="_blank" rel="noreferrer"
                        href="/blog/articles/ten-odd-words-in-emails">зменшувальним just</a>. І знов
                        ви пишете про те, що ви пишете.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        В чому проблема, щоб дійсно перейти відразу до суті?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Ну, а якщо так уже вам потрібен цей reminder чи notice, винесіть його
                        <a href="/blog/articles/subject-line" target="_blank" rel="noreferrer">в тему в квадратних дужках</a>. І не забруднюйте свої імейли
                        зайвими символами, їх же ж комусь читати.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        3. I have a question.
                    </h3>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <i>John, a quick question for you</i>
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        На щастя, не так часто, як в усному мовленні, але на жаль, все-таки достатньо часто, щоб про це
                        писати, в імейлах зустрічається фраза <i>I have a question.</i>
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Що з нею не так?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        По-перше, це капітан Очевидність, бо ви знову навіщось повідомляєте про те, що хочете зробити, а
                        не просто берете і робите. Це те саме по суті, що й <i>I am writing to… та Just a quick reminder
                        for you...</i>
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Але саме негоже в <i>I have a question</i> — це барська замашка.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Адже ви не просите, не питаєте дозволу про можливість поставити питання, а повідомляєте про свою
                        нужду, прямолінійно заявляєте про свою потребу. Причому звисока та зневажливо, виходить типу
                        &quot;мені головне сказати, а ви робіть з цим щось&quot;.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Але це ваша потреба! Що іншим з того, що у вас є питання? І що взагалі на це відповісти?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        &quot;Рада за вас. І що з того?&quot;
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Чи цікавитися одразу яке запитання?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Якщо ви хочете такої реакції, то поставте ваше запитання одразу. Звільніть і себе, і вашого
                        співрозмовника від необхідності двох безглуздих зайвих реплік.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Варіант <i>Sorry to bother you but I have a question regarding…</i> Це ще більш невдало. Бо тут,
                        крім усього вищенаведеного, ще й підлабузництво
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <i>I have a question</i> — це не вступна фраза, якою прийнято пом&apos;якшувати форму прямого
                        запитання. Це зовсім не ввічливість, а її імітація.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        4. Сan I ask you for something?
                    </h3>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Так часто пишуть і ще частіше говорять перед тим, як перейти безпосередньо до прохання. В
                        листуванні цю фразу інколи окремим імейлом пишуть, це ще гірше.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Але навіщо?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Прочитавши таке, одразу чекаєш якогось підступу. Адже якщо прохання нормальне, адекватне, яке
                        можна виконати, то немає сенсу ходити колами, робити зайві реверанси, а можна одразу чітко
                        сформулювати.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Для адресата це, як купувати кота в мішку. Ви хочете, щоб людина дала свою згоду на не зрозуміло
                        що.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <i>Сan I ask you for something?</i> Також свідчить про невпевненість, ба більше — про надмірну
                        тривожність автора. Можна і що далі?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Просити то можна, але саме прохання не факт, чи виконають. Автори часто-густо розглядають згоду
                        на цей запит, як обіцянку виконати прохання. Ні, це інше.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        До того ж такі прелюдії викликають роздратування і відбивають бажання допомогти. Так і хочеться
                        сказати: &quot;Ну, не тягни вже. Ворушися&quot;.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        У 90% випадків ніхто не відмовить вам у пораді чи допомозі, якщо запит сформульовано чітко та по
                        суті. А коли починають розтікатися мислію по древу з купою формальностей ніби-ввічливості та
                        зайвими подробицями, то навіть слухати й читати це все лінь.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Мінімізуйте кількість слів, просто формулюйте ваші прохання/запити, щоб їх легко було читати й
                        відповідати.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href="/blog/articles/kiss-emails" target="_blank" rel="noreferrer"><i>KISS</i></a> наше все.
                    </p>
                </div>
            </div>


            <div className={styles.articleEvenSection}>
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
