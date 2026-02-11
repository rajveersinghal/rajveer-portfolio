import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const outputs = {
    'ls': 'projects/  skills/  metrics.json  model_v1.bin',
    'python train.py': 'Epoch 1/10... Loss: 0.62\nEpoch 5/10... Loss: 0.21\nEpoch 10/10... Loss: 0.08\n[Success] Model saved to ./models/',
    'whoami': 'Rajveer Singhal (Data Scientist @ Infosys Intern)',
    'help': 'Available commands: ls, whoami, python train.py, clear, hello',
    'hello': 'Hello! Ready to explore the neural data?',
};

export default function Terminal() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', text: 'RajveerOS v1.0.4 (stable)' },
        { type: 'output', text: 'Type "help" to see available commands.' }
    ]);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', text: cmd }];

            if (cmd === 'clear') {
                setHistory([]);
            } else if (outputs[cmd]) {
                newHistory.push({ type: 'output', text: outputs[cmd] });
                setHistory(newHistory);
            } else if (cmd !== '') {
                newHistory.push({ type: 'output', text: `Command not found: ${cmd}` });
                setHistory(newHistory);
            }

            setInput('');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 shadow-2xl font-mono text-sm">
            {/* Header */}
            <div className="bg-[#2a2a2a] px-4 py-2 flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-text-secondary text-xs">zsh — rajveersinghal</span>
                <div className="w-10" />
            </div>

            {/* Content */}
            <div
                ref={scrollRef}
                className="p-6 h-64 overflow-y-auto custom-scrollbar bg-black/50"
            >
                {history.map((item, i) => (
                    <div key={i} className="mb-2">
                        {item.type === 'input' ? (
                            <div className="flex gap-2 text-accent">
                                <span className="font-bold">➜</span>
                                <span className="text-text-primary">{item.text}</span>
                            </div>
                        ) : (
                            <div className="text-text-secondary whitespace-pre-wrap pl-4 border-l border-white/5">
                                {item.text}
                            </div>
                        )}
                    </div>
                ))}

                {/* Current Input */}
                <div className="flex gap-2">
                    <span className="text-accent font-bold">➜</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="bg-transparent border-none outline-none text-text-primary flex-1 caret-accent"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
}
