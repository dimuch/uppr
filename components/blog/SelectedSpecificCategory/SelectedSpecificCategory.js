'use client';

import React, { useMemo } from 'react';
import { Grid } from '@mui/material';

import OthersArticles from '../OthersArticles/OthersArticles';

import styles from './styles.module.scss';
import InformationBlock from '../InformationBlock/InformationBlock';

export default function SelectedSpecificCategory({
   tags,
   articlesByCategory,
}) {

    const firstRowOthersArticles = useMemo(() => {
        return !tags?.length ? articlesByCategory?.slice(0, 3) : (articlesByCategory?.slice(0, 2) || []);
    }, [articlesByCategory]);

    const secondRowOthersArticles = useMemo(() => {
        return !tags?.length ? articlesByCategory?.slice(3) : (articlesByCategory?.slice(2) || []);
    }, [articlesByCategory]);

    return (
        <>
            <div className={styles.upprOthersArticles}>
                <OthersArticles
                    items={firstRowOthersArticles}
                />
                {tags?.length > 0 && <InformationBlock tags={tags}/>}
            </div>
            <div className={styles.upprOthersArticles}>
                <OthersArticles
                    items={secondRowOthersArticles}
                />
            </div>
        </>
    );
}
