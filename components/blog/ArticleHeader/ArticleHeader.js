import React, {useEffect, useState} from 'react';

import Link from 'next/link';

import Tags from '../Tags/Tags';
import loader from '../../common/loader/loader';

import styles from './styles.module.scss';

export default function ArticleHeader({articleData}) {
    const [imgDimensions, setImgDimensions] = useState({width:700, height:400});

    useEffect(() => {
        const width = window.innerWidth > 700 ? Math.round(window.innerWidth / 3) : window.innerWidth;
        const height = Math.round(width * 4 / 7);

        setImgDimensions(() => ({width, height}));
    }, []);

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
                <img
                    src={loader({src:articleData.image, width: imgDimensions.width})}
                    width={imgDimensions?.width}
                    height={imgDimensions?.height}
                    alt={articleData.title}
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
                <Tags items={articleData.tags} location={'header'}/>
            </div>
        </div>
    );
}
