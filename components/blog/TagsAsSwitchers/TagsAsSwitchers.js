import React, { useState } from 'react';

import styles from './styles.module.scss';

export default function TagsAsSwitchers({ items, toggleSelectedTag }) {
  return (
    <ul className={`${styles.articleTags} ${styles[location]}`}>
      {Array.from(items.values()).map((item, index) => {
        const alignedItem = item?.name || item;
        const classNameCalculated = item.selected ? `${styles.tagItem} ${styles.selected}` : `${styles.tagItem}`;

        return (
          <li key={alignedItem + index}>
            <button
              href={`/blog/post-tag?selectedTag=${alignedItem}`}
              className={classNameCalculated}
              onClick={() => toggleSelectedTag(item)}
            >
              {`${alignedItem}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
