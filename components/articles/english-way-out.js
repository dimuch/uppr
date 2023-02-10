import React from 'react';
import Image from "next/image";

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function EnglishWayOut({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Невже з цим не можна нічого зробити?</h2>
                    <p className={styles.articleText}>
                        Можна. Бо правда в тому, що насправді, усі - зайняті та ліниві. Але багато хто все-таки
                        володіє англійською на достойному рівні, правда ж?
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/englishway_4.jpg"
                            width="1400"
                            height="425"
                            alt="Невже з цим не можна нічого зробити?"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        Припустимо, ми все ж таки неухильно вирішили займатися мовою. Але терпіння та мотивація
                        чомусь поступово
                        тануть, і одного дня (який зазвичай не змушує себе довго чекати;)) ми знову
                        починаємо &quot;філонити&quot;
                        - ухилятися від домашніх завдань, прогулювати /відміняти заняття, не заходити
                        в &quot;duolingo&quot;, не читати
                        телеграм канал з корисними порадами чи інстаграм з новими словами...
                    </p>

                    <p className={styles.articleText}>
                        Як виявилося, вихід є.
                    </p>

                    <p className={styles.articleText}>
                        З цією &quot;напастю&quot; можна впоратися і для цього потрібно зробити наступні кроки.
                    </p>
                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <h3 className={styles.articlePhrase} style={{color: `#${articleData.article_color}`}}>
                    &quot;Потрібно&quot;, а не &quot;хочу&quot;!
                </h3>

                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        №1: Розібратися зі своїм часом
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/englishway_1.jpg"
                            width="1400"
                            height="425"
                            alt="Потрібно, а не хочу!"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        Поставте собі запитання: чи &quot;потрібно&quot; вам вивчити англійську? Те, що
                        ви &quot;хочете&quot; її вивчити,
                        ми уже усвідомили. Але справа в тому, щоб без потреби від простого &quot;хочу&quot; час не
                        з’явиться.
                        Коли ви виясните, що вам таки &quot;треба&quot;, тоді питаємо себе, скільки часу ми готові
                        приділяти цьому
                        заняттю, наприклад, у найближчий рік. Щоб ця ідея мала позитивний результат, у вашому
                        щоденному
                        розкладі обов&apos;язково має бути відведений час саме на вивчення мови. Не викроєний, а
                        саме
                        відведений!
                    </p>

                    <p className={styles.delimiter}></p>

                    <h2 className={styles.subTitle}>
                        №2: Знайти джерела натхнення
                    </h2>

                    <p className={styles.articleText}>
                        Насправді, без натхнення нікуди. Якщо ви будете механічно повторювати правила та
                        завчати слова - це буде набагато менш ефективно, ніж ви розберете текст вашої улюбленої
                        пісні чи професійної статті,
                        яка вам сподобалася. Коли нам щось подобається, цікаво чи ми чимось щиро переймаємося, то і
                        слова ніби самі запам&apos;ятовуються і граматичні конструкції &quot;стають&quot; яснішими.
                    </p>

                    <p className={styles.articleText}>
                        Ніхто не забороняє вам використовувати у вивченні мови саме те, що мотивує конкретно вас.
                        Набридли стандартні додатки та нудні подкасти? Підпишіться на цікавий канал на YouTube чи
                        Twitter, частіше заходьте у мотивуючі блоги, читайте новини, які вам дійсно цікаві. У цій
                        справі
                        важлива регулярна практика - тому намагайтеся спеціально &quot;зіштовхуватися&quot; з мовою
                        щоденно.
                    </p>

                    <p className={styles.articleText}>
                        Ресурси на допомогу:
                    </p>

                    <ul className={styles.articleList}>
                        <li>
                            <a href="https://www.youtube.com/user/fogyog" target="_blank" rel="noreferrer">
                                Надихаючий блог дівчини, що розмовляє 5 мовами
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/fogyog" target="_blank" rel="noreferrer">
                                Цікавий сайт про все найтрендовіше у Мережі
                            </a>
                        </li>
                        <li>
                            <a href="https://www.skillshare.com" target="_blank" rel="noreferrer">
                                Крута платформа для онлайн-навчання
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/groups/849842931793374" target="_blank" rel="noreferrer">
                                Приєднуйтеся до нашої FB групи
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <h3 className={styles.articlePhrase} style={{color: `#${articleData.article_color}`}}>
                    Півгодини щодня - найкращий рецепт.
                </h3>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        №3: Завести &quot;англійську&quot; в сумці
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/englishway_5.jpg"
                            width="1400"
                            height="425"
                            alt="Півгодини щодня - найкращий рецепт"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        <b>&quot;Little strokes fell great oaks&quot;</b> - чули такий вислів?
                    </p>

                    <p className={styles.articleText}>
                        Так ось, у випадку з англійською, це теж правда. Регулярність і постійна практика - це наше
                        все у вивченні
                        іноземної мови. Лише заняттями на курсах 2 рази на тиждень у цій справі не обійтися. Дійсно,
                        набагато ефективніше вивчати мову по півгодини щодня, ніж весь день, але раз на тиждень. Щоб
                        не гаяти
                        час у черзі або на зупинці,чи в таксі по дорозі додому, підберіть цікаву та не дуже складну
                        книжку
                        (статтю/фільм, ролик) і читайте її. Кожен день.
                    </p>

                    <p className={styles.articleText}>
                        Чи змініть меню усіх ваших гаджетів на англійську та листуйтеся з друзями у
                        месенджерах &quot;in English only&quot;.
                    </p>

                    <p className={styles.articleText}>
                        Ви й не помітите, як крок за кроком, за досить короткий час набереться низка нових та
                        цікавих слів.
                        Теорія baby steps - пам&apos;ятаєте? Хочете рости та розвиватися? Оточуйте себе мовою
                        максимально!
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        №4: Усвідомити, що помилки - це нормально
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/englishway_3.jpg"
                            width="1400"
                            height="425"
                            alt="Усвідомити, що помилки - це нормально"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        Часто можна почути: У мене мовний бар&apos;єр. &quot;Я роблю багато помилок і тому соромлюся
                        говорити!&quot;
                        Але ж ви вчитеся! Говоріння англійською - це навичка, яку ми здобуваємо прикладаючи зусилля.
                        В процесі здобуття навички завжди є якісь &quot;косяки&quot; і це абсолютно ОК. Навпаки,
                        якщо
                        ви помилок не робите, це значить, що ви це уже вмієте і нічому новому не навчилися.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        №5: Заохочувати себе постійно
                    </h2>

                    <p className={styles.articleText}>
                        Не важливо, якого розміру будуть ваші успіхи - все одно помічайте свої проміжні результати і
                        хваліть себе
                        за них. (Про проміжні результати якось окремий пост напишу). Внутрішня мотивація не береться
                        з повітря -
                        над нею теж прийдеться попрацювати. За кожен випадковий діалог з іноземцем, за кожне
                        виконане
                        домашнє завдання, за вивчені нові слова, за прочитаний текст тощо. Обов&apos;язково
                        відзначайте свої
                        досягнення, пригощайте себе кавою, як мінімум 😃, чи обіцяйте подорож кудись, у разі
                        проходження нового
                        ключового етапу.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Успіхів вам! ;)
                    </h2>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <ArticleFooter articleData={articleData}/>
            </div>

        </div>
    );
};
