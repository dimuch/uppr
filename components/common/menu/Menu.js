import React, { useEffect, useRef, useState } from 'react';

import { useWindowSize } from '../hooks/screenSize';
import { useClickOutside } from '../hooks/clickOutside';
import { MenuIcon } from '../icons';

import styles from './styles.module.scss';
import MenuItems from './components/MenuItems';

const Menu = ({ location }) => {
  const inputRef = useRef();
  const screenSize = useWindowSize();

  const [responsiveClass, setResponsiveClass] = useState({
    width: '40%',
    isVisible: false,
    isOpen: false,
  });

  const onClickInside = () => {
    setResponsiveClass(prevState => {
      return {
        ...prevState,
        width: '40%',
        isOpen: true,
      };
    });
  };

  const onClickOutside = () => {
    setResponsiveClass(prevState => ({
      ...prevState,
      width: '40%',
      isOpen: false,
    }));
  };

  useEffect(() => {
    if (!screenSize?.width) {
      return;
    }

    const isVisible = screenSize.width < 650;
    setResponsiveClass(() => ({
      width: isVisible ? '40%' : '40%',
      isVisible: isVisible,
      isOpen: false,
    }));
  }, [screenSize.width]);

  useClickOutside(inputRef, onClickOutside, onClickInside);

  if (responsiveClass.isVisible) {
    return (
      <div
        className={`${styles.menuWrapper}`}
        style={{
          width: responsiveClass.width,
        }}
        ref={inputRef}
      >
        <div className={styles.menuIcon}>
          <MenuIcon />
        </div>
        {responsiveClass.isOpen && (
          <MenuItems
            isOpen={responsiveClass.isOpen}
            location={location}
          />
        )}
      </div>
    );
  }

  return (
    <MenuItems
      location={location}
      isOpen={responsiveClass.isVisible}
    />
  );
};

export default Menu;
