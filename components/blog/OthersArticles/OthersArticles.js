import React from 'react';

import {Grid} from '@mui/material';
import ArticleCard from '../OthersArticlesByCategory/partials/ArticleCard';

export default function OthersArticles({items, domainName, isDescription=true}) {

    if (!items) {
        return null;
    }

    return (
        items.map(item => {
            return (
                <Grid item xs={12} sm={6} md={4} key={item.link}>
                    <ArticleCard item={item} domainName={domainName} isDescription={isDescription}/>
                </Grid>
            )
        })
    )
}
