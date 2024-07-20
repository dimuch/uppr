import React from 'react';
import Image from 'next/image';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function BullshitFreeSalesEmails({ articleData }) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Що ж зробити, щоб зменшити кількість bullsh*t?
                    </h2>

                    <h3 className={styles.articleSubSubTitle}>
                        1. Усвідомити, що sales - це не про вас, а про них.
                    </h3>

                    <p className={styles.articleText}>
                        Вашому клієнту (prospect) навряд чи цікаві деталі про вашу компанію чи якась хитромудра
                        “продаюча” історія від ще одного гуру сторітелінгу. Що важливо почути, так це те, що ваша
                        компанія може зробити для них, які їх насущні проблеми може вирішити.
                    </p>


                    <h3 className={styles.articleSubSubTitle}>
                        2. Зробити домашку.
                    </h3>

                    <p className={styles.articleText}>
                        Так, і тут теж її потрібно робити. Я не кажу витрачати години часу на один лист одному клієнту,
                        але зробити дещо персоналізованим та конкретним імейл даному клієнту — варто. Інакше все, що ви
                        пишете — це просто пальцем в небо. І буде, як в кейсі, що мені недавно розповіли, коли стажер
                        відділу продажу намагався продати компанії Adobe продукт 1С. 🤦‍
                    </p>

                    <p className={styles.articleText}>
                        Тим більше, персоналізованість в імейлах — це завжди показник, що ви <i>do care</i>
                        і розбираєтеся в темі, а не просто копіпейстите імена з бази.
                    </p>


                    <h3 className={styles.articleSubSubTitle}>
                        3. Дотримуватися принципу Less Is Always More.
                    </h3>

                    <p className={styles.articleText}>
                        Цей принцип якнайкраще і найвдаліше підходить під <i>sales emails</i>, де не працює “чим більше,
                        тим краще”. Багато можна дати тим, хто просить або потребує, а в ситуації з <i>sales
                        emails</i> — з точністю до навпаки.
                    </p>

                    <p className={styles.articleText}>
                        Тому що ви даєте непрошену інформацію, інформацію без запиту, а це — зазіхання на чужий час та
                        ментальну енергію. Це, як з чужим домом: стукають перш ніж зайти.
                    </p>

                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Основна помилка — одразу намагатися щось продати.
                    </h2>

                    <p className={styles.articleText}>
                        Насправді, писати <i>sales emails</i> набагато складніше, ніж інші. Бо у вас немає жодних
                        відносин з читачем (але це причина не спробувати їх встановити).Тому основна помилка — одразу
                        намагатися щось продати в імейлі. Як мета резюме отримати не роботу, а запрошення на співбесіду,
                        так і мета <i>sales email</i> — розпочати діалог з потенційним клієнтом.
                    </p>

                    <p className={styles.articleText}>
                        Те, що в назві перше слово <i>sales</i>, зовсім не означає, що потрібно намагатися одразу
                        продавати. Є ще й друга частина — <i>email</i>, що є, по суті, комунікацією, діалогом,
                        розмовою/бесідою.
                    </p>

                    <p className={styles.articleText}>
                        Недарма виникла фраза <i>sell</i> without being salesy. Здогадуєтеся про
                        етимологію <i>salesy</i>?
                    </p>

                    <p className={styles.articleText}>
                        Тому, коли пишете <i>sales</i> emails, постійно питайте себе, чи отримаю я відповідь, яка стане
                        початком sales-діалогу?
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Будьте скромніші. 😉
                    </h2>

                    <p className={styles.articleText}>
                        І це питання допоможе уникнути ще однієї типової помилки — занадто амбіційного CTA. Тобто, в
                        першому ж імейлі одразу просити про зустріч, телефонний дзвінок чи годину/півгодини часу. Або
                        ваші листи пише Обі-Ван Кенобі, або шансів отримати від сучасної зайнятої людини півгодини часу
                        для <i>sales</i> pitch практично немає.
                    </p>

                    <p className={styles.articleText}>
                        Тому будьте скромніші. 😉
                    </p>

                    <p className={styles.articleText}>
                        Скромність, як на мене, йде другою після поваги основною рисою успішного <i>sales manager</i>.
                    </p>

                    <p className={styles.articleText}>
                        Замість того, щоб вимагати приділити час, попросіть просто відповісти на ваш імейл, що і стане
                        початком діалогу. А згодом і зустрічі.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        І трохи практики.
                    </h2>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Типовий <i>sales bullshit</i> виглядає приблизно так:</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Dear [Name],
                            <br/>
                            X is a fast developing management consultancy company that helps organizations like yours to
                            increase profit by reducing common overhead costs.
                            <br/>
                            <br/>
                            We generally work with companies that:
                            <br/>
                            Suspect that their costs are not optimal, but can not see the reason behind this.
                            <br/>
                            …..
                            <br/>
                            …..
                            <br/>
                            <br/>
                            And we know how to help you decrease 20% of your overhead costs without losing existing
                            relationships, and without making use of specific vendors.
                            <br/>
                            I realize you may not have time to discuss this now, but I&apos;d be happy to share some
                            thoughts
                            when you can find an hour or so.
                            <br/>
                            I was planning on calling you, [name], in a week. Let me know when would be good, or maybe
                            we can set it up via email.
                            <br/>
                            Thank you for your consideration. I look forward to speaking with you.
                            <br/>
                            <br/>

                            Sincerely,
                            <br/>
                            [contact info]
                        </p>
                    </div>

                    <p className={styles.articleText}>
                        Але як ми вже з’ясували, більше не означає краще. І функція першого <i>sales email</i> — не
                        переконати клієнта <i>take action</i>, а лише клікнути на <i>REPLY</i>, показавши зацікавленість
                        і бажання дізнатися більше про продукт чи послугу. Ось той момент, де відчиняються двері і
                        з’являються можливості будувати відносини і продавати.
                    </p>

                    <p className={styles.articleText}>
                        Хоч і складно запропонувати універсальний шаблон відірваний від послуги/продукту та конкретного
                        клієнта, але з мого досвіду, прочинити двері швидше допоможе щось таке:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Типовий <i>sales bullshit</i> виглядає приблизно так:</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            [Prospect name],
                            <br/>
                            <br/>
                            My company [Name of the company] has a track record of helping companies to reduce overhead
                            cost and increase cash flow. We&apos;ve recently worked with [company likely to be known to
                            prospect] and were able to reduce their expenses by 20%
                            <br/>
                            <br/>
                            If the overhead costs are something that bothers you now, I can send you a case study or a
                            more detailed description of what we do for our clients.
                            <br/>
                            <br/>
                            [Your Name]
                        </p>
                    </div>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Думаєте спрацює такий варіант?
                    </p>

                    <ul className={`${styles.articleList} ${styles.enlargedFont}`}>
                        <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
                            <p>
                                😇 sure thing!
                            </p>
                        </li>
                        <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
                            <p> 🤷‍♂️ neither here, nor there!</p>
                        </li>
                        <li className={styles.discList} style={{
 color: `#${articleData.article_color}` 
}}>
                            😈 jeezy-peezy!
                        </li>
                    </ul>

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
