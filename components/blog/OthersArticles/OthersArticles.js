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
                <div key={item.link}>
                    <ArticleCard item={item} domainName={domainName} isDescription={isDescription}/>
                </div>
            )
        })
    )
}
