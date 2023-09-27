import Script from 'next/script'

const GoogleStat = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-564415Q0CP"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push('js', new Date());
          window.dataLayer.push('config', 'G-564415Q0CP');
          console.log(window.dataLayer);
        }}
        strategy='afterInteractive'
      />
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-PCZ6H3M"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          console.log(window.dataLayer);
        }}
        strategy='afterInteractive'
      />
    </>
  );
};

export default GoogleStat;
