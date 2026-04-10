import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import AIChatWidget from '../ui/AIChatWidget';

export default function Layout({ children }) {
    return (
        <div className="bg-background min-h-screen text-on-surface relative">
            {/* Global grid overlay */}
            <div className="fixed inset-0 grid-overlay pointer-events-none z-0 opacity-60" />

            <Navbar />
            <Sidebar />

            <main className="relative z-10 lg:pl-16">
                {children}
                <Footer />
            </main>

            <AIChatWidget />
        </div>
    );
}
