import React, {useMemo} from 'react';
import styles from './styles.module.scss';
import OthersArticles from '../../blog/OthersArticles/OthersArticles';

export default function SelectedSpecificCategory({
   tags,
   articlesByCategory,
}) {

    const firstRowOthersArticles = useMemo(() => {
        return !tags?.length ? articlesByCategory?.slice(0, 3) : (articlesByCategory?.slice(0, 2) || []);
    }, [articlesByCategory]);

    const secondRowOthersArticles = useMemo(() => {
        return !tags?.length ? articlesByCategory?.slice(3) : (articlesByCategory?.slice(2) || []);
    }, [articlesByCategory]);

    return (
        <>
            <div className={styles.upprOthersArticles}>
                <OthersArticles
                    items={firstRowOthersArticles}
                />
            </div>
            <div className={styles.upprOthersArticles}>
                <OthersArticles
                    items={secondRowOthersArticles}
                />
            </div>
        </>
    );
}
