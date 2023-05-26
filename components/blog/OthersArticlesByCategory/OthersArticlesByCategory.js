import React from 'react';
import AsSlider from './partials/AsSlider';
import AsThreeInRowBlock from './partials/AsThreeInRowBlock';

import styles from './styles.module.scss'
import InstagramImages from '../InstagramImages/InstagramImages';

export default function OthersArticlesByCategory({articlesByCategories}) {
  if (!articlesByCategories.length) {
    return null;
  }

  return (
    <>
      {articlesByCategories.map((item, index) => { //item is name as Section Title, articles as Section Articles
        const isSlider = (index + 1) % 2 !== 0;

        return (
          <div className={styles.sliderWrapper} key={`${index}-${Math.random()}`}>
            {
              isSlider ? (<AsSlider data={item}/>) : (<AsThreeInRowBlock data={item}/>)
            }
          </div>
        )
      })}

      <InstagramImages/>
    </>
  )
}

