import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function Author({data}) {
    return (
        <div className={styles.author}>
            <div className={styles.authorImg}>
                <Image
                    src="/assets/images/blog-articles/ivanka-tabachuk.jpg"
                    width="130"
                    height="130"
                    alt="Іванка Табачук"
                    style={{
                        borderWidth: '1px !important',
                        borderStyle: 'solid  !important',
                        borderColor: `#${data.article_color} !important`,
                        borderRadius: '50%',
                    }}
                />
            </div>
            <div>
                <p className="para-text">
                    Текст: Іванка Табачук
                </p>
            </div>
        </div>
    )
}
