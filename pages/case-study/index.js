import React, { useState } from 'react';

import Header from '../../components/common/header/Header';
import TopBlogImage from '../../components/blog/TopBlogImage/TopBlogImage';

import styles from './styles.module.scss';
import { Grid, Typography } from '@mui/material';
import GoogleStat from '../../components/common/googleCtat/GoogleStat';
import Footer from '../../components/common/footers/footer/Footer';
import { getCaseStudiesAll } from '../../services/caseStudy.js';
import { getArticles } from '../../services/blogData';
import HeadSEO from '../../components/caseStudy/CaseStudyItem/components/HeaderSEO/HeadSEO';
import PageNotFound from '../404';
import CaseStudyItem from '../../components/caseStudy/CaseStudyItem/CaseStudyItem';
import ModalComponent from '../../components/caseStudy/CaseStudyItem/components/ModalComponent/ModalComponent';

const PAGE_NOT_FOUND = 'PageNotFound';

export default function Downloads({ caseStudy, top3Article }) {
  const [modalComponentData, setModalComponentData] = useState();

  const toggleModal = item => {
    setModalComponentData(item);
  };

  const isModalOpen = Boolean(modalComponentData);

  if (modalComponentData && modalComponentData.Component === PAGE_NOT_FOUND) {
    return (
      <PageNotFound
        redirectLink={'/blog'}
        redirectPage={'Повернутись до блогу'}
      />
    );
  }

  return (
    <>
      <HeadSEO />
      <div className={styles.upprBlogPage}>
        <Header
          search
          location={'/case-study'}
        />
        <div className={`uppr-page-content ${styles.upprPageContent}`}>
          <TopBlogImage
            caption={'Case Studies'}
            description={'Turning Missteps into Mastery'}
          />

          <div className={styles.upprArticlesContent}>
            <div className={styles.downloadsWrapper}>
              <Grid
                container
                spacing={1}
                alignItems="center"
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Typography variant={'h5'}>Case Studies</Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                ></Grid>
              </Grid>
            </div>

            <div className={styles.downloads}>
              {caseStudy.map(item => {
                return (
                  <CaseStudyItem
                    key={item.id}
                    item={item}
                    onToggleModal={toggleModal}
                  />
                );
              })}
            </div>
            <ModalComponent
              isModalOpen={isModalOpen}
              toggleModal={() => toggleModal()}
              data={modalComponentData}
            />
          </div>
        </div>

        <Footer top3Article={top3Article} />
        <GoogleStat />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { caseStudy } = await getCaseStudiesAll();
  const { top3Article } = await getArticles();

  context.res.setHeader('Cache-Control', 'public');

  return {
    props: {
      top3Article,
      caseStudy,
    },
  };
}
