import React from 'react';

const ValueAddBanner = () => {
    return (
        <section className="section-padding bg-section">
            <div className="container">
                <div className="value-add-banner">
                    <h3>Sign a new dev contract before Eid and get 3 months FREE maintenance & support.</h3>

                    <div className="value-add-grid">
                        <div className="value-add-col">
                            <h4>What's included:</h4>
                            <ul>
                                <li>Bug fixes</li>
                                <li>Minor UI updates</li>
                                <li>Performance monitoring</li>
                            </ul>
                        </div>
                        <div className="value-add-col">
                            <h4>What's not included:</h4>
                            <ul>
                                <li>New features/modules</li>
                                <li>Full redesigns</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <a href="#" className="btn-primary">Book a 15-min Call</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueAddBanner;
