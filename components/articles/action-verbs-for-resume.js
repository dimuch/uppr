import React from 'react';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function ActionVerbsForResume({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <div className={styles.articleIframeContainer}>
                        <iframe src="https://drive.google.com/file/d/19Jx4ak3ee_UvehqfwUV9GqGsbCSzZTGi/preview"
                                allowFullScreen
                                width="640" height="480"
                        />
                    </div>
                </div>
            </div>


            <div className={styles.articleEvenSection}>
                <ArticleFooter articleData={articleData} />
            </div>
        </div>
    )
};
