import React from 'react';

import {Grid, Typography} from '@mui/material';

import styles from './styles.module.scss';
import TopFeaturedArticlesItems from './TopFeaturedArticlesITems';

export default function TopFeaturedArticles({items, domainName}) {
    const updateArticleViews = (article) => {
    };

    const width = window.innerWidth > 850 ? Math.round(window.innerWidth / 3) : window.innerWidth;
    const height = Math.round(width * 4 / 7);

    return (
        <div container={true} className={'wrapper ' + styles.wrapper}>
            <div className={'uppr-section-title ' + styles.upprSectionTitle}>
                <Grid container={true} alignItems="center">
                    <Grid item md={12} xs={12}>
                        <Typography variant={'h5'}>Top featured</Typography>
                    </Grid>
                </Grid>
            </div>
            <TopFeaturedArticlesItems items={items} />
        </div>
    );
}
