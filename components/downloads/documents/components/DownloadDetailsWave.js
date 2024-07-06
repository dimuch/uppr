import React from 'react';

const DownloadDetailsWave = ({ fillColor = 'white', strokeColor = 'white' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 50">
      <g stroke={strokeColor} strokeWidth="1" fill={fillColor} fillRule="evenodd">
        <path d="M0,50 L0,4 C95,-23 285,115 500,2 L500,50 L0,50 Z" />
      </g>
    </svg>
  );
};

export default DownloadDetailsWave;
