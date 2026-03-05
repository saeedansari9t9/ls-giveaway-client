import React from 'react';

const ValueAddBanner = () => {
    return (
        <section className="py-16 md:py-24 bg-[#fdfdfd]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="bg-[#1a1a1a] text-white rounded-2xl p-8 md:p-16 text-center relative overflow-hidden shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] block">
                    <div className="absolute top-0 left-0 w-full h-[6px] bg-accent"></div>
                    <h3 className="text-[1.5rem] md:text-[2rem] font-bold text-white max-w-[800px] mx-auto mb-4">
                        Sign a new dev contract before Eid and get 3 months FREE maintenance & support.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-left">
                        <div>
                            <h4 className="text-accent text-xl font-semibold mb-4">What's included:</h4>
                            <ul className="pl-0 list-none">
                                <li className="flex items-center gap-3 mb-3 text-[#e5e7eb]"><span className="text-accent font-bold">✓</span> Bug fixes</li>
                                <li className="flex items-center gap-3 mb-3 text-[#e5e7eb]"><span className="text-accent font-bold">✓</span> Minor UI updates</li>
                                <li className="flex items-center gap-3 mb-3 text-[#e5e7eb]"><span className="text-accent font-bold">✓</span> Performance monitoring</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-accent text-xl font-semibold mb-4">What's not included:</h4>
                            <ul className="pl-0 list-none">
                                <li className="flex items-center gap-3 mb-3 text-[#e5e7eb]"><span className="text-accent font-bold">✓</span> New features/modules</li>
                                <li className="flex items-center gap-3 mb-3 text-[#e5e7eb]"><span className="text-accent font-bold">✓</span> Full redesigns</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 inline-block">
                        <a href="#" className="bg-accent text-white px-8 py-3.5 rounded-full font-semibold uppercase text-[0.85rem] tracking-[0.5px] border-2 border-accent hover:bg-[#E07300] hover:border-[#E07300] shadow-md transition-all duration-300">
                            Book a 15-min Call
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueAddBanner;
