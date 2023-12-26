import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Tags from '../Tags/Tags';
import loader from '../../common/loader/loader';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import styles from './styles.module.scss';
import { getDate } from '../../../helpers/getDate';

export default function ArticleHeader( {articleData} ) {
  const [imgDimensions, setImgDimensions] = useState({width: 700, height: 400});

  useEffect(() => {
    const width = window.innerWidth > 850 ? Math.round(window.innerWidth / 3) : window.innerWidth;
    const height = Math.round(width * 4 / 7);

    setImgDimensions(() => ( {width, height} ));
  }, []);

  return (
    <div className={styles.titleWrapper}>
      <div className={`${styles.categoryBadge}`}>
        <Link
          href={`/blog?search=${articleData.category.name}`}
          style={{color: `#${articleData.category.color}`}}
        >
          {`${articleData.category.name}`}
        </Link>
        <span className={styles.published}>{getDate(new Date(articleData.published))}</span>
      </div>

      <div className={styles.titleContent}>
        <h1 className={styles.title}
            style={{color: `#${articleData.article_color}`}}>{articleData.title}</h1>
        <p className={styles.shortMessage}
           style={{color: `#${articleData.article_color}`}}>{articleData.description}</p>
      </div>
      <div className={styles.titleImage}>
        <img
          src={loader({src: articleData.image, width: imgDimensions.width})}
          width={imgDimensions?.width}
          height={imgDimensions?.height}
          alt={articleData.title}
          style={{
            width: '100%',
            height: 'auto',
          }}/>
        <Tags items={articleData.tags} location={'header'}/>
      </div>

      {/*<MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>*/}
      {/*  <MouseParallaxChild*/}
      {/*    factorX={0.3}*/}
      {/*    factorY={0.5}*/}
      {/*    style={{*/}
      {/*        position: 'absolute',*/}
      {/*        left: '-7%',*/}
      {/*        top: '20%',*/}
      {/*        width: '28px',*/}
      {/*        height: '28px',*/}
      {/*        border: '3px solid #ff9c2d',*/}
      {/*        transform: 'rotate(23deg)',*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <div className={`${styles.squareTopLeft} ${styles.rotate}` }></div>*/}
      {/*  </MouseParallaxChild>*/}
      {/*  <MouseParallaxChild factorX={0.7} factorY={0.8}>*/}
      {/*    <div className={styles.circleTopRight}></div>*/}
      {/*  </MouseParallaxChild>*/}
      {/*  <MouseParallaxChild factorX={0.3} factorY={0.5}>*/}
      {/*    <div className={`${styles.circleBottomLeft} ${styles.rotate}` }></div>*/}
      {/*  </MouseParallaxChild>*/}
      {/*  <MouseParallaxChild factorX={0.7} factorY={0.8}>*/}
      {/*    <div className={`${styles.triangleBottomRight} ${styles.rotate}`}></div>*/}
      {/*  </MouseParallaxChild>*/}
      {/*</MouseParallaxContainer>*/}
    </div>
  );
}
