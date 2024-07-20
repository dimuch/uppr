import React, { memo } from 'react';
import { Box } from '@mui/material';

import MenuItem from './MenuItem';

import { menuItems } from './menuItems.constants';

import styles from '../styles.module.scss';

const MenuItems = ({ location, isOpen }) => {
  return (
    <div className={`main-menu main-menu-desktop`}>
      <ul className={`uppr-main-menu ${styles.upprMainMenu} ${isOpen ? styles.upprMobileMainMenu : ''}`}>
        {menuItems.map(item => {
          return (
            <Box
              key={item.id}
              component={'li'}
              sx={{
                paddingRight: '0.5rem',
                paddingLeft: '0.5rem',
                minWidth: '4rem',
                textAlign: 'center',
                '&:first-of-type': {
                  paddingLeft: 0,
                },

                '&:last-of-type': {
                  paddingRight: 0,
                },
              }}
            >
              <MenuItem
                item={item}
                location={location}
              />
            </Box>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(MenuItems);
