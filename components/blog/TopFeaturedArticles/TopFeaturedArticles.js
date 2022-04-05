import React, { Component } from "react";

import { Grid, Typography } from "@material-ui/core";

import { TopFeaturedArticlesIcon } from "../../common/icons/index";

import styles from "./styles.module.scss";

export default function TopFeaturedArticles({ items }) {

  //   if (items.length) {
  //     return null;
  //   }

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
                onClick={(e) => this.updateArticleViews(article)}
              >
                <Grid
                  container
                  spacing={1}
                  className="wrapper-article"
                  alignContent={"center"}
                >
                  <Grid item xs={5} className="image">
                    <Grid container alignContent={"center"}>
                      <Grid item>
                        <img
                          className={"article-image " + styles.articleImage}
                          src={article.image}
                          alt={article.title}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={7} className="title">
                    <a href={article.link}>
                      <Typography variant={"p"}>{article.title}</Typography>
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
