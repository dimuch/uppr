import React from 'react';

import styles from '../../components/articles/commonArticleStyles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import Author from '../blog/Author/Author';
import Slider from '../blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';

export default function AcronymsWhichYouShouldUseInEmails({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Англійська в стилі KISS. Акроніми 2</h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Продовжу раніше написаний&nbsp;
                        <Link href="/blog/articles/english-in-KISS-style" target="_blank">
                            пост про абревіатури
                        </Link>,
                        як один з супер інструментів для передачі ідей коротко та просто.
                    </p>

                    <p className={styles.articleText}>
                        Про акроніми у діловому листування можна написати книгу, не те що два пости. Але ми обмежимося
                        більш-менш адекватними та вживаними звичайними смертними, а не акронім-фріками, які знають, що
                        значить WEG ( Wicked Evil Grin) та YYSSW (Yeah Yeah Sure Whatever). Хоча, хто зна, може це якась
                        особлива таємна мова, вигадана для того, щоб лист ніхто не зрозумів, або і не читав, бо
                        задовбешся "гуглити" уже на другій лінійці.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Але, давайте повернемося до наших баранів, тобто акронімів,
                        актуальних у бізнес імейлінгу
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/acronyms_which_you_should_use_in_emails_1.jpg"
                               width="1400"
                               height="425"
                               alt="Акроніми актуальні у бізнес імейлінгу"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        EOM та NRN
                    </h3>

                    <p className={styles.articleText}>
                        <b>EOM</b> (End of Message) та <b>NRN</b> (No Reply Needed/Necessary) - чудові акроніми, які
                        вбережуть вас від пустих імейлів-відповідей в стилі OK! Sounds good! No problem! Thanks for
                        informing!
                    </p>

                    <p className={styles.articleText}>
                        EOM пишуть в кінці теми листа як сигнал про те, що не потрібно відкривати лист взагалі.
                        Економить час усім;).
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Meeting moved to 3 pm, same room. <b>EOM</b>
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        LET
                    </h3>

                    <p className={styles.articleText}>
                        <b>LET</b> (Leaving Early Today) інформує коворкерів про те, що усі питання до вас та з вами
                        повинні бути вирішені раніше вказаного часу.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Subject line: <b>LET</b>
                            <br/>
                            <br/>
                            Hey, I’m leaving at 3 pm for a doctor. Reach out before if you need something.
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        PRB EOD - ???
                    </h3>

                    <p className={styles.articleText}>
                        <b>PRB EOD</b>- прохання відповісти уже нарешті)), особливо корисний, коли потрібно діяти в
                        умовах обмеженого часу.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hey, can you take a look at this update, please? Need to send to the customer EOD.
                            <br/>
                            <b>PRB</b> 5 pm if you get the chance.
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        HTH
                    </h3>

                    <p className={styles.articleText}>
                        <b>HTH</b> (Hope That Helps) – чудова та, головне, коротка відповідь на подяку за вашу допомогу.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            No Problem! <b>HTH!</b>
                            <br/>
                            <br/>
                            Thanks for your feedback yesterday! I seriously needed it. It made the project so much
                            easier with your guidance.
                        </p>
                    </div>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/acronyms_which_you_should_use_in_emails_4.jpg"
                               width="1400"
                               height="425"
                               alt="Акроніми актуальні у бізнес імейлінгу"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        WFH
                    </h3>

                    <p className={styles.articleText}>
                        <b>WFH</b> (Working From Home) - для повідомлення колег, що ви сьогодні працюєте віддалено
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Hey all,
                            <br/>
                            <br/>
                            I’ll be <b>WFH</b> today and tomorrow. My 3-year-old has a nasty flu and sticking around to
                            help him out.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>А у випадку імейла-опуса ...</h2>

                    <h3 className={styles.articleSubSubTitle}>
                        TLTR
                    </h3>

                    <p className={styles.articleText}>
                        <b>TLTR</b> (Too Long Too Read) – коли читати довжелезний лист колеги не має часу, а допомогти
                        ви не проти.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            <b>TLTR.</b> I’m happy to help, just on a tight deadline.
                            <br/>
                            <br/>
                            Can you summarize what you need from me and how I can help?
                        </p>
                    </div>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/acronyms_which_you_should_use_in_emails_3.jpg"
                               width="1400"
                               height="425"
                               alt="Акроніми актуальні у бізнес імейлінгу"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        TL;DR
                    </h3>

                    <p className={styles.articleText}>
                        <b>TL;DR</b> (Too Long; Didn’t Read) - корисна абревіатура, коли ви все-таки не втрималися на
                        написали
                        імейл-опус, а переписувати не має ні сил, ні часу. Щоб читач не загубився в хащах деталей, а то
                        і взагалі проігнорував цю купу символів - ставимо TL; DR; та пишемо коротке самері листа!
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            <b>TL;DR.</b> Can you guys please share this survey to help us get feedback from our users?
                            <br/>
                            <br/>
                            So, I have a lot of ideas how we can improve communication. Firstly, we need to …
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        Y/N - Yes or No?
                    </h3>

                    <p className={styles.articleText}>
                        <b>Y/N - Yes or No?</b> – ваш читач оцінить можливість відповіcти на імейл однією літерою.
                        Використовуйте, якщо вам достатньо або ствердної, або заперечної відповіді на запитання.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            <br/>
                            So we’re good to launch this now or postpone everything to Thursday? <b>Y/N</b>
                            <br/>
                        </p>
                    </div>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/acronyms_which_you_should_use_in_emails_5.jpg"
                               width="1400"
                               height="425"
                               alt="Акроніми актуальні у бізнес імейлінгу"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        LMK
                    </h3>

                    <p className={styles.articleText}>
                        <b>LMK</b> (Let Me Know) - неформальний спосіб закінчити імейл, прохання, висловити свою думку.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Wanna get coffee tomorrow at that new cafeteria around the corner?
                            <br/>
                            I heard their сupcake are amazing.
                            <br/>
                            <b>LMK</b>
                        </p>
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        TYT
                    </h3>

                    <p className={styles.articleText}>
                        <b>TYT</b> (Take Your Time) – використовується, коли вам потрібен фідбек, але не терміново.
                    </p>

                    <div className={styles.frameWithExampleAndTitle}>
                        <p className={styles.exampleTitle}>Наприклад</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            Ok thank you so much. Whenever you get to it is fine.
                            <br/>
                            <b>TYT</b>
                            <br/>
                            No problem. I’ll take a look at hit before the day is over.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Але, пам&apos;ятаємо, що ціль – спростити, а не заплутати адресата.
                    </p>
                    <p className={styles.articleText}>
                        Які з цих акронімів Ви використовуєте? Що популярно серед Ваших колег?
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
