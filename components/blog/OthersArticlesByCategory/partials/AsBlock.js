import React, {useEffect, useState} from 'react';

import {Typography} from '@mui/material';
import Slider from '../../Slider/Slider';

export default function AsBlock({data}) {
    const {name, articles} = data;

    return (
        <>
            <Typography variant='h3'>
                {data.name}
            </Typography>
            <Slider data={articles} />
        </>
    )
}

