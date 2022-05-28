import React from 'react';

import styles from '../../components/articles/commonArticleStyles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Tags from '../../components/blog/Tags/Tags';
import Author from '../blog/Author/Author';
import Slider from '../blog/Slider/Slider';

export default function FourStickyWorkSituations({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <div className={styles.titleWrapper}>
                    <div className={styles.titleContent}>
                        <h1 className={styles.title}
                            style={{color: `#${articleData.article_color}`}}>{articleData.title}</h1>
                        <p className={styles.shortMessage}>
                            {articleData.description}
                        </p>
                    </div>
                    <div className={styles.titleImage}>
                        <div className={`${styles.categoryBadge}`}
                             style={{backgroundColor: `#${articleData.category.color}`}}>
                            <Link href={`/blog?search=${articleData.category.name}`}>
                                {`${articleData.category.name}`}
                            </Link>
                        </div>
                        <Image src={articleData.image} width="700" height="400"/>
                        <Tags items={articleData.tags}/>
                    </div>
                </div>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>20 годин в тиждень на імейли!?</h2>
                    <p className={styles.articleText}>
                        Комунікація - справа не з простих, і 30% робочого часу витрачених на спілкування через
                        електронну пошту, як заявляє McKinsey, тільки зростає. Для мене цифра свого часу наблизилась
                        до 50%. А це далеко не саме бажане часо-проводження ні для мене, ні для мого роботодавця.
                    </p>

                    <p className={styles.articleText}>
                        Тому прийшлося приймати міри, і першим кроком до оптимізації мого інбоксу, стало складання
                        шаблонів.
                    </p>

                    <p className={styles.articleText}>
                        Хоч я і не прихильник шаблонів та стандартизації, але і винаходити велосипед кожного разу і
                        намагатися написати &quot;ідеальний&quot; імейл (а його, як відомо, не існує), теж не найкраще
                        рішення.
                    </p>
                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Ось, що я зазвичай пишу, коли виникає досить складна і делікатна, але повторювана ситуація на
                        роботі.
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/four_sticky_situations_1.jpg" width="1400"
                               height="425"/>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        #1 Колега продовжує повторювати одну і ту саму помилку
                    </h3>

                    <p className={styles.articleText}>
                        Знайоме таке?
                    </p>

                    <p className={styles.articleText}>
                        Особливо дратує, коли ви з колегою обговорювали це сотні разів, а віз і нині там. Але ж ви
                        не думаєте, що ваш колега просинається зранку і думає: &quot;А давай я зроблю свою улюблену
                        помилку
                        ще раз сьогодні?&quot; Звісно, ні! Але помилки мають здатність накопичуватися, перетворюючись не
                        просто в снігову кулю, а у завали, які вам приходиться розгрібати!
                    </p>

                    <p className={styles.articleText}>
                        Отже, якщо хтось ненавмисно продовжує робити одну і ту саму помилку, спробуйте йому (їй)
                        написати:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hi there,
                            Sorry to say but [the mistake] we discussed came up again. It caused the team/me[effect 1,
                            effect 2, effect 3], which was not ideal/disappointing.
                            <br/>
                            <br/>
                            Do you have any additional questions I can answer to help you correct this in the
                            future/Is there anything standing in the way of being able to do this?
                            <br/>
                            <br/>
                            Please let me know, and I’d be happy to help.
                            [Your Name]
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        #2 Колега не дотримується дедлайну (уже вкотре) лист?
                    </h3>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/four_sticky_situations_4.jpg" width="1400"
                               height="425"/>
                    </div>

                    <p className={styles.articleText}>
                        Що ви напишете їй/йому? Чи промовчите? Чи поскаржитеся босу/HRу?
                    </p>

                    <p className={styles.articleText}>
                        Дійсно, скаржитися босу чи HRу - не по дорослому, і почуття колеги травмувати теж не хочеться,
                        але і робота має бути зроблена. Тому, якщо ви уже надіслали безвідповідальній та непунктуальній
                        колезі пару натяків в стилі &quot;Давай, ворушись!&quot;, але нічого не міняється, то саме час
                        для більш
                        прямого &quot;стусана&quot;:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hi there,
                            <br/>
                            As we’ve discussed earlier, I, being in charge of [project] for [client], can’t complete
                            it without [missing part].
                            <br/>
                            I’m still missing the following from you:
                            <br/>
                            - [Task 1]
                            <br/>
                            <br/>
                            - [Task 2]
                            <br/>
                            <br/>
                            - [Task 3]
                            <br/>
                            <br/>
                            To get the project done, I need this by [date] at the absolute latest. If you need help
                            completing something or there’s an obstacle standing in the way, please let me know, so
                            we can find a solution.
                            <br/>
                            <br/>
                            [Name]
                        </p>
                    </div>

                    <p className={styles.articleText}>
                        І пам’ятайте, що також важливо ще раз запропонувати допомогу – можливо, ваш(а) колега все-таки
                        не злісний порушник дедлайнів, а він/вона також зав&apos;язані на чиєсь рішення, чи чекають
                        згоди,
                        щоб діяти.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Як не працювати по вечорах та на вихідних?
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/four_sticky_situations_2.jpg" width="1400"
                               height="425"/>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        #3 Як не перепрацювати
                    </h3>

                    <p className={styles.articleText}>
                        П&apos;ятниця, друга половина дня. Ви з філіжанкою смачної кави уже напів-розслаблені будуєте
                        плани на вихідні. А тут лист від боса. Ви … мало не поперхнулися кавою. Якомога швидше потрібно
                        зробити стоп&apos;ятсот тасків (звісно, усі термінові та важливі), але і засиджуватися допізна
                        чи працювати на вихідних немає ніякого бажання.
                    </p>

                    <p className={styles.articleText}>
                        Як полегшити собі життя, виглядати професійно і не нахамити босу (хоч так хочеться:))?
                        <br />
                        Пишемо:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Thanks for your email, [name].
                            <br/>
                            I’ll get started on this instantly. But in order to get back to you promptly, could you, please, help me prioritize the list below?
                            <br/>
                            As I see it, [task] is the most urgent?
                            <br/>
                            Are any of the items just nice-to-have?
                            <br/>
                            I expect it will take me [X days/hours] to pull this together, which may delay [other project].
                            <br/>
                            <br/>
                            Let me know as soon as you can, please.
                        </p>
                    </div>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/four_sticky_situations_3.jpg" width="1400"
                               height="425"/>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        #4 Довгий незрозумілий імейл.
                    </h3>

                    <p className={styles.articleText}>
                        Ще одна ситуація - від вас хочуть допомоги, відповіді на запитання чи прийняття рішення. Але ви
                        уже вдесяте перечитуєте імейл і не можете зрозуміти про що взагалі йдеться: відсутній контекст
                        чи певна інформація.
                    </p>

                    <p className={styles.articleText}>
                        Як прояснити ситуацію?
                        <br />
                        Пишемо:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Thanks so much for your email, [name].
                            <br/>
                            <br/>
                            Can you please give me a little more context on the situation here, and send over
                            [the information about or data necessary to answer]? Once I have it, I’ll be able to respond.
                        </p>
                    </div>

                    <p className={styles.articleText}>
                        Такий лист можете сміливо надсилати навіть вашому босу :))).
                    </p>

                    <p className={styles.articleText}>
                        Отже, адаптуйте, персоналізуйте та використовуйте!
                    </p>

                    <p className={styles.articleText}>
                        Чи доводиться писати відповіді на такі імейли? В яких ще делікатних ситуаціях опиняєтеся на роботі?
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={`${styles.footerContainer}`}>
                    <Author data={articleData}/>
                    <Slider data={articleData.relevantArticles}/>
                </div>
            </div>
        </div>
    )
};
