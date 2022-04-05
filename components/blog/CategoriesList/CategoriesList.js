import React, { useState } from "react";
// import {
//   fetchArticles,
//   updateArticleCategories,
//   updateSelectedCategory,
// } from "../../../actions/articlesActions";

import { func } from "prop-types";

import styles from "./styles.module.scss";

export default function CategoriesList({ items }) {
  const [articleCategories, setArticleCategories] = useState(items);

  const filterByCategories = (selectedArticleCategory) => {
    const updatedArticleCategories = items.map((articleCategory) => {
      articleCategory.isSelected = false;
      if (selectedArticleCategory.id === articleCategory.id) {
        articleCategory.isSelected = !articleCategory.isSelected;
      }

      return articleCategory;
    });

    setArticleCategories((state) => {
      return updatedArticleCategories;
    });

    // this.props.updateSelectedCategory(selectedArticleCategory.id);
    // this.props.fetchArticles(selectedArticleCategory.id);
  };

  if (!articleCategories?.length) {
    return null;
  }

  return (
    <ul className={styles.categoryList}>
      {articleCategories.map((articleCategory) => {
        const classCalc = !articleCategory.isSelected ? " " : styles.selected;

        return (
          <li
            key={articleCategory.id}
            className={`${styles.categoryListItem} ${classCalc}`}
            onClick={(e) => filterByCategories(articleCategory)}
          >
            {articleCategory.name}
          </li>
        );
      })}
    </ul>
  );
}
