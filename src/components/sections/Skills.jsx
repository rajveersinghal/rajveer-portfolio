import { motion } from 'framer-motion';

const skillGroups = [
    {
        label: 'Languages & Core',
        color: 'primary',
        skills: [
            { name: 'Python', level: 95 },
            { name: 'SQL', level: 90 },
            { name: 'Java', level: 72 },
        ]
    },
    {
        label: 'ML / Deep Learning',
        color: 'secondary',
        skills: [
            { name: 'Scikit-learn', level: 90 },
            { name: 'PyTorch', level: 85 },
            { name: 'XGBoost', level: 82 },
        ]
    },
    {
        label: 'NLP & LLMs',
        color: 'tertiary',
        skills: [
            { name: 'Transformers', level: 88 },
            { name: 'LangChain', level: 82 },
            { name: 'NLTK / spaCy', level: 86 },
        ]
    },
    {
        label: 'Data & Visualization',
        color: 'primary',
        skills: [
            { name: 'Pandas / NumPy', level: 94 },
            { name: 'Power BI', level: 80 },
            { name: 'Plotly / Seaborn', level: 85 },
        ]
    },
    {
        label: 'MLOps & Infra',
        color: 'secondary',
        skills: [
            { name: 'FastAPI', level: 78 },
            { name: 'Streamlit', level: 88 },
            { name: 'Git / GitHub', level: 90 },
        ]
    },
    {
        label: 'Vector DBs & RAG',
        color: 'tertiary',
        skills: [
            { name: 'ChromaDB', level: 80 },
            { name: 'FAISS', level: 76 },
            { name: 'OpenAI API', level: 84 },
        ]
    },
];

const colorMap = {
    primary: {
        bar: 'bg-primary shadow-[0_0_8px_rgba(0,212,255,0.6)]',
        text: 'text-primary',
        border: 'border-primary/20',
        bg: 'bg-primary/5',
        glow: 'rgba(0,212,255,0.08)',
        label: 'text-primary/70 bg-primary/5 border-primary/10',
    },
    secondary: {
        bar: 'bg-secondary shadow-[0_0_8px_rgba(168,85,247,0.6)]',
        text: 'text-secondary',
        border: 'border-secondary/20',
        bg: 'bg-secondary/5',
        glow: 'rgba(168,85,247,0.08)',
        label: 'text-secondary/70 bg-secondary/5 border-secondary/10',
    },
    tertiary: {
        bar: 'bg-tertiary shadow-[0_0_8px_rgba(16,185,129,0.6)]',
        text: 'text-tertiary',
        border: 'border-tertiary/20',
        bg: 'bg-tertiary/5',
        glow: 'rgba(16,185,129,0.08)',
        label: 'text-tertiary/70 bg-tertiary/5 border-tertiary/10',
    },
};

function SkillBar({ name, level, color, delay }) {
    const c = colorMap[color];
    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] font-mono text-on-surface-variant font-medium uppercase tracking-wider">{name}</span>
                <span className={`text-[11px] font-mono font-bold ${c.text}`}>{level}%</span>
            </div>
            <div className="h-[3px] bg-surface-variant rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay, ease: 'easeOut' }}
                    className={`h-full rounded-full ${c.bar}`}
                />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="py-28 px-6 lg:px-16 relative bg-surface scroll-mt-24" id="skills">
            <div className="absolute inset-0 grid-overlay-fine opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="section-label mx-auto mb-6 w-fit">
                        <span className="material-symbols-outlined text-sm">psychology</span>
                        Technical Arsenal
                    </div>
                    <h2 className="section-title">
                        Neural Skill{' '}
                        <span className="gradient-text-cyan-purple">Architecture</span>
                    </h2>
                    <p className="text-on-surface-variant mt-4 max-w-xl mx-auto text-base">
                        Proficiency vectors across six core data science domains, calibrated from real project outcomes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, gi) => {
                        const c = colorMap[group.color];
                        return (
                            <motion.div
                                key={group.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: gi * 0.1, duration: 0.5 }}
                                className={`glass-panel-bright p-6 rounded-2xl border ${c.border} relative overflow-hidden group hover:border-opacity-40 transition-all duration-300`}
                                style={{ boxShadow: `0 0 0 0 ${c.glow}` }}
                                whileHover={{ boxShadow: `0 0 30px ${c.glow}, 0 20px 40px rgba(0,0,0,0.3)` }}
                            >
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-0 right-0 h-[1px] ${c.bar.split(' ')[0]}`} />

                                {/* Group header */}
                                <div className="flex items-center justify-between mb-5">
                                    <span className={`text-[9px] font-mono font-bold tracking-[0.25em] uppercase px-2 py-1 rounded border ${c.label}`}>
                                        {group.label}
                                    </span>
                                    <span className={`font-mono text-xs font-bold ${c.text}`}>
                                        {Math.round(group.skills.reduce((a, s) => a + s.level, 0) / group.skills.length)}% avg
                                    </span>
                                </div>

                                {/* Skill bars */}
                                <div>
                                    {group.skills.map((skill, si) => (
                                        <SkillBar
                                            key={skill.name}
                                            {...skill}
                                            color={group.color}
                                            delay={gi * 0.1 + si * 0.1}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
