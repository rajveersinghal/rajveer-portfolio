import { motion } from 'framer-motion';
import SectionParams from '../ui/SectionParams';

const steps = [
    {
        title: "Data Ingestion",
        desc: "Automated pipelines for diverse sources (SQL, APIs, Raw Files).",
        icon: "📥",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Wrangling & EDA",
        desc: "Feature engineering and statistical analysis for model readiness.",
        icon: "🧹",
        color: "from-cyan-500/20 to-teal-500/20"
    },
    {
        title: "Modeling & Optimization",
        desc: "Architecture design, training, and iterative hyperparameter tuning.",
        icon: "🧠",
        color: "from-teal-500/20 to-blue-600/20"
    },
    {
        title: "Deployment & Insight",
        desc: "Model serving via APIs and interactive communication of results.",
        icon: "🚀",
        color: "from-blue-600/20 to-accent/20"
    }
];

export default function Methodology() {
    return (
        <SectionParams id="methodology" className="bg-bg-dark relative">
            <div className="relative z-10 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Methodology</h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                    A rigorous approach to turning raw data into actionable intelligence.
                </p>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 15,
                                delay: idx * 0.1
                            }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${step.color} border border-white/5 flex items-center justify-center text-4xl mb-6 shadow-xl backdrop-blur-sm relative group`}
                            >
                                <div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/10 transition-colors" />
                                {step.icon}
                                {/* Step Number Badge */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-bg-dark text-sm font-bold flex items-center justify-center border-4 border-bg-dark">
                                    {idx + 1}
                                </div>
                            </motion.div>

                            <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {step.desc}
                            </p>

                            {/* Mobile Connector */}
                            {idx !== steps.length - 1 && (
                                <div className="md:hidden w-px h-12 bg-accent/20 my-4" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mt-20" />
        </SectionParams>
    );
}
