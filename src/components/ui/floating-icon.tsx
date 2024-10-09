import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppIcon: React.FC = () => {
  return (
    <a
      href="https://wa.me/9561131142"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-icon"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default FloatingWhatsAppIcon;
