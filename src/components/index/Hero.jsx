import React, { useEffect } from 'react';
import AOS from 'aos';

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
      <section className="hero text-center">
        <div className="container" data-aos="fade-up">
          <h1>Modern Web Development Company</h1>
          <p className="lead">
            We build fast, scalable & beautiful web applications.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </section>

      {/* About */}
      <section className="section bg-light">
        <div className="container" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="section-title">Trusted by Growing Businesses Worldwide</h2>
              <p className="lead">From startups to enterprises, we help brands build powerful digital experiences that scale
                globally with speed and innovation.</p>
            </div>
            <div className="col-md-6 text-center">
              <h1>500+</h1>
              <p>Successful Deployments Across Industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section text-center">
        <div className="container" data-aos="fade-up">
          <h2 className="section-title">About Us</h2>
          <p>We deliver high-quality web solutions using modern technologies.</p>
        </div>
      </section>

      {/* Services  */}
      <section id="services" className="section bg-light">
        <div className="container">
          <h2 className="text-center section-title mb-5" data-aos="fade-up">Services</h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card p-4 text-center"><i className="fa fa-code fa-2x mb-3"></i>
                <h5>Web Development</h5>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card p-4 text-center"><i className="fa fa-mobile fa-2x mb-3"></i>
                <h5>Responsive Design</h5>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card p-4 text-center"><i className="fa fa-cloud fa-2x mb-3"></i>
                <h5>Cloud Apps</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section bg-light">
        <div className="container">
          <h2 className="text-center section-title mb-5" data-aos="fade-up">Services</h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card p-4 text-center"><i className="fa fa-code fa-2x mb-3"></i>
                <h5>Web Development</h5>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card p-4 text-center"><i className="fa fa-mobile fa-2x mb-3"></i>
                <h5>Responsive Design</h5>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <div className="card p-4 text-center"><i className="fa fa-cloud fa-2x mb-3"></i>
                <h5>Cloud Apps</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="text-center section-title mb-5" data-aos="fade-up">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-3" data-aos="fade-right">
              <div className="feature-box">
                <h5>Fast Delivery</h5>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up">
              <div className="feature-box">
                <h5>Clean Code</h5>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up">
              <div className="feature-box">
                <h5>Modern UI</h5>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-left">
              <div className="feature-box">
                <h5>24/7 Support</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section bg-light">
        <div className="container">
          <h2 className="text-center section-title mb-5" data-aos="fade-up">Projects</h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="flip-left">
              <div className="card p-3">E-commerce Website</div>
            </div>
            <div className="col-md-4" data-aos="flip-left">
              <div className="card p-3">CRM Dashboard</div>
            </div>
            <div className="col-md-4" data-aos="flip-left">
              <div className="card p-3">SaaS Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center section-title mb-5" data-aos="fade-up">Meet Our Expert Team</h2>
          <div className="row g-4">
            <div className="col-md-3" data-aos="zoom-in">
              <div className="card p-4 text-center">
                <h5>Frontend Developers</h5>
                <p>Creative UI engineers crafting stunning interfaces.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="zoom-in">
              <div className="card p-4 text-center">
                <h5>Backend Engineers</h5>
                <p>Robust server-side architecture experts.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="zoom-in">
              <div className="card p-4 text-center">
                <h5>UI/UX Designers</h5>
                <p>Design thinkers building user-first experiences.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="zoom-in">
              <div className="card p-4 text-center">
                <h5>Project Managers</h5>
                <p>Ensuring smooth delivery and communication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center section-title mb-5" data-aos="fade-up">Our Development Process</h2>
          <div className="row g-4">
            <div className="col-md-3" data-aos="fade-right">
              <div className="card p-4 text-center">
                <h5>1. Discovery</h5>
                <p>Understanding your business goals deeply.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up">
              <div className="card p-4 text-center">
                <h5>2. Planning</h5>
                <p>Strategic roadmap and architecture planning.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-up">
              <div className="card p-4 text-center">
                <h5>3. Development</h5>
                <p>Agile coding with modern technologies.</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-left">
              <div className="card p-4 text-center">
                <h5>4. Launch</h5>
                <p>Testing, deployment, and long-term support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="text-center section-title mb-5" data-aos="fade-up">What Our Clients Say</h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card p-4 h-100 text-center">
                <div className="mb-3 fs-1">★★★★★</div>
                <p className="lead">“TechNova delivered beyond expectations. Our platform is faster, cleaner, and converts
                  better than ever.”</p>
                <h6 className="mt-3 mb-0">Sarah Johnson</h6>
                <small>CEO, StartupX</small>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card p-4 h-100 text-center">
                <div className="mb-3 fs-1">★★★★★</div>
                <p className="lead">“Professional team, stunning UI, and excellent communication throughout the entire project.”
                </p>
                <h6 className="mt-3 mb-0">David Miller</h6>
                <small>Founder, GrowthLab</small>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card p-4 h-100 text-center">
                <div className="mb-3 fs-1">★★★★★</div>
                <p className="lead">“Their scalable web solution helped us expand globally without technical issues.”</p>
                <h6 className="mt-3 mb-0">Anita Verma</h6>
                <small>Director, Nexa Global</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-light">
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
      </section>

      {/* FAQ  */}
      <section className="section">
        <div className="container">
          <h2 className="text-center section-title mb-5" data-aos="fade-up">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header"><button className="accordion-button" data-bs-toggle="collapse"
                data-bs-target="#faq1">How long does a project take?</button></h2>
              <div id="faq1" className="accordion-collapse collapse show">
                <div className="accordion-body">Usually 2–8 weeks depending on complexity.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header"><button className="accordion-button collapsed" data-bs-toggle="collapse"
                data-bs-target="#faq2">Do you provide support?</button></h2>
              <div id="faq2" className="accordion-collapse collapse">
                <div className="accordion-body">Yes, ongoing maintenance and support included.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA  */}
      <section className="section">
        <div className="container">
          <div className="cta" data-aos="zoom-in">
            <h2>Let's Build Something Great</h2>
            <p>Start your project with us today.</p>
            <a href="#contact" className="btn btn-primary">Contact Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
