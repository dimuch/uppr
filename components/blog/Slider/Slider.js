import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {ArrowCircleRightOutlined, ArrowCircleLeftOutlined} from '@mui/icons-material';
import Image from "next/legacy/image";

import Link from 'next/link';
import styles from './styles.module.scss';

function Slide({slideData, slideNode, slideImageWidth, location}) {
    return (
        <Link href={slideData.link}>
            <div className={styles.slide} key={slideData.link}
                 ref={slideNode} style={{minWidth: slideImageWidth}}
            >
                <Image src={slideData.image}
                       width={700}
                       height={400}
                       alt={slideData.title}
                />
                <div className={`${styles.slideTitle} ${styles[location]}`}>
                    <Link href={slideData.link}>
                        {slideData.title}
                    </Link>
                </div>
            </div>
        </Link>
    )
}

export default function Slider({data, slideWidth: slideImageWidth = '45%', location = 'footer'}) {
    const wrapperNode = useRef();
    const slideNode = useRef();

    const [slider, setSlider] = useState({
        startOffset: 0,
        slides: data || [],
    });

    const makeSlide = (step) => {
        // const updatedStartOffset = (slider.startOffset + step * slider.slideWidth) % (slider.allSliderWidth - 2 * slider.slideWidth);
        // const isLeftEnd = Math.abs((slider.startOffset + step * slider.slideWidth));
        // const isRightEnd = (slider.startOffset + 2 * slider.slideWidth);

        setSlider((state) => {
            let updatedSlides = [...state.slides];

            if (step < 0) {
                const first = updatedSlides.shift();
                updatedSlides = [].concat(updatedSlides, first);
            } else {
                const last = updatedSlides.pop();
                updatedSlides = [].concat(last, updatedSlides);
            }

            return {
                ...state,
                stepper: state.stepper + step,
                slides: updatedSlides,
                startOffset: 0, //updatedStartOffset, //isLeftEnd > slider.allSliderWidth || isRightEnd > state.slideWidth ? -state.slideWidth : updatedStartOffset,
            }
        })
    }

    useEffect(() => {
        const slideWidth = slideNode.current.offsetWidth;

        setSlider(() => {
            return {
                slideWidth: slideWidth,
                allSliderWidth: slideWidth * data.length,
                startOffset: 0,
                stepper: 0,
                slides: data || [],
            }
        })
    }, [data]);

    if(!slider?.slides?.length) {
        return null;
    }

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
                    {
                        slider?.slides.map((item, index) => {
                            return (
                                <Slide key={item.link} slideData={item} slideNode={slideNode}
                                       slideImageWidth={slideImageWidth}
                                       location={location}/>
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
