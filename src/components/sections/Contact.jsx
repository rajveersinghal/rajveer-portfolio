import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        await new Promise(r => setTimeout(r, 1500));
        setStatus('sent');
    };

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const links = [
        { icon: 'mail', label: 'Email', val: 'singhalrajveer7@gmail.com', href: 'mailto:singhalrajveer7@gmail.com', color: 'primary' },
        { icon: 'link', label: 'LinkedIn', val: '/in/rajveer-singhal', href: 'https://linkedin.com/in/rajveer-singhal', color: 'secondary' },
        { icon: 'code', label: 'GitHub', val: '@rajveersinghal', href: 'https://github.com/rajveersinghal', color: 'tertiary' },
        { icon: 'phone', label: 'Phone', val: '+91 9523890859', href: 'tel:+919523890859', color: 'primary' },
    ];

    const colorMap = {
        primary: { icon: 'text-primary', border: 'border-primary/15', hover: 'hover:border-primary/40', bg: 'bg-primary/5' },
        secondary: { icon: 'text-secondary', border: 'border-secondary/15', hover: 'hover:border-secondary/40', bg: 'bg-secondary/5' },
        tertiary: { icon: 'text-tertiary', border: 'border-tertiary/15', hover: 'hover:border-tertiary/40', bg: 'bg-tertiary/5' },
    };

    return (
        <section className="py-28 px-6 lg:px-16 relative bg-surface-container-low scroll-mt-24" id="contact">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,212,255,0.04),transparent_60%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="section-label mx-auto mb-6 w-fit">
                        <span className="material-symbols-outlined text-sm">mail</span>
                        Neural Handshake
                    </div>
                    <h2 className="section-title">
                        Let's Build{' '}
                        <span className="gradient-text-cyan-purple">Together</span>
                    </h2>
                    <p className="text-on-surface-variant mt-4 max-w-lg mx-auto text-base">
                        Open to full-time roles, internships, and collaborative data science projects. Reach out through any channel below.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: Contact cards + terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {/* Contact method grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {links.map((l) => {
                                const c = colorMap[l.color];
                                return (
                                    <a
                                        key={l.label}
                                        href={l.href}
                                        target={l.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className={`p-4 rounded-xl glass-panel border ${c.border} ${c.hover} transition-all group flex items-start gap-3`}
                                    >
                                        <div className={`w-8 h-8 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
                                            <span className={`material-symbols-outlined text-sm ${c.icon}`}>{l.icon}</span>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider mb-0.5">{l.label}</div>
                                            <div className={`text-xs font-mono font-medium ${c.icon} break-all`}>{l.val}</div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Terminal block */}
                        <div className="glass-panel-strong rounded-2xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-outline-variant/20 bg-surface-container-highest/50">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-error/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                                    <div className="w-3 h-3 rounded-full bg-tertiary/80"></div>
                                </div>
                                <span className="text-[10px] font-mono text-on-surface-variant/50 ml-2">bash — rajveer@neural.sys</span>
                            </div>
                            <div className="p-5 font-mono text-sm space-y-2">
                                <div className="flex gap-2 text-on-surface-variant/60">
                                    <span className="text-tertiary">$</span>
                                    <span>whoami</span>
                                </div>
                                <div className="text-on-surface pl-4">rajveer_singhal → MCA | Data Scientist</div>
                                <div className="flex gap-2 text-on-surface-variant/60 mt-2">
                                    <span className="text-tertiary">$</span>
                                    <span>cat status.json</span>
                                </div>
                                <div className="pl-4 space-y-1 text-[12px] leading-relaxed">
                                    <div><span className="text-on-surface-variant">{`{`}</span></div>
                                    <div className="pl-4"><span className="text-secondary">"availability"</span><span className="text-on-surface-variant">: </span><span className="text-tertiary">"Open to Opportunities"</span><span className="text-on-surface-variant">,</span></div>
                                    <div className="pl-4"><span className="text-secondary">"location"</span><span className="text-on-surface-variant">: </span><span className="text-tertiary">"New Delhi, India"</span><span className="text-on-surface-variant">,</span></div>
                                    <div className="pl-4"><span className="text-secondary">"response_time"</span><span className="text-on-surface-variant">: </span><span className="text-tertiary">"&lt; 24 hours"</span></div>
                                    <div><span className="text-on-surface-variant">{`}`}</span></div>
                                </div>
                                <div className="flex gap-2 text-on-surface-variant/60 mt-1">
                                    <span className="text-tertiary">$</span>
                                    <span className="blink-cursor"></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel-bright rounded-2xl p-8 border border-primary/8"
                    >
                        {status === 'sent' ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-16 h-16 rounded-full bg-tertiary/10 border border-tertiary/30 flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-tertiary text-3xl">check_circle</span>
                                </div>
                                <h3 className="font-headline font-black text-2xl text-on-surface mb-2">Message Transmitted</h3>
                                <p className="text-on-surface-variant text-sm">I'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="btn-outline mt-6 text-xs py-2 px-5"
                                >
                                    Send Another
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <h3 className="font-headline font-black text-xl text-on-surface mb-1">Send a Message</h3>
                                    <p className="text-on-surface-variant text-sm">Or connect via email, LinkedIn, or GitHub above.</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-mono uppercase tracking-wider text-on-surface-variant mb-1.5">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="w-full bg-surface border border-outline-variant/30 rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary/40 focus:bg-surface-container transition-all font-mono"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-mono uppercase tracking-wider text-on-surface-variant mb-1.5">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full bg-surface border border-outline-variant/30 rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary/40 focus:bg-surface-container transition-all font-mono"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono uppercase tracking-wider text-on-surface-variant mb-1.5">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about the opportunity or project..."
                                        className="w-full bg-surface border border-outline-variant/30 rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary/40 focus:bg-surface-container transition-all font-mono resize-none"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="btn-primary w-full justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                                            Transmitting...
                                        </>
                                    ) : (
                                        <>
                                            Transmit Message
                                            <span className="material-symbols-outlined text-base">send</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
