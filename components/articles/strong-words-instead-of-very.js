import React from 'react';

import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function StrongWordsInsteadOfVery({articleData}) {
    return (
        <div className={styles.article}>
            <div className={styles.maxWidthArticleTitleWrapper}>
                <ArticleHeader articleData={articleData}/>
            </div>


            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>

                    <div className={styles.articleIframeContainer} style={{height:2200}}>
                        <iframe src="/assets/images/blog-articles/strong-words-instead-of-very.pdf#toolbar=0" type="application/pdf" width="100%"/>
                    </div>
                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <ArticleFooter articleData={articleData}/>
            </div>

        </div>
    )
};
