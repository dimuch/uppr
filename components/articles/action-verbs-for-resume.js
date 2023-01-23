import React from 'react';

import styles from '../../components/articles/commonArticleStyles.module.scss';
import Image from "next/legacy/image";
import Link from 'next/link';

import Author from '../blog/Author/Author';
import Slider from '../blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';

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
                <div className={`${styles.footerContainer}`}>
                    <div style={{width: '20%'}}>
                        <Author data={articleData}/>
                    </div>
                    <div style={{width: '80%'}}>
                        <Slider data={articleData.relevantArticles} slideWidth={'45%'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
