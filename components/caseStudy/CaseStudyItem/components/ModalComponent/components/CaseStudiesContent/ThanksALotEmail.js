import React from 'react';
import { Typography, Box } from '@mui/material';
import { useHasMounted } from '../../../../../../common/hooks/hasMounted';
import styles from './caseStudiesGenericStyles.module.scss';

const ThanksALotEmail = ({ data }) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <Box className={styles.caseStudyContent}>
      <Typography component="p">
        Отримали цінну пораду від колеги? Звісно, необхідно подякувати, й найгірше, що ви можете зробити — це похапцем
        нашкрябати “Thanks a lot”.
      </Typography>
      <Typography component="p">
        Тому, &nbsp;
        <span
          style={{
            textDecoration: 'line-through',
          }}
        >
          діємо
        </span>
        &nbsp; пишемо проактивно, щоб не відбити у інших бажання вам допомагати наступного разу 😉.
      </Typography>

      <Box>
        <div className={styles.frameWithExampleAndTitle}>
          <p className={styles.exampleTitle}>&nbsp;</p>
          <p className={`${styles.exampleText}`}>
            Hello [Name]
            <br />
            I ended up hitting [the dilemma] and wanted to share how much I appreciate your advice.
            <br />
            <br />
            So thank you so much for taking the time to answer all my questions and helping me out. Hearing your
            experience working on [something similar] was extremely helpful for me!
            <br />
            <br />
            Thanks again,
            <br />
            [Your name]
          </p>
        </div>
      </Box>
    </Box>
  );
};

export default ThanksALotEmail;
