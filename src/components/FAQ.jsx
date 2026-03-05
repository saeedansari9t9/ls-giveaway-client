import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            q: "Who can enter?",
            a: "Any founder, business owner, or startup looking to optimize their digital presence or automate processes."
        },
        {
            q: "When does it close?",
            a: "Entries close on March 18 at 11:59 PM. Don't miss out!"
        },
        {
            q: "How is winner selected?",
            a: "The winner is selected at random from all valid entries that meet the minimum criteria."
        },
        {
            q: "What do I need to provide if I win?",
            a: "Just your brand assets (logo, colors), existing copy if any, and access to any relevant accounts for setup."
        },
        {
            q: "What is “3 months free maintenance” exactly?",
            a: "This includes fixing any bugs that arise, making minor UI tweaks, and ensuring the product performs as intended post-launch."
        },
        {
            q: "Can I still work with Lexora if I don’t win?",
            a: "Absolutely! We offer quick audit calls to all participants to see how we can help your business grow."
        }
    ];

    return (
        <section className="section-padding bg-section" id="faq">
            <div className="container">
                <h2 className="section-title">Frequently Asked Questions</h2>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <h4>{faq.q}</h4>
                            <p>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
