import React from 'react';

const HowItWorks = () => {
    return (
        <section className="section-padding bg-white" id="how-it-works">
            <div className="container">
                <h2 className="section-title">How It Works</h2>

                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Enter details</h3>
                        <p>Tell us your biggest digital bottleneck.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>Winner announced</h3>
                        <p>We'll randomly select and announce the winner on March 18.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Fast Delivery</h3>
                        <p>Your custom solution will be delivered within 7 days.</p>
                    </div>
                </div>

                <p className="small-note">Non-winners can still get a free quick audit call.</p>
            </div>
        </section>
    );
};

export default HowItWorks;
