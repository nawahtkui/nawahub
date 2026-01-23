'use client';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectForm from '../components/ProjectForm';

export default function DashboardPage() {
  const [projects, setProjects] = useState<{title:string, description:string}[]>([]);

  const addProject = (title: string, description: string) => {
    setProjects([...projects, { title, description }]);
  };

  return (
    <div>
      <h2>لوحة المشاريع</h2>
      <ProjectForm onAdd={addProject} />
      <div>
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} />
        ))}
      </div>
    </div>
  );
}
