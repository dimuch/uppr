import React, { useEffect, useState } from 'react';

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    const html = document.getElementsByTagName('html')[0];
    html.setAttribute('prefix', 'og: http://ogp.me/ns#');
    https: navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }, []);
  return hasMounted;
}
