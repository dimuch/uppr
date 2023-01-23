import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from "next/legacy/image";

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';


export default function WatchingCartoonsInEnglishTangled({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>
                        Вчимося з Рапунцель
                    </h2>

                    <p className={styles.articleText}>
                        Цього разу мова піде про чудову, як на мене, екранізацію казки братів Грім - Рапунцель, Tangled
                        в
                        Діснеївському варіанті. Заплутана історія розповідає про долю дочки короля, яка мала довге
                        волосся,
                        наділене чарівною силою.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/watching_cartoons_in_english_tangled_5.jpg"
                               width="1400" height="425"
                               alt="Tangled"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        Варто було лише дівчині заспівати:
                    </h3>

                    <p className={styles.articleText}>
                        Flower gleam and glow.
                        <br/>
                        Let your powers shine.
                        <br/>
                        Make the clock reverse.
                        <br/>
                        Bring back what once was mine.
                        <br/>
                        Heal what has been hurt.
                        <br/>
                        Change the fates&apos; design.
                        <br/>
                        Save what has been lost.
                        <br/>
                        Bring back what once was mine,
                        <br/>
                        What once was mine…
                    </p>

                    <div className={styles.articleIframeContainer}>
                        <iframe src="https://www.youtube.com/embed/ZU0KZWn4MAw" allowFullScreen/>
                    </div>

                    <p className={styles.articleText}>
                        як будь-яка рана зцілювалася. А ще її волосся допомагало підтримувати вічну молодість, за що
                        Рапунцель ще
                        немовлям і викрала зла Готель та закрила у високій темній вежі. Раз на рік через вікно своєї
                        кімнати
                        принцеса бачить ліхтарики, які щорік в день її народження запускає в небо король та королева, з
                        надією
                        знайти свою доньку. Побачити ті ліхтарики наживо і стає мрією Рапунцель, яку вона здійснює за
                        допомогою
                        злодюжки Фліна Райдера.
                    </p>

                    <p className={styles.articleText}>
                        Ось такий сюжет.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        І що ж можна вивчити з даного мультфільму?
                    </h3>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <h3 className={`${styles.articlePhrase}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        Як мінімум декілька варіантів як називати блондинок:).
                        <br/>
                        <br/>
                        Flynn Rider: All right, <b style={{color: '#172d4c'}}>Blondie</b>.
                        <br/>
                        Flynn Rider: <b style={{color: '#172d4c'}}>Goldie</b>, look at this!
                    </h3>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/watching_cartoons_in_english_tangled_1.jpg"
                               width="1400" height="425"
                               alt="Tangled"
                        />
                    </div>

                    <h3 className={styles.articleSubSubTitle}>
                        I&apos;m just teasing!
                    </h3>

                    <p className={styles.articleText}>
                        Саме слово звучить досить часто як і сама дія - герої постійно підтрунюють один над одним, а
                        найбільше звісно
                        дістається - Рапунцель.
                    </p>

                    <p className={styles.articleText}>
                        Як від матінки:
                        <br/>
                        <b>Mother Gothel:</b> Rapunzel, please, stop with the mumbling. You know how I feel about the
                        mumbling. Blah blah
                        blah blah blah, it&apos;s very annoying! I&apos;m just <b>teasing (підтрунювати), you&apos;re adorable (ти
                        чарівна/мила).</b> I
                        love you so much, darling.
                        <br/>
                        <br/>
                        <b>Mother Gothel:</b> Look in that mirror. I see a strong, confident, beautiful young lady.
                        <br/>
                        <i>[Rapunzel smiles]</i>
                        <br/>
                        <b>Mother Gothel:</b> Oh look, you&apos;re here too.
                        <br/>
                        <br/>
                        <b>Rapunzel:</b> So Mother, earlier I was saying tomorrow is a really big day, and you didn&apos;t
                        really
                        respond, so I&apos;m just gonna tell you: IT&apos;S MY BIRTHDAY! Tada!
                        <br/>
                        <b>Mother Gothel:</b> No no no, can&apos;t be. I distinctly remember, your birthday was last year.
                        <br/>
                        <b>Rapunzel:</b> That&apos;s the funny thing about birthdays, they&apos;re kind of an annual thing.
                    </p>

                    <p className={styles.articleText}>
                        так і від Фліна:
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/watching_cartoons_in_english_tangled_3.jpg"
                               width="1400" height="425"
                               alt="Tangled"
                        />
                    </div>

                    <p className={styles.articleText}>
                        <b>Rapunzel:</b> I have made the decision to trust you.
                        <br/>
                        <b>Flynn Rider:</b> A horrible decision really.
                        <br/>
                        <br/>
                        <b>Rapunzel:</b> Something brought you here, Flynn Rider. Call it what you will... fate...
                        destiny...
                        <br/>
                        <b>Flynn Rider:</b> A horse.
                    </p>

                    <p className={styles.articleText}>
                        Хоч і самому Фліну дістається від його &qout;колег&qout;
                        <br/>
                        <b>Hook Hand Thug:</b><i>[to Rapunzel]</i> Go. Live your dream.
                        <br/>
                        <b>Flynn Rider:</b> I will.
                        <br/>
                        <b>Hook Hand Thug:</b> Your dream stinks. I was talking to her.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        І звісно ж у фільмі безліч чудових діалогів з англійською “на щодень”:
                    </h3>

                    <p className={styles.articleText}>
                        <b>Flynn Rider:</b> <u>Let me just get this straight</u> (давай прояснимо ситуацію - вживається,
                        щоб показати своє
                        розуміння ситуації), I take you to see the lanterns, bring you back home, and you&apos;ll give me
                        back my satchel?
                        <br/>
                        <b>Rapunzel:</b> I promise.
                        <br/>
                        <i>[Flynn looks at Rapunzel suspiciously]</i>
                        <br/>
                        <b>Rapunzel:</b> And when I promise something, <u>I never ever break that promise</u> (я ніколи
                        і нізащо (нізащо в житті) не
                        порушую обіцянок).
                        <br/>
                        <i>[Flynn still looks suspicious]</i>
                        <br/>
                        <b>Rapunzel:</b> EVER!
                        <br/>
                        <b>Flynn Rider:</b> All right, listen! I didn&apos;t want to have to do this, but you leave me no
                        choice. Here comes the <u>smolder</u> (навіть не знаю як перекласти, sexually attractive face –
                        пропонуйте ваші варіанти).
                        <br/>
                        <i>[Flynn puts on a pout, hoping to charm Rapunzel. She just looks at him sternly]</i>
                        <br/>
                        <b>Flynn Rider:</b> This is kind of an off-day for me. This doesn&apos;t normally happen.
                        <br/>
                        <i>[gives in]</i>
                        <br/>
                        <b>Flynn Rider:</b> Fine! I&apos;ll take you to see the lanterns.
                        <br/>
                        <b>Rapunzel:</b> <i>[gasps]</i> Really?
                        <br/>
                        <i>[She jumps in excitement, letting go of the chair Flynn is tied to. He falls on his face]</i>
                        <br/>
                        <b>Rapunzel:</b> Oops.
                        <br/>
                        <b>Flynn Rider:</b> <i>[weakly]</i> You broke my smolder.
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/watching_cartoons_in_english_tangled_6.jpg"
                               width="1400" height="425"
                               alt="Rio"
                        />
                    </div>

                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={`${styles.articlePhrase}`}
                        style={{color: `#${articleData.article_color}`}}
                    >
                        And are you a bother? – hope not!)))
                    </h3>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <p className={styles.articleText}>
                        <b>Rapunzel:</b> <i>[sobbing]</i>
                        <br/>
                        <b>Flynn Rider:</b> <i>[clears throat]</i> You know, <u>I can&apos;t help but notice</u> (не міг не
                        помітити) you seem a little at war with yourself here.
                        <br/>
                        <b>Rapunzel:</b> What?
                        <br/>
                        <b>Flynn Rider:</b> Now, <u>I&apos;m only picking up bits and pieces here</u> (уривки всяка всячина),
                        of course. Overprotective
                        mother, forbidden road trip. I mean, this is serious stuff. But <u>let me ease your
                        conscience</u> (заспокоїти
                        совість). This is part of growing up. A little rebellion, a little adventure, that&apos;s good.
                        Healthy, even.
                        <br/>
                        <br/>
                        <i>[brushes Pascal off his shoulder]</i>
                        <br/>
                        <br/>
                        <b>Rapunzel:</b> <i>[chuckles]</i> You think?
                        <br/>
                        <b>Flynn Rider:</b> I know. You&apos;re way over thinking this, trust me. Does your mother deserve
                        it? No. Would this
                        break her heart and crush her soul? Of course. But you&apos;ve just got to do
                        it.
                        <br/>
                        <b>Rapunzel:</b> Break her heart?
                        <br/>
                        <b>Flynn Rider:</b> <i>[plucks grape off vine]</i> In half.
                        <br/>
                        <b>Rapunzel:</b> Crush her soul?
                        <br/>
                        <b>Flynn Rider:</b> <i>[squeezes grape]</i> Like a grape.
                        <br/>
                        <b>Rapunzel:</b> <u>She would be heartbroken</u> (вбитий горем). You&apos;re right.
                        <br/>
                        <b>Flynn Rider:</b> I am, aren&apos;t I? Oh, <u>bother</u> (зануда).
                        <br/>
                        <br/>
                        <i>[sighs]</i>
                        <br/>
                        <br/>
                        <b>Flynn Rider:</b> All right. I can&apos;t believe I&apos;m saying this, but <u>I&apos;m letting you out of
                        the deal.</u> (я
                        звільняю тебе від твоєї обіцянки/ домовленості)
                        <br/>
                        <b>Rapunzel:</b> <i>[catches on to what he&apos;s trying to do]</i> What?
                        <br/>
                        <b>Flynn Rider:</b> That&apos;s right, but don&apos;t thank me. Let&apos;s turn around and get you home. Here&apos;s
                        your pan, here&apos;s your frog.
                        <br/>
                        <i>[hands her pan and Pascal and puts arm around her]</i>
                        <br/>
                        <b>Flynn Rider:</b> I get back my satchel and you get back a mother-daughter relationship based
                        on mutual trust, and violà, <u>we part ways</u> (розійтися розлучитися) as unlikely friends.
                        <br/>
                        <b>Rapunzel:</b> <i>[pushes Flynn away]</i> No. I am seeing those lanterns.
                        <br/>
                        <b>Flynn Rider:</b> Oh, come on! What is it going to take for me to get my satchel back
                        <br/>
                        <b>Rapunzel:</b> <i>[holds up frying pan]</i> I will use this.
                    </p>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        У мультику також є безліч чудових пісень.
                    </h3>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Наприклад, можна <a href="/assets/downloads/rapunzel_i_see_the_light_wrongwords.pdf"
                                            target="_blank">
                        послухати та виправити слова товстим шрифтом
                    </a> (Увага! Не всі слова неправильні).
                    </p>

                    <div className={styles.articlePicture}>
                        <Image src="/assets/images/blog-articles/watching_cartoons_in_english_tangled_4.jpg"
                               width="1400" height="425"
                               alt="Rio"
                        />
                    </div>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        А ця <a href="/assets/downloads/rapunzel_I've_got_a_dream.pdf" target="_blank">
                        пісня хоч і складна для сприйняття з першого разу, але досить мотивуюча</a>, тому можу
                        запропонувати вписати
                        мрію кожного з персонажів сюди.
                    </p>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        Разом з Tangled можуть навчатися і діти.
                    </h3>

                    <p className={`${styles.articleText} ${styles.articleLink}`}>
                        Наприклад, ця <a href="/assets/downloads/rapunzel_when_will_my_life_begin.pdf" target="_blank">пісенька
                        допоможе весело та наглядно вивчити домашню роботу та хобі!</a>
                    </p>

                    <div className={styles.articleIframeContainer}>
                        <iframe src="https://www.youtube.com/embed/ZU0KZWn4MAw" allowFullScreen/>
                    </div>
                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h3 className={styles.articleSubSubTitle}>
                        Отже, приємного перегляду and don&apos;t freak out!
                    </h3>

                    <p className={`${styles.articleText}`}>
                        <b>Flynn Rider:</b> So! You&apos;re being strangely cryptic as you wrap your magic hair around my injured hand.
                        <br/>
                        <b>Rapunzel:</b> Sorry! Just, don&apos;t... don&apos;t <u>freak out</u> (психонути/запанікувати).
                        <br/>
                        <b>Flynn Rider:</b> <i>[eyes widen in anticipation of what is about to happen]</i>
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
    )
};
