import React, { memo, useMemo } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

import styles from '../styles.module.scss';

const MenuItem = ({ item, location }) => {
  const { caption, href, Component } = item;
  const isSameLocation = location === href;

  const className = useMemo(() => {
    return isSameLocation ? styles.active : '';
  }, [isSameLocation]);

  if (Component) {
    return (
      <Link
        href={href}
        className={className}
      >
        <Component />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '1rem',
          textDecoration: 'none',
          fontFamily: isSameLocation ? 'Futura-Demi, sans-serif' : 'Futura-LT, sans-serif',
          '& svg': {
            path: {
              fill: 'currentColor',
            },
          },
        }}
      >
        {caption}
      </Typography>
    </Link>
  );
};

export default MenuItem;
