import React from 'react';
import styles from '../../articles/commonArticleStyles.module.scss';
import Author from '../Author/Author';
import Slider from '../Slider/Slider';
import OthersArticles from '../OthersArticles/OthersArticles';
import InstagramImages from '../InstagramImages/InstagramImages';

export default function ArticleFooter( {articleData}) {
    let width;
    if (typeof window !== 'undefined') {
        width = (window?.outerWidth);
    }

    if(!articleData){
        return null;
    }
    return (
      <>
        <div className={`${styles.footerContainer}`}>
            <div className={styles.authorBlock}>
                <Author data={articleData}/>
            </div>
        </div>
        <InstagramImages />
      </>
    )
}
