import SectionParams from '../ui/SectionParams';

export default function PlaceholderSection({ id, title }) {
    return (
        <SectionParams id={id}>
            <h2 className="text-3xl font-bold mb-8 text-text-primary">{title}</h2>
            <div className="p-12 border border-dashed border-white/10 rounded-lg text-center text-text-secondary">
                Content for {title} coming soon.
            </div>
        </SectionParams>
    );
}
