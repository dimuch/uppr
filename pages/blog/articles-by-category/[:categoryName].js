import React from 'react';
import Head from 'next/head'
import Header from '../../../components/common/header/Header';
import {getArticlesByCategoryNameDB, getArticlesCategoriesDB, getTagsDB} from '../../../services/blogData';
import styles from '../styles.module.scss';
import CategoriesList from '../../../components/blog/CategoriesList/CategoriesList';
import Image from 'next/image';
import SelectedSpecificCategory from '../../../components/blog/SelectedSpecificCategory/SelectedSpecificCategory';
import PageNotFound from '../../404';

const ALL = 'all';

export default function ArticlePageWrapper({articlesByCategory, articleCategories, selectedCategory, tags}) {
    if (!articlesByCategory?.length && selectedCategory !== ALL) {
        return (
            <PageNotFound redirectLink={'/blog'} redirectPage={'Повернутись до блогу'}/>
        )
    }

    return (
        <>
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
        </>
    )
};

export async function getServerSideProps(context) {
    const articleCategories = await getArticlesCategoriesDB();

    const categoryName = context.params[':categoryName'];
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
