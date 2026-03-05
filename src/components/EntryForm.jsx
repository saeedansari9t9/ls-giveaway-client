import React, { useState } from 'react';
import { submitEntry } from '../services/entryService';

const EntryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        bottleneck: '',
        agree: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name || formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters.';
        }
        if (!formData.company) {
            newErrors.company = 'Company name is required.';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = 'Please provide a valid email address.';
        }
        if (!formData.bottleneck || formData.bottleneck.length < 10) {
            newErrors.bottleneck = 'Please describe your bottleneck (min 10 chars).';
        }
        if (!formData.agree) {
            newErrors.agree = 'You must agree to be contacted.';
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        try {
            await submitEntry(formData);
            setIsSuccess(true);
        } catch (err) {
            console.error(err);
            setErrors({ submit: err.message || 'Failed to submit entry. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-[#fdfdfd]" id="entry-form">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-14 relative">
                    <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-[#1a1a1a] leading-[1.2]">
                        Enter the Giveaway
                    </h2>
                    <div className="w-[60px] h-[4px] bg-accent mx-auto mt-4 rounded-full"></div>
                </div>

                <p className="text-center text-[0.95rem] text-[#555555] italic max-w-2xl mx-auto -mt-8 mb-8">
                    Tell us your biggest digital bottleneck — we’ll review every entry.
                </p>

                {isSuccess ? (
                    <div className="max-w-xl mx-auto w-full md:bg-white md:p-12 p-6 bg-transparent border-0 md:border md:border-gray-100 rounded-2xl md:shadow-lg text-center">
                        <svg className="w-[60px] h-[60px] mx-auto text-green-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1a1a1a]">Entry received! We’ll email you shortly.</h3>
                        <p className="text-[#555555] mb-6 text-sm md:text-base">Next steps:</p>
                        <div className="flex flex-col gap-4 justify-center">
                            <a href="https://www.instagram.com/lexorasolution" target="_blank" rel="noopener noreferrer" className="bg-transparent text-accent px-6 py-3 rounded-[4px] md:rounded-full font-semibold border-2 border-accent hover:bg-accent hover:text-white transition-all duration-300 text-sm md:text-base">Follow Lexora on Instagram</a>
                            <a href="#" className="bg-accent text-white px-6 py-3 rounded-[4px] md:rounded-full font-semibold border-2 border-accent hover:bg-[#E07300] hover:border-[#E07300] transition-all duration-300 text-sm md:text-base">Book a 15-min call (optional)</a>
                        </div>
                    </div>
                ) : (
                    <form className="max-w-xl mx-auto w-full md:bg-white md:p-10 md:rounded-2xl md:shadow-lg md:border md:border-gray-100 bg-transparent py-2 border-none shadow-none" onSubmit={handleSubmit}>
                        <div className="mb-[0.8rem] md:mb-5 w-full">
                            <label className="block text-[0.75rem] md:text-[0.95rem] font-semibold text-[#444] md:text-[#1a1a1a] mb-[0.2rem] md:mb-2" htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full h-[38px] md:h-12 px-[0.6rem] md:px-4 py-[0.4rem] md:py-3 bg-[#f1f2f4] md:bg-white text-[0.75rem] md:text-[1rem] border border-transparent md:border-gray-300 rounded-[4px] md:rounded-lg focus:outline-none focus:border-accent focus:bg-white transition-colors placeholder:text-[#888] placeholder:text-[0.75rem] md:placeholder:text-[0.95rem]"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="text-red-500 text-[0.75rem] md:text-sm mt-1 block">{errors.name}</span>}
                        </div>

                        <div className="mb-[0.8rem] md:mb-5 w-full">
                            <label className="block text-[0.75rem] md:text-[0.95rem] font-semibold text-[#444] md:text-[#1a1a1a] mb-[0.2rem] md:mb-2" htmlFor="company">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="w-full h-[38px] md:h-12 px-[0.6rem] md:px-4 py-[0.4rem] md:py-3 bg-[#f1f2f4] md:bg-white text-[0.75rem] md:text-[1rem] border border-transparent md:border-gray-300 rounded-[4px] md:rounded-lg focus:outline-none focus:border-accent focus:bg-white transition-colors placeholder:text-[#888] placeholder:text-[0.75rem] md:placeholder:text-[0.95rem]"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            {errors.company && <span className="text-red-500 text-[0.75rem] md:text-sm mt-1 block">{errors.company}</span>}
                        </div>

                        <div className="mb-[0.8rem] md:mb-5 w-full">
                            <label className="block text-[0.75rem] md:text-[0.95rem] font-semibold text-[#444] md:text-[#1a1a1a] mb-[0.2rem] md:mb-2" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full h-[38px] md:h-12 px-[0.6rem] md:px-4 py-[0.4rem] md:py-3 bg-[#f1f2f4] md:bg-white text-[0.75rem] md:text-[1rem] border border-transparent md:border-gray-300 rounded-[4px] md:rounded-lg focus:outline-none focus:border-accent focus:bg-white transition-colors placeholder:text-[#888] placeholder:text-[0.75rem] md:placeholder:text-[0.95rem]"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="text-red-500 text-[0.75rem] md:text-sm mt-1 block">{errors.email}</span>}
                        </div>

                        <div className="mb-[0.8rem] md:mb-5 w-full">
                            <label className="block text-[0.75rem] md:text-[0.95rem] font-semibold text-[#444] md:text-[#1a1a1a] mb-[0.2rem] md:mb-2" htmlFor="bottleneck">Biggest Digital Bottleneck</label>
                            <textarea
                                id="bottleneck"
                                name="bottleneck"
                                className="w-full min-h-[70px] md:min-h-[120px] px-[0.6rem] md:px-4 py-[0.4rem] md:py-3 bg-[#f1f2f4] md:bg-white text-[0.75rem] md:text-[1rem] border border-transparent md:border-gray-300 rounded-[4px] md:rounded-lg focus:outline-none focus:border-accent focus:bg-white transition-colors placeholder:text-[#888] placeholder:text-[0.75rem] md:placeholder:text-[0.95rem] resize-y"
                                placeholder="What digital challenge takes up most of your time?"
                                value={formData.bottleneck}
                                onChange={handleChange}
                            />
                            {errors.bottleneck && <span className="text-red-500 text-[0.75rem] md:text-sm mt-1 block">{errors.bottleneck}</span>}
                        </div>

                        <div className="flex items-start gap-1.5 md:gap-2 mb-4 md:mb-6">
                            <input
                                type="checkbox"
                                id="agree"
                                name="agree"
                                className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] mt-[0.15rem] md:mt-1 cursor-pointer accent-accent"
                                checked={formData.agree}
                                onChange={handleChange}
                            />
                            <label htmlFor="agree" className="text-[0.7rem] md:text-[0.9rem] text-[#555555] leading-[1.25] md:leading-normal cursor-pointer">I agree to be contacted by Lexora Solution about my entry.</label>
                        </div>
                        {errors.agree && <span className="text-red-500 text-[0.75rem] md:text-sm -mt-2 mb-4 block">{errors.agree}</span>}

                        <button
                            type="submit"
                            className="bg-accent text-white px-[2rem] md:px-8 py-[0.6rem] md:py-3.5 rounded-[4px] md:rounded-full font-semibold uppercase text-[0.75rem] md:text-[0.9rem] tracking-[0.5px] border-2 border-accent hover:bg-[#E07300] hover:border-[#E07300] transition-all duration-300 flex items-center justify-center disabled:opacity-70 md:w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Entry'}
                        </button>

                        {errors.submit && (
                            <div className="mt-4 p-3 bg-red-50 border border-red-500 rounded-lg text-red-700 text-center text-[0.75rem] md:text-sm w-full">
                                {errors.submit}
                            </div>
                        )}
                        <p className="text-center mt-6 text-[0.75rem] md:text-[0.85rem] text-[#888888] w-full">No spam. Just practical solutions.</p>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EntryForm;
