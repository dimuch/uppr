import React, {useState} from 'react';

import {Grid, Typography} from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';

import styles from './styles.module.scss';

export default function InformationBlock({tags}) {
    return (
        <Grid
            item
            md={4}
        >
            <Grid container={true} alignItems="center"
                  className={styles.upprSectionTitle}
            >
                {/*<Grid item md={1} xs={2}>*/}
                {/*    <TagIcon/>*/}
                {/*</Grid>*/}
                <Grid item md={12} xs={12}>
                    <Typography variant={'h5'}>Tags</Typography>
                </Grid>
            </Grid>
            <Grid
                container={true}
                justifyContent={'flex-start'}
                alignItems={'center'}
                className={'uppr-section-content ' + styles.upprSectionContent}
            >
                {
                    tags.map(item => {
                        return (
                            <Grid item key={item.name}
                                  className={styles.tagItem}
                            >
                                <Typography variant={'body2'}>
                                    {item.name}
                                </Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}
