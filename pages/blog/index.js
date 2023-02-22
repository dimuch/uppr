import React from 'react';
import Image from "next/image";
import Head from 'next/head';

import {useHasMounted} from '../../components/common/hooks/hasMounted';
import Header from '../../components/common/header/Header';
import CategoriesList from '../../components/blog/CategoriesList/CategoriesList';
import SelectedAllCategories from '../../components/blog/SelectedAllCategories/SelectedAllCategories';
import {
    getArticles, getArticlesByCategoryDB,
    getArticlesCategoriesDB,
    getDownloadsDB, getTagsDB,
} from '../../services/blogData';

import styles from './styles.module.scss';
import loader from '../../components/common/loader/loader';

const domainName = '';
export default function Blog({
                                 articleCategories,
                                 latestArticle,
                                 otherLatestArticles,
                                 top3Article,
                                 downloads,
                                 tags,
                                 articlesByCategories,
                             }) {

    const hasMounted = useHasMounted();

    if (!hasMounted) {
        return null;
    }

    const width = window.innerWidth;
    const height = Math.round(width * 17 / 30);

    return <>
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
                    <img
                        src={loader({src:'/assets/images/blog-articles/blog_main.webp', width: width})}
                        alt="Main blog picture"
                        width={width}
                        height={height}
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
                        domainName={domainName}
                    />
                </div>

            </div>
        </div>
    </>;
}

export async function getServerSideProps(context) {
    const articleCategories = await getArticlesCategoriesDB();
    const articles = await getArticles();
    const downloads = await getDownloadsDB();
    const tags = await getTagsDB();
    const articlesByCategories = await getArticlesByCategoryDB();

    context.res.setHeader(
        'Cache-Control',
        'public'
    )

    return {
        props: {
            ...articles,
            articleCategories,
            downloads,
            tags,
            articlesByCategories,
        },
    };
}
