import SectionParams from '../ui/SectionParams';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <SectionParams id="about" className="bg-bg-dark flex flex-col justify-center">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-12">
                        About <span className="text-accent underline decoration-4 underline-offset-8">Me</span>
                    </h2>

                    <div className="space-y-6 text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                        <p>
                            I am a <span className="text-text-primary font-bold">Data Scientist</span> currently pursuing my <span className="text-text-primary font-bold">MCA at SRM University</span>, with a strong focus on building intelligent systems that solve real-world problems.
                        </p>
                        <p>
                            With hands-on experience in <span className="text-text-primary font-bold">Machine Learning and NLP</span>, I specialize in turning raw data into structured, actionable intelligence using clean architecture and rigorous analytical methods.
                        </p>
                        <p>
                            My approach combines mathematical theory with engineering practice, ensuring that every model I build is interpretable, scalable, and ready for deployment.
                        </p>
                    </div>
                </motion.div>
            </div>
        </SectionParams>
    );
}
