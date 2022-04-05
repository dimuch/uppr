import React from "react";
import { Typography } from "@material-ui/core";

import styles from "./styles.module.scss";

const Search = ({}) => {
  return (
    <div className={styles.upprSearchWrapper}>
      <div className={styles.searchInputWrapper}>
        <input name="search" placeholder="Пошук..." />
      </div>
    </div>
  );
};

export default Search;
