import React from "react";

import { Grid } from "@material-ui/core";
import MainArticle from "../MainArticle/MainArticle";
import TopFeaturedArticles from "../TopFeaturedArticles/TopFeaturedArticles";
import Downloads from "../Downloads/Downloads";
import Link from 'next/link';

export default function SelectedAllCategories({
  latestArticle,
  otherLatestArticles,
  top3Article,
  downloads,
}) {
  if (!latestArticle) {
    return null;
  }

  return (
    <Grid
      container
      spacing={3}
      alignItems="flex-start"
      className="uppr-all-articles"
    >
      <Grid item md={8} className="uppr-articles-list">
        <Grid container>
          <Grid item className="uppr-main-article-block">
            <MainArticle items={latestArticle} />
          </Grid>
          <Grid item className="uppr-latest-articles">
            <Link href={'/blog/articles/four-sticky-work-situations'}>four-sticky-work-situations</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} className="uppr-side-block">
        <TopFeaturedArticles items={top3Article} />
        <Downloads items={downloads} />
      </Grid>
    </Grid>
  );
}
