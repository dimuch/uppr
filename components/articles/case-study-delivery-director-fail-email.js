import React from 'react';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function CaseStudyDeliveryDirectorFailEmail({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Ще один приклад <a href="/blog/articles/thanks-in-advance"  target="_blank" rel="noreferrer">#failemail</a>.
                    </p>

                    <p className={styles.articleText}>
                        Так-от, пише моїй колезі Delivery Director (прикро, але факт, що і на таких посадах фейлять з
                        комунікацією):
                    </p>

                    <div className={styles.frameWithExampleAndTitle}
                         style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle}
                           style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            It would be great if your recruiters ask some tech questions during the phone interview.
                            <br/>
                            <br/>
                            The suggested list is attached.
                        </p>
                    </div>

                    <p className={styles.articleText}>
                        Розберімо ситуацію. Хоч ті, хто давно читають, напевно, вже бачать кричущу неповагу, а з ним і
                        нахабство, і непрофесіоналізм, і ще один яскравий приклад &quot;неввічливої ввічливості&quot; та пасивної
                        агресії.
                    </p>

                    <h3 className={styles.articleSubSubTitle}>
                        1. It would be great if...
                    </h3>

                    <p className={styles.articleText}>
                        Так, було б класно... мабуть... вам…
                    </p>

                    <p className={styles.articleText}>
                        По-перше, що це за прохання?
                    </p>

                    <p className={styles.articleText}>
                        Це зараз в такій формі заведено просити?
                    </p>

                    <p className={styles.articleText}>
                        В обов&apos;язки рекрутерів не входить ставити тех. питання на співбесіді. Хоч і бажано, але вони не
                        зобов&apos;язані розумітися на технічних речах. А якщо і вирішать/погодяться в них розібратися,
                        витративши на це свій час та доклавши зусиль, то це тільки з власної доброї волі. А щоб
                        мотивувати цю волю, то принаймні попросити потрібно, а не диктувати, кому і що робити. А в
                        проханні класично зустрічаються такі слова, як <i>could/would you, appreciation, favour, help,
                        grateful</i> тощо
                    </p>

                    <p className={styles.articleText}>
                        Прохання в даному випадку — це і хороший тон, й ідеальна ввічливість.
                    </p>

                    <p className={styles.articleText}>
                        Подумайте, ви ж іншим людям хочете нав&apos;язати додаткові обов&apos;язки, додаткову складну нудну
                        роботу. І коли ви формулюєте не у вигляді прохання те, що насправді тільки вам потрібно, то ви
                        тільки викликаєте агресію в адресата.
                    </p>

                    <p className={styles.articleText}>
                        &quot;А не пішов би ти зі своїми списками?&quot;, — подумають, а то і скажуть вони.
                    </p>

                    <p className={styles.articleText}>
                        І думаю, що всі прекрасно розуміють, що рекрутерам малого коштує саботувати усю цю ініціативу з
                        тех.питаннями, й вона таки провалиться з тріском. Бо що їм зроблять? На хвіст солі насиплють?
                    </p>

                    <p className={styles.articleText}>
                        А коли це прохання (а в ідеалі ще + і пропозиція допомогти, роз&apos;яснити в разі необхідності), то
                        є шанс, що можуть виконати навіть охоче. І що виконуючи його, люди отримають задоволення від
                        процесу, навчаться чомусь новому, перейдуть на інший рівень, виділяться на фоні тих, хто такого
                        не практикує.
                    </p>

                    <p className={styles.articleText}>
                        І тут справа зовсім не в статусах чи посадах, а у відносинах, які напряму впливають на
                        результат. Бо все, що стосується інших людей, щоб воно було ефективним, потрібно робити з їх
                        попередньої згоди.
                    </p>

                    <p className={styles.articleText}>
                        Спілкування на рівних — це найпривабливіше та найефективніше спілкування. Це максимальний
                        ступінь поваги.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        2. The suggested list is attached.
                    </h3>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А другий рядок?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Що вже хтось згоду давав? Побігли робити, аби ти тільки сказав.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Ніяких пропозицій про допомогу, питань про згоду, про те, чи зрозумілі запитання та відповіді,
                        чи потрібно пояснити щось? Нічого. Тільки фокус на собі. То такі й результати будуть.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Ну от, як два елементарні рядки імейлу і так можна запороти?
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Хоч, насправді, справа не в <i>it would be great if you...</i>. Сама по собі фраза OK, але її
                        сприйняття буде змінюватися залежно від контексту. Звертати увагу й враховувати контекст —
                        це <i>must</i> для тих, хто хоче імейлити ефективно.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articlePhrase} style={{color: `#${articleData.article_color}`}}>
                        Is &quot;It would be great if you…&quot; a universal evil?
                    </h3>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Я не рекомендую повністю викидати фразу <i>it would be great if you...</i> з мовлення, але
                        вживати її в такому контексті, як у імейлі вище, тобто такому автору, в такій ситуації, з такими
                        читачами (при таких відносинах між ними), був фейл!
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А загалом нормальна така собі фраза (правда, дещо unconfident).
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        І якщо її написати в іншій ситуації, то звучатиме і сприйматиметься вона зовсім по-іншому.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Наприклад, ви попросили когось подивитися, скажімо, правильність фінансових розрахунків за
                        місяць. Вас запитують, на коли потрібно. Ви відповідаєте:
                    </p>

                    <div className={styles.frameWithExampleAndTitle}
                         style={{borderColor: `#${articleData.article_color}`}}>
                        <p className={styles.exampleTitle}
                           style={{backgroundColor: `#${articleData.article_color}`}}>&nbsp;</p>
                        <p className={`${styles.articleText}  ${styles.exampleText}`}>
                            It would be great if you check EBD tomorrow.
                        </p>
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        В такому імейл-діалозі до <i>It would be great if you...</i> не прискіпаєшся, навіть як би
                        хотілося. Бо є контекст, домовленості, попереднє листування, яке виправдовує вживання <i>It would be great
                        if you...</i> . А без них було б те саме, що і в ситуації з рекрутерами.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Тому, якщо ви не знаєте конкретного <a href="/blog/articles/context-is-the-king"  target="_blank" rel="noreferrer">контексту</a>,
                        про чіпляння до фраз чи слів навіть не може йти мова.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <ArticleFooter articleData={articleData}/>
            </div>

        </div>
    );
};
