import React from 'react';
import {fetchArticles, updateArticleCategories, updateSelectedCategory} from '../../../actions/articlesActions';
import {func} from 'prop-types';

export default function CategoriesList({items}) {

    const filterByCategories = (selectedArticleCategory) => {
        const updatedArticleCategories = items.map(articleCategory => {
            articleCategory.isSelected = false;
            if(selectedArticleCategory.id === articleCategory.id){
                articleCategory.isSelected = !articleCategory.isSelected
            }

            return articleCategory;
        });

        this.props.updateSelectedCategory(selectedArticleCategory.id);
        this.props.fetchArticles(selectedArticleCategory.id);
        this.props.updateArticleCategories(updatedArticleCategories);
    }


    if (!items?.length) {
        return null;
    }

    return (
        <ul>
            {
                items.map(articleCategory => {
                    return (
                        <li key={articleCategory.id}
                            className={articleCategory.isSelected ? 'selected' : ''}
                            onClick={(e) => filterByCategories(articleCategory)}
                        >
                            {articleCategory.name}
                        </li>
                    )
                })
            }
        </ul>
    )
}
