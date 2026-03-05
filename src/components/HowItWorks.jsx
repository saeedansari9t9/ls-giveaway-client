import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-16 md:py-24 bg-white" id="how-it-works">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-14 relative">
                    <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.2]">
                        How It Works
                    </h2>
                    <div className="w-[60px] h-[4px] bg-accent mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative pt-8">
                    {/* The horizontal/vertical line */}
                    <div className="absolute hidden md:block top-[87px] left-[50px] right-[50px] h-[2px] bg-accent z-0"></div>
                    <div className="absolute md:hidden top-[50px] left-[45px] bottom-[50px] w-[2px] bg-accent z-0"></div>

                    <div className="text-left md:text-center p-8 pl-[5rem] md:px-8 pt-8 md:pt-[3rem] ml-5 md:ml-0 mb-8 md:mb-0 bg-white rounded-xl shadow-sm border border-[#f0f0f0] relative z-10">
                        <div className="bg-accent text-white w-[70px] h-[70px] rounded-full flex items-center justify-center font-bold text-[1.75rem] absolute md:static left-[-30px] top-[1.5rem] md:-mt-[65px] md:mx-auto md:mb-6 border-[6px] border-white shadow-sm">1</div>
                        <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Enter details</h3>
                        <p className="text-[#555555] mb-0">Tell us your biggest digital bottleneck.</p>
                    </div>

                    <div className="text-left md:text-center p-8 pl-[5rem] md:px-8 pt-8 md:pt-[3rem] ml-5 md:ml-0 mb-8 md:mb-0 bg-white rounded-xl shadow-sm border border-[#f0f0f0] relative z-10">
                        <div className="bg-accent text-white w-[70px] h-[70px] rounded-full flex items-center justify-center font-bold text-[1.75rem] absolute md:static left-[-30px] top-[1.5rem] md:-mt-[65px] md:mx-auto md:mb-6 border-[6px] border-white shadow-sm">2</div>
                        <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Winner announced</h3>
                        <p className="text-[#555555] mb-0">We'll randomly select and announce the winner on March 18.</p>
                    </div>

                    <div className="text-left md:text-center p-8 pl-[5rem] md:px-8 pt-8 md:pt-[3rem] ml-5 md:ml-0 mb-8 md:mb-0 bg-white rounded-xl shadow-sm border border-[#f0f0f0] relative z-10">
                        <div className="bg-accent text-white w-[70px] h-[70px] rounded-full flex items-center justify-center font-bold text-[1.75rem] absolute md:static left-[-30px] top-[1.5rem] md:-mt-[65px] md:mx-auto md:mb-6 border-[6px] border-white shadow-sm">3</div>
                        <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Fast Delivery</h3>
                        <p className="text-[#555555] mb-0">Your custom solution will be delivered within 7 days.</p>
                    </div>
                </div>

                <p className="text-center mt-10 text-[0.95rem] text-[#555555] italic">Non-winners can still get a free quick audit call.</p>
            </div>
        </section>
    );
};

export default HowItWorks;
