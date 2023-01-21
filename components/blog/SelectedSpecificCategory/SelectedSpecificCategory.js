import React, {useMemo} from 'react';
import {Grid} from '@mui/material';

import OthersArticles from '../OthersArticles/OthersArticles';

import styles from './styles.module.scss';
import InformationBlock from '../InformationBlock/InformationBlock';

export default function SelectedSpecificCategory({
                                                     tags,
                                                     articlesByCategory,
                                                 }) {

    const firstRowOthersArticles = useMemo(() => {
        return articlesByCategory?.slice(0, 2) || [];
    }, [articlesByCategory]);

    const secondRowOthersArticles = useMemo(() => {
        return articlesByCategory?.slice(2, 5) || [];
    }, [articlesByCategory]);

    return (
        <>
            <Grid container
                  spacing={3}
                  alignItems="flex-start"
                  className={styles.upprOthersArticles}>
                <OthersArticles
                    items={firstRowOthersArticles}
                />
                <InformationBlock tags={tags}/>
            </Grid>
            <Grid container
                  spacing={3}
                  alignItems="flex-start"
                  className={styles.upprOthersArticles}>
                <OthersArticles
                    items={secondRowOthersArticles}
                />
            </Grid>
        </>
    );
}
