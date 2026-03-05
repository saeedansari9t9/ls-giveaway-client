import React from 'react';
import Hero from '../components/Hero';
import OfferCards from '../components/OfferCards';
import ValueAddBanner from '../components/ValueAddBanner';
import HowItWorks from '../components/HowItWorks';
import WhyLexora from '../components/WhyLexora';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <main className="min-h-screen bg-white text-[#1e1e1e] font-sans">
            <Hero />
            <OfferCards />
            <ValueAddBanner />
            <HowItWorks />
            <WhyLexora />
            <FAQ />
        </main>
    );
};

export default Home;
