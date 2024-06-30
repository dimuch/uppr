import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import styles from './commonDownloadsStyles.module.scss';

import StyledButtonGradient from '../styled/StyledButtonGradient';
import OrangeTopRightArea from './components/DownloadDetailsBlueArea';
import DownloadDetailsWave from './components/DownloadDetailsWave';
import loader from '../../common/loader/loader';
import DownloadFaqAccordion from '../DownloadFaqAccordion/DownloadFaqAccordion';
import { CaretRight, CheckCircle, CheckFat } from '@phosphor-icons/react';
import DownloadPageExamplesSlider from '../DownloadPageExamplesSlider/DownloadPageExamplesSlider';

const bookBullets = [
  'Remind a customer of an upcoming renewal',
  'Introduce a new CSM to an existing account',
  'Reengage a disengaged customer',
  'Follow up on "Net Promoter Score" responses',
  'Highlight customer progress',
];
const ARROW_COLOR = '#4f899c';

const steps = [0, 1];
const maxSteps = steps.length;

const Ebook = ({ data }) => {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = data.downloadLink;
    link.download = `${data.caption}.pdf`;
    link.click();
  };

  return (
    <div className={styles.download}>
      <div className={styles.screenFirstWrapper}>
        <div className={styles.blueTopRightArea}>
          <OrangeTopRightArea />
        </div>
        <div className={styles.screenFirst}>
          <div className={styles.leftColumn}>
            <div className={styles.downloadChargeType}>
              <h5>{data.chargeTypeCaption}&nbsp;download</h5>
            </div>
            <div className={styles.downloadCaption}>
              <h1 className={styles.caption}>{data.caption}</h1>
            </div>
            <div className={styles.downloadDescription}>
              <p>{data.description}</p>
            </div>
            <div className={styles.downloadButton}>
              <StyledButtonGradient onClick={downloadFile}>Завантажити</StyledButtonGradient>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <img
              className={styles.downloadImage}
              src={loader({
                src: '/assets/images/downloads/guide_to_perfect_status_updates_cover.jpg',
                width: 1622,
              })}
              width={1622}
              height={2207}
              alt={data.caption}
            />
          </div>
        </div>

        <div className={styles.waveArea}>
          <DownloadDetailsWave />
        </div>
      </div>

      <div className={styles.screenSecondWrapper}>
        <div className={styles.screenSecond}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionCaption}>In this guide, you&apos;ll find tips to:</h2>
            <List
              dense
              sx={{
                marginTop: '3rem',
              }}
            >
              {bookBullets.map(bullet => {
                return (
                  <ListItem key={bullet}>
                    <ListItemIcon>
                      <CheckCircle size={32} weight="fill" color={ARROW_COLOR} />
                    </ListItemIcon>
                    <ListItemText
                      primary={<p>{bullet}</p>}
                      sx={{
                        '& p': {
                          marginTop: 0,
                          marginBottom: 0,
                        },
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </div>

          <div className={styles.rightColumn}>
            <DownloadPageExamplesSlider
              items={[
                `/assets/images/downloads/guide_to_perfect_status_updates_example_page_1.jpg`,
                `/assets/images/downloads/guide_to_perfect_status_updates_example_page_2.jpg`,
              ]}
            />
          </div>
        </div>
      </div>

      <div className={styles.screenThirdWrapper}>
        <div className={styles.screenThird}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionCaption}>Level Up Your Customer Success Game</h2>
          </div>

          <div className={styles.rightColumn}>
            <p>
              Are you ready to revolutionize your customer success strategy and drive exceptional growth and retention?
              In this comprehensive ebook, we unveil seven powerful playbooks that will transform the way you approach
              customer success.
            </p>
            <p>
              This guide is packed with actionable advice, step-by-step guidance, and proven strategies to bring
              consistency and structure to your customer engagements while optimizing your operations for maximum
              impact. With these powerful playbooks at your fingertips, you&apos;ll navigate through challenges
              effortlessly, ensuring exceptional results and skyrocketing growth.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.screenFourthWrapper}>
        <div className={styles.screenFourth}>
          <h2 className={styles.sectionCaption}>Frequently Asked Questions (FAQs)</h2>
          <div className={styles.faqsItems}>
            <DownloadFaqAccordion />
          </div>
        </div>
      </div>

      <div className={styles.screenFifthWrapper}>
        <div className={styles.screenFifth}>
          <div className={styles.leftColumn}>
            <h5 className={styles.sectionCaption}>Get {data.caption}</h5>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.downloadButton}>
              <StyledButtonGradient>Завантажити</StyledButtonGradient>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
