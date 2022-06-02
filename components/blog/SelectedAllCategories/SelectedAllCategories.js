import React, {useMemo} from 'react';

import {Grid} from '@mui/material';
import MainArticle from '../MainArticle/MainArticle';
import TopFeaturedArticles from '../TopFeaturedArticles/TopFeaturedArticles';
import Downloads from '../Downloads/Downloads';

import styles from './styles.module.scss';
import OthersArticles from '../OthersArticles/OthersArticles';
import InformationBlock from '../InformationBlock/InformationBlock';
import OthersArticlesByCategory from '../OthersArticlesByCategory/OthersArticlesByCategory';

export default function SelectedAllCategories({
                                                  latestArticle,
                                                  otherLatestArticles,
                                                  top3Article,
                                                  downloads,
                                                  tags,
                                              }) {
    const firstRowOthersArticles = useMemo(() => {
        return otherLatestArticles.slice(0, 2);
    }, []);

    const secondRowOthersArticles = useMemo(() => {
        return otherLatestArticles.slice(2, 5);
    }, [])


    if (!latestArticle) {
        return null;
    }

    return (
        <>
            <Grid
                container
                spacing={3}
                alignItems="flex-start"
                className="uppr-all-articles"
            >
                <Grid item md={8} className="uppr-articles-list">
                    <MainArticle items={latestArticle}/>
                </Grid>
                <Grid item md={4} className="uppr-side-block">
                    <TopFeaturedArticles items={top3Article}/>
                    <Downloads items={downloads}/>
                </Grid>
            </Grid>
            <Grid container
                  spacing={3}
                  alignItems="flex-start"
                  className={styles.upprOthersArticles}>
                <OthersArticles
                    items={firstRowOthersArticles}
                />
                <InformationBlock tags={tags}/>
            </Grid>
            <Grid container
                  spacing={3}
                  alignItems="flex-start"
                  className={styles.upprOthersArticles}>
                <OthersArticles
                    items={secondRowOthersArticles}
                />
            </Grid>
            <Grid container
                  spacing={3}
                  alignItems="flex-start"
                  className={styles.upprOthersArticles}>
                <OthersArticlesByCategory/>
            </Grid>
        </>
    );
}
