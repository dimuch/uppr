import React from 'react';

import Grid2 from '@mui/material/Grid2';
import { Typography } from '@mui/material';

import styles from './styles.module.scss';
import TopFeaturedArticlesItems from './TopFeaturedArticlesITems';

export default function TopFeaturedArticles({ items, domainName }) {
    return (
        <div className={'wrapper ' + styles.wrapper}>
            <div className={'uppr-section-title ' + styles.upprSectionTitle}>
                <Grid2 container alignItems="center">
                    <Grid2 size={{
 md: 12, xs: 12 
}}>
                        <Typography variant={'h5'}>Top featured</Typography>
                    </Grid2>
                </Grid2>
            </div>
            <TopFeaturedArticlesItems items={items} />
        </div>
    );
}
