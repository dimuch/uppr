import Script from 'next/script'

const GoogleStat = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-564415Q0CP"
      />
      <Script
        src="https://www.googletagmanager.com/gtm.js?id=GTM-PCZ6H3M"
      />
    </>
  );
};

export default GoogleStat;
