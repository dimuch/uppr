'use client';

import React, { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
import useMakeRequest from '../hooks/makeRequest';
import { LoaderIcon, SearchIcon } from '../icons';
import Image from 'next/image';
import Grid2 from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { linesLimiterConfig } from '../../../helpers/linesLimiterConfig';

import { useClickOutside } from '../hooks/clickOutside';
import { useWindowSize } from '../hooks/screenSize';

const SEARCH_REQ_URL = '/api/search?text=';

const Search = ({}) => {
  const { makeRequest, isLoading, error, data } = useMakeRequest();
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const inputRef = useRef();

  const screenSize = useWindowSize();
  const [responsiveClass, setResponsiveClass] = useState('65%');

  const makeSearch = event => {
    const search = event.target.value;
    setSearchText(search);
  };

  const onClickInside = () => {
    setResponsiveClass(() => {
      return screenSize.width < 650 ? '65%' : '65%';
    });
  };

  const closeSearchResults = () => {
    setSearchText(() => '');
    setResponsiveClass(() => '65%');
  };

  useEffect(() => {
    if (!searchText) {
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
    if (!data) {
      return;
    }

    setSearchResult(() => data.data);
  }, [data]);

  useEffect(() => {
    if (!error) {
      return;
    }
  }, [error]);

  useClickOutside(inputRef, closeSearchResults, onClickInside);

  return (
    <div
      className={`${styles.upprSearchWrapper} ${styles.responsiveSearch}`}
      ref={inputRef}
      style={{
 maxWidth: responsiveClass 
}}
    >
      <div
        className={`${styles.searchInputWrapper} ${!!searchResult.length ? styles.searchInputWrapperWithResult : ''}`}
      >
        <input name="search" placeholder="Search..." onChange={makeSearch} value={searchText} />
        <div className={styles.searchIcon}>{isLoading ? <LoaderIcon /> : <SearchIcon />}</div>
      </div>
      {!!searchResult.length && (
        <div className={`${styles.searchResult} ${!!searchResult.length ? styles.searchResultWithResult : ''}`}>
          {searchResult.map(article => {
            return (
              <Grid2 container className={styles.searchResultItem} key={article.title} alignItems={'center'}>
                <Grid2 size={{
 md: 4 
}}>
                  <Image
                    className={styles.searchResultItemImage}
                    src={article.image}
                    alt={article.title}
                    width="140"
                    height="80"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </Grid2>
                <Grid2 size={{
 md: 8 
}}>
                  <a href={article.link} target="_blank" rel="noreferrer" className={styles.searchResultItemLink}>
                    <Typography variant={'subtitle2'} sx={linesLimiterConfig(2)}>
                      {article.title}
                    </Typography>
                  </a>
                </Grid2>
              </Grid2>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
