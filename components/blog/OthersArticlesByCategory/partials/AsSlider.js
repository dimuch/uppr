import React from 'react';
import Slider from '../../Slider/Slider';

import styles from '../styles.module.scss'

export default function AsSlider({ data }) {
    // Handle undefined or null data gracefully
    if (!data) {
        return null;
    }

    const { name, articles } = data;

    // Also check if articles array exists
    if (!articles || !articles.length) {
        return null;
    }

    return (
        <>
            <p className={styles.sectionTitle}>{name}</p>
            <div className={styles.sectionTitleSplitter} />
            <p className={styles.shadowTitle}>{name}</p>

            <Slider data={articles} location={'blog'}/>
        </>
    )
}

