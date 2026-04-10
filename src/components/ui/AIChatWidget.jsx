import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const quickReplies = [
    { text: 'Projects', q: 'What projects has Rajveer built?' },
    { text: 'Skills', q: 'What are his core technical skills?' },
    { text: 'Experience', q: 'Tell me about his experience.' },
    { text: 'Hire', q: 'How can I hire or contact Rajveer?' },
];

const faqs = {
    'What projects has Rajveer built?': 'Rajveer has built 6+ projects: Skill Match (92% NLP accuracy), AnalytixAI (automated EDA), a RAG YouTube Summarizer, Movie Recommender, House Price Predictor, and a Netflix BI Dashboard in Power BI.',
    'What are his core technical skills?': 'Core stack: Python, SQL, PyTorch, Scikit-learn, Transformers, LangChain, Pandas, Power BI, FastAPI, Streamlit, ChromaDB, and OpenAI API. Specializes in ML, NLP, and data engineering.',
    "Tell me about his experience.": 'Rajveer is currently a Data Science Virtual Intern at Infosys Springboard (2024–Present) and is completing his MCA at SRM University. He previously completed his BCA from MDU University.',
    'How can I hire or contact Rajveer?': 'Email: singhalrajveer7@gmail.com | LinkedIn: /in/rajveer-singhal | Phone: +91 9523890859. He\'s open to full-time roles, internships, and contract ML projects.',
};

export default function AIChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "Hi! I'm Rajveer's portfolio assistant. Ask me anything about his work, skills, or availability." }
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);

    const sendMessage = (text) => {
        if (!text.trim()) return;
        const userMsg = { role: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setTyping(true);

        setTimeout(() => {
            const answer = faqs[text] || "Great question! For detailed information, please use the contact form or reach out directly at singhalrajveer7@gmail.com.";
            setMessages(prev => [...prev, { role: 'assistant', text: answer }]);
            setTyping(false);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
            {/* Chat panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="glass-panel-strong rounded-2xl border border-primary/15 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden w-80 sm:w-96"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center px-4 py-3 border-b border-outline-variant/20 bg-surface-container-high/60">
                            <div className="flex items-center gap-2">
                                <div className="status-dot scale-75" />
                                <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">Portfolio Assistant</span>
                            </div>
                            <button onClick={() => setOpen(false)} className="text-on-surface-variant hover:text-on-surface transition-colors">
                                <span className="material-symbols-outlined text-lg">close</span>
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-64 overflow-y-auto p-4 space-y-3">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed font-light ${
                                        m.role === 'user'
                                            ? 'bg-primary text-on-primary rounded-br-sm'
                                            : 'glass-panel border-primary/10 text-on-surface rounded-bl-sm'
                                    }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {typing && (
                                <div className="flex gap-1 px-3 py-2 glass-panel rounded-xl rounded-bl-sm w-16">
                                    {[0, 1, 2].map(i => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full bg-primary/60"
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Quick replies */}
                        <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                            {quickReplies.map(r => (
                                <button
                                    key={r.text}
                                    onClick={() => sendMessage(r.q)}
                                    className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-primary/15 text-primary hover:bg-primary/8 transition-all"
                                >
                                    {r.text}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-outline-variant/15">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
                                    placeholder="Ask anything..."
                                    className="flex-1 bg-surface border border-outline-variant/20 rounded-lg px-3 py-2 text-xs text-on-surface placeholder:text-on-surface-variant/30 focus:outline-none focus:border-primary/30 font-mono"
                                />
                                <button
                                    onClick={() => sendMessage(input)}
                                    className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-all"
                                >
                                    <span className="material-symbols-outlined text-sm">send</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB Button */}
            <motion.button
                onClick={() => setOpen(o => !o)}
                className="relative w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] transition-all"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                animate={!open ? { y: [0, -4, 0] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <AnimatePresence mode="wait">
                    <motion.span
                        key={open ? 'close' : 'open'}
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                        className="material-symbols-outlined text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        {open ? 'close' : 'smart_toy'}
                    </motion.span>
                </AnimatePresence>

                {/* Pulse ring */}
                {!open && (
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/40"
                        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                )}
            </motion.button>
        </div>
    );
}
