
    import React from 'react';
    import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
    import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

    import styles from './commonArticleStyles.module.scss';

      export default function TestRtyierRiutyei({ articleData }) {
          return (
              <div className={styles.article}>
                  <div className={styles.maxWidthArticleTitleWrapper}>
                      <ArticleHeader articleData={articleData}/>
                  </div>
                  
<div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>
            fkgjs dfkgjsdflk gjsdlfgsdfgsdfgdsfasdfasdfasdfasd aksdjflasdfasdfasdfasdfasdf
          </p>
        </div>
      </div>
            
                  <div className={styles.articleEvenSection}>
                      <ArticleFooter articleData={articleData}/>
                  </div>
              </div>
          );
      };
  