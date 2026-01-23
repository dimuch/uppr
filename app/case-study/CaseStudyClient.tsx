'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import CaseStudyItem from '../../components/caseStudy/CaseStudyItem/CaseStudyItem';
import ModalComponent from '../../components/caseStudy/CaseStudyItem/components/ModalComponent/ModalComponent';
import PageNotFound from '../../components/common/404/404';
import { titleToSlug, slugToTitle } from '../../utils/caseStudySlug.js';
import styles from './styles.module.scss';

const PAGE_NOT_FOUND = 'PageNotFound';

interface CaseStudyItem {
  id: string | number;
  Component?: string;
  title?: string;
  [key: string]: any;
}

interface CaseStudyClientProps {
  caseStudy: CaseStudyItem[];
  initialSlug?: string;
  initialCaseStudyData?: CaseStudyItem;
}

export default function CaseStudyClient({ 
  caseStudy, 
  initialSlug, 
  initialCaseStudyData 
}: CaseStudyClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [modalComponentData, setModalComponentData] = useState<CaseStudyItem | undefined>(
    initialCaseStudyData || undefined
  );

  // Check if we're on a slug route and open modal accordingly
  useEffect(() => {
    const isSlugRoute = pathname && pathname.startsWith('/case-study/') && pathname !== '/case-study';
    
    if (isSlugRoute) {
      // If we have initialCaseStudyData from server, use it
      if (initialCaseStudyData) {
        setModalComponentData(initialCaseStudyData);
      } else {
        // Otherwise, find it from the caseStudy array based on the slug
        const slug = pathname.replace('/case-study/', '');
        const title = slugToTitle(slug);
        const foundCaseStudy = caseStudy.find(item => 
          item.title && titleToSlug(item.title) === slug
        );
        if (foundCaseStudy) {
          setModalComponentData(foundCaseStudy);
        }
      }
    } else {
      setModalComponentData(undefined);
    }
  }, [pathname, initialCaseStudyData, caseStudy]);

  const toggleModal = (item?: CaseStudyItem) => {
    if (item) {
      // Navigate to the slug route
      const slug = titleToSlug(item.title);
      router.push(`/case-study/${slug}`);
    } else {
      // Close modal and navigate back to list
      router.push('/case-study');
      setModalComponentData(undefined);
    }
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

