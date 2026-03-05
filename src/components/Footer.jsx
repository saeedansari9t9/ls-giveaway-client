import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-12 border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 pb-8 border-b border-white/10 mb-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <img src={logo} alt="Lexora Solution" className="h-[40px] w-auto mb-4" />
                        <p className="text-[#9ca3af] font-medium m-0">Practical builds, rapid delivery.</p>
                    </div>

                    <div className="flex gap-6 items-center">
                        <a href="#" className="text-[#9ca3af] hover:text-white transition-colors duration-300 font-medium">Privacy Policy</a>
                        <a href="#" className="text-[#9ca3af] hover:text-white transition-colors duration-300 font-medium">Terms & Conditions</a>
                    </div>
                </div>

                <div className="text-center text-[#9ca3af] text-sm font-medium">
                    &copy; {new Date().getFullYear()} Lexora Solution. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
