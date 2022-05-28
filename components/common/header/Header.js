import React from "react";
import UpprLogoText from "../uppr-logo-as-text/UpprLogoText";
import Search from "../search/Search";
import Menu from "../menu/Menu";

import styles from "./styles.module.scss";

const Header = ({ search, location }) => {
  return (
    <div className={styles.upprheaderWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.headerLeftBlock}>
          <UpprLogoText/>
        </div>
        <div className={styles.headerRightBlock}>
          {search && <Search />}
          <Menu location={location} />
        </div>
      </div>
    </div>
  );
};

export default Header;
