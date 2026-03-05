import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <div className="container header-inner">
                <div className="logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src={logo} alt="Lexora Solution" className="logo-img" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="nav-links desktop-nav">
                    <a href="/#offer">Offer</a>
                    <a href="/#how-it-works">How It Works</a>
                    <a href="/#why-lexora">Why Lexora</a>
                    <a href="/#faq">FAQ</a>
                    <Link to="/giveaway" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Enter Giveaway
                    </Link>
                </nav>

                {/* Mobile Hamburger Icon */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={closeMenu}
            >
                <div className="mobile-nav-container" onClick={(e) => e.stopPropagation()}>
                    <div className="mobile-nav-content">
                        <a href="/#offer" onClick={closeMenu}>Offer</a>
                        <a href="/#how-it-works" onClick={closeMenu}>How It Works</a>
                        <a href="/#why-lexora" onClick={closeMenu}>Why Lexora</a>
                        <a href="/#faq" onClick={closeMenu}>FAQ</a>

                        <Link to="/giveaway" className="btn-primary" onClick={closeMenu}>
                            Enter Giveaway
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
