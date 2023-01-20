import React, {useEffect, useMemo, useState} from 'react';

import {Grid} from '@mui/material';
import MainArticle from '../MainArticle/MainArticle';

import OthersArticles from '../OthersArticles/OthersArticles';
import OthersArticlesByCategory from '../OthersArticlesByCategory/OthersArticlesByCategory';

import styles from './styles.module.scss';
import useMakeRequest from '../../common/hooks/makeRequest';
import InformationBlock from '../InformationBlock/InformationBlock';

// const ARTICLES_BY_CATEGORY_URL = '/api/articles-by-category'

export default function SelectedSpecificCategory({
                                                     selectedCategory,
                                                     latestArticle,
                                                     tags,
                                                     articlesByCategory,
                                                 }) {
    // const {makeRequest, isLoading, error, data} = useMakeRequest();

    const firstRowOthersArticles = useMemo(() => {
        return articlesByCategory?.slice(0, 2) || [];
    }, [articlesByCategory]);

    const secondRowOthersArticles = useMemo(() => {
        return articlesByCategory?.slice(2, 5) || [];
    }, [articlesByCategory]);

    return (
        <>
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
        </>
    );
}
