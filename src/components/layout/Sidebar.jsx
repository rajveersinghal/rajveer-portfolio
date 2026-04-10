import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
    { icon: 'home', label: 'Home', href: '#hero', section: 'hero' },
    { icon: 'person', label: 'About', href: '#about', section: 'about' },
    { icon: 'psychology', label: 'Skills', href: '#skills', section: 'skills' },
    { icon: 'inventory_2', label: 'Projects', href: '#projects', section: 'projects' },
    { icon: 'description', label: 'Experience', href: '#experience', section: 'experience' },
    { icon: 'route', label: 'Method', href: '#methodology', section: 'methodology' },
    { icon: 'mail', label: 'Contact', href: '#contact', section: 'contact' },
];

function MagneticIcon({ icon, label, href, isActive }) {
    const [showTooltip, setShowTooltip] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mx = useSpring(x, { stiffness: 200, damping: 18 });
    const my = useSpring(y, { stiffness: 200, damping: 18 });

    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.4);
        y.set((e.clientY - r.top - r.height / 2) * 0.4);
    };
    const onLeave = () => { x.set(0); y.set(0); setShowTooltip(false); };

    return (
        <motion.a
            href={href}
            style={{ x: mx, y: my }}
            onMouseMove={onMove}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={onLeave}
            className={`relative w-10 h-10 flex items-center justify-center rounded-xl transition-all group ${
                isActive
                    ? 'text-primary bg-primary/12 shadow-[0_0_12px_rgba(0,212,255,0.25)]'
                    : 'text-on-surface-variant hover:text-primary hover:bg-primary/8'
            }`}
        >
            {/* Active left indicator bar */}
            {isActive && (
                <motion.span
                    layoutId="sidebar-active-bar"
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-primary shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
            )}

            <span className={`material-symbols-outlined text-xl transition-all ${isActive ? 'text-glow' : ''}`}
                style={{ fontVariationSettings: isActive ? "'FILL' 1, 'wght' 400" : "'FILL' 0, 'wght' 300" }}
            >
                {icon}
            </span>

            {/* Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        key="tooltip"
                        initial={{ opacity: 0, x: -8, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -4, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-14 top-1/2 -translate-y-1/2 pointer-events-none z-50"
                    >
                        <div className="glass-panel-strong px-3 py-1.5 rounded-lg border border-primary/20 whitespace-nowrap">
                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">{label}</span>
                        </div>
                        {/* Arrow */}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-primary/20" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.a>
    );
}

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
            { rootMargin: '-30% 0px -60% 0px' }
        );
        ['hero', 'about', 'methodology', 'skills', 'projects', 'experience', 'contact'].forEach(id => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    return (
        <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="fixed left-0 top-[68px] bottom-0 w-16 bg-surface-container-lowest/80 backdrop-blur-2xl border-r border-outline-variant/15 z-40 hidden lg:flex flex-col items-center py-4 gap-0"
        >
            {/* Top section marker */}
            <div className="w-4 h-px bg-primary/20 mb-4" />

            <nav className="flex flex-col gap-2 flex-1 items-center">
                {navItems.map((item) => (
                    <MagneticIcon
                        key={item.label}
                        {...item}
                        isActive={activeSection === item.section}
                    />
                ))}
            </nav>

            {/* Vertical branding text */}
            <div
                className="mt-5 text-[8px] font-mono tracking-[0.4em] text-on-surface-variant/20 uppercase rotate-180"
                style={{ writingMode: 'vertical-rl' }}
            >
                RAJVEER·SYS·v1.0
            </div>
        </motion.aside>
    );
}
