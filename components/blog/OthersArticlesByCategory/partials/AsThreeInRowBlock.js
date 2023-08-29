import React, {useMemo, useState} from 'react';
import {Typography} from '@mui/material';

import OthersArticles from '../../OthersArticles/OthersArticles';
import styles from './asThreeInRowStyles.module.scss'
import {LoaderIcon} from '../../../common/icons';

export default function AsThreeInRowBlock({data}) {
    const {name, articles} = data;
    const [isShowMorePressed, setIsShowMorePressed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const firstRowOthersArticles = useMemo(() => {
        return articles.slice(0, 3);
    }, [articles]);

    const secondRowOthersArticles = useMemo(() => {
        return articles.slice(3);
    }, [articles])

    const handleClick = () => {
        setIsLoading((state => !state));
        setTimeout(() => {
            setIsLoading((state => !state));
            setIsShowMorePressed(!isShowMorePressed);
        }, 1500);
    }

    const isShowMoreVisible = secondRowOthersArticles?.length > 0;

    return (
        <div className={styles.section}>
            <p className={styles.sectionTitle}>{name}</p>
            <div className={styles.sectionTitleSplitter}/>
            <p className={styles.shadowTitle}>{name}</p>

            <div className={styles.upprOthersArticles}>
                <OthersArticles
                    items={firstRowOthersArticles}
                />
            </div>

            {
                isShowMorePressed && (
                    <div className={styles.upprOthersArticles}>
                        <OthersArticles
                            items={secondRowOthersArticles}
                        />
                    </div>
                )
            }


            {
                isShowMoreVisible && (
                    <div className={styles.showMoreBtn}
                         onClick={handleClick}>
                        {
                            isLoading && (
                                <div className={styles.loader}>
                                    <LoaderIcon/>
                                </div>
                            )
                        }
                        {
                            !isLoading && <Typography>{!isShowMorePressed ? 'See all posts' : 'Show less'}</Typography>
                        }
                    </div>

                )
            }


        </div>
    )
}

