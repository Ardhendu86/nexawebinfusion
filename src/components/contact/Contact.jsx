import Lottie from "lottie-react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import PageBanner from "./Contactbanner";
import backgroundImage from "../../assets/images/contact.avif";
import FloatingSidebar from "../floatingsidebar/FloatingSidebar";
import "./Contact.css";
import animationData from "../../assets/lottiefiles/smartphone.json";

function Contact() {
  return (
    <>
      {/* Banner */}
      <PageBanner title="Contact" backgroundImage={backgroundImage} />

      {/* Floating Sidebar */}
      <FloatingSidebar />


      {/* Content Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container">

          {/* Contact Info */}
          <div className="row text-center g-4 justify-content-center mb-5">

            {/* Call Us */}
            <div className="col-12 col-md-4">
              <div className="contact-info-box h-100 p-4 shadow-sm rounded">
                <div className="icon-circle mx-auto mb-3">
                  <FaPhoneAlt className="icon" />
                </div>
                <h6 className="fw-bold text-primary">Call Us</h6>
                <p className="mb-0 fw-bold">+91+6297995150</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="col-12 col-md-4">
              <div className="contact-info-box h-100 p-4 shadow-sm rounded">
                <div className="icon-circle mx-auto mb-3">
                  <FaEnvelope className="icon" />
                </div>
                <h6 className="fw-bold text-primary">Email Us</h6>
                <p className="mb-0 fw-bold">info@nexawebinfusin.com</p>
              </div>
            </div>

            {/* Visit Us */}
            <div className="col-12 col-md-4">
              <div className="contact-info-box h-100 p-4 shadow-sm rounded">
                <div className="icon-circle mx-auto mb-3">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <h6 className="fw-bold text-primary">Visit Us</h6>
                <p className="mb-0 fw-bold">
                  Block A5, Kalyani – 741235 <br />
                  West Bengal
                </p>
              </div>
            </div>

          </div>

          {/* Map + Form */}
          <div className="row g-4 align-items-stretch">

            {/* Map */}
            <div className="col-12 col-lg-6">
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: "100%", maxWidth: "500px", margin: "auto" }}
              />
            </div>

            {/* Contact Form */}
            <div className="col-12 col-lg-6">
              <div className="h-100 p-4 rounded">

                <p className="text-primary fw-semibold mb-1">
                  LET’S TALK
                </p>
                <h2 className="fw-bold mb-4">
                  We Would Like To Hear <br className="d-none d-md-block" />
                  From You Anytime
                </h2>

                <form>
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your subject"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your phone"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 w-100 w-md-auto border-0" style={{backgroundColor:'#f7761a'}}
                  >
                    Send Message
                  </button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      <div className="container">
        <div className="col-12 col-md-12 mt-5">
          <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm h-25">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231277325!2d88.26495090163961!3d22.53540637448262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1754243079418!5m2!1sen!2sin"
              loading="lazy"
              className="border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>


    </>
  );
}

export default Contact