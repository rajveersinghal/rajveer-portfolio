import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const positions = [
    { left: '10%', top: '20%' },
    { left: '80%', top: '15%' },
    { left: '25%', top: '75%' },
    { left: '70%', top: '80%' },
    { left: '50%', top: '40%' },
    { left: '15%', top: '50%' },
    { left: '85%', top: '60%' },
];

export default function Hero() {
    const containerRef = useRef(null);
    const [currentRole, setCurrentRole] = useState(0);
    const roles = ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "NLP Specialist"];

    // Mouse Tracking for Interactive Animation
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set((clientX / innerWidth - 0.5) * 40);
            mouseY.set((clientY / innerHeight - 0.5) * 40);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="h-screen flex items-center px-6 md:px-20 relative overflow-hidden snap-start"
        >
            {/* Advanced Reactive Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <motion.div
                    style={{ x: springX, y: springY }}
                    className="w-full h-full relative"
                >
                    {/* SVG Connections Layer */}
                    <svg className="absolute inset-0 w-full h-full">
                        {positions.map((pos, i) => (
                            positions.slice(i + 1, i + 3).map((target, j) => (
                                <motion.line
                                    key={`${i}-${j}`}
                                    x1={pos.left} y1={pos.top}
                                    x2={target.left} y2={target.top}
                                    className="stroke-accent/20"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, delay: i * 0.2 }}
                                />
                            ))
                        ))}
                    </svg>

                    {/* Nodes Layer */}
                    {positions.map((pos, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4 rounded-full bg-accent/30 border border-accent/50"
                            style={{
                                left: pos.left,
                                top: pos.top,
                                boxShadow: '0 0 15px var(--color-accent)'
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}

                    {/* Floating Data Particles */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={`p-${i}`}
                            className="absolute w-1 h-1 bg-accent rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.random() * 50 - 25, 0],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{
                                duration: 5 + Math.random() * 10,
                                repeat: Infinity,
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="max-w-4xl z-10"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                        Available for Opportunities
                    </span>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-text-secondary text-sm font-medium">New Delhi, India</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-black text-text-primary mb-6 leading-tight"
                >
                    Rajveer <span className="text-accent underline decoration-4 underline-offset-8">Singhal</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-12 md:h-16 flex items-center mb-8"
                >
                    <span className="text-2xl md:text-4xl text-text-secondary font-medium mr-4">I am a</span>
                    <div className="overflow-hidden">
                        <motion.span
                            key={currentRole}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="text-2xl md:text-4xl text-accent font-bold block"
                        >
                            {roles[currentRole]}
                        </motion.span>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
                >
                    Bridging the gap between raw data and actionable intelligence. I focus on building <span className="text-text-primary font-bold">interpretable ML systems</span> and <span className="text-text-primary font-bold">scalable NLP pipelines</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 15,
                        delay: 0.6
                    }}
                    className="flex flex-wrap gap-4"
                >
                    <a href="#projects" className="px-8 py-3 rounded-lg bg-accent text-bg-dark font-bold hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transform hover:-translate-y-1">
                        Explore My Work
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="px-8 py-3 rounded-lg border border-accent/30 text-accent font-bold hover:bg-accent/10 transition-all flex items-center gap-2"
                    >
                        📄 Download Resume
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
