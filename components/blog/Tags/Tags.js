import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

export default function Tags({items, location}) {
    return (
        <ul className={`${styles.articleTags} ${styles[location]}`}>
            {
                items.map(item => {
                    return (
                        <li key={item}>
                            <Link href={`/blog?search=${item}`}>
                                {`#${item}`}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
