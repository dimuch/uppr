import React from 'react';

import styles from './styles.module.scss';

const UpprLogoText = ({onlyLogo}) => {
    return (
        <a className={styles.upprLogo} href={'/'}>
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
