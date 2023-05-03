import React from "react";
import "./ProjectCard.css";
import { NewTabAnchor } from "../../generic";
import { FaGithub, FaLink } from "react-icons/fa";

function ProjectCard({ idx, img_src, git_url, ext_url, project_heading }) {
  return (
    <div className={`project-card ${idx % 2 ? "odd" : "even"}`}>
      <div className="project-pic">
        <NewTabAnchor href={ext_url}>
          <img
            src={img_src}
            alt="project-screenshot"
            className="project-screenshot"
          />
        </NewTabAnchor>
      </div>
      <div className="project-details">
        <div className="project-heading">{project_heading}</div>
        <div className="project-desc">
          <div className="desc-wrapper">
            <div>
              I believe that the best user experiences are created when design
              ed when design and functionality are seamlesslybelieve that the
              best user experiences aelieve that the best user experiences are
              created when design and functionality are seamlesslybelieve that
              the best user experiences are created when design and
              functionality are seamlesslybelieve that the best user experiences
              are created when design and functionality are seamlesslybelieve
              that the best user experiences are created when believe that the
              best user experiences are created when design and functionality
              are seamlesslybelieve that the best user experiences are created
              when design and functionality are seamlesslybelieve that the best
              user experiences are created when design and functionality are
              seamlessly and functionality are seamlesslybelieve that the best
              user experiences are created when design and functionality are
              seamlesslybelieve that the best user experiences are created when
              design and functionality are created when design and functionality
              are seamlessly integrated, and this is where II
            </div>
          </div>
        </div>
        <div className="project-links">
          <div className="links-group">
            <NewTabAnchor href={git_url}>
              <FaGithub />
            </NewTabAnchor>
            <NewTabAnchor href={ext_url}>
              <FaLink />
            </NewTabAnchor>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
