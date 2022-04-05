import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import UpprLogoText from "../uppr-logo-as-text/UpprLogoText";
import Search from "../search/Search";
import Menu from "../menu/Menu";

import "./styles.module.scss";

const Header = ({ search, location }) => {
  const styles = useStyles();
  const [compStyles, setCompStyles] = useState();

  useEffect(() => {
    setCompStyles(styles);
  }, []);

  return (
    <div className={`uppr-header-wrapper ${compStyles?.headerWrapper}`}>
      <div className="wrapper">
        <div className="header-left-block">
          <UpprLogoText baseTypography={5} />
        </div>
        <div className={`header-right-block ${compStyles?.headerRightBlock}`}>
          {search && <Search />}
          <Menu location={location} />
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    display: "flex",
    alignItems: "center",
    padding: ".5rem",
    position: "sticky",
    top: 0,
    zIndex: 2,
    justifyContent: "space-between",
    backgroundColor: "white",
    boxShadow: "0px 10px 23px -6px rgba(0,0,0,0.1)",

    "& .wrapper": {
      display: "flex",
      justifyContent: "space-between",
      margin: "auto",
      width: "100%",
      maxWidth: "1200px",
    },
  },
  headerRightBlock: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 2,
    paddingLeft: "3rem",
  },

  headerWrapperOnScroll: {
    backgroundColor: "white",
  },
}));

export default Header;
