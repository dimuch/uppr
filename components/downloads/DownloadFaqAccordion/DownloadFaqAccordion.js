import React, { useState } from 'react';
import loader from '../../common/loader/loader';
import { Box, Typography } from '@mui/material';
import { useHasMounted } from '../../common/hooks/hasMounted';
import Accordion from './components/Accordion';
import AccordionSummary from './components/AccordionSummary';
import AccordionDetails from './components/AccordionDetails';

import styles from './styles.module.scss';

const fourthSectionStyles = {
//
//   .screenFourthWrapper {
//   position: relative;
//   background-color: #f6f9fc;
// }
//   .screenFourth {
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   max-width: 68rem;
//   margin: auto;
//   padding: 2rem 0 3rem;
//
// .sectionCaption {
//     padding: .5rem 0 1rem;
//     margin: auto;
//   }
//
// .faqsItems {
//     padding: 2rem 0;
//   }
// }
}

const template = {
//   <div className={styles.screenFourthWrapper}>
//         <div className={styles.screenFourth}>
//           <h2 className={styles.sectionCaption}>Frequently Asked Questions (FAQs)</h2>
//           <div className={styles.faqsItems}>
//             <DownloadFaqAccordion/>
//           </div>
//         </div>
//       </div>
}

const DownloadFaqAccordion = ({ item }) => {
  // const hasMounted = useHasMounted();
  //
  // if ( !hasMounted ) {
  //   return null;
  // }
  //
  // const width = window.innerWidth > 875 ? Math.round(window.innerWidth / 3) : window.innerWidth;
  // const height = Math.round(width * 22 / 27);

  const [expanded, setExpanded] = useState('');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : '');
  };

  return (
    <Box className={styles.accordion}>
      <Accordion>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography
            variant={'h3'}
            sx={{
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}
          >
            Collapsible Group Item #1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={'h6'}>We will always keep your personal information safe.</Typography>
          <Typography
            sx={{
              paddingTop: '.25rem',
              paddingBottom: '1rem',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography
            variant={'h3'}
            sx={{
              paddingTop: '1rem',
              paddingBottom: '1rem',
            }}
          >
            Collapsible Group Item #2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant={'h6'}>Absolutely!</Typography>
          <Typography
            sx={{
              paddingTop: '.25rem',
              paddingBottom: '1rem',
            }}
          >
            Just sharing some free knowledge that we hope you’ll find useful. Keep us in mind next time you have
            marketing questions!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default DownloadFaqAccordion;
