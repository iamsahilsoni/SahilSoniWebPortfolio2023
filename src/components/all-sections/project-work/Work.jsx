import React from "react";
import "./Work.css";
import ProjectCard from "./ProjectCard";

export default function Work(props) {
  return (
    <div className="work" id="work">
      <h4 className="section-heading">Some Things I’ve Built 🛠️</h4>
      <div className="projects-group">
        {props.projectWork?.map((project, idx) => {
          return <ProjectCard key={idx} {...project} idx={idx} />;
        })}
      </div>
    </div>
  );
}
