import React, { useEffect } from 'react';

const CookieConsent: React.FC = () => {
  useEffect(() => {
    // Load the cookie consent script
    const script = document.createElement('script');
    script.src = '//www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js';
    script.charset = 'UTF-8';
    script.async = true;

    script.onload = () => {
      // Initialize the cookie consent after the script is loaded
      if (typeof cookieconsent !== 'undefined') {
        cookieconsent.run({
          notice_banner_type: 'headline',
          consent_type: 'express',
          palette: 'dark',
          language: 'en',
          page_load_consent_levels: ['strictly-necessary'],
          notice_banner_reject_button_hide: false,
          preferences_center_close_button_hide: false,
          page_refresh_confirmation_buttons: false,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <noscript>
        Free cookie consent management tool by <a href="https://www.termsfeed.com/">TermsFeed</a>
      </noscript>
      <a href="#" id="open_preferences_center">Update cookies preferences</a>
    </div>
  );
};

export default CookieConsent;
