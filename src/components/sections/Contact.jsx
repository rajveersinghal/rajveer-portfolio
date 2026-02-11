import { useState } from 'react';
import SectionParams from '../ui/SectionParams';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call - User can integrate Formspree by changing action
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <SectionParams id="contact" className="bg-bg-card/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">

                {/* Left: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">Let’s Connect</h2>
                    <p className="text-base md:text-lg text-accent font-medium mb-4 leading-tight">
                        Open to Data Science opportunities where analytical rigor and practical ML systems drive real impact.
                    </p>

                    <p className="text-text-secondary leading-relaxed mb-6 max-w-lg text-sm md:text-base">
                        I am currently seeking entry-level opportunities in Data Science and Analytics. If you’re working on a data-driven initiative or have an opportunity aligned with my skills, I would be glad to connect.
                    </p>

                    <div className="space-y-3 text-sm md:text-base">
                        <a href="mailto:singhalrajveer7@gmail.com" className="flex items-center space-x-3 text-text-primary hover:text-accent transition-colors group">
                            <span className="p-2 bg-white/5 rounded-full group-hover:bg-accent/10 transition-colors">📧</span>
                            <span>singhalrajveer7@gmail.com</span>
                        </a>
                        <div className="flex items-center space-x-3 text-text-secondary">
                            <span className="p-2 bg-white/5 rounded-full">📍</span>
                            <span>New Delhi, India</span>
                        </div>
                        <div className="flex items-center space-x-3 text-text-secondary">
                            <span className="p-2 bg-white/5 rounded-full">📞</span>
                            <span>+91 9523890859</span>
                        </div>
                        <div className="flex items-center space-x-6 pt-2 pl-2">
                            <a href="https://linkedin.com/in/rajveer-singhal" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">LinkedIn</a>
                            <a href="https://github.com/rajveersinghal" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors">GitHub</a>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Form - Compact */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-bg-dark border border-white/5 p-6 rounded-xl relative overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        {isSubmitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="h-[300px] flex flex-col items-center justify-center text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                                    className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-2xl text-accent mb-4"
                                >
                                    ✓
                                </motion.div>
                                <h3 className="text-xl font-bold text-text-primary mb-2">Message Sent Successfully!</h3>
                                <p className="text-sm text-text-secondary">Thank you for reaching out. I'll get back to you within 24–48 hours.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-6 px-4 py-2 border border-accent/20 text-accent hover:bg-accent/10 rounded text-xs uppercase tracking-widest font-bold transition-all"
                                >
                                    Send Another
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-text-secondary mb-1 uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-text-secondary mb-1 uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold text-text-secondary mb-1 uppercase tracking-wider">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                                        placeholder="What's on your mind?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-sm shadow-lg shadow-accent/20"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Analyzing...</span>
                                        </div>
                                    ) : (
                                        'Deploy Message'
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>
        </SectionParams>
    );
}
