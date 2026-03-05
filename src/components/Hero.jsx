import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section
            className="text-center pt-[11rem] pb-[6rem] text-white relative overflow-hidden"
            style={{ background: 'radial-gradient(circle at center, #2e2e2e 0%, #121212 100%)' }}
            id="hero"
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-center bg-cover opacity-15 z-0"></div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
                <h1 className="text-[2.25rem] md:text-[3rem] font-[800] leading-[1.2] mb-6 text-white">
                    Ramadan Digital Eidi for Businesses
                </h1>
                <p className="text-[1.25rem] mb-8 text-[#d1d5db]">
                    Win a FREE Custom AI Chatbot or a High-Converting Landing Page.
                </p>

                <div className="flex justify-center gap-8 my-8 flex-wrap">
                    <div className="flex items-center gap-2 font-medium text-[#f3f4f6]">
                        <span role="img" aria-label="check">✅</span> Built fast (7 days delivery for winner)
                    </div>
                    <div className="flex items-center gap-2 font-medium text-[#f3f4f6]">
                        <span role="img" aria-label="check">✅</span> Designed for real conversions
                    </div>
                    <div className="flex items-center gap-2 font-medium text-[#f3f4f6]">
                        <span role="img" aria-label="check">✅</span> Perfect for businesses upgrading digitally this Ramadan
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
                    <Link to="/giveaway" className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold uppercase text-[0.85rem] tracking-[0.5px] border-2 border-accent hover:bg-[#E07300] hover:border-[#E07300] hover:-translate-y-0.5 shadow-md transition-all duration-300">
                        Enter Giveaway
                    </Link>
                    <a href="#offer" className="bg-transparent text-white px-8 py-3.5 rounded-full font-semibold uppercase text-[0.85rem] tracking-[0.5px] border-2 border-white hover:bg-white hover:text-[#1a1a1a] hover:-translate-y-0.5 transition-all duration-300">
                        See What You Can Win
                    </a>
                </div>

                <div className="mt-6 inline-block bg-[#F88A16]/15 backdrop-blur-[5px] border border-[#F88A16]/30 px-5 py-2.5 rounded-full font-semibold text-accent">
                    Entries Close: March 18
                </div>

                <div className="mt-16 text-[0.9rem] text-[#9ca3af] font-medium">
                    Trusted by founders • Fast delivery • Practical builds
                </div>
            </div>
        </section>
    );
};

export default Hero;
