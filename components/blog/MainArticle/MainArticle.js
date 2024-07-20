import React, { useEffect, useState } from 'react';

import { Grid, Typography } from "@mui/material";
import { getDate } from "../../../helpers/getDate";

import loader from '../../common/loader/loader';

import styles from "./styles.module.scss";

export default function MainArticle({ items }) {
  const [mainArticleData, setMainArticleData] = useState({
    ...items[0],
    published: getDate(new Date(items[0].published)),
  });

  const updateArticleViews = (mainArticleData) => {
    mainArticleData.views += 1;
  };

  if (!mainArticleData) {
    return null;
  }

  const width = Math.round(window.innerWidth * 2 / 3);
  const height = Math.round(width * 4 / 7);

  return (
    <div className={styles.mainArticleWrappper}
      onClick={(e) => updateArticleViews(mainArticleData)}
    >
      <div style={{
 position:'relative' 
}}>
        <div className={styles.category}
              style={{
 backgroundColor: `#${mainArticleData.categoryColor}` 
}}
        >
          <Typography variant={'subtitle2'}>
            {mainArticleData?.name?.toUpperCase()}
          </Typography>

        </div>
        <img
          className={styles.image}
          src={loader({
 src:mainArticleData.image, width: width 
})}
          width={width}
          height={height}
          alt={mainArticleData.title}
        />
      </div>
      <div
        className={"uppr-article-details " + styles.upprArticleDetails}
      >
        <Grid item md={12} className="title">
          <a href={mainArticleData.link}>
            <Typography variant={"h3"}>{mainArticleData.title}</Typography>
          </a>
        </Grid>
        <Grid item md={12} className="description">
          <Typography>{mainArticleData.description}</Typography>
        </Grid>
        <Grid item md={12} className={"summary " + styles.summary}>
          <Grid container justifyContent={'space-between'}>
            <Grid item md={10} className="left-part">
              <Grid container>
                <Typography
                  variant={"subtitle2"}
                  className={"summary-item " + styles.summaryItem}
                >
                  {mainArticleData.published}
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={2} className="right-part">
              <a href={mainArticleData.link}>
                <Typography
                  variant={"subtitle2"}
                  className={"read-more " + styles.readMore}
                >
                  Читати &rarr;
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
