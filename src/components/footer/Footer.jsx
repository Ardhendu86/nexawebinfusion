import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
  window.scrollTo({
    top: 300, // scroll smoothly close to the top
    behavior: "smooth",
  });

  setTimeout(() => {
    window.scrollTo(0, 0); // jump to the very top
  }, 200);
};

  



  return (
    <div className="text-light pt-5 pb-3 mt-2">
      <div className="container-fluid px-0">
        {/* Boxed footer */}
        <div
          className="bg-black rounded-4 shadow p-4 p-md-5 mx-auto"
          style={{ maxWidth: "98%", marginLeft: "1%", marginRight: "1%" }}
        >
          <div className="row">
            {/* Logo */}
            <div className="col-12 col-md-3 mb-4 d-flex align-items-center">
              <img src={logo} alt="Nexa Web Infusion" className="img-fluid" />
            </div>

            {/* Our Services */}
            <div className="col-12 col-md-3 mb-4">
              <h5 className="fw-bold mb-3">Our Services</h5>
              <ul className="list-unstyled small">
                <li className="footer-link">Web Design and Development Services</li>
                <li className="footer-link">Software as Services</li>
                <li className="footer-link">Software Development</li>
                <li className="footer-link">Digital Marketing Services</li>
                <li className="footer-link">Android and iOS App Development Services</li>
                <li className="footer-link">Graphics and Logo Designing Services</li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-12 col-md-3 mb-4">
              <h5 className="fw-bold mb-3">Company</h5>
              <ul className="list-unstyled small">
                <li className="footer-link">Home</li>
                <li className="footer-link">About Us</li>
                <li className="footer-link">Client's Testimonials</li>
                <li className="footer-link">Blog</li>
                <li className="footer-link">Contact</li>
                <li className="footer-link">Terms of Service</li>
                <li className="footer-link">Privacy Policy</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-12 col-md-3 mb-4">
              <h5 className="fw-bold mb-3">Contact Us</h5>
              <ul className="list-unstyled small">
                <li className="d-flex align-items-center mb-2">
                  <FaPhoneAlt className="me-2" /> +91-8240015677
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaPhoneAlt className="me-2" /> +91-8640805196
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaEnvelope className="me-2" /> info@nexawebinfusion.com
                </li>
                <li className="d-flex">
                  <FaMapMarkerAlt className="me-2 mt-1" />
                  <span>
                    <strong>Block A5, Kalyani - 741235</strong>
                    <br />
                    West Bengal
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-secondary my-3" />

          <p className="text-center text-secondary small mb-0 text-white">
            Copyright © 2026 All Rights Reserved by{" "}
            <a href="#" className="text-info fw-bold text-decoration-none footer-link">
              Nexa Web Infusion
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default Footer;