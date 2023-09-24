import React from 'react';

import styles from './styles.module.scss';
import FollowMeBlock from '../../blog/FollowMeBlock/FollowMeBlock';

export default function SeniorEmailLevel() {
  const customStyles = {
    socialSectionContent: styles.socialSectionContent,
  };

  return (
    <div className={styles.testResultMessage}>
      <p className={styles.messageCenter}>
        High five!
      </p>
      <p className={styles.messageCenter}>
        Nice to e-meet you, an effective emailer!
      </p>
      <p>&nbsp;</p>
      <p>
        Your emails seem to be modern and effective enough. Hurray!
      </p>
      <p>&nbsp;</p>
      <p>
        It looks like you&apos;ve got the idea of how to craft compelling email texts that are easy to read and reply to
        and
        attempt to write like a human, not Chat GPT. You understand that busy people want short emails and that less is
        a new more.
        You implement this knowledge by making every word work for you and deleting everything that brings no value to
        your readers.
        You apply Plaing English principles, utilise the KISS trend, and manage to keep your focus on your reader and
        respect their needs.
      </p>
      <p>&nbsp;</p>
      <p>
        So, well done! Nothing more to add! Just keep on and share your super skills with others!
      </p>

      <p>&nbsp;</p>
      <FollowMeBlock
        showTitle={false}
        customStyles={customStyles}
      />
    </div>
  )
}





