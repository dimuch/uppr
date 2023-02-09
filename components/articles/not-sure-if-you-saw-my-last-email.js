import React from 'react';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';

import styles from './commonArticleStyles.module.scss';

export default function NotSureIfYouSawMyLastEmail({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Фолоапи — кому не доводилося їх писати!?
                    </h2>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Нам <i>come hell or high water</i> потрібно щось від колеги/клієнта, робота простоює, а там
                        глухо, як на дні морському. От тоді й починається спам-обстріл фолоапами.
                    </p>

                    <p className={styles.articleText}>
                        При цьому їх ненавидять усі: й ті, хто пишуть, і ті, кому пишуть. Для перших — це подвійна
                        робота, для останніх — зайве нагадування про їх фейл і подвійне набридання чужими проблемами,
                        коли й своїх вистачає.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        І ще пів біди, коли фолоап — нормальний. Але ж більшість — уже з самого початку повний треш. От,
                        наприклад, як:
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>1. Per my last email</b> — про цей шедевр я <a
                        href="/blog/articles/stupid-emails-introductions" target="_blank" rel="noreferrer">вже
                        писала</a>.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>2. Per our conversation</b> — те саме, що й попереднє
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>3. Not sure if you saw my last email/probably you missed my last email</b> — це взагалі
                        жах.
                    </p>

                    <p className={styles.articleText}>
                        Окрім того, що це брехня і прикидання (адже ви чудово знаєте, що імейл бачили, але просто не
                        відповіли/проігнорили/не вчиталися/відклали на потім, але побачили!), ця фраза ще й одразу видає
                        неадекватну самооцінку автора. В глибині душі ви знаєте, що то ігнор, але пишете, щоб заспокоїти
                        своє Еґо, що &quot;ні, вас не могли проігнорити (таких, як ви, не ігнорять), просто не побачили
                        імейл&quot;.
                    </p>

                    <p className={styles.articleText}>
                        І тому доводиться виправдовувати іншу сторону, але це виправдання не стільки для них, як для
                        себе.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>4.</b> Ще особливо талановиті вигадали іншу відмазку і самозаспокоєння — <b>maybe my email
                        got in
                        spam</b>.
                    </p>

                    <p className={styles.articleText}>
                        Камон, це ж не <i>cold email,</i> і то шанси потрапити в спам, якщо ви пишете з нормальної
                        адреси та з адекватною темою дуже низькі.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>5.</b> Інша супернеадекватна фраза, якою часто починають фолоап — <b>sorry for the double
                        email.</b>
                        <br/>
                        І це disrespect так писати, до того ж дуже нахабний, незважаючи на
                        вибачення. <i>&quot;Sorry&quot;</i> — слово, яке вживається, коли ви зробили щось погане ненавмисно. А тут
                        виходить так: ще не зробив, і знаю, що це неправильно, але однаково зроблю, бо мені дуже треба.
                        Просто вибачуся, я ж ввічлива людина.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Може, як наперед розумієте, що чините неправильно, то не варто цього робити взагалі? На думку не
                        спадає? І до того ж це виглядає зухвало й егоїстично — якщо я вибачаюся, то можу робити що
                        завгодно, так виходить? І після того ви ще сподіваєтеся, що на ваш початковий імейл звернуть
                        увагу і дадуть відповідь? Оце логіка!
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>6. Any updates on this?</b>
                        <br/>
                        Пам&apos;ятаєте, якось я про запити в космоc писала? Так-от, це — один з них. Який ви апдейт хочете?
                        Про що? Апдейт — це коли щось відбувалося, був екшен, діяльність на ваше прохання. А якщо вас
                        ігнорять,
                        то який апдейт? Про що ви? До того ж таким зверненням ви показуєте, що маєте на думці, ніби
                        екшен на
                        ваше прохання вже був. Самовпевнено, чи не так? Це в стилі <a
                        href="/blog/articles/thanks-in-advance" target="_blank" rel="noreferrer">thanks in advance</a>.
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <b>7. Just checking in.</b>
                        <br/>
                        Якщо ви ще досі не позбулися цього <a href="/blog/ten-odd-words-in-emails" target="_blank"
                                                              rel="noreferrer">применшувального &quot;just&quot;</a>, то саме
                        час. <i>&quot;Just&quot;</i> завжди має <i>&quot;no biggie&quot;</i> підтекст. Так, воно ніби саме лізе у початок
                        фолоапу, нікуди дітися. Якщо ви написали прохання, звернення чи запит, то це вже показало, що
                        вам більше треба, а фолоап — це ваша нужда у квадраті. І в таких випадках хочеться або зайняти
                        позицію зверху (нагрубіянити, нагадати, що не відповіли, вимагати), або знизу (наприклад, за
                        допомогою just). Натомість варто максимально рівно реагувати, але про це згодом.
                    </p>

                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>Just checking in to see ...</i>
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>Thought I would just check in and find out ...</i>
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>Just wanted to check in to hear about …</i>
                            </p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        Ось усі ці <i>&quot;just checking in</i>— благальне &quot;Не ігнорте мене, мені справді потрібна ваша
                        відповідь!&quot;
                    </p>

                    <p className={styles.articleText}>
                        <b>8</b>. Сircling back.
                    </p>

                    <ul className={`${styles.articleList}`}>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>I’m circling back to see if you’ve had a chance to think about this.</i>
                            </p>
                        </li>
                        <li className={`${styles.discList}`}>
                            <p className={`${styles.articleText} ${styles.articleLink}`}>
                                <i>Just circling back on my last message.</i>
                            </p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        Тут ось яка пастка: по-перше, воно настільки жаргонне, що вже належить до категорії &quot;усіх
                        дістало&quot;. По-друге, створює образ, ніби ви постійно ходите по колу зі своїми спробами здобути
                        відповідь. Не дуже приємно, чи не так?
                    </p>

                    <p className={styles.articleText}>
                        Насправді від фолоапів нікуди не подітися. Вони — важлива частина бізнес-комунікації, навіть
                        необхідна в деяких випадках. Просто потрібно припини писати їх в претензійному тоні,
                        використовуючи пасивно-агресивну лексику, і вони перейдуть на новий рівень. І cherry on top: чим
                        кращі фолоапи ви буде складати, тим менше доведеться їх взагалі писати!
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
