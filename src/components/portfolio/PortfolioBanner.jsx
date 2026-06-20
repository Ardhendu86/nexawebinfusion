import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioBanner.css";


function PortfolioBanner({ title, backgroundImage }) {
    return (
        <>
            <section className="contact-banner" style={{ "--background-image": `url(${backgroundImage})` }} >
                <div className="container">
                    {/* Title with animation */}
                    <h1 className="animate__animated animate__fadeInLeft animate__delay-1s">
                        {title}
                    </h1>

                    {/* Breadcrumb with animation */}
                    <nav aria-label="breadcrumb" className="mt-2">
                        <ol className="breadcrumb animate__animated animate__fadeInLeft animate__delay-1s">
                            <li className="breadcrumb-item">
                                <Link to="/" className="text-white text-decoration-none">
                                    Home
                                </Link>
                            </li>
                            <li className="breadcrumb-item active text-warning" aria-current="page">
                                {title}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default PortfolioBanner;
