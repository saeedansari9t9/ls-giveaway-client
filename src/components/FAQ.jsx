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
        <section className="py-16 md:py-24 bg-[#fdfdfd]" id="faq">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-14 relative">
                    <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.2]">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-[60px] h-[4px] bg-accent mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300" key={index}>
                            <h4 className="text-[1.1rem] md:text-[1.25rem] font-semibold mb-2 text-[#1a1a1a]">{faq.q}</h4>
                            <p className="text-[#555555] mb-0 text-[0.95rem] md:text-[1rem] leading-[1.6]">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
