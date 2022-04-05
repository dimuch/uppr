import React, {useEffect} from 'react';
import Header from '../components/header/Header';

import styles from './styles.module.scss';
import {getArticles, getArticlesCategoriesDB, getDownloadsDB} from '../../services/blogData';

export default function Blog({articleCategories}) {

    return (
        <div className={styles.upprBlogPage}>
            <Header search location={'/blog.html'}/>
            <div className={`uppr-page-content ${styles.upprPageContent}`}>
                <div className={`uppr-blog-main-picture ${styles.upprBlogMainPicture}`}>
                    <img src="/assets/images/blog_main.jpeg" alt="Main blog picture"/>
                </div>

                <div
                    className={`uppr-article-categories ${styles.upprArticleCategories}`}
                >
                     <CategoriesList items={articleCategories} />
                </div>

                {/* {selectedCategory !== 0 && (
          <div className={`uppr-articles-content ${styles.upprArticlesContent}`}> */}
                {/* <SelectedSpecificCategory
              latestArticle={latestArticle}
              otherLatestArticles={otherLatestArticles}
            /> */}
                {/* </div>
        )} */}

                {/* {selectedCategory === 0 && (
          <div className={`uppr-articles-content ${styles.upprArticlesContent}`}> */}
                {/* <SelectedAllCategories
              latestArticle={latestArticle}
              otherLatestArticles={otherLatestArticles}
              top3Article={top3Article}
              downloads={downloads}
            /> */}
                {/* </div> */}
                {/* )} */}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const articleCategories = await getArticlesCategoriesDB();
    const articles = await getArticles();
    // const downloads = await getDownloadsDB();

    return {
        props: {
            articleCategories: articleCategories || [],
            ...articles,
            // downloads,
        },
    };
}
