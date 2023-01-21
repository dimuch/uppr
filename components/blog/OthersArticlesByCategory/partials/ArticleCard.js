import React from 'react';
import {Grid, Typography} from '@mui/material';

import Image from 'next/image';

import {getDate} from '../../../../helpers/getDate';
import {linesLimiterConfig} from '../../../../helpers/linesLimiterConfig';

import styles from '../styles.module.scss';

export default function ArticleCard({item, isDescription=true}) {
    return (
        <a href={item.link}>
            <Grid container={true} className={styles.wrapper}>
                <Grid item xs={12}>
                    <Image
                        className={styles.image}
                        src={item.image}
                        alt={item.title}
                        width="700"
                        height="400"
                    />
                </Grid>
                <Grid item md={12}>
                    <Grid
                        container={true} textAlign={'center'} alignItems={'center'}
                        className={styles.upprArticleDetails}
                    >
                        <Grid item className={styles.category}
                              style={{backgroundColor: `#${item.categoryColor}`}}
                        >
                            <Typography variant={'subtitle2'}>
                                {item?.name?.toUpperCase()}
                            </Typography>

                        </Grid>
                        <Grid item className={styles.title} sm={12}>
                            <a href={item.link}>
                                <Typography
                                    textAlign={'center'}
                                    variant={'h3'}
                                    sx={linesLimiterConfig(2)}
                                >
                                    {item.title}
                                </Typography>
                            </a>
                        </Grid>
                        {
                            isDescription && (
                                <Grid item className="description"
                                      md={12}
                                      sx={linesLimiterConfig(3)}
                                >
                                    <Typography>{item.description}</Typography>
                                </Grid>
                            )
                        }
                        <Grid item
                              md={12}
                              className={'summary ' + styles.summary}
                        >
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
        </a>
    )
}
