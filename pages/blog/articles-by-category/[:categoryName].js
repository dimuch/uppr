import React from 'react';
import Head from 'next/head'

import { useHasMounted } from '../../../components/common/hooks/hasMounted';

import Header from '../../../components/common/header/Header';
import CategoriesList from '../../../components/blog/CategoriesList/CategoriesList';
import SelectedSpecificCategory from '../../../components/blog/SelectedSpecificCategory/SelectedSpecificCategory';
import TopBlogImage from '../../../components/blog/TopBlogImage/TopBlogImage';
import PageNotFound from '../../404';
import { getArticlesByCategoryNameDB, getArticlesCategoriesDB, getTagsDB } from '../../../services/blogData';

import GoogleStat from '../../../components/common/googleCtat/GoogleStat';
import styles from '../styles.module.scss';

export default function ArticlePageWrapper({ articlesByCategory, articleCategories, selectedCategory, tags }) {
    const hasMounted = useHasMounted();

    if (!hasMounted) {
        return null;
    }

    if (!articlesByCategory?.length) {
        return (
            <PageNotFound redirectLink={'/blog'} redirectPage={'Повернутись до блогу'}/>
        )
    }

    return <>
        <Head>
            <title>Категорія {selectedCategory}</title>
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
                <TopBlogImage />
                <div
                    className={`uppr-article-categories ${styles.upprArticleCategories}`}
                >
                    <CategoriesList items={articleCategories} selectedCategory={selectedCategory}/>
                </div>

                <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
                    <SelectedSpecificCategory
                        articlesByCategory={articlesByCategory}
                        selectedCategory={selectedCategory}
                        tags={tags}
                    />
                </div>
            </div>
        </div>

        <GoogleStat />
    </>;
};

export async function getServerSideProps(context) {
    const articleCategories = await getArticlesCategoriesDB();
    const categoryName = context.params[':categoryName'];

    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=604800, stale-while-revalidate=59',
    )

    try {
        const tags = await getTagsDB();
        const articlesByCategory = await getArticlesByCategoryNameDB(categoryName);
        return {
            props: {
                articleCategories,
                selectedCategory: categoryName,
                articlesByCategory: articlesByCategory,
                tags,
            },
        };
    } catch (e) {
        console.log(`WRONG CATEGORY: ${categoryName}`);
        return {
            props: {
                articleCategories,
                articlesByCategory: [],
            },
        };
    }
}
