import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FloatingSidebar.css";

function FloatingSidebar() {
  return (
    <>
      {/* Floating Social Sidebar */}
      <div className="floating-sidebar">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <FaFacebookF size={20} />
        </a>
 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"  className="social-icon instagram">
          <FaInstagram size={20} />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"className="social-icon linkedin">
          <FaLinkedinIn size={20} />
        </a>

        <a href="https://wa.me/8640805196" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" >
          <FaWhatsapp size={20} />
        </a>
      </div>

      {/* Floating Call Button */}
      <a href="tel: 8640805196" className="floating-call-button">
        <FaPhoneAlt className="call-icon" />
      </a>
    </>
  );
}

export default FloatingSidebar;
