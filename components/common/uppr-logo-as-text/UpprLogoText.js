import React from 'react';

import styles from './styles.module.scss';

const UpprLogoText = ({ onlyLogo, isInText, isInHeader }) => {
    let stylesLogo = '';

    if (isInText) {
        stylesLogo = styles.inText
    }


    return (
        <a className={styles.upprLogo + ' ' + stylesLogo} href={'/'}>
            <span><strong>[</strong></span>
            <span>UP</span>
            <span><strong>]</strong></span>
            <span>PR</span>

            {!onlyLogo && (
                <span className={styles.keepItSimple}>&nbsp;keep it simple</span>
            )}
        </a>
    );
};

export default UpprLogoText;
