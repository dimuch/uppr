import React from 'react';

import {Grid, Typography} from '@mui/material';

import loader from '../../common/loader/loader';

import styles from './styles.module.scss';

export default function TopFeaturedArticles({items, domainName}) {
    const updateArticleViews = (article) => {
    };

    const width = window.innerWidth > 700 ? Math.round(window.innerWidth / 3) : window.innerWidth;
    const height = Math.round(width * 4 / 7);

    return (
        <Grid container={true} className={'wrapper ' + styles.wrapper}>
            <Grid
                item
                md={12}
                className={'uppr-section-title ' + styles.upprSectionTitle}
            >
                <Grid container={true} alignItems="center">
                    {/*<Grid item md={1} xs={2}>*/}
                    {/*  <TopFeaturedArticlesIcon />*/}
                    {/*</Grid>*/}
                    <Grid item md={12} xs={12}>
                        <Typography variant={'h5'}>Top featured</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                md={12}
                className={'uppr-section-content ' + styles.upprSectionContent}
            >
                <Grid container={true} spacing={3}>
                    {items.map((article) => {
                        return (
                            <Grid
                                item
                                key={article.title}
                                onClick={(e) => updateArticleViews(article)}
                            >
                                <Grid
                                    container={true}
                                    spacing={1}
                                    className={styles.articleContainer}
                                    alignContent={'center'}
                                >
                                    <Grid item xs={12} sm={5} className={styles.articleImage}>
                                        <img
                                            src={loader({src:article.image, width: width})}
                                            width={width}
                                            height={height}
                                            alt={article.title}
                                            style={{
                                                maxWidth: '100%',
                                                height: 'auto',
                                            }}/>
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
