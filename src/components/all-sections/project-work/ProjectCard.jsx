import React from "react";
import "./ProjectCard.css";
import { FaGithub, FaLink } from "react-icons/fa";

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-pic">
        <img
          src="./aashi4x3.png"
          alt="project-screenshot"
          className="project-screenshot"
        />
      </div>
      <div className="project-details">
        <div className="project-heading">React Portfolio</div>
        <div className="project-desc">
          <div className="desc-wrapper">
            <div>
              I believe that the best user experiences are created when design
              and functionality are seamlessly integrated, and this is where II
              believe that the best user experiences are created when design and
              I believe that the best user experiences are created when design
              and functionality are seamlessly integrated, and this is where II
              believe that the best user experiences are created when design and
              I believe that the best user experiences are created when design
              and functionality are seamlessly integrated, and this is where II
              believe that the best user experiences are created when design and
              I believe that the best user experiences are created when design
              and functionality are seamlessly integrated, and this is where II
              believe that the best user experiences are created when design and
              I believe that the best user experiences are created when design
              and functionality are seamlessly integrated, and this is where II
              believe that the best user experiences are created when design and
            </div>
          </div>
        </div>
        <div className="project-links">
          <div className="links-group">
            <FaGithub />
            <FaLink />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
