import React, {useEffect, useState} from 'react';

import {Grid, Typography} from '@mui/material';
import Slider from '../../Slider/Slider';

import styles from '../styles.module.scss'

export default function AsSlider({data}) {
    const {name, articles} = data;

    return (
        <>
            <p className={styles.sectionTitle}>
                {name}
            </p>
            <Slider data={articles} slideWidth={'30%'}/>
        </>
    )
}

