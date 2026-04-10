import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
    {
        id: 'skillmatch',
        title: 'Skill Match',
        subtitle: 'Intelligent Talent Mapping',
        category: 'NLP · Transformers',
        accent: 'primary',
        tags: ['TF-IDF', 'Cosine Similarity', 'FastAPI', 'Scikit-learn'],
        metric: { val: '92%', label: 'Match Accuracy' },
        desc: 'End-to-end NLP pipeline that maps candidate résumés to job descriptions using TF-IDF vectorization and cosine similarity. Achieved 92% match accuracy versus expert annotations.',
        link: 'https://github.com/rajveersinghal',
        year: '2024',
    },
    {
        id: 'analytixai',
        title: 'AnalytixAI',
        subtitle: 'Automated EDA Platform',
        category: 'EDA · Analytics',
        accent: 'secondary',
        tags: ['Pandas', 'Streamlit', 'Plotly', 'NumPy'],
        metric: { val: '70%', label: 'Time Saved' },
        desc: 'Full-stack automated EDA dashboard that detects outliers, identifies missing patterns, and generates correlation matrices in real-time — eliminating 70% of manual profiling time.',
        link: 'https://github.com/rajveersinghal',
        year: '2024',
    },
    {
        id: 'rag',
        title: 'RAG Summarizer',
        subtitle: 'YouTube Intelligence Engine',
        category: 'LLM · LangChain',
        accent: 'tertiary',
        tags: ['LangChain', 'OpenAI', 'ChromaDB', 'FAISS'],
        metric: { val: '30s', label: 'vs 1-hr Video' },
        desc: 'Retrieval-Augmented Generation pipeline that extracts, chunks, and semantically indexes YouTube transcripts for instant context-aware Q&A and summarization.',
        link: 'https://github.com/rajveersinghal',
        year: '2024',
    },
    {
        id: 'movies',
        title: 'Movie Recommender',
        subtitle: 'Content-Based Engine',
        category: 'RecSys · Similarity',
        accent: 'primary',
        tags: ['Scikit-learn', 'Pandas', 'NLTK', 'Cosine Sim'],
        metric: { val: '<100ms', label: 'Inference' },
        desc: 'Cold-start-resistant content-based recommendation engine over 50k+ titles using metadata vectors and cosine similarity with sub-100ms latency.',
        link: 'https://github.com/rajveersinghal',
        year: '2023',
    },
    {
        id: 'house',
        title: 'House Price Predictor',
        subtitle: 'XGBoost Regression Model',
        category: 'Regression · ML',
        accent: 'secondary',
        tags: ['XGBoost', 'Feature Eng.', 'NumPy', 'Seaborn'],
        metric: { val: '−15%', label: 'RMSE vs Baseline' },
        desc: 'Property valuation model with engineered features for seasonality and district economics. Reduced RMSE by 15% over baseline linear regression using XGBoost with grid-search tuning.',
        link: 'https://github.com/rajveersinghal',
        year: '2023',
    },
    {
        id: 'netflix',
        title: 'Netflix BI Dashboard',
        subtitle: 'Streaming Content Analytics',
        category: 'Analytics · Power BI',
        accent: 'tertiary',
        tags: ['Power BI', 'SQL', 'Data Cleaning', 'DAX'],
        metric: { val: '100%', label: 'Data Integrity' },
        desc: 'Executive BI dashboard revealing genre trends, release timing optimization, and APAC content growth patterns across 8,000+ Netflix titles.',
        link: 'https://github.com/rajveersinghal',
        year: '2023',
    },
];

const accentMap = {
    primary: {
        tag: 'tag',
        text: 'text-primary',
        bg: 'bg-primary/5',
        border: 'border-primary/15',
        topBar: 'from-primary/40 via-primary/20 to-transparent',
        metricColor: 'text-primary',
        glowShadow: '0 0 30px rgba(0,212,255,0.08)',
    },
    secondary: {
        tag: 'tag tag-purple',
        text: 'text-secondary',
        bg: 'bg-secondary/5',
        border: 'border-secondary/15',
        topBar: 'from-secondary/40 via-secondary/20 to-transparent',
        metricColor: 'text-secondary',
        glowShadow: '0 0 30px rgba(168,85,247,0.08)',
    },
    tertiary: {
        tag: 'tag tag-green',
        text: 'text-tertiary',
        bg: 'bg-tertiary/5',
        border: 'border-tertiary/15',
        topBar: 'from-tertiary/40 via-tertiary/20 to-transparent',
        metricColor: 'text-tertiary',
        glowShadow: '0 0 30px rgba(16,185,129,0.08)',
    },
};

function ProjectCard({ project, index }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 150, damping: 20 });
    const rotateX = useTransform(ySpring, [-0.5, 0.5], ['8deg', '-8deg']);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-8deg', '8deg']);

    const a = accentMap[project.accent];

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className={`glass-panel-bright rounded-2xl border ${a.border} overflow-hidden flex flex-col group transition-all duration-300`}
            whileHover={{ boxShadow: `${a.glowShadow}, 0 24px 48px rgba(0,0,0,0.4)` }}
        >
            {/* Top gradient bar */}
            <div className={`h-[2px] bg-gradient-to-r ${a.topBar}`} />

            <div className="p-6 flex flex-col flex-1" style={{ transform: 'translateZ(20px)' }}>
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className={`text-[9px] font-mono font-bold tracking-[0.3em] uppercase mb-1 ${a.text}`}>
                            {project.category}
                        </div>
                        <h3 className="font-headline font-black text-xl text-on-surface group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <div className="text-xs text-on-surface-variant font-light mt-0.5">
                            {project.subtitle}
                        </div>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                        <div className={`font-mono font-black text-2xl ${a.metricColor} text-glow`}>
                            {project.metric.val}
                        </div>
                        <div className="text-[9px] font-mono text-on-surface-variant uppercase tracking-wider">
                            {project.metric.label}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-on-surface-variant text-sm leading-relaxed mb-5 flex-1">
                    {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map(tag => (
                        <span key={tag} className={a.tag}>{tag}</span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                    <span className="text-[10px] font-mono text-on-surface-variant/40">{project.year}</span>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-[11px] font-mono font-bold ${a.text} uppercase tracking-wider hover:gap-3 transition-all`}
                    >
                        View Code
                        <span className="material-symbols-outlined text-base">arrow_outward</span>
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

export default function Projects() {
    return (
        <section className="py-28 px-6 lg:px-16 relative bg-surface-container-low scroll-mt-24" id="projects">
            <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <div className="section-label mb-6">
                            <span className="material-symbols-outlined text-sm">inventory_2</span>
                            Data Archive
                        </div>
                        <h2 className="section-title">
                            Applied{' '}
                            <span className="gradient-text-cyan-purple">Intelligence</span>
                        </h2>
                        <p className="text-on-surface-variant mt-3 max-w-lg text-base">
                            Six production-grade systems built with measurable outcomes and real data.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                            {['primary', 'secondary', 'tertiary'].map((c) => (
                                <div key={c} className={`w-3 h-3 rounded-full ${c === 'primary' ? 'bg-primary' : c === 'secondary' ? 'bg-secondary' : 'bg-tertiary'}`} style={{ boxShadow: `0 0 8px ${c === 'primary' ? '#00d4ff' : c === 'secondary' ? '#a855f7' : '#10b981'}` }} />
                            ))}
                        </div>
                        <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">6 Projects</span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1200px' }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
