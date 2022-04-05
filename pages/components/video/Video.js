import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const Video = ({ videoSrc }) => {
  const styles = useStyles();
  const [compStyles, setCompStyles] = useState();

  useEffect(() => {
    setCompStyles(styles);
  }, []);

  return (
    <div className={"uppr-intro-video " + compStyles?.introAsset}>
      <video
        controls={false}
        autoPlay
        loop
        muted
        src={videoSrc}
        type="video/mp4"
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  introAsset: {
    "& video": {
      width: "100%",
      height: "auto",
    },
  },
}));

export default Video;
