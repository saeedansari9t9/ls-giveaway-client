import React from 'react';

const OfferCards = () => {
    return (
        <section className="section-padding bg-white" id="offer">
            <div className="container">
                <h2 className="section-title">What You Can Win</h2>

                <div className="cards-grid">
                    <div className="card">
                        <h3>Free Custom AI Chatbot</h3>
                        <ul>
                            <li>Lead capture</li>
                            <li>FAQ automation</li>
                            <li>WhatsApp/Website embed ready (just copy text, no backend)</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>High-Converting Landing Page</h3>
                        <ul>
                            <li>Mobile-first design</li>
                            <li>CTA-focused layout</li>
                            <li>Lead form included</li>
                        </ul>
                    </div>
                </div>

                <p className="small-note">1 Winner Selected Randomly • Delivered within 7 Days</p>
            </div>
        </section>
    );
};

export default OfferCards;
