import React from 'react';
import loader from '../../common/loader/loader';
import styles from './styles.module.scss';
import InstagramIcon from '../../common/icons/instagram-icon';
import FacebookIcon from '../../common/icons/facebook-icon';
import LinkedInIcon from '../../common/icons/linkedin-icon';
import TelegramIcon2 from '../../common/icons/telegram-icon-2';

export default function Author( {data} ) {
  return (
    <div className={styles.authorWrapper}>
      <div className={styles.author}>
        <div className={styles.authorImg}>
          <img
            src={loader({src: '/assets/images/others/ivanka.jpg', width: 110})}
            alt="Іванка Табачук"
            width={112}
            height={125}
          />
        </div>
        <div className={styles.authorDescription}>
          <p className={styles.authorName}>
            Іванка Табачук
          </p>
          <p>
            Допомагаю налагодити комунікацію в команді та з замовником, влаштуватися на класну роботу та бути більш ефективним у бізнес-середовищі!
          </p>
          <p>
            Вірю, що спілкування - це наше все, а <i>better communication = bigger profit</i>.
          </p>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialLink}>
          <a href="https://www.instagram.com/ivanna.tabachuk"
             target="_blank" rel="noreferrer"
          >
            <InstagramIcon/>
          </a>
        </div>
        <div className={styles.socialLink}>
          <a href="https://www.facebook.com/ivanna.tabachuk"
             target="_blank" rel="noreferrer"
          >
            <FacebookIcon/>
          </a>
        </div>
        <div className={styles.socialLink}>
          <a href="https://www.linkedin.com/in/ivannatabachuk"
             target="_blank" rel="noreferrer"
          >
            <LinkedInIcon/>
          </a>
        </div>
        <div className={styles.socialLink}>
          <a href="https://t.me/emailingskills"
             target="_blank" rel="noreferrer"
          >
            <TelegramIcon2/>
          </a>
        </div>
      </div>
      <div className={styles.authorLinks}>
          <a className={styles.authorLink}
            href="/"
             target="_blank" rel="noreferrer"
          >
            <p>
              My website
            </p>
          </a>
          <a className={styles.authorLink}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ivanka.tabachuk@gmail.com.com&su=Lets communicate&body=Hi%0AI have a question"
             target="_blank" rel="noreferrer"
          >
            <p>Email me</p>
          </a>
          <a className={styles.authorLink}
            href="/blog"
             target="_blank" rel="noreferrer"
          >
            <p>My articles</p>
          </a>
      </div>
    </div>
  );
}
