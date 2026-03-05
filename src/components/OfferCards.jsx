import React from 'react';

const OfferCards = () => {
    return (
        <section className="py-16 md:py-24 bg-white" id="offer">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-14 relative">
                    <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.2]">
                        What You Can Win
                    </h2>
                    <div className="w-[60px] h-[4px] bg-accent mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] border border-gray-100 border-t-4 border-t-accent hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
                        <h3 className="text-[1.5rem] font-semibold mb-6 text-[#1a1a1a]">Free Custom AI Chatbot</h3>
                        <ul className="pl-0 list-none mb-6">
                            <li className="flex items-start gap-3 mb-3 text-[#555555]">
                                <span className="text-accent font-bold">✓</span> Lead capture
                            </li>
                            <li className="flex items-start gap-3 mb-3 text-[#555555]">
                                <span className="text-accent font-bold">✓</span> FAQ automation
                            </li>
                            <li className="flex items-start gap-3 mb-3 text-[#555555]">
                                <span className="text-accent font-bold">✓</span> WhatsApp/Website embed ready (just copy text, no backend)
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] border border-gray-100 border-t-4 border-t-accent hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
                        <h3 className="text-[1.5rem] font-semibold mb-6 text-[#1a1a1a]">High-Converting Landing Page</h3>
                        <ul className="pl-0 list-none mb-6">
                            <li className="flex items-start gap-3 mb-3 text-[#555555]">
                                <span className="text-accent font-bold">✓</span> Mobile-first design
                            </li>
                            <li className="flex items-start gap-3 mb-3 text-[#555555]">
                                <span className="text-accent font-bold">✓</span> CTA-focused layout
                            </li>
                            <li className="flex items-start gap-3 mb-3 text-[#555555]">
                                <span className="text-accent font-bold">✓</span> Lead form included
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center mt-10 text-[0.95rem] text-[#555555] italic">1 Winner Selected Randomly • Delivered within 7 Days</p>
            </div>
        </section>
    );
};

export default OfferCards;
