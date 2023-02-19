import React, {useEffect, useState} from 'react';

import { Grid, Typography } from "@mui/material";
import { getDate } from "../../../helpers/getDate";

import styles from "./styles.module.scss";
import Image from "next/image";
import {myLoader} from '../../common/loader/loader';

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

  const width = window.innerWidth;
  const height = width * 4 / 7;

  return (
    <div
      container={true}
      className={"wrapper " + styles.wrapper}
      onClick={(e) => updateArticleViews(mainArticleData)}
    >
      <Grid item md={12} style={{position:'relative'}}>
        <Image
          className={styles.image}
          src={mainArticleData.image}
          width={width}
          height={height}
          alt={mainArticleData.title}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </Grid>
      <Grid
        container={true}
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
          <Grid container={true} justifyContent={'space-around'}>
            <Grid item md={10} className="left-part">
              <Grid container={true}>
                <Typography
                  variant={"subtitle2"}
                  className={"summary-item " + styles.summaryItem}
                >
                  Опубліковано: {mainArticleData.published}
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={2} className="right-part">
              <a href={mainArticleData.link}>
                <Typography
                  variant={"subtitle2"}
                  className={"read-more " + styles.readMore}
                >
                  Читати &rArr;
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
