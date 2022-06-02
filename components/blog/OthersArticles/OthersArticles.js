import React, {useState} from 'react';

import {Grid, Typography} from '@mui/material';
import {getDate} from '../../../helpers/getDate';

import styles from './styles.module.scss';
import Image from 'next/image';

import {linesLimiterConfig} from '../../../helpers/linesLimiterConfig';

export default function OthersArticles({items, isInformationBlock}) {
    const updateArticleViews = (mainArticleData) => {
        mainArticleData.views += 1;
    };

    if (!items) {
        return null;
    }

    return (
        items.map(item => {
            return (
                <Grid item md={4}
                      key={item.link}
                      onClick={(e) => updateArticleViews(item.link)}
                >
                    <Grid container className={'wrapper ' + styles.wrapper}>
                        <Grid item md={12}>
                            <Image
                                className={styles.image}
                                src={item.image}
                                width="700"
                                height="400"
                                alt={item.title}
                                layout="raw"
                            />
                        </Grid>
                        <Grid item md={12}>
                            <Grid
                                container textAlign={'center'} alignItems={'center'}
                                className={styles.upprArticleDetails}
                            >
                                <Grid item className={styles.category} style={{backgroundColor: `#${item.categoryColor}`}}>
                                    <Typography variant={'subtitle2'}>
                                        {item.name.toUpperCase()}
                                    </Typography>

                                </Grid>
                                <Grid item className="title">
                                    <a href={item.link}>
                                        <Typography variant={'h3'} sx={linesLimiterConfig(3)}>
                                            {item.title + item.title}
                                        </Typography>
                                    </a>
                                </Grid>
                                <Grid item className="description"
                                      sx={linesLimiterConfig(3)}
                                >
                                    <Typography>{item.description + item.description}</Typography>
                                </Grid>
                                <Grid item className={'summary ' + styles.summary}>
                                        <Typography
                                            variant={'subtitle2'}
                                            className={'summary-item ' + styles.summaryItem}
                                        >
                                            Опубліковано: {getDate(new Date(item.published))}
                                        </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )
        })
    )
}
