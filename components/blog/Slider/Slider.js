import React, {useEffect, useRef, useState} from 'react';
import {ArrowCircleRightOutlined, ArrowCircleLeftOutlined} from '@mui/icons-material';
import Image from 'next/image';

import styles from './styles.module.scss';

const defaultSliderConfig = {
    startOffset: 0,
}

export default function Slider({data}) {
    const wrapperNode = useRef();
    const slideNode = useRef();

    const [slider, setSlider] = useState({
        startOffset: 0,
    });

    const firstSlide = data[0];
    const othersSlides = data.slice(1);

    const makeSlide = (step) => {
        const updatedStartOffset = (slider.startOffset + step * slider.slideWidth) % (slider.allSliderWidth - 2 * slider.slideWidth);
        const isLeftEnd = Math.abs((slider.startOffset + step * slider.slideWidth));
        const isRightEnd = (slider.startOffset + 2 * slider.slideWidth);

        setSlider((state) => ({
            ...state,
            startOffset:  isLeftEnd > 1.25 * slider.allSliderWidth || isRightEnd > 1.25 * state.slideWidth ? -.75 * state.slideWidth : updatedStartOffset,
        }))
    }

    useEffect(() => {
        const slideWidth = slideNode.current.offsetWidth;

        setSlider(() => {
            return {
                slideWidth: slideWidth,
                allSliderWidth: slideWidth * data.length,
                startOffset: (-0.75) * slideWidth,
            }
        })
    }, []);

    return (
        <div className={styles.slider}>
            <div className={styles.stepBack}
                 onClick={(e) => makeSlide(-1)}
            >
                <ArrowCircleLeftOutlined/>
            </div>
            <div className={styles.wrapper} ref={wrapperNode}>
                <div className={styles.slides}
                     style={{left: slider.startOffset}}
                >
                    <div className={styles.slide} key={firstSlide.link}
                         ref={slideNode}
                    >
                        <Image src={firstSlide.image} width={700} height={400}/>
                    </div>
                    {
                        othersSlides.map(item => {
                            return (
                                <div className={styles.slide} key={item.link}>
                                    <Image src={item.image} width={700} height={400}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.stepForward}
                 onClick={(e) => makeSlide(1)}
            >
                <ArrowCircleRightOutlined/>
            </div>
        </div>
    )
}
