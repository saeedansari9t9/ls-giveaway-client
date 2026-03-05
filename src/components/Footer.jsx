import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src={logo} alt="Lexora Solution" className="footer-logo-img" />
                        <p>Practical builds, rapid delivery.</p>
                    </div>

                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>

                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} Lexora Solution. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
