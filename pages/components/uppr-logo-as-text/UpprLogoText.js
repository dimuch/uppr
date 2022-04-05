import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

// import styles from "./styles.module.scss";

const UpprLogoText = ({ baseTypography, onlyLogo }) => {
  const styles = useStyles();

  return (
    <a className={"uppr-logo "} href={"/"}>
      <Typography variant={`h${baseTypography}`} component={"span"}>
        <strong>[</strong>
      </Typography>
      <Typography variant={`h${baseTypography + 1}`} component={"span"}>
        UP
      </Typography>
      <Typography variant={`h${baseTypography}`} component={"span"}>
        <strong>]</strong>
      </Typography>
      <Typography variant={`h${baseTypography + 1}`} component={"span"}>
        PR
      </Typography>
      {!onlyLogo && (
        <Typography
          variant={"body2"}
          component={"span"}
          sx={{ fontFamily: "'Poiret-One'" }}
        >
          &nbsp;keep it simple
        </Typography>
      )}
    </a>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "baseline",
    textDecoration: "none",
  },
}));

export default UpprLogoText;
