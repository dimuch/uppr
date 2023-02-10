import React from 'react';
import styles from '../../articles/commonArticleStyles.module.scss';
import Author from '../Author/Author';
import Slider from '../Slider/Slider';
import OthersArticles from '../OthersArticles/OthersArticles';

export default function ArticleFooter({articleData}) {
    let width;
    if (typeof window !== 'undefined') {
        width = (window?.outerWidth);
    }

    if(!articleData){
        return null;
    }
    return (
        <div className={`${styles.footerContainer}`}>
            <div className={styles.authorBlock}>
                <Author data={articleData}/>
            </div>
            {
                width > 1024 && (
                    <div className={styles.relevantArticles}>
                        <Slider data={articleData.relevantArticles}/>
                    </div>
                )
            }
            {
                width < 1024 && (
                    <div className={styles.relevantArticles}>
                        <h2 className={styles.subTitle}>
                            Статті по темі
                        </h2>
                        <OthersArticles items={articleData.relevantArticles} isDescription={false}/>
                    </div>
                )
            }
        </div>
    )
}
