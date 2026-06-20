import FloatingSidebar from "../floatingsidebar/FloatingSidebar";
import aboutImage from "../../assets/images/aboutbanner.jpg";
import PortfolioBanner from "./PortfolioBanner";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Portfolio.css";

function Portfolio() {

    const projects = [

        {
            title: "E-Commerce Platform",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
        },

        {
            title: "CRM Dashboard",
            category: "SaaS Solution",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        },

        {
            title: "Hospital Management",
            category: "Enterprise Software",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f"
        },

        {
            title: "Learning Management",
            category: "Education",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        }

    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });


    return (
        <>
            {/* Banner */}
            <PortfolioBanner title="Our Portfolio" backgroundImage={aboutImage} />

            {/* Floating Sidebar */}
            <FloatingSidebar />

            <section className="portfolio-section">

                <div className="container">


                    <div className="text-center mb-5">

                        <span className="portfolio-badge">

                            Our Works

                        </span>


                        <h2 className="portfolio-title">

                            Crafting Digital
                            <span> Success Stories</span>

                        </h2>


                        <p>

                            Explore some of our innovative
                            software solutions built for startups,
                            enterprises and growing businesses.

                        </p>

                    </div>





                    <div className="row g-4">


                        {projects.map((item, index) => (


                            <div className="col-lg-6" key={index}>


                                <div className="portfolio-card">


                                    <img src={item.image} alt="" />



                                    <div className="portfolio-content">

                                        <span>

                                            {item.category}

                                        </span>



                                        <h3>

                                            {item.title}

                                        </h3>



                                        <a href="#">

                                            View Project

                                        </a>


                                    </div>


                                </div>



                            </div>

                        ))}


                    </div>



                </div>

            </section>





            <section className="achievement-section">

                <div className="container">

                    <div
                        ref={ref}
                        className="achievement-wrapper"
                    >


                        <div className="achievement-item">

                            <h2>

                                {inView && (

                                    <CountUp
                                        start={0}
                                        end={500}
                                        duration={3}
                                    />

                                )}

                                +

                            </h2>

                            <p>
                                Successful Projects
                            </p>

                        </div>



                        <div className="achievement-item">

                            <h2>

                                {inView && (

                                    <CountUp
                                        start={0}
                                        end={120}
                                        duration={3}
                                    />

                                )}

                                +

                            </h2>

                            <p>
                                Global Clients
                            </p>

                        </div>




                        <div className="achievement-item">

                            <h2>

                                {inView && (

                                    <CountUp
                                        start={0}
                                        end={98}
                                        duration={3}
                                    />

                                )}

                                %

                            </h2>

                            <p>
                                Client Satisfaction
                            </p>

                        </div>




                        <div className="achievement-item">

                            <h2>

                                24/7

                            </h2>

                            <p>
                                Technical Support
                            </p>

                        </div>



                    </div>

                </div>

            </section>

        </>
    )
}

export default Portfolio
