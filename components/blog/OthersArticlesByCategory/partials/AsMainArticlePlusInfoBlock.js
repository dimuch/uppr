import React, { useMemo } from 'react';

import MainArticle from '../../MainArticle/MainArticle';
import ArticleCard from './ArticleCard';

import styles from './asMainArticlePlusInfoBlockStyles.module.scss'

export default function AsMainArticlePlusInfoBlock({ data }) {
    const { name, articles } = data;

    const firstRowOthersArticles = useMemo(() => {
        return articles.slice(0, 2);
    }, [articles]);

    const secondRowOthersArticles = useMemo(() => {
        return articles.slice(2, 5);
    }, [articles])

    const thirdRowOthersArticles = useMemo(() => {
        return articles.slice(5);
    }, [articles])

    return (
        <div className={styles.section}>
            <p className={styles.sectionTitle}>{name}</p>
            <div className={styles.sectionTitleSplitter} />
            <p className={styles.shadowTitle}>{name}</p>
            <div className={styles.upprAllArticles}>
                <div className={styles.upprArticleList}>
                    <MainArticle items={firstRowOthersArticles}/>
                </div>
                <div className={styles.upprSideBlock}>
                    <ArticleCard item={firstRowOthersArticles[1]}/>
                </div>
            </div>
        </div>
    )
}

