    import React, {useState} from 'react';
import Head from 'next/head'
import Header from '../../../components/common/header/Header';
import {getArticlesDataByIdDB} from '../../../services/blogData';
import * as PageComponent from '../../../components/articles';
    import {useHasMounted} from '../../../components/common/hooks/hasMounted';

const PAGE_NOT_FOUND='PageNotFound';

export default function ArticlePageWrapper({articleData}) {
    const ArticlePage = PageComponent[articleData.pageComponent];

    const hasMounted = useHasMounted();

    if (!hasMounted) {
        return null;
    }

    if(articleData.pageComponent === PAGE_NOT_FOUND){
        return <ArticlePage />
    }

    return (
        <>
            <Head>
                <title>{articleData.title} | UPPR Блог</title>
                <meta name="description" content={articleData.description}/>
                <meta name="keywords" content="education on-line, english, business, writing, skills, emails"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="yes"/>
                <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon"/>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
                <link rel="icon" href="/favicon.png"/>

                <meta property="og:url" content={'https://uppr.com.ua' + articleData.link}/>
                <meta property="og:type" content="website"/>
                <meta property="article:author" content="https://www.facebook.com/ivanna.tabachuk"/>
                <meta property="og:title" content={articleData.title + '| UPPR Блог'}/>
                <meta property="og:description" content={articleData.description}/>
                <meta property="og:image" content={'https://uppr.com.ua' + articleData.image}/>
                <meta property="og:image:width" content="700"/>
                <meta property="og:image:height" content="400"/>
                <link rel = "canonical" href={'https://uppr.com.ua' + articleData.link} />
                <meta name="google-site-verification" content="8Ui50OggqnZ5J1RPshJXelSAYWMPvFGWv32MSzHHlJU" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={addJsonLdData(articleData)}
                    key="product-jsonld"
                />
            </Head>

            <Header search location={'/blog'}/>

            <ArticlePage articleData={articleData}/>

        </>
    )
};

export async function getServerSideProps({res,resolvedUrl}) {
    const articleData = await getArticlesDataByIdDB(resolvedUrl);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=604800, stale-while-revalidate=59'
    )

    return {
        props: {
            articleData: articleData,
        },
    };
}

function addJsonLdData(articleData) {
    return {
        __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${articleData.link}`,
                "relatedLink": "https://uppr.com.ua/blog",
            },
            "headline": `${articleData.title} | UPPR Блог`,
            "url": `${articleData.link}`,
            "image": {
                "@type": "ImageObject",
                "url": `${articleData.image}`,
                "width": 700,
                "height": 400,
            },
            "datePublished": `${articleData.published}`,
            "author": {
                "@type": "Person",
                "name": `${articleData.author}`,
            },
            "publisher": {
                "@type": "Organization",
                "name": "[UP]PR",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://uppr.com.ua/assets/images/blog-articles/logo.jpg",
                    "width": 503,
                },
            },
            "description": `${articleData.description}`
        }),
    }
}
