import React from "react";
import { Link } from "react-router-dom";
import "./Careerbanner.css";
import careerImg from "../../assets/images/carrer-banner1.avif";


function Careerbanner({ title, backgroundImage }) {
    return (
        <section
            className="career-banner"
            style={{ backgroundImage: `url(${careerImg})`}}
        >
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
    );
}

export default Careerbanner;
