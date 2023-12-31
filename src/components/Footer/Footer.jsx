import React from 'react'
import fssaiLogo from "../../assets/img/logo-fssai.webp";
import eggFreeLogo from "../../assets/img/logo-egg.webp";
import vegLogo from "../../assets/img/logo-veg.webp";
import logo from "../../assets/img/logo.webp";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer pt-3 pb-3">
            <div className="container">
                {/* <!-- Footer logo --> */}
                <div className="footer-logo">
                    <Link to={"/"} className="logo" title="Kocoa Mania">
                        <img src={logo} alt="kocoamania" loading="lazy" />
                    </Link>
                </div>
                <div className="text-center">
                    <div className="footer-nav pb-2">
                        <a href="#home" title="Home" className="scrollTo">
                            Home
                        </a>
                        <a
                            href="#categories"
                            title="Products"
                            className="scrollTo"
                        >
                            Products
                        </a>
                        <a href="#about" title="About Us" className="scrollTo">
                            About Us
                        </a>
                        <a
                            href="#contact"
                            title="Contact Us"
                            className="scrollTo"
                        >
                            Contact Us
                        </a>
                    </div>
                    <div className="copyright">
                        <p>
                            Copyright &copy; <span className="year"></span> All
                            rights reserved. |
                            <span href="#" className="popup-show">
                                {" "}
                                Privacy policy
                            </span>
                        </p>
                    </div>
                </div>
                {/* <!-- Footer Logos --> */}
                <div className="footer-other-logos">
                    <img src={eggFreeLogo} alt="Egg Free" loading="lazy" />
                    <img
                        src={fssaiLogo}
                        className="fssai"
                        alt="FSSAI"
                        loading="lazy"
                    />
                    <img src={vegLogo} alt="100% Vegeterian" loading="lazy" />
                </div>
            </div>
        </footer>
    );
};

export default Footer