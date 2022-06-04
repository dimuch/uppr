import React from 'react';
import ArticleCard from './ArticleCard';

import styles from '../styles.module.scss';


export default function AsBlock({data}) {
    const {name, articles} = data;
    const splitArticlesBy5Qty = [];
    const chunkSize = 5;
    for (let i = 0; i < articles.length; i += chunkSize) {
        const chunk = articles.slice(i, i + chunkSize);
        splitArticlesBy5Qty.push(chunk);
    }
    return (
        <>
            <p className={styles.sectionTitle}>{name}</p>
            {
                splitArticlesBy5Qty.map((chunk, chunkIndex) => {
                    return (
                        <div className={styles.container} key={'chunk' + chunkIndex}>
                            {
                                chunk.map((item, index) => {
                                    const classCaption = `item${index % chunkSize}`;
                                    return (
                                        <div className={styles[classCaption]}
                                             key={'item' + index}
                                        >
                                            <ArticleCard item={item} isDescription={(index + 1) % 3 === 0}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </>
    )
}


