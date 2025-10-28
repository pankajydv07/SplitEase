'use client';

import { useEffect } from 'react';

export default function PWAInstaller() {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    // Handle install prompt
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      deferredPrompt = e;
      
      // Show install button or banner
      showInstallPromotion();
    });

    function showInstallPromotion() {
      // You can show a custom install button here
      console.log('App can be installed');
    }

    // Handle app installed
    window.addEventListener('appinstalled', (evt) => {
      console.log('App was installed');
    });

  }, []);

  return null; // This component doesn't render anything
}