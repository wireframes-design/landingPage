// src/components/ReCAPTCHA.tsx
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCAPTCHAComponent: React.FC<{ onVerify: (token: string | null) => void }> = ({ onVerify }) => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.error("RECAPTCHA site key is missing. Please check your .env file.");
    return null;
  }

  return (
    <ReCAPTCHA
      sitekey={siteKey} // Use the site key from the environment variable
      onChange={onVerify}
    />
  );
};

export default ReCAPTCHAComponent;
