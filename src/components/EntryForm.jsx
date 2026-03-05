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
        <section className="section-padding bg-section" id="entry-form">
            <div className="container">
                <h2 className="section-title">Enter the Giveaway</h2>
                <p className="small-note" style={{ marginTop: '-2rem', marginBottom: '2rem' }}>
                    Tell us your biggest digital bottleneck — we’ll review every entry.
                </p>

                {isSuccess ? (
                    <div className="form-container">
                        <div className="success-message">
                            <svg className="animated-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="animated-check-circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="animated-check-path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                            <h3>Entry received! We’ll email you shortly.</h3>
                            <p>Next steps:</p>
                            <div className="success-actions">
                                <a href="https://www.instagram.com/lexorasolution" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}>Follow Lexora on Instagram</a>
                                <a href="#" className="btn-primary">Book a 15-min call (optional)</a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="error-text">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="company">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="form-input"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            {errors.company && <span className="error-text">{errors.company}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="bottleneck">Biggest Digital Bottleneck</label>
                            <textarea
                                id="bottleneck"
                                name="bottleneck"
                                className="form-textarea"
                                placeholder="What digital challenge takes up most of your time?"
                                value={formData.bottleneck}
                                onChange={handleChange}
                            />
                            {errors.bottleneck && <span className="error-text">{errors.bottleneck}</span>}
                        </div>

                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="agree"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                            />
                            <label htmlFor="agree">I agree to be contacted by Lexora Solution about my entry.</label>
                        </div>
                        {errors.agree && <span className="error-text" style={{ marginBottom: "1rem" }}>{errors.agree}</span>}

                        <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit Entry'}
                        </button>
                        {errors.submit && (
                            <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#fef2f2', border: '1px solid #ef4444', borderRadius: '8px', color: '#b91c1c', textAlign: 'center', fontSize: '0.9rem' }}>
                                {errors.submit}
                            </div>
                        )}
                        <p className="spam-note">No spam. Just practical solutions.</p>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EntryForm;
