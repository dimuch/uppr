import React, {useCallback, useState} from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';

import styles from './commonDownloadsStyles.module.scss';

import StyledButtonGradient from '../styled/StyledButtonGradient';
import OrangeTopRightArea from './components/DownloadDetailsBlueArea';
import DownloadDetailsWave from './components/DownloadDetailsWave';
import loader from '../../common/loader/loader';
import DownloadFaqAccordion from '../DownloadFaqAccordion/DownloadFaqAccordion';
import {CheckCircle} from '@phosphor-icons/react';
import DownloadPageExamplesSlider from '../DownloadPageExamplesSlider/DownloadPageExamplesSlider';

const bookBullets = [
  'How to make your updates more specific',
  'What to include/exclude',
  'Best practices of status updates',
  'And lots of examples',
];
const ARROW_COLOR = '#4f899c';

const steps = [0, 1];
const maxSteps = steps.length;

const Ebook = ({data}) => {
  const downloadFile = useCallback(() => {
    const link = document.createElement('a');
    link.href = data.downloadLink;
    link.download = `${data.caption}.pdf`;
    link.click();
  }, [data]);

  return (
    <div className={styles.download}>
      <div className={styles.screenFirstWrapper}>
        <div className={styles.blueTopRightArea}>
          <OrangeTopRightArea/>
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
              {/*<p>{data.description}</p>*/}
              <p>
                Кінець дня/тижня/місяця і от знову: потрібно писати статуси по проєкту.
                Нудно, марудно, але треба. І все б нічого аби ще знати, що писати і скільки, чого саме очікує клієнт і
                менеджер.
              </p>
              <p>
                Так от як саме поліпшити ваші апдейти, зекономити час та нерви, або просто переконатися, що ви follow
                best practices, читайте у гайді..
              </p>
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
          <DownloadDetailsWave/>
        </div>
      </div>

      <div className={styles.screenSecondWrapper}>
        <div className={styles.screenSecond}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionCaption}>What&apos;s inside:</h2>
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
                      <CheckCircle size={32} weight="fill" color={ARROW_COLOR}/>
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
            <h2 className={styles.sectionCaption}>
              Aдекватні клієнти - це завжди про грамотно побудована комунікація
            </h2>
          </div>

          <div className={styles.rightColumn}>
            <p>
              Якщо клієнт пише вам &quot;Any updates?&quot; — це означає, що ви зафейлили комунікацію.
              Бо, якщо у клієнта виникає таке запитання, то це свідчить про те, що йому не вистачає інформації,
              він/вона не в курсі й, відповідно, хвилюється. Отже, ви не комунікуєте правильно. Недогляд, що в
              майбутньому коштуватиме вам довіри клієнта, як максимум, і грошей компанії, як мінімум 🙂.
            </p>
            <p>
              Тому найкраще, що можна зробити — це писати status updates регулярно та правильно. + Бути максимум
              проактивним, обговорювати та письмово фіксувати всі домовленості та очікування. І тоді є шанс, що
              розчарування та крах довіри не настане, навіть якщо і виникне проблема.
            </p>
            <p>
              Надіюся, це гайд допоможе вам та вашим клієнтам be aligned.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.screenFourthWrapper}>
        <div className={styles.screenFourth}>
          <h2 className={styles.sectionCaption}>Frequently Asked Questions (FAQs)</h2>
          <div className={styles.faqsItems}>
            <DownloadFaqAccordion/>
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
