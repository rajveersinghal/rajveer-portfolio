import { motion } from 'framer-motion';

const learning = [
    { name: "Transformers / LLMs", progress: 65 },
    { name: "Deep Learning (PyTorch)", progress: 40 },
    { name: "Deployment (Docker/AWS)", progress: 25 },
];

export default function LearningStack() {
    return (
        <div className="space-y-4 mt-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent/80 mb-4">Trajectory (Now Mastering)</h4>
            {learning.map((item, idx) => (
                <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-[10px] text-text-secondary uppercase">
                        <span>{item.name}</span>
                        <span>{item.progress}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                            className="h-full bg-accent/50"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
