import React from 'react';

import styles from '../../components/articles/commonArticleStyles.module.scss';

import Image from "next/legacy/image";

import Author from '../blog/Author/Author';
import Slider from '../blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';

export default function TenNoPhrasesForYourOwnCV({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>І ви також a self-starter with excellent communication skills?</h2>
                    <p className={styles.articleText}>
                        Отож, пропрацювавши декілька років в рекрутменті, і переглянувши тисячі (без перебільшень)
                        резюме, можу з впевненістю сказати, що є ряд слів та фраз, яких уже сил немає читати, мені,
                        принаймні;). Бо вони - практично в кожному резюме.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Не будьте папугою!</h2>

                    <p className={styles.articleText}>
                        Насправді, ваше резюме, як і профайл, на LinkedIn - це дуже хороша можливість виділитися і
                        отримати бажану роботу/ посаду/ партнерство. Тому, чому б не
                        видалити &quot;вражаючі&quot; (читай &quot;нудні&quot;)
                        фрази, які по-перше усі пишуть і по- друге, нічого по-суті не означають.
                    </p>

                    <p className={styles.articleText}>
                        Пишу цю статтю, щоб:
                    </p>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                уберегти вас від таких от &quot;подразників&quot; у вигляді пустих фраз;
                            </p>
                        </li>
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                рекрутерів - від руйнування нервових клітин.
                            </p>
                        </li>
                    </ol>

                    <p className={styles.articleText}>
                        Але звісно, як і усе решта, стаття - досить суб’єктивна, можливо інші, краще тримають себе в
                        руках та не дратуються, коли бачать ці слова та фрази.
                    </p>

                    <p className={styles.articleText}>
                        Отже, почнемо.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Коли надсилаєте резюме переконайтеся, що там не написано:
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/ten_no_phrases_for_your_own_CV_1.jpg"
                               width="1400"
                               height="425"
                               alt="Усі так пишуть"
                        />
                    </div>

                    <p className={styles.articleText}>
                        <b>1.Excellent communication skills</b> - це не навик, про який потрібно говорити, це - само
                        собою
                        зрозуміло, напишу навіть must-have - хоч це слово також не менш дратує:):), тому не пишіть і
                        його в своєму резюме, навіть якщо і дуже захочеться. А ще усі використовують саме excellent,
                        ніби немає ніяких інших синонімів. І якщо ви такий чудовий комунікатор, то вигадайте і напишіть
                        нарешті щось цікавіше і інакше. Адже резюме – це теж спосіб комунікації.
                    </p>

                    <p className={styles.articleText}>
                        <b>2.Hardworking.</b> Усі зараз hardworking, і як це вимірюється? Характеристика, до якої не
                        можна
                        застосувати критерії, не несе ніякої цінності для роботодавця. І чомусь мені кожного разу, коли
                        бачу це слово, згадується вислів Стіва Джобса про те, що працювати потрібно не 8 годин, а
                        головою. Хоча, можливо, саме це мають на увазі ті, хто називають себе hardworking
                    </p>

                    <p className={styles.articleText}>
                        <b>3.Results-driven, result-oriented/ result focused.</b> Замість того, щоб розповідати, що ви
                        орієнтуєтеся на результат, краще розкажіть безпосередньо про самі результати. Нехай цифри
                        говорять про ваші результати, а не слова. І взагалі, намагайтеся писати
                        поменше &quot;води&quot;, і
                        побільше конкретики.
                    </p>

                    <p className={styles.articleText}>
                        <b>4.Detail-oriented.</b> ОК, а як ви взагалі працюєте, якщо не звертаєте увагу на деталі? Кожен
                        професіонал просто мусить звертати увагу на деталі, інакше не можливо досягти професіоналізму -
                        це не те, про що навіть варто згадувати.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/ten_no_phrases_for_your_own_CV_2.jpg"
                               width="1400"
                               height="425"
                               alt="Detail-oriented"
                        />
                    </div>

                    <p className={styles.articleText}>
                        <b>5.Team player</b>. Якщо це не компанія однієї людини (а це досить рідке явище), то вам у
                        будь-якому
                        випадку потрібно буде працювати з людьми. Краще ніж писати про те, що ви чудовий командний
                        гравець, напишіть, яких результатів вам вдалося досягти працюючи з іншими людьми. Опишіть свою
                        історію успіху - можливо зекономити кошти чи ресурси, чи отримати вигідний контракт? А ще,
                        інколи, пишуть team player with leadership abilities – facepalm тут. По-перше, це - дещо
                        суперечливо, по-друге – якщо про лідерство ніде не згадано в описі вакансії, то краще утриматися
                        від акцентування на цю характеристику.
                    </p>

                    <p className={styles.articleText}>
                        <b>6.Leadership abilities.</b> Якщо все таки компанія шукає когось з лідерськими задатками -
                        опишіть
                        конкретний приклад, коли ви продемонстрували ці навики і що було досягнуто.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/ten_no_phrases_for_your_own_CV_3.jpg"
                               width="1400"
                               height="425"
                               alt="Leadership abilities"
                        />
                    </div>

                    <p className={styles.articleText}>
                        <b>7.Creative.</b> Такі слова як creative,innovative, та exceptional – це лише ваша власна думка
                        про вас
                        самих і дані якості ніяк не виміряти. + Хорошим критерієм буде, чи вживатимете такі слова про
                        себе під час співбесіди? Як показує практика, швидше за все, при особистому спілкуванні, люди
                        більш скромні;). Я, взагалі, не проти самопіару, але все-таки, в резюме досягнення та факти
                        повинні говорити за людину, а не просто красиві, але пусті, нічим не підкріплені слова.
                    </p>

                    <p className={styles.articleText}>
                        <b>8.Punctual.</b> Це чудово, що ви - пунктуальні, але насправді, це - базовий навик і для одних
                        професій, наприклад, вчителя – це те, що саме собою зрозуміло, а для скажімо ІТ компанії -
                        взагалі байдуже у більшості випадків, тому не марнуйте місце у вашому резюме.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/ten_no_phrases_for_your_own_CV_4.jpg"
                               width="1400"
                               height="425"
                               alt="Leadership abilities"
                        />
                    </div>

                    <p className={styles.articleText}>
                        <b>9.Responsible for…</b> Читаючи це, одразу на думку спадає образ якогось посереднього
                        робітничка,
                        який без натхнення, автоматично виконує щось, бо так написано в посадовій інструкції - не більше
                        і не менше. Якщо ви були відповідальним за щось - це зовсім не означає, що ви щось робили.
                        Відповідальність вам &quot;нав’язала&quot; компанія. Напишіть краще, що ви конкретно робили,
                        використовуючи сильні дієслова managed, led, arranged. Замість того, щоб писати Responsible for
                        training interns ..., просто напишіть Trained interns ...
                    </p>

                    <p className={styles.articleText}>
                        <b>10.Microsoft Word.</b> Навик роботи з компом та різними програмами - це також базовий навик
                        про який
                        немає сенсу писати.
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Cпеціально для ІТ-шників
                    </h2>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articlePhrase} style={{color: `#${articleData.article_color}`}}>
                        Хоч і мала написати всього 10. Не можу втриматися і не написати ще одне &quot;слово&quot; –
                        спеціально для
                        ІТ-шників – ninja / unicorn / rock-star. Ще і досі зустрічаються ті, хто про себе так думає і
                        пише –
                        можливо на зорі ІТ це і було круто писати, але зараз це просто спішно!
                    </h3>
                </div>

            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Щось я розігналася, але насправді мушу вас заспокоїти, звісно, ніхто не відкидає кандидатів
                        тільки
                        через те, що вони надішлють стандартне чи нудне резюме, і супер професіонали можуть
                        виявитися не
                        супер резюме райтерами.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articlePhrase} style={{color: `#${articleData.article_color}`}}>
                        Отже, як для вас нелегким завданням є написати резюме чи пройти співбесіду, так і для ейчара -
                        розібрати кіпу резюме (з них мінімум 80% непідходящих) і не зійти з розуму.
                    </h3>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Але вказані слова та фрази настільки часто зустрічаються, що вони уже повністю вичерпали себе,
                        віджили, і уже не несуть того змістовного навантаження, яке повинні нести. Відповідно, не
                        допоможуть виділитися з натовпу інших кандидатів. Це просто пусті слова, які марнують час,
                        простір та зусилля. А досвід потрібно показувати досягненнями.
                    </p>
                </div>

                <h3 className={styles.articleSubSubTitle}>
                    Тому, давайте жити дружно і поважати час один одного!
                </h3>

            </div>


            <div className={styles.articleOddSection}>
                <div className={`${styles.footerContainer}`}>
                    <div style={{width: '20%'}}>
                        <Author data={articleData}/>
                    </div>
                    <div style={{width: '80%'}}>
                        <Slider data={articleData.relevantArticles} slideWidth={'35%'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
