import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";

export default function DashboardPage() {
  const [projects, setProjects] = useState([]);
  const addProject = (project) => setProjects([...projects, project]);

  return (
    <div className="rtl min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-purple-600">لوحة المشاريع</h1>
        <ProjectForm onAdd={addProject} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} title={proj.title} description={proj.description} link={proj.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
