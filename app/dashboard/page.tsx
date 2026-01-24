"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../projects/ProjectCard";
import ProjectForm from "../projects/ProjectForm";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (project: any) => setProjects([...projects, project]);

  return (
    <>
      <Navbar />
      <main>
        <h1>لوحة المشاريع</h1>
        <ProjectForm onAdd={handleAddProject} />
        <div>
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}
