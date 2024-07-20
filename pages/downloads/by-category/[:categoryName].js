import React from 'react';
import Head from 'next/head'

import { useHasMounted } from '../../../components/common/hooks/hasMounted';

import Header from '../../../components/common/header/Header';
import TopBlogImage from '../../../components/blog/TopBlogImage/TopBlogImage';
import PageNotFound from '../../404';

import GoogleStat from '../../../components/common/googleCtat/GoogleStat';
import styles from '../styles.module.scss';
import { getDownloadsByCategoryDB, getDownloadsCategoriesDB } from '../../../services/downloadsData';
import CategoriesList from '../../../components/downloads/CategoriesList/CategoriesList';
import SelectedSpecificCategory from '../../../components/downloads/SelectedSpecificCategory/SelectedSpecificCategory';

export default function ArticlePageWrapper({
                                             categories,
                                             downloads,
                                             selectedCategory,
}) {
    const hasMounted = useHasMounted();

    if (!hasMounted) {
        return null;
    }

  console.log('downloadsByCategory',downloads);

  if (!downloads?.length) {
        return (
            <PageNotFound redirectLink={'/downloads'} redirectPage={'Повернутись до завантажень'}/>
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
                    <CategoriesList
                      items={categories}
                      selectedCategory={selectedCategory}
                    />
                </div>

                <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
                    <SelectedSpecificCategory
                      downloadsByCategory={downloads}
                      selectedCategory={selectedCategory}
                    />
                </div>
            </div>
        </div>

        <GoogleStat />
    </>;
};

export async function getServerSideProps(context) {
  const categories = await getDownloadsCategoriesDB();
  const categoryName = context.params[':categoryName'];

    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=604800, stale-while-revalidate=59',
    )

    try {
        const downloadsByCategory = await getDownloadsByCategoryDB({
 category: categoryName 
});
        return {
            props: {
              ...downloadsByCategory,
              ...categories,
              selectedCategory: categoryName,
            },
        };
    } catch (e) {
        console.log(`WRONG CATEGORY: ${categoryName}`);
        return {
            props: {
                categories: [],
              downloads: [],
            },
        };
    }
}
