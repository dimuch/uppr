import Script from 'next/script';
import Head from 'next/head';
import React from 'react';

const GTM_ID = 'GTM-PCZ6H3M';

const GoogleStat = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
 'gtm.start': new Date().getTime(), event: 'gtm.js' 
});
        }}
        strategy="afterInteractive"
      />
      <Head>
        <noscript>
          {`<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" 
              style="display:none;visibility:hidden" />
            `}
        </noscript>
      </Head>
    </>
  );
};

export default GoogleStat;
