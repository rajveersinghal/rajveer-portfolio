export default function SectionParams({ children, id, className = "" }) {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center py-10 md:py-14 snap-start ${className}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {children}
            </div>
        </section>
    );
}
