import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PageBanner from "./Contactbanner";
import backgroundImage from "../../assets/images/contact.avif";
import FloatingSidebar from "../floatingsidebar/FloatingSidebar";
import Footer from "../footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      {/* Banner */}
      <PageBanner title="Contact" backgroundImage={backgroundImage} />

      {/* Floating Sidebar */}
      <FloatingSidebar />



      {/* Content Section */}
      <section id="contact" className="contact-section">
        <div className="row contact-info-section">
          <div className="row text-center align-items-center">

            {/* Call Us */}
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="contact-info-box">
                <div className="icon-circle">
                  <FaPhoneAlt className="icon" />
                </div>
                <h6 className="fw-bold text-primary">Call Us</h6>
                <p className="mb-0 fw-bold">+91-8640805196</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="contact-info-box">
                <div className="icon-circle">
                  <FaEnvelope className="icon" />
                </div>
                <h6 className="fw-bold text-primary">Email Us</h6>
                <p className="mb-0 fw-bold">info@nexawebinfusin.com</p>
              </div>
            </div>

            {/* Visit Us */}
            <div className="col-md-4">
              <div className="contact-info-box">
                <div className="icon-circle">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <h6 className="fw-bold text-primary">Visit Us</h6>
                <p className="mb-0 fw-bold">
                  Block A5, Kalyani - 741235<br />
                  West Bengal

                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            {/* Left Side - Map */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="map-container h-100">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231277325!2d88.26495090163961!3d22.53540637448262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1754243079418!5m2!1sen!2sin"
                  className="map-iframe"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="col-lg-6">
              <div className="text-start mb-5">
                <p className="contact-subtitle">
                  LET'S TALK
                </p>
                <h2 className="contact-title">
                  We Would Like To Hear <br /> From You Anytime
                </h2>
              </div>

              <form className="contact-form">
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Subject"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <div className="text-start">
                  <button
                    type="submit"
                    className="contact-submit-btn"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
