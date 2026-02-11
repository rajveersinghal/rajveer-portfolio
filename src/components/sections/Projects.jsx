import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionParams from '../ui/SectionParams';

const projects = [
    {
        title: "Skill Match",
        category: "NLP · Machine Learning",
        desc: "Automated recruitment system matching resumes to job descriptions with high precision.",
        explanation: "Built a custom text-processing pipeline using NLTK and TF-IDF to convert unstructured text into mathematical vectors.",
        impact: "Achieved ~92% accuracy in score-based matching compared to expert human manual tagging.",
        tech: ["Python", "NLTK", "Scikit-Learn", "FastAPI"],
        metrics: [
            { label: "Accuracy", value: 92 },
            { label: "Precision", value: 89 },
            { label: "Recall", value: 87 }
        ],
        hasDemo: true,
        demoType: "NLP Similarity Engine",
        demoLines: [
            { text: "# Loading TF-IDF Vectorizer...", color: "text-blue-400" },
            { text: "Reading input: 'Senior Data Scientist Resume.pdf'", color: "text-text-secondary" },
            { text: "Applying Cosine Similarity against JD pool...", color: "text-text-secondary" },
            { text: "MATCH FOUND: 94.2% FIT", color: "text-accent", bold: true },
            { text: "Keywords: Python, SQL, NLP, AWS, PyTorch", color: "text-text-secondary text-xs" }
        ],
        link: "https://github.com/rajveersinghal/SkillMatch"
    },
    {
        title: "AnalytixAI",
        category: "EDA · Automation",
        desc: "End-to-end automated platform for exploratory data analysis and data cleaning.",
        explanation: "Developed a Streamlit dashboard that automatically identifies outliers, missing values, and calculates statistical correlations.",
        impact: "Reduced manual data profiling time by 70% for standard tabular datasets.",
        tech: ["Python", "Pandas", "Streamlit", "Matplotlib"],
        metrics: [
            { label: "Efficiency", value: 70 },
            { label: "Coverage", value: 100 },
            { label: "Accuracy", value: 99 }
        ],
        hasDemo: true,
        demoType: "Automated EDA Pipeline",
        demoLines: [
            { text: "# Ingesting raw_data.csv...", color: "text-blue-400" },
            { text: "Scanning 1.2M rows for anomalies...", color: "text-text-secondary" },
            { text: "Found 12% Missing Values in 'Age' column. Applying Median Imputation.", color: "text-yellow-500/80" },
            { text: "Normalization Complete (z-score)", color: "text-text-secondary" },
            { text: "EDA READY: 8 Columns Processed", color: "text-accent", bold: true }
        ],
        link: "https://github.com/rajveersinghal/AnalytixAI"
    },
    {
        title: "House Price Predictor",
        category: "Regression · XGBoost",
        desc: "ML model predicting real estate prices based on nuanced environmental factors.",
        explanation: "Implemented an XGBoost Regressor with heavy feature engineering for seasonality and district-level economic shifts.",
        impact: "Reduced prediction error (RMSE) by 15% compared to the baseline linear model.",
        tech: ["XGBoost", "NumPy", "Scikit-Learn", "Seaborn"],
        metrics: [
            { label: "RMSE Down", value: 15 },
            { label: "R² Score", value: 88 },
            { label: "Features", value: 25 }
        ],
        hasDemo: true,
        demoType: "Regression Prediction",
        demoLines: [
            { text: "# Fetching Regional Real Estate Data...", color: "text-blue-400" },
            { text: "Inputs: 2400 sqft, 3 BHK, Sonepat District", color: "text-text-secondary" },
            { text: "Applying XGBoost Regressor (Weight: Economic Index)", color: "text-text-secondary" },
            { text: "ESTIMATED VALUE: ₹1.42 Cr", color: "text-accent", bold: true },
            { text: "Confidence Interval: +/- ₹4.5L", color: "text-text-secondary text-xs" }
        ],
        link: "https://github.com/rajveersinghal/HousePricePrediction"
    }
];

export default function Projects() {
    const [selectedDemo, setSelectedDemo] = useState(null);

    return (
        <SectionParams id="projects" className="bg-bg-dark">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4 tracking-tight">Applied Intelligence</h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                    Evidence-based results delivered through rigorous data modeling.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="group flex flex-col bg-bg-card/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Status/Category */}
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80 bg-accent/5 px-2 py-1 rounded">
                                {project.category}
                            </span>
                        </div>

                        <h3 className="text-2xl font-black text-text-primary mb-3 group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-2">
                            {project.desc}
                        </p>

                        <div className="mb-6">
                            <h4 className="text-[11px] font-bold uppercase text-text-primary/60 mb-2">Impact</h4>
                            <p className="text-sm text-text-primary font-medium italic">
                                "{project.impact}"
                            </p>
                        </div>

                        {/* Visual Metrics Insight */}
                        <div className="mt-auto pt-6 border-t border-white/5">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-4">Model Insights</h4>
                            <div className="grid grid-cols-3 gap-3">
                                {project.metrics.map(metric => (
                                    <div key={metric.label}>
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="text-[9px] text-text-secondary">{metric.label}</span>
                                            <span className="text-[10px] font-bold text-accent">{metric.value}%</span>
                                        </div>
                                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${metric.value}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-accent"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            {project.hasDemo && (
                                <button
                                    onClick={() => setSelectedDemo(project)}
                                    className="flex-1 py-2 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-bold hover:bg-accent hover:text-bg-dark transition-all"
                                >
                                    Interactive Demo
                                </button>
                            )}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`py-2 rounded-lg border border-white/10 text-text-secondary text-xs font-bold hover:bg-white/5 transition-all text-center ${project.hasDemo ? 'flex-1' : 'w-full'}`}
                            >
                                Source Code
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Demo Modal */}
            <AnimatePresence>
                {selectedDemo && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedDemo(null)}
                            className="absolute inset-0 bg-bg-dark/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-bg-card border border-white/10 p-8 rounded-2xl max-w-lg w-full relative z-10"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-text-primary">{selectedDemo.title}</h3>
                                    <p className="text-sm text-text-secondary uppercase tracking-widest text-[10px] font-bold">{selectedDemo.demoType}</p>
                                </div>
                                <button onClick={() => setSelectedDemo(null)} className="text-text-secondary hover:text-white-600 transition-colors p-2">✕</button>
                            </div>

                            <div className="bg-bg-dark/50 rounded-lg p-6 font-mono text-sm mb-6 border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-2 opacity-20 text-[10px] uppercase font-bold">Simulation v1.0</div>
                                {selectedDemo.demoLines.map((line, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.15 }}
                                        className={`${line.color} ${line.bold ? 'font-bold' : ''} ${i === selectedDemo.demoLines.length - 1 ? '' : 'mb-2'}`}
                                    >
                                        {line.text}
                                    </motion.p>
                                ))}
                            </div>

                            <button
                                onClick={() => setSelectedDemo(null)}
                                className="w-full py-4 bg-accent text-bg-dark font-black uppercase text-xs tracking-widest rounded-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/10 active:scale-[0.98]"
                            >
                                Close Simulation
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </SectionParams>
    );
}
