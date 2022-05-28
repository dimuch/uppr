import React from "react";

import styles from './styles.module.scss';

const Video = ({ videoSrc }) => {

  return (
    <div className={styles.upprIntroVideo}>
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

export default Video;
