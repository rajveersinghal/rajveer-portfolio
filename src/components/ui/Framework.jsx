import { motion } from 'framer-motion';

const framework = [
    { title: "Understand", desc: "Identify business goals & hypothesis.", icon: "🎯" },
    { title: "Explore", desc: "Statistical validation & EDA purity.", icon: "🔍" },
    { title: "Engineer", desc: "Modeling & rigorous feature selection.", icon: "⚙️" },
    { title: "Iterate", desc: "Evaluation & deployment feedback.", icon: "🔄" }
];

export default function Framework() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {framework.map((item, idx) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-accent/5 transition-colors group"
                >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                    </div>
                    <h4 className="text-sm font-bold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-[10px] text-text-secondary leading-tight">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    );
}
