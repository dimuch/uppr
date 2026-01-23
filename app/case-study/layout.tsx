import React from 'react';

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function CaseStudyLayout({ children, modal }: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
