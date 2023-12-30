import React from 'react';

import {Grid, Typography} from '@mui/material';

import styles from './styles.module.scss';
import TopFeaturedArticlesItems from './TopFeaturedArticlesITems';

export default function TopFeaturedArticles({items, domainName}) {
    return (
        <div className={'wrapper ' + styles.wrapper}>
            <div className={'uppr-section-title ' + styles.upprSectionTitle}>
                <Grid container alignItems="center">
                    <Grid item md={12} xs={12}>
                        <Typography variant={'h5'}>Top featured</Typography>
                    </Grid>
                </Grid>
            </div>
            <TopFeaturedArticlesItems items={items} />
        </div>
    );
}
