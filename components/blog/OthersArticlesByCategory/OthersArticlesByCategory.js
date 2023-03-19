import React from 'react';
import AsSlider from './partials/AsSlider';
import AsBlock from './partials/AsBlock';

import styles from './styles.module.scss'

export default function OthersArticlesByCategory({articlesByCategories}) {
    if (!articlesByCategories.length) {
        return null;
    }

    return (
        articlesByCategories.map((item, index) => { //item is name as Section Title, articles as Section Articles
            const isSlider = (index+1) % 2 !== 0;

            return (
                <div item key={item.name} sm={12} className={styles.sliderWrapper}>
                    {
                        isSlider ? (<AsSlider data={item}/>) : (<AsBlock data={item}/>)
                    }
                </div>
            )
        })
    )
}

