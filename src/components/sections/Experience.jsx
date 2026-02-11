import SectionParams from '../ui/SectionParams';
import { motion } from 'framer-motion';

const experienceData = [
    {
        type: 'work',
        role: 'Data Science Virtual Intern',
        organization: 'Infosys Springboard',
        date: '2024 – Present | Remote',
        description: 'Applied machine learning and NLP systems focused on hiring analytics.',
        details: [
            'Implemented TF-IDF vectorization and cosine similarity for resume–job matching',
            'Performed data preprocessing and exploratory data analysis (EDA)',
            'Built and evaluated ML models using Scikit-learn',
            'Automated repetitive analytical tasks to improve workflow efficiency',
            'Documented findings and generated structured analytical reports'
        ],
        focus: 'Focus Areas: NLP · Machine Learning · EDA · Model Evaluation'
    },
    {
        type: 'education',
        role: 'Master of Computer Applications (MCA)',
        organization: 'SRM University, Sonepat',
        date: '2024 – 2026',
        description: 'Developing strong foundations in data science architecture.',
        details: [
            'Machine Learning fundamentals & Applied statistics',
            'Data structures & computational logic',
            'NLP techniques & Text Analysis',
            'Model evaluation and explainability'
        ],
        focus: 'Projects: Skill Match, AnalytixAI, Predictive Regression, Recommendation Systems'
    }
];

export default function Experience() {
    return (
        <SectionParams id="experience" className="bg-bg-dark">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Experience & Academic Journey</h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                    Professional exposure and structured academic development in Data Science.
                </p>
            </div>

            <div className="max-w-4xl mx-auto relative space-y-16 space-y-reverse md:space-y-0">

                {/* Central Line (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                <div className="space-y-12">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                            className={`relative flex items-center justify-between ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                                }`}
                        >
                            {/* Content Side */}
                            <div className="w-full md:w-[45%]">
                                <div className="bg-bg-card border-l-4 border-accent/20 p-8 rounded-r-xl hover:border-accent transition-all duration-300 group shadow-xl">
                                    <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">{item.role}</h3>
                                        <span className="text-accent font-mono text-[10px] tracking-widest uppercase bg-accent/5 px-2 py-1 rounded border border-accent/10">
                                            {item.date}
                                        </span>
                                    </div>
                                    <p className="text-lg text-text-secondary font-medium mb-4">{item.organization}</p>

                                    <p className="text-sm text-text-secondary mb-4 leading-relaxed opacity-80">
                                        {item.description}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {item.details.map((detail, i) => (
                                            <li key={i} className="flex items-start text-text-secondary text-sm">
                                                <span className="text-accent mr-2 mt-1.5 text-[0.6rem]">●</span>
                                                <span className="opacity-90">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {item.focus && (
                                        <p className="text-[10px] text-accent/80 font-mono pt-4 border-t border-white/5 tracking-tight">
                                            {item.focus}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg-dark border-2 border-accent z-10 hidden md:flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            </div>

                            {/* Spacer for the other side on desktop */}
                            <div className="hidden md:block w-[45%]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionParams>
    );
}
