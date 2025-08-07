import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        background: "linear-gradient(to right, #2563eb, #4338ca)", // blue-600 to indigo-700
      }}
    >
      <div className="container">
        <h2 className="display-4 fw-bold mb-4">We Build Scalable Software</h2>
        <p className="lead mb-4">
          Custom web &amp; mobile solutions for growing businesses
        </p>
        <a
          href="#contact"
          className="btn btn-light text-primary px-4 py-2 fw-semibold"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;
