import React from "react";

import { Grid, Typography } from "@mui/material";

import { TopFeaturedArticlesIcon } from "../../common/icons/index";

import styles from "./styles.module.scss";
import Image from 'next/image';
import {linesLimiterConfig} from '../../../helpers/linesLimiterConfig';

export default function TopFeaturedArticles({ items }) {
  const updateArticleViews = (article) => {};

  return (
    <Grid container className={"wrapper " + styles.wrapper}>
      <Grid
        item
        md={12}
        className={"uppr-section-title " + styles.upprSectionTitle}
      >
        <Grid container alignItems="center">
          <Grid item md={1} xs={2}>
            <TopFeaturedArticlesIcon />
          </Grid>
          <Grid item md={11} xs={10}>
            <Typography variant={"h5"}>Top featured</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        md={12}
        className={"uppr-section-content " + styles.upprSectionContent}
      >
        <Grid container spacing={3}>
          {items.map((article) => {
            return (
              <Grid
                item
                key={article.title}
                onClick={(e) => updateArticleViews(article)}
              >
                <Grid
                  container
                  spacing={1}
                  className={styles.articleContainer}
                  alignContent={"center"}
                >
                  <Grid item xs={12} sm={5} className={styles.articleImage}>
                        <Image
                          src={article.image}
                          width="700"
                          height="400"
                          alt={article.title}
                          layout="responsive"
                        />
                  </Grid>
                  <Grid item xs={12} sm={7} className={styles.articleTitle}>
                    <a href={article.link}>
                      <Typography>
                          {article.title}
                      </Typography>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
