import { motion } from 'framer-motion';
import { useState } from 'react';

const steps = [
    { icon: 'download', label: '01', title: 'Ingest', desc: 'Collect and validate from APIs, databases, and raw files.', color: 'primary' },
    { icon: 'cleaning_services', label: '02', title: 'Wrangle', desc: 'Feature engineer, impute and normalize for model readiness.', color: 'secondary' },
    { icon: 'model_training', label: '03', title: 'Model', desc: 'Architecture selection, training, and hyperparameter tuning.', color: 'tertiary' },
    { icon: 'rocket_launch', label: '04', title: 'Deploy', desc: 'Model serving via API, monitoring, and continuous iteration.', color: 'primary' },
];

const dotMap = {
    primary: { icon: 'text-primary', border: 'border-primary/25', bg: 'bg-primary/8', glow: '#00d4ff' },
    secondary: { icon: 'text-secondary', border: 'border-secondary/25', bg: 'bg-secondary/8', glow: '#a855f7' },
    tertiary: { icon: 'text-tertiary', border: 'border-tertiary/25', bg: 'bg-tertiary/8', glow: '#10b981' },
};

export default function Methodology() {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="py-24 px-6 lg:px-16 relative bg-surface-container scroll-mt-24" id="methodology">
            {/* Flowing horizontal line bg */}
            <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="section-label mx-auto mb-6 w-fit">
                        <span className="material-symbols-outlined text-sm">route</span>
                        Analytical Pipeline
                    </div>
                    <h2 className="section-title">
                        System{' '}
                        <span className="gradient-text-cyan-green">Protocols</span>
                    </h2>
                </motion.div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Animated connector */}
                    <div className="absolute top-12 left-0 right-0 h-px hidden md:block overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
                        <motion.div
                            className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                            animate={{ x: ['-100%', '500%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                        />
                    </div>

                    {steps.map((step, i) => {
                        const d = dotMap[step.color];
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                className="flex flex-col items-center text-center relative"
                            >
                                {/* Icon container */}
                                <motion.div
                                    animate={{
                                        boxShadow: hovered === i
                                            ? `0 0 0 1px ${d.glow}40, 0 0 20px ${d.glow}25, 0 0 40px ${d.glow}10`
                                            : '0 0 0 1px transparent'
                                    }}
                                    className={`w-24 h-24 rounded-2xl ${d.bg} border ${d.border} flex flex-col items-center justify-center mb-6 relative transition-all duration-300`}
                                >
                                    <span className={`font-mono text-[9px] font-bold ${d.icon} mb-1 tracking-widest`}>{step.label}</span>
                                    <span className={`material-symbols-outlined text-3xl ${d.icon}`}>{step.icon}</span>
                                </motion.div>

                                <h3 className={`font-headline font-black text-xl mb-2 ${hovered === i ? d.icon : 'text-on-surface'} transition-colors`}>
                                    {step.title}
                                </h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed px-2">{step.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
