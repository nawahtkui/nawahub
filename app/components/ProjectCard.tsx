export default function ProjectCard({ title, description, link }: { title: string, description: string, link: string }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '4px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} style={{ color: '#6a1b9a' }}>عرض المشروع</a>
    </div>
  );
}
