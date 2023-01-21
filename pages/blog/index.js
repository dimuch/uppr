import React, {useState} from 'react';
import Image from 'next/image';

import Header from '../../components/common/header/Header';

import CategoriesList from '../../components/blog/CategoriesList/CategoriesList';
import SelectedAllCategories from '../../components/blog/SelectedAllCategories/SelectedAllCategories';
import {
    getArticles, getArticlesByCategoryDB,
    getArticlesCategoriesDB,
    getDownloadsDB, getTagsDB,
} from '../../services/blogData';

import styles from './styles.module.scss';
import Head from 'next/head';

export default function Blog({
                                 articleCategories,
                                 latestArticle,
                                 otherLatestArticles,
                                 top3Article,
                                 downloads,
                                 tags,
                                 articlesByCategories,
                             }) {
    return (
        <>
            <Head>
                <title>{"UPPR | Блог"}</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="yes"/>
                <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon"/>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className={styles.upprBlogPage}>
                <Header search location={'/blog'}/>
                <div className={`uppr-page-content ${styles.upprPageContent}`}>
                    <div className={`uppr-blog-main-picture ${styles.upprBlogMainPicture}`}>
                        <Image src="/assets/images/blog_main.jpeg"
                               alt="Main blog picture"
                               width="3000"
                               height="2002"
                               layout="responsive"
                        />
                    </div>

                    <div
                        className={`uppr-article-categories ${styles.upprArticleCategories}`}
                    >
                        <CategoriesList items={articleCategories}/>
                    </div>

                    <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
                        <SelectedAllCategories
                            latestArticle={latestArticle}
                            otherLatestArticles={otherLatestArticles}
                            top3Article={top3Article}
                            downloads={downloads}
                            tags={tags}
                            articlesByCategories={articlesByCategories}
                        />
                    </div>

                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const articleCategories = await getArticlesCategoriesDB();
    const articles = await getArticles();
    const downloads = await getDownloadsDB();
    const tags = await getTagsDB();
    const articlesByCategories = await getArticlesByCategoryDB();

    return {
        props: {
            articleCategories: articleCategories || [],
            ...articles,
            downloads,
            tags,
            articlesByCategories,
        },
    };
}
