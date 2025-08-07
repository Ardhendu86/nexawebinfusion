import React, { useEffect, useRef } from "react";
import Aboutbanner from "./Aboutbanner";
import FloatingSidebar from "../floatingsidebar/FloatingSidebar";
import aboutImage from "../../assets/images/aboutbanner.jpg";
import Image from "../../assets/images/about.png";
import "./About.css"; // custom styles
import Footer from "../footer/Footer";

function About() {
  const aboutSectionRef = useRef(null);
  const whyChooseSectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Banner */}
      <Aboutbanner title="About Us" backgroundImage={aboutImage} />

      {/* Floating Sidebar */}
      <FloatingSidebar />

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left - Image */}
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src={Image}
                alt="About Us"
                className="img-fluid rounded-4 shadow about-img scroll-animate animate-on-scroll-left"
              />
            </div>

            {/* Right - Text */}
            <div className="col-lg-6 scroll-animate animate-on-scroll-right">
              <h6 className="text-warning fw-bold">WHO WE ARE</h6>
              <h2 className="fw-bold mb-3">
                We Are <span className="text-warning">All In One</span> IT
                Solution & Technology Company
              </h2>
              <p className="text-muted mb-4">
                Coming to the main reason you found us and believe me you have
                landed on the right website. We are a premier IT Services and
                Digital Marketing Company in Kolkata and are happily serving the
                digital marketing needs and requirements of every size of
                business.
              </p>

              <h3 className="fw-bold mb-3">Our Values and Ethics</h3>
              <ul className="list-unstyled about-values">
                <li>
                  <i className="fas fa-minus text-dark me-2"></i>
                  <span className="text-warning">
                    Rooted our business on high business ethics
                  </span>
                </li>
                <li>
                  <i className="fas fa-minus text-dark me-2"></i>
                  <span className="text-warning">
                    Transparency in every step
                  </span>
                </li>
                <li>
                  <i className="fas fa-minus text-dark me-2"></i>
                  <span className="text-warning">
                    The service is back up with proper documentation
                  </span>
                </li>
                <li>
                  <i className="fas fa-minus text-dark me-2"></i>
                  <span className="text-warning">
                    We work towards innovation to achieve excellence
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5">
        <div className="container text-center">
          {/* Top Description */}
          <p className="text-muted mb-4 scroll-animate">
            We have a goal to provide top-notch digital marketing services to each and every business.
            No brand or business should remain invisible in this tech-driven market and must be there in
            front of the whole world. Since our establishment, we served numerous clients and satisfied
            them with our world-class solutions. From simple website designing to complete digital
            marketing solutions, we are here to meet your business needs.
          </p>

          {/* Heading */}
          <h6 className="text-warning fw-bold scroll-animate">
            WHY CHOOSE US
          </h6>
          <h2 className="fw-bold mb-3 scroll-animate">
            We Help You To <span className="text-warning">Increase</span> <br />
            Your Sale Through Solutions
          </h2>
          <p className="text-muted mb-5 scroll-animate">
            We are a leading technology solutions providing company all over the world <br />
            doing over 4 years.
          </p>

          {/* List */}
          <div className="row justify-content-center">
            <div className="col-lg-8 text-start">
              <ul className="list-unstyled why-list">
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Fast and swift services
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Reliable and trustworthy
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Availability round the clock
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  100% Customer satisfaction
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Designing and developing the unique website
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Affordable and pocket-friendly services
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  State-of-art facilities and infrastructures
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Helping you with the right strategies to get better ROI
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  A team of qualified professionals and digital marketers
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  The whole service cycle is backed up with proper documentation
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Last but not least; we want to be your true companion on the path of your success
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}

export default About;
