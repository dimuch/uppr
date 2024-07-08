import React, { memo } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './styles.module.scss';
import loader from '../../common/loader/loader';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { Box } from '@mui/material';

const ARROW_COLOR = '#4f899c';
let isInit = 0;

const SliderArrow = props => {
  if (!isInit) {
    isInit++;
    return;
  }
  const { className, style, onClick, Icon } = props;
  return (
    <Box
      onClick={onClick}
      className={className}
      sx={{
        ...style,
        width: '40px',
        height: '40px',
        color: ARROW_COLOR,
        display: 'block',
        border: '0 solid #fff',
        backgroundColor: '#fff',
        borderRadius: '50%',
        transition: '0.3s ease-in-out',
        boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.2)',
        zIndex: 100,
        '& svg': {
          position: 'absolute',
          left: '6px',
          top: '6px',
        },
        '&:hover': {
          color: ARROW_COLOR,
          boxShadow: '1px 8px 24px 0 rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Icon size={28} weight="bold" />
    </Box>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SliderArrow Icon={CaretRight} />,
  prevArrow: <SliderArrow Icon={CaretLeft} />,
};

const DownloadPageExamplesSlider = ({ items }) => {
  return (
    <Slider {...settings}>
      <Box>
        <img
          key={1}
          className={styles.downloadSliderImage}
          src={loader({
            src: items[0],
            width: 1182,
          })}
          width={1182}
          height={1682}
          alt={`Page example ${1}`}
          style={{ margin: 'auto' }}
        />
      </Box>
      <Box>
        <img
          key={2}
          className={styles.downloadSliderImage}
          src={loader({
            src: items[1],
            width: 1182,
          })}
          width={1182}
          height={1682}
          alt={`Page example ${2}`}
          style={{ margin: 'auto' }}
        />
      </Box>
    </Slider>
  );
};

export default memo(DownloadPageExamplesSlider);
