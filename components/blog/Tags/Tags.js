import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

export default function Tags({ items, location }) {
  return (
    <ul className={`${styles.articleTags} ${styles[location]}`}>
      {items.map(item => {
        const alignedItem = item?.name || item;
        const classNameCalculated = item.selected ? `${styles.tagItem} ${styles.selected}` : `${styles.tagItem}`;

        return (
          <li key={alignedItem}>
            <Link href={`/blog/post-tag?selectedTag=${alignedItem}`} className={classNameCalculated}>
              {`${alignedItem}`}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
