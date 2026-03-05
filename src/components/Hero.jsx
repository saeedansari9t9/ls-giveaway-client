import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero bg-section" id="hero">
            <div className="container">
                <h1>Ramadan Digital Eidi for Businesses</h1>
                <p className="hero-subhead">Win a FREE Custom AI Chatbot or a High-Converting Landing Page.</p>

                <div className="hero-highlights">
                    <div className="hero-highlight">
                        <span role="img" aria-label="check">✅</span> Built fast (7 days delivery for winner)
                    </div>
                    <div className="hero-highlight">
                        <span role="img" aria-label="check">✅</span> Designed for real conversions
                    </div>
                    <div className="hero-highlight">
                        <span role="img" aria-label="check">✅</span> Perfect for businesses upgrading digitally this Ramadan
                    </div>
                </div>

                <div className="hero-ctas">
                    <Link to="/giveaway" className="btn-primary">Enter Giveaway</Link>
                    <a href="#offer" className="btn-secondary" style={{ color: 'white' }}>See What You Can Win</a>
                </div>

                <div className="countdown">
                    Entries Close: March 18
                </div>

                <div className="hero-trust">
                    Trusted by founders • Fast delivery • Practical builds
                </div>
            </div>
        </section>
    );
};

export default Hero;
