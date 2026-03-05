import React from 'react';

const WhyLexora = () => {
    return (
        <section className="py-16 md:py-24 bg-white" id="why-lexora">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-14 relative">
                    <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.2]">
                        Why Lexora?
                    </h2>
                    <div className="w-[60px] h-[4px] bg-accent mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] border border-gray-100 border-t-4 border-t-accent hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
                        <h4 className="text-[1.25rem] font-semibold mb-3 text-[#1a1a1a] leading-[1.2]">Speed-first delivery</h4>
                        <p className="text-[#555555] mb-0">Get your solutions built and deployed rapidly.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] border border-gray-100 border-t-4 border-t-accent hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
                        <h4 className="text-[1.25rem] font-semibold mb-3 text-[#1a1a1a] leading-[1.2]">Flexible tech stack</h4>
                        <p className="text-[#555555] mb-0">We use the best modern tools tailored for your core needs.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] border border-gray-100 border-t-4 border-t-accent hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
                        <h4 className="text-[1.25rem] font-semibold mb-3 text-[#1a1a1a] leading-[1.2]">Conversion-focused</h4>
                        <p className="text-[#555555] mb-0">Our builds aren't just pretty, they turn visitors into leads.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] border border-gray-100 border-t-4 border-t-accent hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 relative">
                        <h4 className="text-[1.25rem] font-semibold mb-3 text-[#1a1a1a] leading-[1.2]">Clear scope & pricing</h4>
                        <p className="text-[#555555] mb-0">No hidden fees, no scope creep. Transparent expectations.</p>
                    </div>
                </div>

                <p className="text-center mt-12 text-[1rem] md:text-[1.1rem] text-[#555555] max-w-3xl mx-auto font-medium">
                    We pride ourselves on being practical and quick without sacrificing quality. We are built specifically for startups and SMEs looking for reliable, scalable digital solutions.
                </p>
            </div>
        </section>
    );
};

export default WhyLexora;
