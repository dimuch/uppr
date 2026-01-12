import React from 'react';
import Header from '../../../components/common/header/Header';
import TopBlogImage from '../../../components/blog/TopBlogImage/TopBlogImage';
import Footer from '../../../components/common/footers/footer/Footer';
import NewArticleFormSkeleton from '../../../components/blog/NewArticleForm/NewArticleFormSkeleton';
import styles from '../styles.module.scss';

export default function Loading() {
  return (
    <div className={styles.upprBlogPage}>
      <Header search location={'/blog/new-article'} />
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopBlogImage
          caption={'New article'}
          description={''}
          imgUrl={undefined}
        />

        <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
          <NewArticleFormSkeleton />
        </div>
      </div>
      <div className={styles.footer}>
        {/* Footer skeleton or empty footer during loading */}
        <div style={{
 minHeight: '200px' 
}} />
      </div>
    </div>
  );
}

