import React from "react";
import "./ProjectCard.css";
import { NewTabAnchor } from "../../generic";
import { FaGithub, FaLink } from "react-icons/fa";

function ProjectCard({
  idx,
  imgSrc,
  gitUrl,
  extUrl,
  project_heading,
  project_desc,
}) {
  return (
    <div className={`project-card ${idx % 2 ? "odd" : "even"}`}>
      <div className="project-pic">
        <NewTabAnchor href={extUrl}>
          <img
            src={imgSrc}
            alt="project-screenshot"
            className="project-screenshot"
          />
        </NewTabAnchor>
      </div>
      <div className="project-details">
        <div className="project-heading">{project_heading}</div>
        <div className="project-desc">
          <div className="desc-wrapper">
            <div>{project_desc}</div>
          </div>
        </div>
        <div className="project-links">
          <div className="links-group">
            {gitUrl && (
              <NewTabAnchor href={gitUrl}>
                <FaGithub />
              </NewTabAnchor>
            )}
            {extUrl && (
              <NewTabAnchor href={extUrl}>
                <FaLink />
              </NewTabAnchor>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
