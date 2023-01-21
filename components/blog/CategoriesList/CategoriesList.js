import React from 'react';
import {useRouter} from 'next/router'

import styles from './styles.module.scss';
import Link from 'next/link';

const ALL = 'all';
const ROOT_BLOG_PAGE = '/blog';

export default function CategoriesList({items, selectedCategory}) {
    const router = useRouter();
    const isRootBlogPage = router.pathname === ROOT_BLOG_PAGE;

    if (!items?.length) {
        return null;
    }

    items[0].isSelected = isRootBlogPage;

    return (
        <ul className={styles.categoryList}>
            {items.map((articleCategory) => {
                const isSelected = articleCategory.isSelected || articleCategory.name.toLowerCase() === selectedCategory;
                const classCalc = isSelected ? styles.selected : ' ';
                const hrefLink = articleCategory.name.toLowerCase() === ALL
                    ? `/blog`
                    : `/blog/articles-by-category/${articleCategory.name.toLowerCase()}`

                return (
                    <li className={`${styles.categoryListItem} ${classCalc}`} key={articleCategory.id}>
                        <Link href={hrefLink}>
                            {articleCategory.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
