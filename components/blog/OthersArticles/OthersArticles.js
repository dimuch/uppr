import React from 'react';

import {Grid} from '@mui/material';
import ArticleCard from '../OthersArticlesByCategory/partials/ArticleCard';

export default function OthersArticles({items, isInformationBlock}) {

    if (!items) {
        return null;
    }

    return (
        items.map(item => {
            return (
                <Grid item md={4} key={item.link}>
                    <ArticleCard item={item} />
                </Grid>
            )
        })
    )
}
