import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Header from '../../components/common/header/Header';

import CategoriesList from '../../components/blog/CategoriesList/CategoriesList';
import SelectedAllCategories from '../../components/blog/SelectedAllCategories/SelectedAllCategories';
import {
    getArticles,
    getArticlesCategoriesDB,
    getDownloadsDB,
} from '../../services/blogData';

import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog({
                                 articleCategories,
                                 latestArticle,
                                 otherLatestArticles,
                                 top3Article,
                                 downloads,
                             }) {
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <>
            <div className={styles.upprBlogPage}>
                <Header search location={'/blog'}/>
                <div className={`uppr-page-content ${styles.upprPageContent}`}>
                    <div className={`uppr-blog-main-picture ${styles.upprBlogMainPicture}`}>
                        <Image src="/assets/images/blog_main.jpeg"
                               alt="Main blog picture"
                               width="3000"
                               height="2002"
                               layout='raw'
                        />
                    </div>

                    <div
                        className={`uppr-article-categories ${styles.upprArticleCategories}`}
                    >
                        <CategoriesList items={articleCategories}/>
                    </div>

                    {/* {selectedCategory !== 0 && (
          <div className={`uppr-articles-content ${styles.upprArticlesContent}`}> */}
                    {/* <SelectedSpecificCategory
              latestArticle={latestArticle}
              otherLatestArticles={otherLatestArticles}
            /> */}
                    {/* </div>
        )} */}

                    {selectedCategory === 0 && (
                        <div
                            className={`uppr-articles-content ${styles.upprArticlesContent}`}
                        >
                            <SelectedAllCategories
                                latestArticle={latestArticle}
                                otherLatestArticles={otherLatestArticles}
                                top3Article={top3Article}
                                downloads={downloads}
                            />
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const articleCategories = await getArticlesCategoriesDB();
    const articles = await getArticles();
    const downloads = await getDownloadsDB();

    return {
        props: {
            articleCategories: articleCategories || [],
            ...articles,
            downloads,
        },
    };
}
