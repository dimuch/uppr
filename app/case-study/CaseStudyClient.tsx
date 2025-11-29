'use client';

import React, { useState } from 'react';
import CaseStudyItem from '../../components/caseStudy/CaseStudyItem/CaseStudyItem';
import ModalComponent from '../../components/caseStudy/CaseStudyItem/components/ModalComponent/ModalComponent';
import PageNotFound from '../../components/common/404/404';
import styles from './styles.module.scss';

const PAGE_NOT_FOUND = 'PageNotFound';

interface CaseStudyItem {
  id: string | number;
  Component?: string;
  [key: string]: any;
}

interface CaseStudyClientProps {
  caseStudy: CaseStudyItem[];
}

export default function CaseStudyClient({ caseStudy }: CaseStudyClientProps) {
  const [modalComponentData, setModalComponentData] = useState<CaseStudyItem | undefined>(undefined);

  const toggleModal = (item?: CaseStudyItem) => {
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
    </>
  );
}

