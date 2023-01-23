import React from 'react';

import Image from "next/image";
import Link from 'next/link';

import Tags from '../Tags/Tags';

import styles from './styles.module.scss';

export default function ArticleHeader({articleData}) {
    return (
        <div className={styles.titleWrapper}>
            <div className={styles.titleContent}>
                <h1 className={styles.title}
                    style={{color: `#${articleData.article_color}`}}>{articleData.title}</h1>
                <p className={styles.shortMessage}
                   style={{color: `#${articleData.article_color}`}}>{articleData.description}</p>
            </div>
            <div className={styles.titleImage}>
                <div className={`${styles.categoryBadge}`}
                     style={{backgroundColor: `#${articleData.category.color}`}}>
                    <Link href={`/blog?search=${articleData.category.name}`}>
                        {`${articleData.category.name}`}
                    </Link>
                </div>
                <Image
                    src={articleData.image}
                    width="700"
                    height="400"
                    alt="Main article picture"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                <Tags items={articleData.tags} location={'header'}/>
            </div>
        </div>
    );
}
