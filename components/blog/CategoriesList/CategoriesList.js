import React  from "react";
import Router, {useRouter} from 'next/router'

import styles from "./styles.module.scss";
import Link from 'next/link';

const ALL = 'all';
const ROOT_BLOG_PAGE = '/blog';

export default function CategoriesList({ items, selectedCategory }) {
  const router = useRouter();
  const isRootBlogPage = router.pathname === ROOT_BLOG_PAGE;


  if(!items?.length) {
    return null;
  }

  if(selectedCategory === ALL) {
    router.replace(ROOT_BLOG_PAGE);
    return null;
  }

  items[0].isSelected = isRootBlogPage;

  return (
    <ul className={styles.categoryList}>
      {items.map((articleCategory) => {
        const isSelected = articleCategory.isSelected || articleCategory.name.toLowerCase() === selectedCategory;
        const classCalc = isSelected ? styles.selected : " ";

        if(selectedCategory === ALL) {
          return (
              <a href={`/blog`}
                    key={articleCategory.id}
              >
                <li
                    className={`${styles.categoryListItem} ${classCalc}`}
                >
                  {articleCategory.name}
                </li>
              </a>
          );
        }

        return (
            <a href={`/blog/articles-by-category/${articleCategory.name.toLowerCase()}`}
                  key={articleCategory.id}
            >
              <li
                className={`${styles.categoryListItem} ${classCalc}`}
              >
                {articleCategory.name}
              </li>
            </a>
        );
      })}
    </ul>
  );
}
