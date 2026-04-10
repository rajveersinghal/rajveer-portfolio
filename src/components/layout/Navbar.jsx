import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const navLinks = [
    { name: 'ABOUT', href: '#about', icon: 'person' },
    { name: 'SKILLS', href: '#skills', icon: 'psychology' },
    { name: 'PROJECTS', href: '#projects', icon: 'inventory_2' },
    { name: 'EXPERIENCE', href: '#experience', icon: 'description' },
    { name: 'CONTACT', href: '#contact', icon: 'mail' },
];

function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            id="scroll-progress"
            style={{ scaleX: scrollYProgress }}
        />
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
            { rootMargin: '-30% 0px -60% 0px' }
        );
        ['hero', 'about', 'methodology', 'skills', 'projects', 'experience', 'contact'].forEach(id => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => { window.removeEventListener('scroll', handleScroll); obs.disconnect(); };
    }, []);

    return (
        <>
            <ScrollProgress />
            <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-surface-container-lowest/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : ''}`}>
                <nav className="flex justify-between items-center w-full px-6 py-3 lg:px-8 lg:pl-24">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-primary/30 bg-primary/5 group-hover:bg-primary/10 transition-all">
                            <span className="material-symbols-outlined text-primary text-base">bolt</span>
                        </div>
                        <div>
                            <div className="text-xs font-mono font-bold tracking-[0.3em] text-primary text-glow uppercase">
                                RAJVEER.SYS
                            </div>
                            <div className="text-[9px] font-mono text-on-surface-variant/50 tracking-widest uppercase">
                                DATA SCIENTIST
                            </div>
                        </div>
                    </motion.a>

                    {/* Right: live time + status + CTA */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="#contact"
                            className="btn-primary text-[10px] py-2 px-5 hidden md:flex"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            HIRE ME
                        </motion.a>

                        {/* Mobile menu toggle — only shows on small screens where sidebar is hidden */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                            className="lg:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </nav>

                {/* Mobile slide-down menu (hidden on lg+ where sidebar takes over) */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-surface-container-lowest/98 backdrop-blur-2xl border-b border-primary/10 overflow-hidden"
                        >
                            <div className="px-6 py-8 flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 py-2 text-sm font-headline font-bold tracking-widest uppercase transition-colors ${activeSection === link.href.substring(1) ? 'text-primary' : 'text-on-surface-variant'}`}
                                    >
                                        <span className="material-symbols-outlined text-base">{link.icon}</span>
                                        {link.name}
                                    </a>
                                ))}
                                <div className="pt-4 border-t border-outline-variant/30">
                                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full justify-center text-xs">HIRE ME</a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
