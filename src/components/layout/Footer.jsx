export default function Footer() {
    return (
        <footer className="border-t border-outline-variant/20 py-10 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center border border-primary/25 bg-primary/5">
                            <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                        </div>
                        <div>
                            <div className="text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase">RAJVEER.SYS</div>
                            <div className="text-[9px] font-mono text-on-surface-variant/40 tracking-widest">DATA SCIENTIST PORTFOLIO</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-on-surface-variant/40">
                        <div className="status-dot scale-75"></div>
                        © {new Date().getFullYear()} Rajveer Singhal ❤️
                    </div>

                    <div className="flex items-center gap-4">
                        {[
                            { icon: 'mail', href: 'mailto:singhalrajveer7@gmail.com' },
                            { icon: 'link', href: 'https://linkedin.com/in/rajveer-singhal' },
                            { icon: 'code', href: 'https://github.com/rajveersinghal' },
                        ].map(({ icon, href }) => (
                            <a
                                key={icon}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg border border-outline-variant/25 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all"
                            >
                                <span className="material-symbols-outlined text-base">{icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
