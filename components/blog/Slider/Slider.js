import React, {useEffect, useRef, useState} from 'react';
import {ArrowCircleRightOutlined, ArrowCircleLeftOutlined} from '@mui/icons-material';
import Image from 'next/image';

import styles from './styles.module.scss';
import Link from 'next/link';

export default function Slider({data, slideWidth: slideImageWidth = '45%', location='footer'}) {
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
            startOffset: isLeftEnd > 1.25 * slider.allSliderWidth || isRightEnd > 1.25 * state.slideWidth ? -.75 * state.slideWidth : updatedStartOffset,
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
    }, [data.length]);

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
                    <Link href={firstSlide.link}>
                        <div className={styles.slide} key={firstSlide.link}
                             ref={slideNode} style={{minWidth: slideImageWidth}}
                        >
                            <Image src={firstSlide.image}
                                   width={700}
                                   height={400}
                                   alt={firstSlide.title}
                            />
                            <div className={`${styles.slideTitle} ${styles[location]}`}>
                                <Link href={firstSlide.link}>
                                    {firstSlide.title}
                                </Link>
                            </div>
                        </div>
                    </Link>
                    {
                        othersSlides.map(item => {
                            return (
                                <Link href={item.link} key={item.link} >
                                    <div className={styles.slide} style={{minWidth: slideImageWidth}}>
                                        <Image src={item.image}
                                               width={700}
                                               height={400}
                                               alt={item.title}
                                        />
                                        <div className={`${styles.slideTitle} ${styles[location]}`}>
                                            <Link href={item.link}>
                                                {item.title}
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
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
