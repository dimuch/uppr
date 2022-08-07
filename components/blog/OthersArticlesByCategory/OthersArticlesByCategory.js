import React, {useEffect, useState} from 'react';
import {Grid} from '@mui/material';
import AsSlider from './partials/AsSlider';
import AsBlock from './partials/AsBlock';

export default function OthersArticlesByCategory() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/api/articles-by-category')
            .then(async (data) => {
                const articlesByCategory = await data.json();
                setItems(articlesByCategory);
            })

    }, []);

    if (!items.length) {
        return null;
    }

    return (
        items.map((item, index) => { //item is name as Section Title, articles as Section Articles
            const isSlider = (index+1) % 2 !== 0;

            return (
                <Grid item key={item.name} sm={12}>
                    {
                        isSlider ? (<AsSlider data={item}/>) : (<AsBlock data={item}/>)
                    }
                </Grid>
            )
        })
    )
}

