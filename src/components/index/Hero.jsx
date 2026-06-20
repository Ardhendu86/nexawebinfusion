import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import AOS from 'aos';
import './Hero.css';
import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';

import project1 from '../../assets/images/project1.jpg';
import project2 from '../../assets/images/project2.jpg';
import project3 from '../../assets/images/project3.jpg';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      {/* Hero  */}
      <section className="hero-section">

        {/* Background Slider */}

        <div id="heroSlider" className="carousel slide carousel-fade" data-bs-ride="carousel">

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src={hero1}
                className="d-block w-100 hero-image"
                alt=""
              />
            </div>

            <div className="carousel-item">
              <img
                src={hero2}
                className="d-block w-100 hero-image"
                alt=""
              />
            </div>

            <div className="carousel-item">
              <img
                src={hero3}
                className="d-block w-100 hero-image"
                alt=""
              />
            </div>

          </div>
        </div>



        {/* Overlay */}
        <div className="hero-overlay"></div>
        {/* Content */}
        <div className="container hero-content">
          <div data-aos="fade-up">
            <span className="hero-badge">
              🚀 Trusted Software Partner
            </span>

            <h1 className="hero-title">
              Transforming Ideas Into
              <span> Powerful Digital Solutions</span>
            </h1>

            <p className="hero-text">
              We build scalable web applications, enterprise software,
              cloud platforms, and innovative digital products that help
              businesses grow faster.
            </p>

            <div className="hero-buttons">

              <a href="#contact" className="hero-btn">
                Get Started
              </a>

              <a href="#about" className="hero-btn-outline">
                Learn More
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* About */}
      <section className="trusted-section py-5 position-relative overflow-hidden">
        <div className="container" data-aos="fade-up">

          <div className="trusted-wrapper row align-items-center p-5 rounded-4 shadow-sm">

            {/* Left Content */}
            <div className="col-md-7">
              <span className="trusted-badge">
                Trusted Worldwide 🌍
              </span>

              <h2 className="trusted-title">
                Trusted by <span>Growing Businesses</span> Worldwide
              </h2>

              <p className="trusted-text">
                From startups to enterprises, we help brands build
                powerful digital experiences that scale globally with
                speed, innovation, and reliability.
              </p>
            </div>

            {/* Right Content */}
            <div className="col-md-5 text-center">
              <div className="trusted-card mx-auto p-4 rounded-4 shadow">
                <h1 className="trusted-count">500+</h1>

                <p className="trusted-subtitle">
                  Successful Deployments Across Industries
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">

              <span className="about-badge">
                🚀 About Us
              </span>

              <h2 className="about-title">
                We Build Software That
                <span> Powers Modern Businesses</span>
              </h2>

              <p className="about-description">
                We specialize in designing and developing scalable web
                applications, enterprise solutions, mobile platforms,
                and cloud-powered systems that help companies grow
                faster and operate smarter.
              </p>

              <p className="about-description">
                Our mission is to transform ideas into high-performing
                digital experiences through innovation, technology,
                and exceptional user experiences.
              </p>

              <a href="#contact" className="about-btn">
                Start Your Project →
              </a>

            </div>

            <div className="col-lg-6">
              <div className="about-card">

                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Projects Delivered</p>
                </div>

                <div className="stat-item">
                  <h3>100+</h3>
                  <p>Happy Clients</p>
                </div>

                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Countries Served</p>
                </div>

                <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Support Team</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Services  */}
      <section className="services-section">

        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">

            <span className="service-badge">
              🚀 Our Services
            </span>

            <h2 className="service-title">
              Solutions Designed For
              <span> Digital Growth</span>
            </h2>

            <p className="service-subtitle">
              Empowering businesses with innovative software solutions,
              cloud technologies, and scalable digital products.
            </p>

          </div>


          <div className="row g-4">


            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="service-card">

                <div className="service-icon">
                  <i className="fa-solid fa-code"></i>
                </div>

                <h4>Web Development</h4>

                <p>
                  Custom websites and enterprise applications
                  built using modern technologies.
                </p>

              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card">

                <div className="service-icon">
                  <i className="fa-solid fa-mobile-screen"></i>
                </div>

                <h4>Mobile Applications</h4>

                <p>
                  High-performance Android and iOS applications
                  designed for seamless experiences.
                </p>

              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-card">

                <div className="service-icon">
                  <i className="fa-solid fa-cloud"></i>
                </div>

                <h4>Cloud Solutions</h4>

                <p>
                  Secure and scalable cloud infrastructure
                  for growing businesses.
                </p>

              </div>
            </div>


            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="service-card">

                <div className="service-icon">
                  <i className="fa-solid fa-robot"></i>
                </div>

                <h4>AI Integration</h4>

                <p>
                  Integrate AI-powered automation and
                  intelligent workflows.
                </p>

              </div>

            </div>


            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="service-card">

                <div className="service-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>

                <h4>Cyber Security</h4>

                <p>
                  Protect your applications with modern
                  security practices.
                </p>

              </div>

            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up">

              <div className="service-card">

                <div className="service-icon">
                  <i className="fa-solid fa-gears"></i>
                </div>

                <h4>Software Consulting</h4>

                <p>
                  Technology consulting to help businesses
                  accelerate digital transformation.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="why-section">

        <div className="container">

          <div className="text-center mb-5" data-aos="fade-up">

            <span className="why-badge">
              Why Choose Us
            </span>

            <h2 className="why-title">
              Why Businesses Trust
              <span> Our Expertise</span>
            </h2>

            <p className="why-subtitle">
              We combine innovation, technical excellence, and customer-centric
              strategies to deliver exceptional digital products.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-lg-3 col-md-6" data-aos="fade-up">

              <div className="why-card">

                <div className="why-icon">
                  <i className="fa-solid fa-bolt"></i>
                </div>

                <h4>Fast Delivery</h4>

                <p>
                  Agile development process ensuring rapid
                  product launches.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="150">

              <div className="why-card">

                <div className="why-icon">
                  <i className="fa-solid fa-code"></i>
                </div>

                <h4>Clean Code</h4>

                <p>
                  Maintainable, scalable and secure
                  development standards.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">

              <div className="why-card">

                <div className="why-icon">
                  <i className="fa-solid fa-palette"></i>
                </div>

                <h4>Modern UI/UX</h4>

                <p>
                  Beautiful user experiences designed
                  for engagement.
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="450">

              <div className="why-card">

                <div className="why-icon">
                  <i className="fa-solid fa-headset"></i>
                </div>

                <h4>24/7 Support</h4>

                <p>
                  Dedicated technical assistance
                  whenever you need it.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Projects */}
      <section className="projects-section">

        <div className="container">

          <div className="text-center mb-5" data-aos="fade-up">

            <span className="project-badge">
              Our Portfolio
            </span>

            <h2 className="project-title">
              Recent <span>Projects</span>
            </h2>

            <p className="project-subtitle">
              Delivering innovative software solutions that empower
              businesses worldwide.
            </p>

          </div>

          <div className="row g-4">
            {/* Project 1 */}
            <div className="col-lg-4" data-aos="zoom-in">

              <div className="project-card">

                <img
                  src={project1}
                  alt=""
                  className="project-image"
                />

                <div className="project-content">

                  <span>E-Commerce</span>

                  <h4>
                    Multi Vendor Marketplace
                  </h4>

                  <p>
                    Scalable shopping platform with payment
                    gateway integration.
                  </p>

                </div>

              </div>

            </div>

            {/* Project 2 */}

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">

              <div className="project-card">

                <img
                  src={project2}
                  alt=""
                  className="project-image"
                />

                <div className="project-content">

                  <span>CRM</span>

                  <h4>
                    Sales CRM Dashboard
                  </h4>

                  <p>
                    Analytics, reporting and customer
                    management tools.
                  </p>

                </div>

              </div>

            </div>

            {/* Project 3 */}
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="400">

              <div className="project-card">

                <img src={project3} alt="" className="project-image" />

                <div className="project-content">

                  <span>SaaS</span>

                  <h4> Cloud ERP Platform </h4>

                  <p>
                    Subscription-based enterprise software
                    for growing companies.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Team Section */}

      <section className="team-section">
        <div className="container">

          <div className="text-center mb-5" data-aos="fade-up">

            <span className="team-badge">
              👨‍💻 Our Experts
            </span>

            <h2 className="team-title">
              Meet Our
              <span> Expert Team</span>
            </h2>

            <p className="team-subtitle">
              Our multidisciplinary team combines creativity,
              engineering excellence, and strategic thinking to
              deliver world-class digital solutions.
            </p>

          </div>


          <div className="row g-4">

            {/* Frontend */}

            <div className="col-lg-3 col-md-6">

              <div className="team-card">

                <div className="team-icon">

                  <i className="fa-solid fa-laptop-code"></i>

                </div>

                <h4>Frontend Developers</h4>

                <p>
                  Crafting responsive and engaging
                  user experiences.
                </p>

              </div>

            </div>



            {/* Backend */}

            <div className="col-lg-3 col-md-6">

              <div className="team-card">

                <div className="team-icon">

                  <i className="fa-solid fa-server"></i>

                </div>

                <h4>Backend Engineers</h4>

                <p>
                  Building scalable APIs and secure
                  infrastructures.
                </p>

              </div>

            </div>




            {/* Designers */}

            <div className="col-lg-3 col-md-6">

              <div className="team-card">

                <div className="team-icon">

                  <i className="fa-solid fa-pen-ruler"></i>

                </div>

                <h4>UI / UX Designers</h4>

                <p>
                  Designing intuitive and delightful
                  digital products.
                </p>

              </div>

            </div>


            {/* Managers */}

            <div className="col-lg-3 col-md-6">

              <div className="team-card">

                <div className="team-icon">

                  <i className="fa-solid fa-users-gear"></i>

                </div>

                <h4>Project Managers</h4>

                <p>
                  Ensuring smooth collaboration
                  and timely delivery.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>

      {/* Process Section */}

      <section className="process-section">

        <div className="container">

          <div className="text-center mb-5" data-aos="fade-up">

            <span className="process-badge">
              🚀 Development Workflow
            </span>

            <h2 className="process-title">
              Our <span>Development Process</span>
            </h2>

            <p className="process-subtitle">
              We follow an agile and transparent methodology that ensures
              high-quality products, faster delivery, and continuous
              improvement throughout the project lifecycle.
            </p>

          </div>



          <div className="row g-4">


            <div className="col-lg-3 col-md-6" data-aos="fade-up">

              <div className="process-card">

                <div className="process-number">
                  01
                </div>

                <div className="process-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <h4>Discovery</h4>

                <p>
                  Understanding business goals,
                  challenges, and requirements.
                </p>

              </div>

            </div>




            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="150">

              <div className="process-card">

                <div className="process-number">
                  02
                </div>

                <div className="process-icon">
                  <i className="fa-solid fa-sitemap"></i>
                </div>

                <h4>Planning</h4>

                <p>
                  Defining architecture,
                  milestones, and project strategy.
                </p>

              </div>

            </div>




            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">

              <div className="process-card">

                <div className="process-number">
                  03
                </div>

                <div className="process-icon">
                  <i className="fa-solid fa-code"></i>
                </div>

                <h4>Development</h4>

                <p>
                  Agile implementation using
                  modern technologies.
                </p>

              </div>

            </div>




            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="450">

              <div className="process-card">

                <div className="process-number">
                  04
                </div>

                <div className="process-icon">
                  <i className="fa-solid fa-rocket"></i>
                </div>

                <h4>Launch</h4>

                <p>
                  Testing, deployment,
                  optimization and support.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>


      {/* Testimonials */}
      <section className="testimonial-section">

        <div className="container">

          <div className="text-center mb-5" data-aos="fade-up">

            <span className="testimonial-badge">
              ⭐ Testimonials
            </span>

            <h2 className="testimonial-title">
              What Our <span>Clients Say</span>
            </h2>

            <p className="testimonial-subtitle">
              Trusted by startups, enterprises and growing businesses
              worldwide for delivering exceptional digital experiences.
            </p>

          </div>



          <div className="row g-4">


            {/* Testimonial 1 */}

            <div className="col-lg-4" data-aos="fade-up">

              <div className="testimonial-card">

                <div className="quote-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </div>


                <div className="stars">

                  ★★★★★

                </div>



                <p>

                  TechNova delivered beyond expectations.
                  Our platform is faster, cleaner and converts
                  better than ever.

                </p>



                <div className="client-info">

                  <img
                    src="https://i.pravatar.cc/80?img=32"
                    alt=""
                  />

                  <div>

                    <h5>Sarah Johnson</h5>

                    <span>CEO • StartupX</span>

                  </div>

                </div>

              </div>

            </div>




            {/* Testimonial 2 */}

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="150">

              <div className="testimonial-card">

                <div className="quote-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </div>

                <div className="stars">
                  ★★★★★
                </div>


                <p>

                  Professional team, beautiful UI,
                  and excellent communication throughout
                  the entire project.

                </p>


                <div className="client-info">

                  <img
                    src="https://i.pravatar.cc/80?img=15"
                    alt=""
                  />

                  <div>

                    <h5>David Miller</h5>

                    <span>Founder • GrowthLab</span>

                  </div>

                </div>

              </div>

            </div>




            {/* Testimonial 3 */}

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">

              <div className="testimonial-card">

                <div className="quote-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </div>

                <div className="stars">
                  ★★★★★
                </div>


                <p>

                  Their scalable web solution helped us
                  expand globally without technical issues.

                </p>



                <div className="client-info">

                  <img
                    src="https://i.pravatar.cc/80?img=45"
                    alt=""
                  />

                  <div>

                    <h5>Anita Verma</h5>

                    <span>Director • Nexa Global</span>

                  </div>

                </div>

              </div>

            </div>


          </div>

        </div>

      </section>

      {/* Pricing */}
      {/* <section className="section bg-light">
        <div className="container">
          <h2 className="text-center section-title mb-5" data-aos="fade-up">Flexible Pricing Plans</h2>
          <div className="row g-4 align-items-stretch">

            <div className="col-md-4" data-aos="zoom-in">
              <div className="card p-5 text-center h-100">
                <h4 className="mb-3">Starter</h4>
                <h2 className="display-5 fw-bold">$299</h2>
                <p className="text-muted mb-4">Perfect for small businesses</p>
                <ul className="list-unstyled mb-4">
                  <li>✔ 5 Page Website</li>
                  <li>✔ Responsive Design</li>
                  <li>✔ Basic SEO Setup</li>
                  <li>✔ Email Support</li>
                </ul>
                <a href="#contact" className="btn btn-outline-primary w-100">Choose Plan</a>
              </div>
            </div>

            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="card p-5 text-center h-100 border border-2 border-primary position-relative">
                <span className="badge bg-primary position-absolute top-0 start-50 translate-middle px-3 py-2 rounded-pill">Most
                  Popular</span>
                <h4 className="mb-3 mt-3">Professional</h4>
                <h2 className="display-5 fw-bold">$799</h2>
                <p className="text-muted mb-4">Ideal for growing companies</p>
                <ul className="list-unstyled mb-4">
                  <li>✔ Custom Web Application</li>
                  <li>✔ Admin Dashboard</li>
                  <li>✔ Advanced SEO</li>
                  <li>✔ Priority Support</li>
                </ul>
                <a href="#contact" className="btn btn-primary w-100">Choose Plan</a>
              </div>
            </div>

            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="card p-5 text-center h-100">
                <h4 className="mb-3">Enterprise</h4>
                <h2 className="display-5 fw-bold">$1999</h2>
                <p className="text-muted mb-4">For large-scale custom solutions</p>
                <ul className="list-unstyled mb-4">
                  <li>✔ Full SaaS Platform</li>
                  <li>✔ API Integrations</li>
                  <li>✔ Dedicated Team</li>
                  <li>✔ 24/7 Premium Support</li>
                </ul>
                <a href="#contact" className="btn btn-outline-primary w-100">Choose Plan</a>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      <section className="pricing-section">

        <div className="container">

          <div className="text-center mb-5">

            <span className="pricing-badge">
              💰 Pricing Plans
            </span>

            <h2 className="pricing-title">

              Flexible <span>Pricing Plans</span>

            </h2>

            <p className="pricing-subtitle">

              Choose a plan that fits your business needs.
              Transparent pricing with no hidden charges.

            </p>

          </div>



          <div className="row g-4">


            {/* Starter */}

            <div className="col-lg-4">

              <div className="pricing-card">

                <div className="plan-icon">
                  🚀
                </div>

                <h3>Starter</h3>

                <h1>$299</h1>

                <p>Perfect for startups</p>


                <ul>

                  <li>✔ 5 Page Website</li>

                  <li>✔ Responsive Design</li>

                  <li>✔ SEO Setup</li>

                  <li>✔ Email Support</li>

                </ul>



                <a href="#contact">

                  Get Started

                </a>

              </div>

            </div>





            {/* Popular */}

            <div className="col-lg-4">


              <div className="pricing-card active">


                <span className="popular">

                  MOST POPULAR

                </span>



                <div className="plan-icon">

                  🔥

                </div>



                <h3>

                  Professional

                </h3>



                <h1>

                  $799

                </h1>



                <p>

                  Ideal for growing companies

                </p>



                <ul>

                  <li>✔ Web Application</li>

                  <li>✔ Admin Dashboard</li>

                  <li>✔ Advanced SEO</li>

                  <li>✔ Priority Support</li>

                </ul>



                <a href="#contact">

                  Get Started

                </a>

              </div>


            </div>





            {/* Enterprise */}

            <div className="col-lg-4">


              <div className="pricing-card">


                <div className="plan-icon">

                  👑

                </div>


                <h3>

                  Enterprise

                </h3>


                <h1>

                  $1999

                </h1>


                <p>

                  Full custom software solution

                </p>


                <ul>

                  <li>✔ SaaS Platform</li>

                  <li>✔ API Integration</li>

                  <li>✔ Dedicated Team</li>

                  <li>✔ 24/7 Support</li>

                </ul>



                <a href="#contact">

                  Get Started

                </a>

              </div>


            </div>



          </div>

        </div>

      </section>

      {/* FAQ  */}
      <section className="faq-section">

        <div className="container">

          <div className="text-center mb-5" data-aos="fade-up">

            <span className="faq-badge">
              ❓ FAQs
            </span>

            <h2 className="faq-title">

              Frequently Asked
              <span> Questions</span>

            </h2>

            <p className="faq-subtitle">

              Everything you need to know about our software
              development services and process.

            </p>

          </div>



          <div className="faq-wrapper">




            <div className="accordion" id="faqAccordion">


              <div className="accordion-item">

                <h2 className="accordion-header">

                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >

                    How long does a project take?

                  </button>

                </h2>


                <div
                  id="faq1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >

                  <div className="accordion-body">

                    Most projects take between 2–8 weeks,
                    depending on complexity, integrations,
                    and scope.

                  </div>

                </div>

              </div>





              <div className="accordion-item">

                <h2 className="accordion-header">

                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >

                    Do you provide ongoing support?

                  </button>

                </h2>


                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >

                  <div className="accordion-body">

                    Yes. We provide maintenance,
                    security updates and technical
                    assistance after deployment.

                  </div>

                </div>

              </div>






              <div className="accordion-item">

                <h2 className="accordion-header">

                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >

                    Which technologies do you use?

                  </button>

                </h2>


                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >

                  <div className="accordion-body">

                    React, Node.js, Laravel, Next.js,
                    PostgreSQL, AWS, Docker and many
                    other modern technologies.

                  </div>

                </div>

              </div>






              <div className="accordion-item">

                <h2 className="accordion-header">

                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >

                    Can you work with international clients?

                  </button>

                </h2>


                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >

                  <div className="accordion-body">

                    Absolutely. We collaborate with
                    clients globally using modern
                    communication and project
                    management tools.

                  </div>

                </div>

              </div>



            </div>

          </div>

        </div>

      </section>

      {/* CTA  */}
      <section className="cta-section">

        <div className="container">

          <div
            className="cta-wrapper"
            data-aos="zoom-in"
          >

            {/* Background Shapes */}

            <div className="cta-shape shape1"></div>
            <div className="cta-shape shape2"></div>


            <span className="cta-badge">

              🚀 Ready to Start?

            </span>



            <h2 className="cta-title">

              Let's Build Something
              <span> Amazing Together</span>

            </h2>



            <p className="cta-text">

              Transform your ideas into powerful digital products.
              We help startups, enterprises, and growing businesses
              create scalable software solutions.

            </p>



            <div className="cta-buttons">

              <a
                href="#contact"
                className="cta-btn-primary"
              >

                Get Started

              </a>



              <a
                href="#projects"
                className="cta-btn-secondary"
              >

                View Portfolio

              </a>

            </div>


          </div>

        </div>

      </section>

    </>
  );
};

export default Hero;
