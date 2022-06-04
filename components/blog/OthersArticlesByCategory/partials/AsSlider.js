import React from 'react';
import Slider from '../../Slider/Slider';

import styles from '../styles.module.scss'

export default function AsSlider({data}) {
    const {name, articles} = data;

    return (
        <>
            <p className={styles.sectionTitle}>{name}</p>
            <Slider data={articles} slideWidth={'35%'}/>
        </>
    )
}

