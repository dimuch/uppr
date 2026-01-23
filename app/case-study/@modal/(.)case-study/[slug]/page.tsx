import React from 'react';
import { notFound } from 'next/navigation';
import { getCaseStudyByTitle } from '../../../../../services/caseStudy.js';
import { slugToTitle } from '../../../../../utils/caseStudySlug.js';
import ModalComponent from '../../../../../components/caseStudy/CaseStudyItem/components/ModalComponent/ModalComponent';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyModalPage({ params }: Props) {
  const { slug } = await params;
  const title = slugToTitle(slug);

  const caseStudyData = await getCaseStudyByTitle(title);

  if (!caseStudyData) {
    notFound();
  }

  return <ModalComponent isModalOpen={true} data={caseStudyData} />;
}

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic';
