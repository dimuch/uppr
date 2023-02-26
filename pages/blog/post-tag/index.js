import React, {useEffect, useMemo, useState} from 'react';
import Head from 'next/head'

import Header from '../../../components/common/header/Header';
import {useHasMounted} from '../../../components/common/hooks/hasMounted';

import {getArticlesByTagsNameDB, getTagsDB} from '../../../services/blogData';
import PageNotFound from '../../404';
import loader from '../../../components/common/loader/loader';

import TagsAsSwitchers from '../../../components/blog/TagsAsSwitchers/TagsAsSwitchers';
import useMakeRequest from '../../../components/common/hooks/makeRequest';

import styles from './styles.module.scss';
import SelectedSpecificCategory from '../../../components/blog/SelectedSpecificCategory/SelectedSpecificCategory';

import {LoaderIcon} from '../../../components/common/icons';

const SEARCH_REQ_URL = '/api/articles-by-tags?selectedTag=';

export default function ArticlePageWrapper({articlesByTags, articleTags}) {
    const {makeRequest, isLoading, error, data} = useMakeRequest();
    const hasMounted = useHasMounted();

    const articleTagsAsMap = useMemo(() => {
        const mappedTags = articleTags.map(tag => ([tag.name, tag]));
        return new Map(mappedTags);
    }, []);

    const [isChanged, setIsChanged] = useState(0);
    const [tags, setTags] = useState(() => articleTagsAsMap);
    const [articles, setArticles] = useState(() => articlesByTags);

    const toggleSelectedTag = (tag, index) => {
        const selectedTag = {...tag, selected: !tag.selected};
        const updatedTags = new Map([...tags]);
        updatedTags.set(tag.name, selectedTag);
        setTags(updatedTags);
        setIsChanged(Date.now());
    }

    useEffect(() => {
        const updatedTagQueryString = Array.from(tags.values()).filter(tag => tag.selected).map(tag => tag.name).join(',');

        if(!isChanged) {
            return undefined;
        }

        const reqUrl = SEARCH_REQ_URL + updatedTagQueryString;
        makeRequest(reqUrl);
    }, [isChanged])

    useEffect(() => {
        if (!data) {
            return undefined
        }

        setArticles(data);
    }, [data]);

    if (!hasMounted) {
        return undefined;
    }

    if (!articlesByTags?.length) {
        return (
            <PageNotFound redirectLink={'/blog'} redirectPage={'Повернутись до блогу'}/>
        )
    }

    const width = window.innerWidth;
    const height = Math.round(width * 4 / 7);

    return <>
        <Head>
            <title>Статті по тегах</title>
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
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
                <div
                    className={`uppr-article-categories ${styles.upprArticleCategories}`}>
                    <TagsAsSwitchers
                        items={tags}
                        toggleSelectedTag={toggleSelectedTag}
                    />
                </div>

                {
                    isLoading && (<div className={styles.loader}><LoaderIcon/></div>)
                }

                {!isLoading && (
                    <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
                        <SelectedSpecificCategory articlesByCategory={articles} tags={[]}/>
                    </div>
                )}
            </div>
        </div>
    </>;
};

export async function getServerSideProps(context) {
    const tagName = context.query['selectedTag'] || '';
    const articleTags = await getTagsDB(tagName);

    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=604800',
    )

    try {
        const articlesByTags = await getArticlesByTagsNameDB(tagName);
        return {
            props: {
                articleTags,
                articlesByTags,
            },
        };
    } catch (e) {
        console.log(`WRONG TAG: ${tagName}`, '\n', e);
        return {
            props: {
                articleTags,
                articlesByTags: [],
            },
        };
    }
}
