import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import NeuralScene from '../ui/NeuralScene';

const roles = ["Data Scientist", "ML Engineer", "NLP Specialist", "Data Analyst", "AI Researcher"];

const stats = [
    { label: "Projects", value: "6+", icon: "inventory_2" },
    { label: "Accuracy", value: "92%", icon: "insights" },
    { label: "Tech Stack", value: "15+", icon: "layers" },
];

export default function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -80]);

    // Typewriter effect
    useEffect(() => {
        const target = roles[currentRole];
        const speed = isDeleting ? 40 : 85;

        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < target.length) {
                setDisplayText(target.substring(0, charIndex + 1));
                setCharIndex(c => c + 1);
            } else if (isDeleting && charIndex > 0) {
                setDisplayText(target.substring(0, charIndex - 1));
                setCharIndex(c => c - 1);
            } else if (!isDeleting && charIndex === target.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setCurrentRole(r => (r + 1) % roles.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentRole]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020510]">
            {/* 3D Neural Background */}
            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 1.5]}>
                    <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={60} />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} enableDamping />
                    <ambientLight intensity={0.3} />
                    <pointLight position={[10, 10, 10]} intensity={0.8} color="#00d4ff" />
                    <pointLight position={[-10, -10, -10]} intensity={0.4} color="#a855f7" />
                    <Suspense fallback={null}>
                        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                            <NeuralScene />
                        </Float>
                    </Suspense>
                </Canvas>
            </div>

            {/* Atmospheric layers */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.06)_0%,transparent_70%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020510] to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020510]/80 to-transparent" />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 z-[1] grid-overlay pointer-events-none opacity-40" />

            {/* Hero Content */}
            <motion.div
                style={{ opacity: heroOpacity, y: heroY }}
                className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-32 pb-16"
            >
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-3 mb-10"
                >
                    <div className="section-label">
                        <div className="status-dot scale-75"></div>
                        Available for Opportunities · New Delhi, India
                    </div>
                </motion.div>

                {/* Main headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <h1 className="font-headline font-black text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-tight text-on-surface mb-6">
                        <span className="block text-glow text-primary">RAJVEER</span>
                        <span className="block text-on-surface">SINGHAL</span>
                    </h1>
                </motion.div>

                {/* Typewriter role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-center gap-3 mb-10"
                >
                    <span className="font-mono text-on-surface-variant text-lg md:text-2xl">~/</span>
                    <div className="font-mono text-lg md:text-2xl text-primary font-medium min-w-[300px] text-left">
                        <span className="blink-cursor">{displayText}</span>
                    </div>
                </motion.div>

                {/* Summary */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light"
                >
                    Building <span className="text-primary font-medium">interpretable ML systems</span> and{' '}
                    <span className="text-secondary font-medium">scalable NLP pipelines</span> that transform
                    raw data into actionable intelligence.
                </motion.p>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex items-center justify-center gap-8 mb-12"
                >
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">{stat.icon}</span>
                            <span className="font-mono font-bold text-on-surface text-xl">{stat.value}</span>
                            <span className="text-on-surface-variant text-xs uppercase tracking-widest font-mono">{stat.label}</span>
                            {i < stats.length - 1 && <div className="ml-8 w-px h-6 bg-outline-variant/50"></div>}
                        </div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a href="#projects" className="btn-primary">
                        Explore Projects
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </a>
                    <a href="https://drive.google.com/uc?export=download&id=1R-nK3tm592MjmWVKb2edHgNuT_9o23da" target="_blank" rel="noopener noreferrer" className="btn-outline">
                        <span className="material-symbols-outlined text-base">description</span>
                        Download Resume
                    </a>
                </motion.div>

                {/* Floating tech tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="flex flex-wrap justify-center gap-2 mt-12 max-w-3xl mx-auto"
                >
                    {['Python', 'PyTorch', 'Scikit-learn', 'LangChain', 'SQL', 'Power BI', 'FastAPI', 'NLP'].map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                    ))}
                </motion.div>
            </motion.div>

        </section>
    );
}
