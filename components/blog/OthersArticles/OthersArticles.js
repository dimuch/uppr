import React from 'react';

import {Grid} from '@mui/material';
import ArticleCard from '../OthersArticlesByCategory/partials/ArticleCard';

export default function OthersArticles({items, domainName}) {

    if (!items) {
        return null;
    }

    return (
        items.map(item => {
            return (
                <Grid item xs={12} sm={12} md={4} key={item.link}>
                    <ArticleCard item={item} domainName={domainName}/>
                </Grid>
            )
        })
    )
}
