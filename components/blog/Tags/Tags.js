import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

export default function Tags({items}) {
    return (
        <ul className={styles.articleTags}>
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
