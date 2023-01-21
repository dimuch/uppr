import React from 'react';
import PageNotFound from '../components/common/404/404';

const DEFAULT_REDIRECTS_PARAMS = {redirectLink:'/blog', redirectPage:'Повернутись до блогу'};

export default function Page404(props) {
    const {redirectLink, redirectPage } = !Object.keys(props).length ? DEFAULT_REDIRECTS_PARAMS : props;

    return (
        <PageNotFound redirectLink={redirectLink} redirectPage={redirectPage}/>
    )
};
