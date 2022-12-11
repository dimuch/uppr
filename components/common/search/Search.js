import React, {useEffect, useRef, useState} from 'react';

import styles from './styles.module.scss';
import useMakeRequest from '../hooks/makeRequest';
import {LoaderIcon, SearchIcon} from '../icons';
import Image from 'next/image';
import {Grid, Typography} from '@mui/material';
import {linesLimiterConfig} from '../../../helpers/linesLimiterConfig';
import {useClickOutside} from '../hooks/clickOutside';

const SEARCH_REQ_URL = '/api/search?text='

const Search = ({}) => {
    const {makeRequest, isLoading, error, data} = useMakeRequest();
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const inputRef = useRef();

    const makeSearch = (event) => {
        const search = event.target.value;
        setSearchText(search);
    }

    const closeSearchResults = () => {
        setSearchText(() => '');
    }

    useEffect(() => {
        if(!searchText) {
            setSearchResult(() => []);
            return;
        }

        const reqUrl = SEARCH_REQ_URL + searchText;
        const timer = setTimeout(() => makeRequest(reqUrl), 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [searchText]);

    useEffect(() => {
        if(!data) {
            return
        }

        setSearchResult(() => data.data);
    }, [data]);

    useEffect(() => {
        if(!error) {
            return
        }

        console.log('error', error);

    }, [error]);

    useClickOutside(inputRef, closeSearchResults);

    return (
        <div className={`${styles.upprSearchWrapper}`} ref={inputRef}>
            <div className={`${styles.searchInputWrapper} ${!!searchResult.length ? styles.searchInputWrapperWithResult : ''}`}>
                <input name="search"
                       placeholder="Пошук..."
                       onChange={makeSearch}
                       value={searchText}
                />
                <div className={styles.searchIcon}>
                    {isLoading ? <LoaderIcon /> : <SearchIcon />}
                </div>
            </div>
            {!!searchResult.length && (
                <div className={`${styles.searchResult} ${!!searchResult.length ? styles.searchResultWithResult : ''}`}>
                    {
                        searchResult.map(article => {
                            return (
                                <Grid container className={styles.searchResultItem} key={article.title}
                                    alignItems={'center'}
                                >
                                    <Grid item md={4}>
                                        <Image
                                            className={styles.searchResultItemImage}
                                            src={article.image}
                                            alt={article.title}
                                            width="70"
                                            height="40"
                                            layout="responsive"
                                        />
                                    </Grid>
                                    <Grid item md={8}>
                                        <a href={article.link} className={styles.searchResultItemLink}>
                                            <Typography
                                                variant={'subtitle2'}
                                                sx={linesLimiterConfig(2)}
                                            >
                                                {article.title}
                                            </Typography>
                                        </a>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </div>
            )}
        </div>
    );
};

export default Search;
