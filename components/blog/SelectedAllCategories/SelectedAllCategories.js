import React, {useMemo} from 'react';

import {Grid} from '@mui/material';
import MainArticle from '../MainArticle/MainArticle';
import TopFeaturedArticles from '../TopFeaturedArticles/TopFeaturedArticles';
import Downloads from '../Downloads/Downloads';

import OthersArticles from '../OthersArticles/OthersArticles';
import InformationBlock from '../InformationBlock/InformationBlock';
import OthersArticlesByCategory from '../OthersArticlesByCategory/OthersArticlesByCategory';

import styles from './styles.module.scss';

export default function SelectedAllCategories({
                                                  latestArticle,
                                                  otherLatestArticles,
                                                  top3Article,
                                                  downloads,
                                                  tags,
                                                  articlesByCategories
                                              }) {
    const firstRowOthersArticles = useMemo(() => {
        return otherLatestArticles.slice(0, 2);
    }, [otherLatestArticles]);

    const secondRowOthersArticles = useMemo(() => {
        return otherLatestArticles.slice(2, 5);
    }, [otherLatestArticles])


    if (!latestArticle) {
        return null;
    }

    return (
        <>
            <div
                container={true}
                spacing={3}
                alignItems="flex-start"
                className={styles.upprAllArticles}
            >
                <div item md={8} className="uppr-articles-list">
                    <MainArticle items={latestArticle}/>
                </div>
                <div item md={4} className={styles.upprSideBlock}>
                    <TopFeaturedArticles items={top3Article}/>
                    <Downloads items={downloads}/>
                </div>
            </div>
            <Grid container={true}
                  spacing={3}
                  alignItems="flex-start"
                  className={styles.upprOthersArticles}>
                <OthersArticles
                    items={firstRowOthersArticles}
                />
                <InformationBlock tags={tags}/>
            </Grid>
            <Grid container={true}
                  spacing={3}
                  alignItems="flex-start"
                  className={styles.upprOthersArticles}>
                <OthersArticles
                    items={secondRowOthersArticles}
                />
            </Grid>
            <Grid container={true}
                  spacing={3}
                  alignItems="flex-start"
                  className={styles.upprOthersArticles}>
                <OthersArticlesByCategory articlesByCategories={articlesByCategories}/>
            </Grid>
        </>
    );
}
