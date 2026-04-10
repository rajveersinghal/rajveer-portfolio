import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import NeuralGlobe from '../ui/NeuralGlobe';

const traits = [
    { icon: 'psychology', title: 'ML Architecture', desc: 'Designing interpretable neural architectures for production-grade inference.' },
    { icon: 'translate', title: 'NLP Systems', desc: 'Transformer-based text pipelines using semantic embeddings and RAG.' },
    { icon: 'bar_chart', title: 'Data Analytics', desc: 'End-to-end EDA pipelines with statistical insight and visualization.' },
];

export default function About() {
    return (
        <section className="py-28 px-6 lg:px-16 relative bg-surface-container-low scroll-mt-24" id="about">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.04),transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    
                    {/* Left: Text content */}
                    <div className="flex-1 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <div className="section-label mb-6">
                                <span className="material-symbols-outlined text-sm">person</span>
                                System Profile
                            </div>
                            <h2 className="section-title mb-6">
                                Turning messy data into
                                <span className="gradient-text-cyan-purple block">clear decisions.</span>
                            </h2>
                            <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed font-light">
                                <p>
                                    I'm a <span className="text-on-surface font-semibold">Data Scientist</span> and{' '}
                                    <span className="text-on-surface font-semibold">MCA candidate at SRM University</span>,
                                    obsessed with building systems that make data useful — not just analyzed.
                                </p>
                                <p>
                                    My work spans supervised learning, transformer-based NLP, and automated analytics
                                    pipelines. I care deeply about{' '}
                                    <span className="text-primary font-medium">model interpretability</span>,
                                    {' '}<span className="text-secondary font-medium">deployment readiness</span>, and
                                    {' '}<span className="text-tertiary font-medium">measurable impact</span>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Metrics */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-3 gap-4 mb-10"
                        >
                            {[
                                { val: '6+', label: 'Projects', color: 'text-primary' },
                                { val: '92%', label: 'Best Accuracy', color: 'text-secondary' },
                                { val: '15+', label: 'Technologies', color: 'text-tertiary' },
                            ].map((m) => (
                                <div key={m.label} className="metric-card text-center">
                                    <div className={`font-headline font-black text-3xl ${m.color} mb-1`}>{m.val}</div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-on-surface-variant">{m.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Trait cards */}
                        <div className="space-y-3">
                            {traits.map((t, i) => (
                                <motion.div
                                    key={t.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.3 }}
                                    className="flex items-start gap-4 p-4 rounded-xl glass-panel group hover:border-primary/20 transition-all"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/12 transition-all">
                                        <span className="material-symbols-outlined text-primary text-lg">{t.icon}</span>
                                    </div>
                                    <div>
                                        <div className="font-headline font-bold text-on-surface text-sm mb-1">{t.title}</div>
                                        <div className="text-on-surface-variant text-xs leading-relaxed">{t.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: 3D Globe */}
                    <div className="flex-1 relative h-[560px] min-h-[400px] w-full lg:max-w-lg">
                        {/* Glow halo */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/6 rounded-full blur-3xl" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/6 rounded-full blur-2xl" />
                        </div>
                        
                        {/* Orbit ring decorations */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary/5 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-secondary/5 rounded-full animate-[spin_12s_linear_infinite_reverse]" />

                        <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
                            <ambientLight intensity={0.4} />
                            <pointLight position={[5, 5, 5]} intensity={1} color="#00d4ff" />
                            <pointLight position={[-5, -5, -5]} intensity={0.5} color="#a855f7" />
                            <NeuralGlobe />
                            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} enableDamping />
                        </Canvas>

                        {/* Floating labels around the globe */}
                        <div className="absolute top-8 right-8 z-10">
                            <div className="tag text-[10px] px-3 py-1.5">
                                <span className="material-symbols-outlined text-[12px] mr-1">model_training</span>
                                ML MODELS
                            </div>
                        </div>
                        <div className="absolute bottom-16 left-4 z-10">
                            <div className="tag tag-purple text-[10px] px-3 py-1.5">
                                <span className="material-symbols-outlined text-[12px] mr-1">translate</span>
                                NLP SYSTEMS
                            </div>
                        </div>
                        <div className="absolute bottom-8 right-12 z-10">
                            <div className="tag tag-green text-[10px] px-3 py-1.5">
                                <span className="material-symbols-outlined text-[12px] mr-1">analytics</span>
                                DATA ANALYTICS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
