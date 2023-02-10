import React from 'react';
import Image from 'next/image';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function CaptainObviousIsWriting({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        &quot;Спасибі, Кеп!&quot;
                    </h2>

                    <p className={styles.articleText}>
                        Як і в коміксах, в імейлах Капітану характерні банальні висловлювання, аксіоми та прописні
                        істини, які він з розумним обличчям намагається донести &quot;тупеньким&quot; адресатам.
                    </p>

                    <p className={styles.articleText}>
                        Баг виявляє себе в простих і навіть безневинних на перший погляд речах:
                    </p>
                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.discList}`}>
                            <p className={styles.articleText}>
                                <i>️I received your email of [date]</i>,
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <a href="https://t.me/emailingskills/203" target="_blank" rel="noreferrer"><i>I am
                                    writing to</i></a>,
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <a href="/blog/articles/junk-phrases-in-emails" target="_blank" rel="noreferrer"><i>I
                                    want to inform you</i></a>,
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>I have a question to ask</i>
                            </p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        Але має тенденцію ускладнюватися, як от, наприклад, в цьому уривку з апдейту проекту:
                    </p>
                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>Last week we made the first release</i>.
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>It was done on time in accordance with the plan, which means we met all customer
                                    requirements</i>.
                            </p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        А от, наприклад, як наш Кеп переносить зустріч:
                        <br/>
                        <i>Unfortunately, I am unavailable tomorrow and can offer to shift our meeting to 12 or 15
                            April. Please confirm if any of these dates are Ok for you or suggest any other date that is
                            more convenient. From my side both dates are available.
                        </i>
                    </p>

                    <p className={styles.articleText}>
                        Ну, що тут скажеш, крім &quot;Спасибі, Кеп!&quot;.
                    </p>

                    <p className={styles.articleText}>
                        Впізнати Капітана досить легко, йому притаманна:
                    </p>
                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                очевидність месиджу
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                повтор (або багаторазовий повтор) одного і того ж
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                багатослівність
                            </p>
                        </li>
                    </ul>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/captain_obvious_is_writing_2.jpg"
                            width="1400"
                            height="425"
                            alt="Спасибі, Кеп!"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}/>
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Насправді Кеп має ще й дві варіації — Штірліц та Вінні-Пух.
                    </p>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Перший пише короткими (через низький рівень англійської та страх напартачити) чіткими реченнями
                        з високим ступенем занудності.
                    </p>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А у Вінні й рівень англійської вище, й месиджі більш філософські, тому інколи навіть можуть
                        здаватися оригінальними (аби не їх очевидність).
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <i style={{color: `#${articleData.article_color}`}}>In my last email, I promised to give you a
                            discount of 15%. This is not possible now. Sorry about that, but not everything depends on
                            me</i> — аргументує, точніше думає, що аргументує, Штірліц.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <i style={{color: `#${articleData.article_color}`}}>Please, give me your feedback about how
                            convenient the suggested options are for you or provide
                            your variant, which is more convenient for you</i> — потурбується про клієнта Вінні.
                    </p>
                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Улюблена фішка Капітана — заходити здалеку.
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <i>As agreed before - our next session should take a place on Friday at noontime</i>(як не
                        нагадати? Усі ж забули, крім Капітана, і інвайта в календарі ні в кого немає), <i>but our legal
                        department informed me</i> (дуже важлива інформація, без неї ніяк) <i>that their representative
                        [Name] will be absent during this time, due to his business trip to Thailand</i> (навіщо це
                        клієнту знати? Мабуть, щоб запитати, чи представник зможе по zoom приєднатися?). <i>So my offer
                        is to postpone this date?</i> (нарешті, дочекалися основного).
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/captain_obvious_is_writing_3.jpg"
                            width="1400"
                            height="425"
                            alt="Улюблена фішка Капітана — заходити здалеку."
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}/>
                    </div>

                    <p className={styles.articleText}>
                        А ще Капітан — мастак знімати з себе відповідальність, особливо у разі фейлу. Прикриваючись
                        розумними фразочками, пасивними конструкціями або постійними виправданнями.
                    </p>

                    <p className={styles.articleText}>
                        <i>&quot;I understand your dissatisfaction — I also didn’t expect such a delay. But a lot of people
                            are involved in the process and much depends on their productivity&quot;</i>, — пояснює клієнту
                        пропущений дедлайн. І байдуже, що таким чином паказує і свою некомпетентність, головне — не бути
                        винним!
                    </p>

                    <p className={styles.articleText}>
                        <i>&quot;I think some information about the project status was missed from my side&quot;</i>, — констатує
                        Капітан після втику, що не надіслав клієнту апдейт по проекту вчасно. Що
                        тут <i>think?</i> Зацікавлені й так знають і бачать. Плюс пасив — <i>information was
                        missed</i> (ну, звісно це не він, це все обставини) — ще міцніше закріпить статус Капітана за
                        таким імейлером.
                    </p>

                    <p className={styles.articleText}>
                        А ось один з недавніх перлів:<i>&quot;Sorry, but not everything depends on me&quot;</i>, — пише Капітан,
                        пояснюючи підвищення ціни клієнту.
                    </p>
                    <p className={styles.articleText}>
                        Дуже зручно, правда?
                    </p>
                    <p className={styles.articleText}>
                        Для компаній імейлери з таким багом небезпечні тим, що вони будують відносини з клієнтом за
                        рахунок іміджу та авторитету компанії. &quot;Я б з радістю і знижку, і кращі умови, і сервіс, але
                        вони…&quot;. <i>I would love to help you, but surely, I cannot influence the total cost of the
                        project</i>.
                    </p>

                    <p className={styles.articleText}>
                        <i>&quot;Your project has been already labelled as a priority for our team by top management&quot;</i>, —
                        напишуть вони, коли щось пішло не так. З найкращими намірами завірити клієнта в пріоритетності
                        його проекту, але не здогадуючись, що тим сами показують: раніше цей проект пріоритетом не був.
                    </p>

                    <p className={styles.articleText}>
                        <i>&quot;I had a complete mess with tasks last week, therefore didn&apos;t have a chance to send you the
                            docs&quot;</i>, — пояснює Капітан свою забудькуватість дискредитуючи компанію, де погано з
                        тайм-менеджментом та розстановкою задач.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Капітан=”виправдун”
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Капітанам притаманні також довгі виправдання. Потрібно перенести зустріч чи попросити про
                        вихідний?
                        Вони будуть розповідати довжелезні сумні історії в усіх подробицях про стоматологів, хворих
                        котів,
                        жахливі затори та дні народження бабусь, називаючи це вдалою аргументацією. І їм невтямки,
                        що все написане може і буде використано проти них.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Але коли запахне смаженим, першими запропонують зустріч та обговорення, тому що <i>Since the
                        issue is urgent we should quickly find the solution to the problem</i>. Дякую, Кеп, ми б самі не
                        здогадалися.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Але і це ненайгірше.
                    </p>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А знаєте, що найгірше в багові Капітан Очевидність? Те, як себе почувають адресати його
                        месиджів!
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Як і в коміксах, де місія супергероя допомагати знедоленим, слабким та убогим… Такими ж після
                        імейлів Кепа почуваються його адресати. Не найзавидніша роль, погодьтеся.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А всьому виною ось це постійне бажання роз&apos;яснити, підказати, наставити, допомогти, наздогнати й
                        будь-яким способом та ціною вчинити добро.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/captain_obvious_is_writing_4.jpg"
                            width="1400"
                            height="425"
                            alt="Капітан=виправдун"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}/>
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Але такий підхід скоріше викликає в адресата свідоме чи підсвідоме роздратування і відчуття, що
                        його інтелектуальними (та іншими) здібностями нехтують, не поважають.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А сам Капітан виглядає аж ніяк не завбачливим та люб&apos;язним, а нав&apos;язливим, липким та недоречним.
                    </p>
                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Ось один Капітан скидає мені посилання на інструкцію інсталювання slack після того, як
                                ми
                                домовилися поспілкуватися в цьому месенджері (дякую, я вже зо два роки ним користуюся).
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Інший пише клієнту:
                                <br/>
                                <i>I remember we agreed to have a meeting this Wednesday</i>(чудово, клієнту дуже
                                важливо знати, що у Кепа все ОК з пам&apos;яттю). <i>I cannot do this on
                                Wednesday</i> (просто
                                суперська форма спілкування з клієнтом?!). <i>Since the issue is urgent and we should
                                quickly find the solution to the problem</i> (масло масляне, було б
                                дивно <i>quickly</i> не вирішувати urgent issue) <i>I suggest having a short call
                                instead of the meeting</i> (головне — одразу повідомити, що short, Капітан же дуже
                                зайнятий). <i>As for me, I’m open for discussion in the second part of Wednesday. Can I
                                call you?</i>
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                І ще один відповідає клієнту на запит про апдейт — no comment.
                                <br/>
                                <i>The cause you didn’t receive any updates from me is the absence of them in fact.</i>
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                А ось цей взагалі, мабуть, вважає клієнта тупим — Великий Комбінатор.
                                <br/>
                                <i>It seems that a meeting is the best and the fastest way to find a common solution.
                                    But I appreciate your time so much and strive to increase the efficiency of our
                                    mutual cooperation so I would like to send you an email instead of the meeting.
                                </i>
                            </p>
                        </li>
                    </ul>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А ще їх CTA (call to action) - просто шедевральні.
                    </p>
                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>Please confirm or suggest your acceptable time.</i>
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>Here is the agenda for our coming meeting. Please write to me if you want to include
                                    more points.</i>
                            </p>
                        </li>
                    </ul>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Звісно, без вказівки Капітана ніхто б не здогадався, що так можна зробити. Що тут скажеш, просто
                        молодці, спонукають до дії.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Отже, як позбутися цього багу?
                    </h2>

                    <div className={styles.articlePicture}>
                        <Image
                            src="/assets/images/blog-articles/captain_obvious_is_writing_4.jpg"
                            width="1400"
                            height="425"
                            alt="Капітан=виправдун"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}/>
                    </div>

                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Викидайте зайве: слова, думки, ідеї. Після кожного речення запитуйте себе: а чи не знає
                                це адресат без мене? Чи можна ще коротше написати?)
                            </p>
                        </li>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Коли відповідаєте, не треба реагувати на кожну репліку.
                            </p>
                        </li>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Пам&apos;ятайте, що Гугл краще вас знає.
                            </p>
                        </li>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Розвивайте повагу до інших (повірте, що всі самі все знають, все можуть і не потрібно
                                розжовувати, рятувати та допомагати, коли не просять).
                            </p>
                        </li>
                        <li className={`${styles.numberedList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                Удосконалюйте свої навички імелійнгу. Часто цей баг з&apos;являється у невпевнених імейлерів,
                                які хоч і мають високий рівень англійської, бояться, що їх не зрозуміють, що вони не
                                чітко написали. І доповнюють, і доповнюють… Або їх високий рівень англійської просто не
                                дозволяє спинитися на простому формулюванні, треба ж усі свої знання одразу в один імейл
                                запхати.
                            </p>
                        </li>
                    </ul>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Простіше, Кеп, просто потрібно простіше!
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Помічали цей баг в своїх імейлах? Вони у вас <i>buggy чи crystal-clear?</i>
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <ArticleFooter articleData={articleData}/>
            </div>

        </div>
    );
};
