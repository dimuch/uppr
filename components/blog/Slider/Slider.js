'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import loader from '../../common/loader/loader.js';
import { ArrowLeft, ArrowRight } from '../../common/icons';

function Slide({ slideData, slideNode, location }) {
  const [imgDimensions, setImgDimensions] = useState({
    width: 700,
    height: 400,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const windowInner = window.innerWidth;
      const imageScaler = location === 'footer' ? 7 : 4.35;
      const width = windowInner > 850 ? Math.round(windowInner / imageScaler) : windowInner / 2;
      const height = Math.round((width * 4) / 7);
      setImgDimensions({ width, height });
    }
  }, [location]);

  const { width, height } = imgDimensions;

  return (
    <a
      href={slideData.link}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={styles.slide}
        key={slideData.link}
        ref={slideNode}
      >
        <img
          src={loader({
            src: slideData.image,
            width: width,
          })}
          width={width}
          height={height}
          alt={slideData.title}
        />
        <div className={`${styles.slideTitle} ${styles[location]}`}>
          {slideData.title}
        </div>
      </div>
    </a>
  );
}

export default function Slider({ data, location = 'footer' }) {
  const wrapperNode = useRef();
  const slideNode = useRef();

  const [slider, setSlider] = useState({
    startOffset: 0,
    slides: data || [],
  });

  const makeSlide = step => {
    setSlider(state => {
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
        startOffset: 0,
      };
    });
  };

  useEffect(() => {
    const slideWidth = slideNode.current.offsetWidth;

    setSlider(() => {
      return {
        slideWidth: slideWidth,
        allSliderWidth: slideWidth * data.length,
        startOffset: 0,
        stepper: 0,
        slides: data || [],
      };
    });
  }, [data]);

  if (!slider?.slides?.length) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <div
        className={styles.stepBack}
        onClick={e => makeSlide(-1)}
      >
        <ArrowLeft />
      </div>
      <div
        className={styles.wrapper}
        ref={wrapperNode}
      >
        <div
          className={styles.slides}
          style={{
            left: slider.startOffset,
          }}
        >
          {slider?.slides.map((item, index) => {
            return (
              <Slide
                key={item.link}
                slideData={item}
                slideNode={slideNode}
                location={location}
              />
            );
          })}
        </div>
      </div>
      <div
        className={styles.stepForward}
        onClick={e => makeSlide(1)}
      >
        <ArrowRight />
      </div>
    </div>
  );
}
