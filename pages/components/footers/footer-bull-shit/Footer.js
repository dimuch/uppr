import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const FooterBullShit = () => {
  const styles = useStyles();

  const [compStyles, setCompStyles] = useState();

  useEffect(() => {
    setCompStyles(styles);
  }, []);

  return (
    <div className={"uppr-footer-bull-shit " + compStyles?.footerBullShit}>
      <Typography variant={"body1"}>
        ЯК НЕ ПИСАТИ “БУЛШИТ” В ІМЕЙЛАХ
        <a
          href="https://www.udemy.com/deschool-your-emails/?couponCode=UPPR_SITE"
          target="_blank"
        >
          <Typography variant={"button"}>дізнайтеся зараз</Typography>
        </a>
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  footerBullShit: {
    backgroundColor: "#f93b63",
    padding: " 1rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& p": {
      textTransformation: "upperCase",
      color: "white !important",
      fontFamily: "Futura-Book !important",
    },
    "& a": {
      color: "white !important",
      textDecoration: "none",
      marginLeft: "1rem",
      padding: ".5rem 2rem",
      border: "1px solid white",
      cursor: "pointer",
      textTransformation: "upperCase",
      backgroundColor: "transparent",
      transition: "background-color ease-out .3s",
    },
  },
}));

export default FooterBullShit;
