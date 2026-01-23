'use client';

import React from 'react';
import CaseStudyItem from '../../components/caseStudy/CaseStudyItem/CaseStudyItem';
import styles from './styles.module.scss';

interface CaseStudyItemType {
  id: string | number;
  Component?: string;
  title?: string;
  [key: string]: any;
}

interface CaseStudyClientProps {
  caseStudy: CaseStudyItemType[];
}

export default function CaseStudyClient({ caseStudy }: CaseStudyClientProps) {
  return (
    <div className={styles.downloads}>
      {caseStudy.map(item => {
        return (
          <CaseStudyItem
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
}

