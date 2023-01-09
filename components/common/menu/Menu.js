import React, {useEffect, useRef, useState} from 'react';

import Link from 'next/link';

import {useWindowSize} from '../hooks/screenSize';

import styles from './styles.module.scss';
import {useClickOutside} from '../hooks/clickOutside';
import {MenuIcon} from '../icons';


const MenuItems = ({location, isOpen}) => {
    return (
        <div className={`main-menu main-menu-desktop`}>
            <ul className={`uppr-main-menu ${styles.upprMainMenu} ${isOpen ? styles.upprMobileMainMenu : ''}`}>
                <li>
                    <Link href="/">
                        <a className={location === '/' ? styles.active : ''}>Домашня</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a className={location === '/blog' ? styles.active : ''}>Блог</a>
                    </Link>
                </li>
                {/*<li>*/}
                {/*  <Link href="/e-book">*/}
                {/*    <a className={location === "/e-book" ? styles.active : ""}>*/}
                {/*      E-book*/}
                {/*    </a>*/}
                {/*  </Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*  <Link href="/e-resources">*/}
                {/*    <a className={location === "/e-resources" ? styles.active : ""}>*/}
                {/*      Resources*/}
                {/*    </a>*/}
                {/*  </Link>*/}
                {/*</li>*/}
                <li>
                    <Link href="https://englishplus.com.ua">
                        <a target="_blank">Тренінг</a>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.udemy.com/course/deschool-your-emails/">
                        <a target="_blank">Онлайн курс</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact-us">
                        <a className={location === '/contact-us' ? styles.active : ''}>
                            Контакти
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const Menu = ({location}) => {
    const inputRef = useRef();
    const screenSize = useWindowSize();

    const [responsiveClass, setResponsiveClass] = useState({
        width: '40%',
        isVisible: false,
        isOpen: false,
    });

    const onClickInside = () => {
        setResponsiveClass((prevState) => {
            return {
                ...prevState,
                width: '65%',
                isOpen: true,
            };
        })
    }

    const onClickOutside = () => {
        setResponsiveClass((prevState) => ({
            ...prevState,
            width: '40%',
            isOpen: false,
        }));
    }

    useEffect(() => {
        if (!screenSize?.width) {
            return;
        }

        const isVisible = screenSize.width < 650;
        setResponsiveClass(() => ({
            width: isVisible ? '40%': '65%',
            isVisible: isVisible,
            isOpen: false,
        }));
    }, [screenSize.width])

    useClickOutside(inputRef, onClickOutside, onClickInside);

    console.log(responsiveClass);

    if (responsiveClass.isVisible) {
        return (
            <div className={`${styles.menuWrapper}`}
                 style={{width: responsiveClass.width}}
                 ref={inputRef}
            >
                <div className={`main-menu main-menu-desktop ${styles.mobileMenu}`}>
                    Меню
                </div>
                <div className={styles.menuIcon}>
                    <MenuIcon/>
                </div>
                {
                    responsiveClass.isOpen && (
                        <MenuItems
                            isOpen={responsiveClass.isOpen}
                            location={location}/>
                    )
                }
            </div>
    )}

    return (
        <MenuItems
            location={location}
            isOpen={responsiveClass.isVisible}
        />
    );
};

export default Menu;
