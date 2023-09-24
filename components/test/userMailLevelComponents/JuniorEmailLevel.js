import React from 'react';

import styles from './styles.module.scss';
import FollowMeBlock from '../../blog/FollowMeBlock/FollowMeBlock';

export default function JuniorEmailLevel() {
  const customStyles = {
    socialSectionContent: styles.socialSectionContent,
  };

  return (
    <div className={styles.testResultMessage}>
      <p className={styles.messageCenter}>
        Oops, it could be better, honestly.
      </p>
      <p>&nbsp;</p>
      <p>
        You still try to impress your readers by using:
      </p>
      <ul>
        <li>formal writing</li>
        <li>long sentences</li>
        <li>exhaustive vocabulary</li>
        <li>complex language</li>
        <li>passive voice.</li>
      </ul>
      
      <p>
        But this just doesn’t work in today’s business world, where the main aim is to get things done. We have to solve
        problems, clarify issues, propose new strategies, negotiate deals, report updates. To do this, we need to get
        our ideas across quickly and clearly.
      </p>
      <p> So, the advice here is to start using:</p>
      <ul>
        <li>less formal writing</li>
        <li>shorter sentences</li>
        <li>simpler words</li>
        <li>clear and concise language</li>
        <li>active voice.</li>
      </ul>
      
      <p>
        Even if you see colleagues and bosses write “Please find attached”, “Please be informed”, “Kindly be advised,”
        and “above mentioned”, etc., do not follow suit. Times change, and so should the business emails.
      </p>
      <p>&nbsp;</p>
      <p className={styles.messageCenter}>
        Subscribe to improve your emailing skills
      </p>

      <FollowMeBlock
        showTitle={false}
        customStyles={customStyles}
      />
    </div>
  )
}





