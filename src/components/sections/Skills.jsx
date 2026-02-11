import { motion } from 'framer-motion';
import SectionParams from '../ui/SectionParams';

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["Python ", "SQL", "Java"],
        icon: "💻"
    },
    {
        title: "Data Analysis",
        skills: ["Pandas", "NumPy", "Exploratory Data Analysis (EDA)", "Statistical Analysis"],
        icon: "📊"
    },
    {
        title: "Machine Learning",
        skills: ["Scikit-Learn", "XGBoost", "Regression"],
        icon: "🤖"
    },
    {
        title: "Natural Language Processing",
        skills: ["NLTK", "TF-IDF", "Text Classification", "Sentiment Analysis"],
        icon: "📜"
    },
    {
        title: "Data Visualization",
        skills: ["Power BI", "Matplotlib", "Seaborn", "Streamlit"],
        icon: "📈"
    },
    {
        title: "Tools",
        skills: ["GitHub", "Git", "VS Code", "FastAPI"],
        icon: "🛠️"
    }
];

export default function Skills() {
    return (
        <SectionParams id="skills" className="bg-bg-dark">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">Technical Stack</h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                    A balanced mix of mathematical theory and engineering practice.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 15,
                            delay: idx * 0.1
                        }}
                        whileHover={{ y: -5, borderColor: 'var(--color-accent)' }}
                        className="bg-bg-card/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-2xl group-hover:bg-accent/20 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full bg-white/5 text-text-secondary text-xs border border-white/5 hover:border-accent/30 hover:text-accent transition-all"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

        </SectionParams>
    );
}
