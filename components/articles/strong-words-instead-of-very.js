import React from 'react';

import styles from './commonArticleStyles.module.scss';
import Image from 'next/image';

import Author from '../../components/blog/Author/Author';
import Slider from '../../components/blog/Slider/Slider';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import strongWordsInsteadOfVery from './strong-words-instead-of-very';


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
