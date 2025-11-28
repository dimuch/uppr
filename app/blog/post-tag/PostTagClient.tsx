'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import TagsAsSwitchers from '../../../components/blog/TagsAsSwitchers/TagsAsSwitchers';
import useMakeRequest from '../../../components/common/hooks/makeRequest';
import SelectedSpecificCategory from '../../../components/blog/SelectedSpecificCategory/SelectedSpecificCategory';
import { LoaderIcon } from '../../../components/common/icons';
import styles from './styles.module.scss';

const SEARCH_REQ_URL = '/api/articles-by-tags?selectedTag=';

export default function PostTagClient({ articlesByTags, articleTags }) {
  const { makeRequest, isLoading, error, data } = useMakeRequest();
  const router = useRouter();
  const searchParams = useSearchParams();

  const articleTagsAsMap = useMemo(() => {
    const mappedTags = articleTags.map(tag => [tag.name, tag]);
    return new Map(mappedTags);
  }, [articleTags]);

  const [isChanged, setIsChanged] = useState(0);
  const [tags, setTags] = useState(() => articleTagsAsMap);
  const [articles, setArticles] = useState(() => articlesByTags);

  const toggleSelectedTag = (tag, index) => {
    const selectedTag = {
      ...tag,
      selected: !tag.selected,
    };
    const updatedTags = new Map([...tags]);
    updatedTags.set(tag.name, selectedTag);
    setTags(updatedTags);
    setIsChanged(Date.now());
  };

  useEffect(() => {
    if (!isChanged) {
      return undefined;
    }

    const updatedTagQueryString = Array.from(tags.values())
      .filter(tag => tag.selected)
      .map(tag => tag.name)
      .join(',');

    // Update the URL with the new selected tags
    const newUrl = updatedTagQueryString 
      ? `/blog/post-tag?selectedTag=${updatedTagQueryString}`
      : '/blog/post-tag';
    router.push(newUrl, { scroll: false });

    const reqUrl = SEARCH_REQ_URL + updatedTagQueryString;
    makeRequest(reqUrl);
  }, [isChanged]); // Only depend on isChanged, not tags or makeRequest

  useEffect(() => {
    if (!data) {
      return undefined;
    }

    setArticles(data);
  }, [data]);

  return (
    <>
      <div className={`uppr-article-categories ${styles.upprArticleCategories}`}>
        <TagsAsSwitchers items={tags} toggleSelectedTag={toggleSelectedTag} />
      </div>

      {isLoading && (
        <div className={styles.loader}>
          <LoaderIcon />
        </div>
      )}

      {!isLoading && (
        <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
          <SelectedSpecificCategory articlesByCategory={articles} tags={[]} />
        </div>
      )}
    </>
  );
}

