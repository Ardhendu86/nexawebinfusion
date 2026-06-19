import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar - Responsive */}
      <div className={`bg-warning text-dark py-2 ${isScrolled ? 'd-none' : ''}`}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-1 mb-md-0">
              <small className="d-block d-md-inline">
                <i className="bi bi-telephone"></i> Call Us: +91-8240015677 / +91-8640805196
              </small>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <small>
                <i className="bi bi-envelope"></i> Mail: 
                <a href="mailto:info@nexawebinfusion.com" className="text-dark text-decoration-none">
                  info@nexawebinfusion.com
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Responsive */}
      <header>
        <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${isScrolled ? 'fixed-top' : 'sticky-top'}`}>
          <div className="container-fluid">
            {/* Logo */}
            <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
              <img 
                src={logo} 
                alt="Nexa Web Infusion" 
                className="me-2" 
                style={{width: "170px"}} 
              />
              <span className="fw-bold d-none d-sm-inline" style={{ color: "#4a4a4a", fontSize: "0.9rem" }}>
                
              </span>
              <span className="fw-bold d-sm-none" style={{ color: "#4a4a4a", fontSize: "0.8rem" }}>
                
              </span>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNavDropdown"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Menu */}
            <div className={isMenuOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3 py-2" to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3 py-2" to="/about" onClick={closeMenu}>About</Link>
                </li>

                {/* Service Dropdown with mobile toggle */}
                {/* <li className="nav-item dropdown">
                  <div className="d-flex align-items-center justify-content-between px-3 py-2">
                    <Link
                      className="nav-link dropdown-toggle fw-semibold p-0"
                      to="#"
                      id="serviceDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ cursor: "pointer" }}
                    >
                      Services
                    </Link>
                    
                    <button
                      className="btn btn-link d-lg-none p-0 ms-2"
                      onClick={toggleServices}
                      aria-label="Toggle Services submenu"
                      type="button"
                      style={{ fontSize: "1.2rem", lineHeight: "1" }}
                    >
                      {isServicesOpen ? (
                        <i className="bi bi-dash-lg"></i>
                      ) : (
                        <i className="bi bi-plus-lg"></i>
                      )}
                    </button>
                  </div>
                  <ul
                    className={`dropdown-menu${isServicesOpen ? " show" : ""}`}
                    aria-labelledby="serviceDropdown"
                    style={{ position: "static", float: "none" }}
                  >
                    <li><Link className="dropdown-item" to="/service/web-development">Web Development</Link></li>
                    <li><Link className="dropdown-item" to="/service/mobile-apps">Mobile Apps</Link></li>
                    <li><Link className="dropdown-item" to="/service/digital-marketing">Digital Marketing</Link></li>
                    <li><Link className="dropdown-item" to="/service/ui-ux-design">UI/UX Design</Link></li>
                    <li><Link className="dropdown-item" to="/service/ecommerce">E-commerce Solutions</Link></li>
                  </ul>
                </li> */}

                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3 py-2" to="/portfolio" onClick={closeMenu}>Our Portfolio</Link>
                </li>
                
                {/* Mobile-optimized menu items with updated text */}
                <li className="nav-item d-lg-none">
                  <Link className="nav-link fw-semibold px-3 py-2" to="/experts" onClick={closeMenu}>Our Experts and Innovators</Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link className="nav-link fw-semibold px-3 py-2" to="/testimonials" onClick={closeMenu}>Client's Testimonials</Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link className="nav-link fw-semibold px-3 py-2" to="/events" onClick={closeMenu}>Events</Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link className="nav-link fw-semibold px-3 py-2" to="/blog" onClick={closeMenu}>Blog</Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link className="nav-link fw-semibold px-3 py-2" to="/training" onClick={closeMenu}>Industrial Training</Link>
                </li>

                {/* Desktop menu items */}
                {/* <li className="nav-item dropdown d-none d-lg-block">
                  <Link className="nav-link dropdown-toggle fw-semibold px-3 py-2" to="#" id="moreDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    More
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="moreDropdown">
                    <li><Link className="dropdown-item" to="/experts">Our Experts</Link></li>
                    <li><Link className="dropdown-item" to="/testimonials">Client Testimonials</Link></li>
                    <li><Link className="dropdown-item" to="/events">Events</Link></li>
                    <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                    <li><Link className="dropdown-item" to="/training">Industrial Training</Link></li>
                  </ul>
                </li> */}

                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3 py-2" to="/career" onClick={closeMenu}>Career</Link> 
                </li>

                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-3 py-2" to="/contact" onClick={closeMenu}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Bootstrap Icons CDN for mobile menu icons */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" 
      />
    </>
  );
}

export default Header;
