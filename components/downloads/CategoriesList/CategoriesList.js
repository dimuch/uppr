'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import styles from './styles.module.scss';

const ALL = 'all';
const ROOT_DOWNLOADS_PAGE = '/downloads';

export default function CategoriesList({ items, selectedCategory }) {
  const pathname = usePathname();
  const isRootDownloadPage = pathname === ROOT_DOWNLOADS_PAGE;

  if (!items?.length) {
    return null;
  }

  items[0].isSelected = isRootDownloadPage;

  return (
    <ul className={styles.categoryList}>
      {items.map(articleCategory => {
        const categoryName = articleCategory.name.toLowerCase();
        const isSelected = articleCategory.isSelected || categoryName === selectedCategory;
        const classCalc = isSelected ? styles.selected : ' ';
        const hrefLink = categoryName === ALL ? `/downloads` : `/downloads/by-category/${categoryName}`;

        return (
          <li key={articleCategory.id} style={{
 margin: '1rem .5rem' 
}}>
            <a href={hrefLink} rel="noreferrer" className={`${styles.categoryListItem} ${classCalc}`}>
              {articleCategory.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
