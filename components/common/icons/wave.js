import * as React from 'react';

function Wave(props) {
  return (
    <svg viewBox="0 0 1440 109" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
      <g id="waves-bottom" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {/* eslint-disable-next-line max-len */}
        <path
          d="M0,77.0106914 C104.333333,93.0053457 221.333333,101.002673 351,101.002673 C545.5,101.002673
          691.515625,52.9430641 954.257813,52.019044 C1129.41927,51.4030306 1291.33333,65.7315751 1440,95.0046775
          L1440,109 L0,109 L0,77.0106914 Z"
          id="wave"
          fill="#FFFFFF"
        />
        {/* eslint-disable-next-line max-len */}
        <path
          d="M0,0 C104.333333,61.3333333 221.333333,92 351,92 C605.5,92 723.780304,29.355537 958.257813,28
           C1064.22603,27.3873876 1224.80676,49.7207209 1440,95 L1440,109 L0,109 L0,0 Z"
          id="wave"
          fill="#FFFFFF"
          opacity="0.300000012"
        />
        {/* eslint-disable-next-line max-len */}
        <path
          d="M0,46 C104.333333,80 221.333333,97 351,97 C482.184091,97 552.531882,82.6726777 670.197891,70.1607769
          C736.812253,63.0774035 812.203714,57.3590271 914.257813,57 C1023.33394,56.6162694 1074,58 1178.1191,61.4234376
           C1247.53184,63.7057294 1334.82547,68.5645835 1440,76 L1440,109 L0,109 L0,46 Z"
          id="wave"
          fill="#FFFFFF"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

export default Wave;
