import React from 'react';

import styles from '../../components/articles/commonArticleStyles.module.scss';
import Image from "next/legacy/image";
import Link from 'next/link';

import Author from '../blog/Author/Author';
import Slider from '../blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';

export default function FilmsOnEnglishKingsSpeech({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Не задоволенням єдиним ;)</h2>

                    <p className={styles.articleText}>
                        Про те, що для <i>English learners</i> потрібно та мега корисно дивитися фільми мовою оригіналу,
                        і як власне
                        це “правильно” робити, написано уже безліч постів та статей.
                    </p>

                    <p className={styles.articleText}>
                        Але що ж саме дивитися?
                    </p>

                    <p className={styles.articleText}>
                        Як відомо, про смаки не сперечаються, тому дивитися можна все, від чого ви:
                    </p>

                    <ol className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                отримаєте задоволення;
                            </p>
                        </li>
                        <li className={styles.discList} style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText} style={{color: `#${articleData.article_color}`}}>
                                збагатите свій вокабуляр розмовною лексикою (не задоволенням єдиним ;)).
                            </p>
                        </li>
                    </ol>

                    <p className={styles.articleText}>
                        На мій суб’єктивний смак, і так, що, обидва вище зазначені пункти виконувалися найкраще, підійде - &quot;Король говорить!&quot;
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        <span style={{color: `#${articleData.article_color}`}}>
                            Один - з Down Under, допомагає іншому, який на усіх дивиться down.
                        </span>
                    </h2>

                    <p className={`${styles.articleText}`}>
                        3 серпня 1939 після того як Британія оголосила війну Німеччині король Георг VI звертається
                        наживо по радіо
                        до мільйонів співвітчизників по всьому світу (George VI addressed millions - оригінал звернення
                        короля).
                        Здавалося б, що тут такого? Усі королі виголошують промови? Але Альбер, герцог Йоркський
                        (майбутній Георг VI),
                        страждає від нервового заїкання, проте знаходить в собі сили протистояти цьому недоліку і
                        звертається до
                        логопеда. (Бачите, над своєю англійською працюють навіть королі, то і нам - простим смертним, не
                        завадило
                        б ;);) ).
                    </p>

                    <p className={`${styles.articleText}`}>
                        Логопеда (не успішного Австралійського актора, на ім’я Лайонел, який підробив документи та
                        заробляє, працюючи в
                        Лондоні терапевтом) зіграв неперевершений Джефрі Раш, який в тандемі з Коліном Фертом, з їх
                        бездоганною грою та вимовою,
                        ще раз доводять, що можливо знімати хороші фільми без спец-ефектів та графіки.
                    </p>

                    <p className={`${styles.articleText}`}>
                        Парадокс полягає ще в тому, що Австралію, як Британську колонію, було прийнято називати <b>Down
                        Under</b>
                        (дивлячись на карту, вона і дійсно знаходилася внизу і під (Британією)). І от один - з Down
                        Under,
                        допомагає іншому, який на усіх дивиться down.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Британська вимова, та культура, аристократизм та манірність, продумані діалоги та монологи...
                    </h2>

                    <p className={styles.articleText}>
                        Але повернемося до власне фільму. Британська вимова, менталітет, культура, аристократизм та
                        манірність,
                        продумані діалоги та монологи - усе це роблять фільм ідеальним для перегляду та вдосконалення
                        вашої англійської.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/films_on_english_kings_speech_4.jpg"
                               width="1400" height="425"
                               alt="Британська вимова, та культура, аристократизм та манірність, продумані діалоги та монологи..."
                        />
                    </div>

                    <p className={styles.articleText}>
                        Фільм також наповнений чудовим саркастичним гумором та самоіронією.
                    </p>
                    <p className={`${styles.articleText} ${styles.frame}`}
                       style={{borderColor: `#${articleData.article_color}`}}>
                        <b>King George VI:</b> My physicians said it relaxes the... the... the throat.
                        <br/>
                        <b>Lionel Logue:</b> They&apos;re idiots.
                        <br/>
                        <b>King George VI:</b> They&apos;ve all been<b>knighted</b> (посвяти у лицарі).
                        <br/>
                        <b>Lionel Logue:</b><i>[sarcastic]</i> Makes it official, then.
                        <br/>
                        <br/>
                        <b>Lionel Logue:</b> Oh, surely a prince&apos;s brain knows what its mouth&apos;s doing?
                        <br/>
                        <b>King George VI:</b> You&apos;re not... well acquainted with royal princes, are you?
                        <br/>
                        <br/>
                        <b>Lionel Logue:</b> Would I lie to a prince of the realm to win twelve pennies?
                        <br/>
                        <b>King George VI:</b> I have no idea what an Australian might do for that sort of money.
                        <br/>
                        <br/>
                    </p>

                    <p className={styles.articleText}>
                        Чи про королівську сім’ю та “царювання”;)):
                    </p>

                    <p className={`${styles.articleText} ${styles.frame}`}
                       style={{borderColor: `#${articleData.article_color}`}}>
                        <b>King George VI:</b> We&apos;re not a family, we&apos;re a firm.
                        <br/>
                        <b>King George VI:</b> In the past, all a King had to do was look respectable in uniform and not
                        fall off
                        his horse. Now we must invade people&apos;s homes and ingratiate ourselves with them. This
                        family&apos;s been reduced
                        to those lowest, basest of all creatures. We&apos;ve become actors!
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/films_on_english_kings_speech_5.jpg"
                               width="1400" height="425"
                               alt="Британська вимова, та культура, аристократизм та манірність, продумані діалоги та монологи..."
                        />
                    </div>

                    <p className={styles.articleText}>
                        Також не можу обійти увагою чудові вправи, які можуть допомогти покращити вимову та фонетику не
                        тільки
                        королю (ну, ви знаєте про що я)!
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        My game, my turf, my rules. Or do you have a &quot;hubby&quot; ?
                    </h2>

                    <p className={styles.articleText}>
                        My game, my turf, my rules – суто британська фраза, яку і нам варто вивчити та діяти відповідно,
                        і тоді
                        нестрашно буде розмовляти ні з герцогами, ні з королями.
                    </p>

                    <p className={`${styles.articleText} ${styles.frame}`}
                       style={{borderColor: `#${articleData.article_color}`}}>
                        <b>Lionel Logue:</b> Well, we need to have your <b>hubby</b>(муженьок) <b>pop by</b>(заглянути).
                        Uh,
                        Tuesday would be good. He can give me his personal details, I&apos;ll make a frank appraisal, and
                        then we&apos;ll
                        take it from there.
                        <br/>
                        <b>Queen Elizabeth:</b> Doctor, forgive me, ah... I don&apos;t have a <b>&quot;hubby&quot;</b>, we
                        don&apos;t <b>&quot;pop&quot;</b>, and
                        nor do we ever talk about our private lives. No, you must come to us.
                        <br/>
                        <b>Lionel Logue:</b> I&apos;m sorry, Mrs. Johnson - my game, my turf, my rules.
                    </p>

                    <p className={styles.articleText}>
                        А ще ви вивчите як ввічливо (по-королівськи) відмовитися від обіду:
                    </p>

                    <p className={`${styles.articleText} ${styles.frame}`}
                       style={{borderColor: `#${articleData.article_color}`}}>
                        <b>Myrtle Logue:</b> Will their Majesties be staying to dinner?
                        <br/>
                        <b>Queen Elizabeth:</b> We&apos;d love to - <b>such a treat</b> (так приємно) - but, ah... alas, a...<b>
                        previous engagement</b> (попередня домовленість). What a pity.
                    </p>

                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>Bloody well</h2>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/films_on_english_kings_speech_1.jpg"
                               width="1400" height="425"
                               alt="Bloody well"
                        />
                    </div>

                    <p className={styles.articleText}>
                        І точно вивчите слово <b>bloody</b>, а також ще декілька лайливих фраз англійською. Без цього
                        жодної мови не
                        буває.
                    </p>

                    <p className={`${styles.articleText} ${styles.frame}`}
                       style={{borderColor: `#${articleData.article_color}`}}>
                        <b>King George VI:</b> All that... work...<b>down the drain</b> (коту під хвіст:)) ). My own...
                        b... brother, I couldn&apos;t say a single w-word to him in reply.
                        <br/>
                        <b>Lionel Logue:</b> Why do you stammer so much more with David than you ever do with me?
                        <br/>
                        <b>King George VI:</b> Cos you&apos;re b...<b>bloody well paid</b> to listen (тобі до біса добре
                        платять;)).
                        <br/>
                        <b>Lionel Logue:</b> Bertie, I&apos;m not a geisha girl.
                        <br/>
                        <b>King George VI:</b> Stop trying to be so <b>bloody clever</b> (до біса розумний).
                        <br/>
                        <b>Lionel Logue:</b> What is it about David that stops you speaking?
                        <br/>
                        <b>King George VI:</b> What is it about you that <b>bloody well</b> makes you want to go on
                        about it the whole <b>bloody time?</b>
                        <br/>
                        <b>Lionel Logue:</b> Vulgar, but fluent; you don&apos;t stammer when you swear.
                        <br/>
                        <b>King George VI:</b> Oh, <b>bugger off</b>(котися звідси, гуляй, чеши звідси, пішов геть)!
                        <br/>
                        <b>Lionel Logue:</b> Is that the best you can do?
                        <br/>
                        <b>King George VI:</b> <i>[like an elocution lesson]</i> Well...<b>bloody bugger to you </b>,
                        you<b> beastly bastard</b>.
                        <br/>
                        <b>Lionel Logue:</b> Oh, a public school <b>prig</b> (педант, формаліст, зануда) could do better
                        than that.
                        <br/>
                        <b>King George VI:</b><b>Shit. Shit, shit, shit, shit, shit, shit, shit, shit, shit, shit, shit,
                        shit!</b>
                        <br/>
                        <br/>
                        <b>Lionel Logue:</b> Please, call me Lionel.
                        <br/>
                        <b>King George VI:</b> No, I... prefer Doctor.
                        <br/>
                        <b>Lionel Logue:</b> I prefer Lionel. What&apos;ll I call you?
                        <br/>
                        <b>King George VI:</b> Your Royal Highness. And... Sir... after that.
                        <br/>
                        <b>Lionel Logue:</b> That&apos;s a little bit formal for here, I prefer names.
                        <br/>
                        <b>King George VI:</b> Prince Albert Frederick Arthur... George
                        <br/>
                        <b>Lionel Logue:</b> How about Bertie?
                        <br/>
                        <b>King George VI:</b> Only my family uses that.
                        <br/>
                        <b>Lionel Logue:</b> Perfect. Here, it&apos;s better <b>if we&apos;re equals</b> (якщо ми на рівних).
                        <br/>
                        <b>King George VI:</b> If, uh...<b>if we were equals</b>, I wouldn&apos;t... be here. I&apos;d be at...
                        at... home with my wife, and<b>no one would... give a damn</b> (усім буде наплювати).
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Але і без формальних словечок теж не обійшлося.
                    </h2>

                    <p className={`${styles.articleText} ${styles.frame}`}
                       style={{borderColor: `#${articleData.article_color}`}}>
                        <b>Lionel Logue:</b> Long pauses are good: they add solemnity(важність, урочистість) to great
                        occasions.
                        <br/>
                        <b>King George VI:</b> Then I&apos;m the solemnest king who ever lived.
                        <br/>
                        <br/>
                        <b>King George VI:</b> Waiting for me to... commence a conversation (почати розмову), one can
                        wait rather a long wait.
                        <br/>
                        <br/>
                        <b>King George VI:</b> Because you&apos;re peculiar (характерний, незвичний, особливий).
                        <br/>
                        <b>Lionel Logue:</b> I take that as a compliment.
                    </p>

                    <p className={`${styles.articleText} `}>
                        Але звісно - це далеко не все.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/films_on_english_kings_speech_2.jpg"
                               width="1400" height="425"
                               alt="Але і без формальних словечок теж не обійшлося."
                        />
                    </div>

                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        Також не можу втриматися, щоб не опублікувати діалог зв свого улюбленого епізоду - зустріч
                        дружини Лайонела
                        з королівською парою.
                    </p>
                    <p className={`${styles.articleText} ${styles.frame}`}
                       style={{borderColor: `#${articleData.article_color}`}}>
                        <b>King George VI:</b> Logue, we can&apos;t stay here all day.
                        <br/>
                        <b>Lionel Logue:</b> Yes, we can.
                        <br/>
                        <b>King George VI:</b> Logue.
                        <br/>
                        <b>Lionel Logue:</b> I need to wait for the right moment.
                        <br/>
                        <b>King George VI:</b> Logue, you&apos;re being a coward.
                        <br/>
                        <b>Lionel Logue:</b> You&apos;re damn right.
                        <br/>
                        <b>King George VI:</b> Get out there, now!
                        <br/>
                        <i>[the two men go into the next room, where Myrtle Logue has just met the Queen Consort]</i>
                        <br/>
                        <b>Lionel Logue:</b> Hello, Myrtle, darling.
                        <br/>
                        <i>[He kisses her]</i>
                        <br/>
                        <b>Lionel Logue:</b> You&apos;re early. Oh, I believe you two...
                        <br/>
                        <i>[indicating the Queen]</i>
                        <br/>
                        <b>Lionel Logue:</b> ...have met, but I don&apos;t think you know... King George VI.
                        <br/>
                        <b>King George VI:</b> It&apos;s very nice to meet you.
                    </p>

                    <p className={styles.articleText}>
                        А якщо вирішили подивитися фільм повністю, робіть це з користю.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/films_on_english_kings_speech_3.jpg"
                               width="1400" height="425"
                               alt="Але і без формальних словечок теж не обійшлося."
                        />
                    </div>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Послухайте промову короля та &nbsp;
                        <a href="https://drive.google.com/file/d/1SZ8utIJtgujsb1Uv3x0LNeh_9LMPU8D6/view"
                           target="_blank" rel="noreferrer"
                        >
                            заповніть пропуски
                        </a>
                    </p>

                    <p className={styles.articleText}>
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/AHY2UzOonig" allowFullScreen="" />
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        <a href="https://drive.google.com/file/d/1PxDaN_2CqVVTxBxPAhXmu131sg1fZiyF/view"
                           target="_blank" rel="noreferrer"
                        >
                            Робимо вправи
                        </a>
                        &nbsp;
                        після перегляду
                    </p>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А для любителів того, що називається dive into читайте також:
                    </p>

                    <ul className={`${styles.articleList} ${styles.articleLink} ${styles.discList}`}>
                        <li style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                <a href="www.telegraph.co.uk/culture/film/8223897/The-Kings-Speech-the-real-story.html" target="_blank" rel="noreferrer">
                                    The King&apos;s Speech: the real story
                                </a>
                            </p>
                        </li>
                        <li  style={{color: `#${articleData.article_color}`}}>
                            <p className={styles.articleText}>
                                <a href="www.telegraph.co.uk/culture/film/oscars/7155251/Colin-Firth-interview-for-A-Single-Man.html"
                                   target="_blank" rel="noreferrer"
                                >
                                    Інтерв’ю
                                </a>
                            &nbsp;
                            з Коліном Фертом
                            </p>
                        </li>
                    </ul>

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
