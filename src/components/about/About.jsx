import React, { useEffect } from "react";
import Aboutbanner from "./Aboutbanner";
import FloatingSidebar from "../floatingsidebar/FloatingSidebar";
import aboutImage from "../../assets/images/aboutbanner.jpg";
import Image from "../../assets/images/img1.jpg";
import ProjectImage from "../../assets/images/image1.jpg";
import "./About.css";
import { Link } from "react-router-dom";

function About() {

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
              <img src={Image} alt="About Us" className="img-fluid rounded-4 about-img scroll-animate animate-on-scroll-left" />
            </div>

            {/* Right - Text */}
            <div className="col-lg-6 scroll-animate animate-on-scroll-right">
              <h6 className="text-warning fw-bold">WHO WE ARE</h6>
              <h2 className="fw-bold mb-3">
                We Are <span className="text-warning">All In One</span> IT
                Solution & Technology Company
              </h2>
              <p className="text-muted mb-4">
                You’ve arrived at the right place. As a leading software company in Kolkata, we specialize in delivering high-quality, custom software solutions for businesses of all sizes.
              </p>

              <h3 className="fw-bold mb-3">Our Values and Ethics</h3>
              <ul className="list-unstyled about-values">
                <li>
                  <i className="fas fa-minus text-dark me-2"></i>
                  <span className="text-warning">
                    Committed to the highest standards of professional integrity
                  </span>
                </li>
                <li>
                  <i className="fas fa-minus text-dark me-2"></i>
                  <span className="text-warning">
                    Ensuring transparency in every project and process
                  </span>
                </li>
                <li>
                  <i className="fas fa-minus text-dark me-2"></i>
                  <span className="text-warning">
                    Delivering services supported by thorough documentation
                  </span>
                </li>
                <li>
                  <i className="fas fa-minus text-dark me-2"></i>
                  <span className="text-warning">
                    Driving innovation to achieve excellence in software solutions
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
            Our goal is to deliver top-quality software solutions to businesses of all sizes. In today’s technology-driven world, no business should be left behind, and every company deserves robust, scalable, and innovative software to succeed. Since our inception, we have served numerous clients, providing them with reliable and world-class solutions. From custom software development to complete enterprise solutions, we are dedicated to meeting the unique needs of your business.
          </p>

          {/* Heading */}
          <h6 className="text-warning fw-bold scroll-animate">
            WHY CHOOSE US
          </h6>
          <h2 className="fw-bold mb-3 scroll-animate">
            We Help You <span className="text-warning">Grow</span> <br />
            Your Business Through Technology
          </h2>
          <p className="text-muted mb-5 scroll-animate">
            We are a leading software development company delivering innovative <br />
            and reliable technology solutions for over 4 years.
          </p>

          {/* List */}
          <div className="row justify-content-center">
            <div className="col-lg-8 text-start">
              <ul className="list-unstyled why-list">
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Fast and efficient software delivery
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Reliable and trustworthy technology partner
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Support available round the clock
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  100% client satisfaction guaranteed
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Custom software and web application development
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Cost-effective solutions for every business
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Modern infrastructure and state-of-the-art tools
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Strategic guidance to maximize ROI through technology
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  A skilled team of software developers and engineers
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Complete project documentation for transparency and reliability
                </li>
                <li className="scroll-animate">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Partnering with you to ensure long-term success
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>


      <div className="project-section">
        <div className="project-content">
          <h2>Have a project in Mind ?</h2>
          <p>
            We are here to transform your ideas into powerful software solutions. <br />
            Let’s collaborate to turn your project into a successful and impactful technology venture.
          </p>

          <Link to="/contact"><button className="connect-btn">Connect with us →</button></Link>
        </div>
        <div className="project-image">
          <img src={ProjectImage} alt="Team working" />
        </div>
      </div>

    </>
  );
}

export default About
