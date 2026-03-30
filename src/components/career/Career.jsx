import Careerbanner from "./Careerbanner";
import careerBanner from "../../assets/images/carrer-banner1.avif";
import "./Career.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../assets/lottiefiles/Presentation.json";
import FloatingSidebar from "../floatingsidebar/FloatingSidebar";


function career() {
    return (
        <>
            <Careerbanner title="Career" backgroundImage={careerBanner} />

            {/* Floating Sidebar */}
            <FloatingSidebar />

            <div className="container">
                <div className="section-title text-center text-md-start mt-4">
                    <span className="eyebrow">Careers</span>
                    <h2>
                        Build your career <b>with us</b>
                    </h2>
                    <p className="sub-text">
                        We’re always looking for talented individuals to join our growing team.
                        Submit your details and we’ll be in touch.
                    </p>
                </div>

                <div className="career-item mb-4 p-4 rounded" style={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 10px', backgroundColor: '#fff' }} >
                    <div className="row align-items-center g-4">

                        <div className="col-lg-9 col-md-8">
                            <div className="career-content">
                                <h3 className="mb-3">Web Developer</h3>

                                <p className="mb-4 text-muted">
                                    We are looking for skilled and motivated professionals who are passionate about building
                                    high-quality digital solutions. If you’re ready to grow your career in a collaborative and
                                    forward-thinking environment, we’d love to hear from you.
                                </p>

                                <ul className="list-unstyled d-flex flex-wrap gap-4 mb-0">
                                    <li>
                                        <strong style={{ color: '#ffae74' }}>Location:</strong>
                                        <span className="ms-2 text-muted">Kalyani, West Bengal</span>
                                    </li>
                                    <li>
                                        <strong style={{ color: '#ffae74' }}>Type:</strong>
                                        <span className="ms-2 text-muted">Full Time</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 text-md-end text-start">
                            <div className="career-btn">
                                <button type="button" className="btn btn-grad px-4 py-2" data-bs-toggle="modal" data-bs-target="#sidebarModal">
                                    Get Started
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="container py-5">
                    <div class="row align-items-center g-4">

                        {/* Left Side Image */}
                        <div class="col-lg-6 col-md-6 text-center">
                            <Lottie
                                animationData={animationData}
                                loop={true}
                                style={{ width: "100%", maxWidth: "550px", margin: "auto" }}
                            />
                        </div>

                        {/* Right Side Form */}
                        <div class="col-lg-6 col-md-6">
                            <div class="apply-form-wrap p-4  rounded bg-white">

                                <div class="content mb-4">
                                    <h3 class="mb-0">Apply For Job</h3>
                                </div>

                                <div class="apply-form">
                                    <input type="hidden" id="job_code" value="" />

                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="j_name" placeholder="Enter your name" />
                                        <p id="err_name" class="text-danger d-none">Please enter your Name</p>
                                    </div>

                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="j_email" placeholder="Enter Email address" />
                                        <p id="err_email" class="text-danger d-none">Please enter your Email</p>
                                    </div>

                                    <div class="mb-3">
                                        <input type="number" class="form-control" id="j_ph_no" placeholder="Enter Phone Number" />
                                        <p id="err_ph" class="text-danger d-none">Please enter your Phone Number</p>
                                    </div>

                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="j_portfolio" placeholder="Portfolio link" />
                                        <p id="err_port" class="text-danger d-none">Please enter your Portfolio link</p>
                                    </div>

                                    <div class="mb-3">
                                        <select id="Category" class="form-select">
                                            <option value="">Job Category</option>
                                            <option>Team Lead - Digital Marketing</option>
                                            <option>Team Lead - Web Developer</option>
                                            <option>Android Developer</option>
                                            <option>Web Developer</option>
                                            <option>Graphic Designer</option>
                                            <option>Digital Marketing Executive</option>
                                        </select>
                                        <p id="err_category" class="text-danger d-none">Please select your Job Category</p>
                                    </div>

                                    <div class="mb-4">
                                        <textarea class="form-control" id="j_message" rows="4" placeholder="Write message..."></textarea>
                                        <p id="err_msg" class="text-danger d-none">Please enter your message</p>
                                    </div>

                                    <button type="submit" class="btn btn-primary w-100 border-0" onclick="save_details()" style={{ backgroundColor: '#f7761a' }}>
                                        Apply
                                    </button>

                                    <div class="text-center mt-3 d-none" id="message_sending_id2">
                                        <img src="frontend_assets/images/Loading_icon.gif" width="30" />
                                        <p class="mb-0">Message Sending...</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Contact Info */}
                <div className="contact-info-section">
                    <div className="container">

                        <div className="row contact-row">

                            {/* Call Us */}
                            <div className="col-12 col-md-4">
                                <div className="contact-item text-center text-md-center">
                                    <div className="icon-box">
                                        <FaPhoneAlt />
                                    </div>
                                    <h6>Call Us</h6>
                                    <p>+91-6297995150</p>
                                </div>
                            </div>

                            {/* Email Us */}
                            <div className="col-12 col-md-4">
                                <div className="contact-item text-center text-md-center">
                                    <div className="icon-box">
                                        <FaEnvelope />
                                    </div>
                                    <h6>Email Us</h6>
                                    <p className="email-text">info@nexawebinfusin.com</p>
                                </div>
                            </div>

                            {/* Visit Us */}
                            <div className="col-12 col-md-4">
                                <div className="contact-item text-center text-md-center">
                                    <div className="icon-box">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <h6>Visit Us</h6>
                                    <p>
                                        Block A5, Kalyani – 741235 <br />
                                        West Bengal
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default career
