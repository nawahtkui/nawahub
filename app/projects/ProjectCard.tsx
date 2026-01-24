export default function ProjectCard({ title, description, link }: any) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank">عرض المشروع</a>}
    </div>
  );
}
