import React from 'react';

const WhyLexora = () => {
    return (
        <section className="section-padding bg-white" id="why-lexora">
            <div className="container">
                <h2 className="section-title">Why Lexora?</h2>

                <div className="why-grid">
                    <div className="why-tile">
                        <h4>Speed-first delivery</h4>
                        <p>Get your solutions built and deployed rapidly.</p>
                    </div>
                    <div className="why-tile">
                        <h4>Flexible tech stack</h4>
                        <p>We use the best modern tools tailored for your core needs.</p>
                    </div>
                    <div className="why-tile">
                        <h4>Conversion-focused</h4>
                        <p>Our builds aren't just pretty, they turn visitors into leads.</p>
                    </div>
                    <div className="why-tile">
                        <h4>Clear scope & pricing</h4>
                        <p>No hidden fees, no scope creep. Transparent expectations.</p>
                    </div>
                </div>

                <p className="why-paragraph">
                    We pride ourselves on being practical and quick without sacrificing quality. We are built specifically for startups and SMEs looking for reliable, scalable digital solutions.
                </p>
            </div>
        </section>
    );
};

export default WhyLexora;
