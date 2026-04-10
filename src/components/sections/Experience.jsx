import { motion } from 'framer-motion';
import { useState } from 'react';

const timeline = [
    {
        type: 'work',
        title: 'Data Science Virtual Intern',
        org: 'Infosys Springboard',
        period: '2024 — Present',
        location: 'Remote',
        accent: 'primary',
        status: 'ACTIVE',
        achievements: [
            'Built TF-IDF + cosine similarity pipeline for résumé-to-JD matching with 92% accuracy',
            'Automated EDA workflows reducing manual data profiling time by 70%',
            'Developed and evaluated classification models using Scikit-learn',
            'Documented model performance and generated structured analytical reports',
        ],
        focus: ['NLP', 'Machine Learning', 'EDA', 'Model Evaluation'],
    },
    {
        type: 'edu',
        title: 'Master of Computer Applications (MCA)',
        org: 'SRM University',
        period: '2024 — 2026',
        location: 'Sonepat, India',
        accent: 'secondary',
        status: 'ENROLLED',
        achievements: [
            'Applied ML fundamentals and statistical learning theory',
            'Specialized coursework in NLP, text classification, and sequence modeling',
            'Built 6+ applied projects spanning regression, recommendation, and LLM systems',
            'Academic focus on model interpretability and deployment engineering',
        ],
        focus: ['Machine Learning', 'NLP', 'Statistics', 'Data Engineering'],
    },
    {
        type: 'edu',
        title: 'Bachelor of Computer Applications (BCA)',
        org: 'MDU University',
        period: '2021 — 2024',
        location: 'Haryana, India',
        accent: 'tertiary',
        status: 'COMPLETED',
        achievements: [
            'Studied data structures, algorithms, and computational logic',
            'Built first ML and data analysis projects using Python and Pandas',
            'Developed foundational skills in SQL and database management',
        ],
        focus: ['Python', 'SQL', 'Algorithms', 'Databases'],
    },
];

const accentColors = {
    primary: {
        dot: 'bg-primary shadow-[0_0_12px_rgba(0,212,255,0.6)]',
        line: 'border-primary/30',
        badge: 'text-primary bg-primary/8 border-primary/15',
        tag: 'text-primary/70 border-primary/15 bg-primary/4',
        text: 'text-primary',
    },
    secondary: {
        dot: 'bg-secondary shadow-[0_0_12px_rgba(168,85,247,0.6)]',
        line: 'border-secondary/30',
        badge: 'text-secondary bg-secondary/8 border-secondary/15',
        tag: 'text-secondary/70 border-secondary/15 bg-secondary/4',
        text: 'text-secondary',
    },
    tertiary: {
        dot: 'bg-tertiary shadow-[0_0_12px_rgba(16,185,129,0.6)]',
        line: 'border-tertiary/30',
        badge: 'text-tertiary bg-tertiary/8 border-tertiary/15',
        tag: 'text-tertiary/70 border-tertiary/15 bg-tertiary/4',
        text: 'text-tertiary',
    },
};

export default function Experience() {
    const [expanded, setExpanded] = useState(null);

    return (
        <section className="py-28 px-6 lg:px-16 relative bg-surface scroll-mt-24" id="experience">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="section-label mx-auto mb-6 w-fit">
                        <span className="material-symbols-outlined text-sm">description</span>
                        System Logs
                    </div>
                    <h2 className="section-title">
                        Experience &{' '}
                        <span className="gradient-text-cyan-purple">Education</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent hidden md:block" />

                    <div className="space-y-6">
                        {timeline.map((item, i) => {
                            const a = accentColors[item.accent];
                            const isOpen = expanded === i;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="md:pl-16 relative"
                                >
                                    {/* Timeline dot */}
                                    <div className={`absolute left-3.5 top-6 -translate-x-1/2 w-3 h-3 rounded-full ${a.dot} hidden md:block`} />

                                    {/* Card */}
                                    <div
                                        className="glass-panel-bright rounded-2xl border border-outline-variant/20 overflow-hidden cursor-pointer"
                                        onClick={() => setExpanded(isOpen ? null : i)}
                                    >
                                        {/* Card header */}
                                        <div className="p-6">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                                                        <span className={`text-[9px] font-mono font-bold tracking-[0.3em] uppercase px-2 py-1 rounded border ${a.badge}`}>
                                                            {item.status}
                                                        </span>
                                                        <span className="text-[10px] font-mono text-on-surface-variant">{item.type === 'work' ? '⚡ Work' : '🎓 Education'}</span>
                                                    </div>
                                                    <h3 className={`font-headline font-black text-xl text-on-surface mb-1`}>
                                                        {item.title}
                                                    </h3>
                                                    <div className="text-on-surface-variant text-sm">{item.org} · {item.location}</div>
                                                </div>
                                                <div className="text-right shrink-0">
                                                    <div className={`font-mono text-xs font-bold ${a.text} mb-1`}>{item.period}</div>
                                                    <motion.span
                                                        className={`material-symbols-outlined text-on-surface-variant text-lg block transition-transform`}
                                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                                    >
                                                        expand_more
                                                    </motion.span>
                                                </div>
                                            </div>

                                            {/* Focus tags */}
                                            <div className="flex flex-wrap gap-1.5 mt-3">
                                                {item.focus.map(f => (
                                                    <span key={f} className={`text-[9px] font-mono px-2 py-0.5 rounded border ${a.tag}`}>{f}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Expandable achievements */}
                                        <motion.div
                                            initial={false}
                                            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 border-t border-outline-variant/15 pt-4">
                                                <ul className="space-y-2.5">
                                                    {item.achievements.map((ach, ai) => (
                                                        <li key={ai} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed">
                                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${a.dot} flex-shrink-0`} />
                                                            {ach}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
