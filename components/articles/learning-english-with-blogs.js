import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from "next/image";
import Link from 'next/link';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function LearningEnglishWithBlogs({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Phubbing з користю ;)
                    </h2>

                    <p className={styles.articleText}>
                        Сучасні дівайси допомагають нам перебувати он-лайн 24/7. Навіть коли ми спимо, можемо
                        прокинутися від
                        оповіщення, яке надійшло з якоїсь соціальної мережі або месенджера. Ми дійсно весь час в мережі!
                    </p>

                    <p className={styles.articleText}>
                        З одного боку, це звучить жахливо, адже здається, що часу, щоб власне жити зовсім не
                        залишається. Але
                        подивімося на це з іншого боку - можна ж не безцільно &apos;висіти&apos; в чаті або автоматично скролити
                        стрічку новин
                        Фейсбук, а ... вчитися. До того ж, робити це дуже ненудним способом - читати блоги. Англійською.
                    </p>

                    <p className={styles.articleText}>
                        От саме про мультики ми сьогодні поговоримо. Адже є багато плюсів, щоб провести вечір за чашкою
                        какао та
                        мультиком англійською. І не бійтеся впасти “в дитинство” - сучасні діснеївські, піксарівські та
                        ін.
                        мультики уже давно піднімають досить дорослі теми та нетривіальні проблеми. Тому, навіть
                        вимогливі
                        business <i>english learners</i>, знайдуть масу фраз, якими можна козирнути з клієнтами на
                        бізнес зустрічі.
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Неминуче поліпшіть свою англійську.
                    </h2>

                    <p className={styles.articleText}>
                        Часто на долю студентів випадає аналіз нудних новини з BBC, CNN, FT чи інших ресурсів
                        англійської або
                        американської прес, але така інформація далеко не для всіх є актуальною та цікавою. Та якщо ви
                        знайдете
                        іноземний блог, який цілком і повністю задовольняє ваші запити та інтереси, тоді сміливо можна
                        стверджувати - щоденне його читання зовсім скоро і неминуче покращить ваші знання мови.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/learning_english_with_blogs_1.jpg"
                            width="1400"
                            height="425"
                            alt="Неминуче поліпшіть свою англійську."
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={styles.articleText}>
                        Блог, який підходить саме вам в усьому: стилі написання, оформленні, тематиці не тільки надихне
                        вас і
                        подарує яскраві емоції, а й допоможе поповнити свій словниковий запас.
                    </p>

                    <p className={styles.articleText}>
                        Крім того, блоги корисні ще й тому, що:
                    </p>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        <li>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                забезпечують регулярну практику - звичайно, тільки якщо тема вам дійсно цікава і вам
                                хочеться читати цей блог кожен день;
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                допомагають запам&apos;ятати спеціалізовану
                                лексику - якщо це блог про кулінарію, то зовсім скоро ви станете
                                профі в знанні назв всіх круп, ягід, м&apos;яса і приправ, а якщо про підприємництво - у
                                бізнес-англійській;
                            </p>
                        </li>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                дозволяють стати грамотним - навіть не
                                маючи практики написання слів, ви самі того не відаючи, згодом
                                зможете писати їх правильно, оскільки запам&apos;ятали їх при читанні.
                            </p>
                        </li>
                    </ol>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Пропоную кілька своїх ідей
                    </h2>

                    <p className={styles.articleText}>
                        Якщо ви не знаєте з чого почати, пропонуємо вам кілька своїх ідей (ті блоги, які я читаю або
                        принаймні
                        намагаюся читати регулярно):
                    </p>

                    <h3 className={styles.articleSubSubTitle}>
                        Self-development
                    </h3>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/learning_english_with_blogs_5.jpg"
                            width="1400"
                            height="425"
                            alt="Пропоную кілька своїх ідей"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://www.grammarly.com/blog'} target="_blank" rel="noreferrer">
                            www.grammarly.com/blog
                        </a> - мій улюблений блог
                        англійською та про англійську і про нюанси граматики, про
                        те як спілкуватися в Мережі, як правильно писати. Та багато іншого. А ще Grammarly - це чудовий
                        аплікейшн для
                        перевірки граматики, стилістики та правопису.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://www.livestrong.com/blog/'} target="_blank" rel="noreferrer">
                            www.livestrong.com/blog
                        </a> - блог про
                        здорове харчування та фітнес. Тут ви знайдете поради стосовно того,
                        як краще себе почувати, що треба їсти та якими вправами займатися для підтримки здорового духу в
                        здоровому
                        тілі.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/learning_english_with_blogs_3.jpg"
                            width="1400"
                            height="425"
                            alt="Отже, самі &quot;капосні&quot; фрази у вашому листі"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://blog.todoist.com'} target="_blank" rel="noreferrer">
                            blog.todoist.com
                        </a> - блог відомого todo-сайту з порадами щодо покращення продуктивності і
                        тайм-менеджменту, планування, а також мотивуючими порадами та історіями.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://techcrunch.com'} target="_blank" rel="noreferrer">
                            techcrunch.com
                        </a> - сайт-блог ведучого
                        технологічного медіа-ресурсу, присвяченого стартапам, огляду
                        нових інтернет-продуктів і технологічним новинам.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://www.helpscout.net/blog'} target="_blank" rel="noreferrer">
                            www.helpscout.net/blog
                        </a> - блог,
                        який навчає вмінню працювати в команді, поважати колег, організовувати
                        свою роботу за допомогою сучасних продуктів і технологій, а ще - мотивувати себе та інших.
                    </p>

                    <p className={`${styles.articleText}`}>
                        На особливу увагу заслуговує також:
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/learning_english_with_blogs_2.jpg"
                            width="1400"
                            height="425"
                            alt="Отже, самі &quot;капосні&quot; фрази у вашому листі"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://tutsplus.com/tutorials'} target="_blank" rel="noreferrer">
                            tutsplus.com/tutorials
                        </a> - блог з більш ніж 20000 безкоштовних практичних статей та посібників! Просто
                        виберіть рубрику і вчіть те, про що давно хотіли дізнатися.
                    </p>

                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        Inspiration
                    </h3>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://creativemarket.com/blog'} target="_blank" rel="noreferrer">
                            creativemarket.com/blog
                        </a> - надихаючий блог з красивими оригінальними дизайнами і фотографіями, доступними для всіх.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://dooce.com/'} target="_blank" rel="noreferrer">
                            dooce.com
                        </a> - блог мами двох дітей Хезер, яка ділиться своїми розповідями про життя, роботу в
                        інтернеті, фотографіями та спостереженнями.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://www.inthefrow.com/'} target="_blank" rel="noreferrer">
                            www.inthefrow.com
                        </a> - надихаючий блог дівчини, яка відрізняється особливою любов&apos;ю і смаком до подорожей,
                        краси, їжі та моди.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://thepioneerwoman.com/'} target="_blank" rel="noreferrer">
                            thepioneerwoman.com
                        </a> - блог чарівної
                        домогосподарки Рі Драммонд, яка ділиться з читачами цікавими
                        фактами, подіями з сімейного життя, розповідає про стосунки з друзями і, звичайно, дарує смачні
                        рецепти.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/learning_english_with_blogs_4.jpg"
                            width="1400"
                            height="425"
                            alt="Отже, самі &quot;капосні&quot; фрази у вашому листі"
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href={'https://blog.italki.com/'} target="_blank" rel="noreferrer">
                            blog.italki.com
                        </a> - блог від відомої
                        соціальної мережі для вивчення іноземних мов, в якому
                        публікуються новини про команду сайту, учнів, вакансії, маленькі та великі перемоги.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={`${styles.articlePhrase} ${styles.articleLink}`}>
                        А взагалі завжди можна підписатися на різні рубрики на отримувати розсилку з цікавими статтями
                        від <a href="https://medium.com" target="_blank" rel="noreferrer">medium.com</a> і мій улюблений
                        автор на цьому ресурсі <a href="https://medium.com/@joulee">Julie Zhuo</a> -
                        Product design VP @ Facebook.
                    </h3>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={`${styles.articleText}`}>
                        Сподіваюся, моя добірка блогів припала вам до душі і ви знайшли те, що принесе вам і радість, і
                        користь. Якщо
                        ж вам більше подобається вивчати мову не в процесі читання, а в ході спілкування, ласкаво
                        просимо на заняття!
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
    );
};
