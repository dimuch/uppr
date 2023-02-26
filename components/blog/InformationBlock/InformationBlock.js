import React, {useState} from 'react';

import {Grid, Typography} from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';

import styles from './styles.module.scss';
import Link from 'next/link';

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
                                <Link href={`/blog/post-tag?selectedTag=${item.name}`}>
                                    <Typography variant={'body2'}>
                                        {item.name}
                                    </Typography>
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}
