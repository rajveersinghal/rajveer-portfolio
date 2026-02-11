export default function Footer() {
    return (
        <footer className="bg-bg-dark border-t border-white/5 py-8 snap-start">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left: Name */}
                <div className="text-text-primary font-bold tracking-tight">
                    Rajveer Singhal
                </div>



                {/* Right: Socials */}
                <div className="flex space-x-6">
                    <a href="#" className="text-text-secondary hover:text-white transition-colors text-sm">GitHub</a>
                    <a href="#" className="text-text-secondary hover:text-white transition-colors text-sm">LinkedIn</a>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-center text-text-secondary/50 text-xs mt-8">
                © {new Date().getFullYear()} Rajveer Singhal • All Rights Reserved
            </div>
        </footer>
    );
}
