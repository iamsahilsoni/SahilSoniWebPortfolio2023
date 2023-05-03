import React from "react";
import "./Work.css";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <div className="work" id="work">
      <h4 className="section-heading">Some Things I’ve Built 🛠️</h4>
      <div className="projects-group">
        <ProjectCard idx={0} />
        <ProjectCard idx={1} />
        <ProjectCard idx={2} />
        <ProjectCard idx={3} />
      </div>
    </div>
  );
}
