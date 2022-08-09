import React from 'react';

import styles from '../../components/articles/commonArticleStyles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import Author from '../blog/Author/Author';
import Slider from '../blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';

export default function EnglishLearningOrNewTypeOfProcrastination({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Прокрастинація? Чому?</h2>

                    <p className={styles.articleText}>
                        Напевне ви здивуєтеся: як так? Адже навчання - це рух тільки вперед. &quot;Якщо я буду вчити
                        англійську два-три рази на тиждень на курсах чи з викладачем, тоді зовсім скоро мене не зможуть
                        відрізнити від нейтіва! Правда, в розмовний клуб мені ще ранувато, ще не всі правила знаю, та і слів
                        треба більше вивчити, і з цими, що знаю - плутаюся… Але нічого, через кілька місяців буду щебетати крутіше
                        іноземців...&quot;.
                    </p>

                    <p className={styles.articleText}>
                        <b>Тут і ховається основна помилка:</b> перфекціонізм - це не дуже корисно. У гонитві за
                        ідеальними знаннями англійської(граматикою, вимовою) можна залишитися ні з чим. Не можна зациклюватися
                        лише на знаннях граматичних правил чи списках слів - потрібно діяти і використовувати уже набуті
                        знання в реальних ситуаціях.
                    </p>

                    <p className={styles.articleText}>
                        Так, вас оточують підручники та блоги, серіали та онлайн-курси, постійно трапляються
                        історії про успішних людей, які вивчили мову всього за 3 дні тощо. Вам здається, що ви просто
                        пекельно трудитеся, - слухаєте, читаєте, пишете, запам&apos;ятовуєте… <b>Але насправді ви займаєтеся тим,
                        що навпаки утримує вас на місці.</b>
                    </p>

                    <p className={styles.articleText}>
                        Придивіться - так багато людей сьогодні вчать граматику, накопичують слова, але, коли
                        справа доходить до моменту, коли потрібно їх використовувати, навіть у найкращого студента
                        трапляється ступор. Чому так відбувається? <b>Справа в тому, що теорії замало, потрібна практика.</b>
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Не роздумуйте, дійте!</h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Що ж робити? Насправді усе дуже просто: користуйтеся мовою одразу, уже на перших заняттях
                        рівня elementary. У вас може виникнути запитання : &quot;Де ще можна вивчити англійську, крім занять
                        з викладачем, адже, як правило, цього не вистачає? Їхати за кордон?&quot;
                    </p>

                    <p className={styles.articleText}>
                        Можливості - поряд з вами:
                    </p>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>Спілкуйтеся на зустрічах</li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>Готуйте презентації</li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>Коментуйте ідеї</li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>Записуйте відео</li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>Обговорюйте теми на розмовних клубах.</li>
                    </ul>

                    <p className={styles.articleText}>
                        Лише б проговорювати вивчене. Слова повинні звучати, а не залишатися в голові.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Секрет успіху</h2>

                    <p className={styles.articleText}>
                        Щоб стати успішним, потрібно почати робити щось інакше. Звісно не завжди те, що ви знаєте
                        ідеально а теорії виглядає таким на практиці. Але якщо ви почнете практикувати, помилятися і
                        робити висновки, то ваш прогрес уже не зупинити. Саме в цей момент ви станете просуватися вперед.
                    </p>

                    <p className={styles.articleText}>
                        Не відкладайте практику на потім тільки тому, що вам потрібно вдосконалити
                        теорію. Навчаючись активно, тобто через практику, ви зекономите час та досягнете того, чого так
                        давно хотіли. Звісно, щоб зробити перший крок, потрібно бути дійсно сміливим. Але у вас усе вийде.
                        Можете навіть не сумніватися.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={`${styles.articleSubSubTitle} ${styles.articleLink}`}
                        style={{color: `#${articleData.article_color}`}}>
                        Можна в листах зустріти і TBD (To Be Determined) или TBA (To Be Announced), коли інформація по
                        термінах та даті ще не відома. Маючи на увазі відпустку, пишуть не vacation, а PTO (paid time
                        off),
                        а якщо ви плануєте взяти додатковий вихідний, то пишете OOO (Out of office). EOM ми уже
                        згадували,
                        коли говорили про тему листа. Для тих, хто пропустив -- відео&nbsp;
                        <a href="https://www.youtube.com/watch?v=robO4iCpH8A&t=1s" target="_blank" rel="noreferrer">
                            напам&apos;ятайка
                        </a>
                    </h3>
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
