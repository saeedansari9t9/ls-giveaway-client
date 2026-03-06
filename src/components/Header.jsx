import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-[15px] md:top-[20px] left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-[1000px] h-[60px] md:h-[70px] bg-[#121212] md:bg-[rgba(30,30,30,0.95)] backdrop-blur-[10px] z-[1000] rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] flex items-center transition-all duration-300">
            <div className="w-full flex justify-between items-center px-4 md:px-8 mx-auto">
                <div className="flex-shrink-0">
                    <Link to="/" onClick={closeMenu}>
                        <img src={logo} alt="Lexora Solution" className="h-[28px] md:h-[40px] w-auto block" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    <a href="/#" className="font-medium text-[#e5e7eb] text-[0.95rem] hover:text-accent transition-colors">Home</a>
                    <a href="/#offer" className="font-medium text-[#e5e7eb] text-[0.95rem] hover:text-accent transition-colors">Offer</a>
                    <a href="/#how-it-works" className="font-medium text-[#e5e7eb] text-[0.95rem] hover:text-accent transition-colors">How It Works</a>
                    <a href="/#why-lexora" className="font-medium text-[#e5e7eb] text-[0.95rem] hover:text-accent transition-colors">Why Lexora</a>
                    <a href="/#faq" className="font-medium text-[#e5e7eb] text-[0.95rem] hover:text-accent transition-colors">FAQ</a>
                    <Link to="/giveaway" className="bg-accent text-white px-4 py-2 rounded-full font-semibold uppercase text-[0.9rem] tracking-[0.5px] border-2 border-accent hover:bg-[#E07300] hover:border-[#E07300] hover:-translate-y-0.5 shadow-md transition-all duration-300">
                        Enter Giveaway
                    </Link>
                </nav>

                {/* Mobile Hamburger Icon */}
                <button className="md:hidden w-[26px] h-[20px] relative z-[1002] flex items-center justify-center p-0 outline-none" onClick={toggleMenu} aria-label="Toggle menu">
                    <div className="relative w-full h-full">
                        <span className={`absolute left-0 w-full h-[2px] bg-accent transition-all duration-300 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[2px]'}`}></span>
                        <span className={`absolute left-0 w-full h-[2px] bg-accent top-1/2 -translate-y-1/2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`absolute left-0 w-full h-[2px] bg-accent transition-all duration-300 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-[2px]'}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 z-[999] bg-black/55 backdrop-blur-[2px] transition-all duration-250 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={closeMenu}
            >
                <div
                    className={`fixed top-[92px] left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] bg-[#111111] rounded-[18px] border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.75)] overflow-hidden transition-transform duration-250 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-[6px]'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col gap-3 items-start p-[18px]">
                        <a href="/#" onClick={closeMenu} className="w-full text-[#e5e7eb] font-semibold text-[0.98rem] p-2 rounded-xl hover:text-accent hover:bg-white/5 transition-colors">Home</a>
                        <a href="/#offer" onClick={closeMenu} className="w-full text-[#e5e7eb] font-semibold text-[0.98rem] p-2 rounded-xl hover:text-accent hover:bg-white/5 transition-colors">Offer</a>
                        <a href="/#how-it-works" onClick={closeMenu} className="w-full text-[#e5e7eb] font-semibold text-[0.98rem] p-2 rounded-xl hover:text-accent hover:bg-white/5 transition-colors">How It Works</a>
                        <a href="/#why-lexora" onClick={closeMenu} className="w-full text-[#e5e7eb] font-semibold text-[0.98rem] p-2 rounded-xl hover:text-accent hover:bg-white/5 transition-colors">Why Lexora</a>
                        <a href="/#faq" onClick={closeMenu} className="w-full text-[#e5e7eb] font-semibold text-[0.98rem] p-2 rounded-xl hover:text-accent hover:bg-white/5 transition-colors">FAQ</a>

                        <Link to="/giveaway" onClick={closeMenu} className="mt-2.5 px-4 py-2.5 self-start text-[0.78rem] bg-accent text-white rounded-full font-semibold uppercase tracking-[0.5px] border-2 border-accent hover:bg-[#E07300] hover:border-[#E07300] shadow-md transition-all duration-300">
                            Enter Giveaway
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
