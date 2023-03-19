import React from 'react';

import ArticleCard from '../OthersArticlesByCategory/partials/ArticleCard';

export default function OthersArticles({items, isDescription=true}) {

    if (!items) {
        return null;
    }

    return (
        items.map(item => {
            return (
                <div key={item.link}>
                    <ArticleCard item={item} isDescription={isDescription}/>
                </div>
            )
        })
    )
}
