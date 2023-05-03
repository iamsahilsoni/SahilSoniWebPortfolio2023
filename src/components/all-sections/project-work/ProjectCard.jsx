import React from "react";
import "./ProjectCard.css";
import { FaGithub, FaLink } from "react-icons/fa";

function ProjectCard({ idx }) {
  return (
    <div className={`project-card ${idx % 2 ? "odd" : "even"}`}>
      <div className="project-pic">
        <img
          src="./aashi4x3.png"
          alt="project-screenshot"
          className="project-screenshot"
        />
      </div>
      <div className="project-details">
        <div className="project-heading">
          React PortfolioP ortfolioPortfo lioPortfolio
        </div>
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
            <FaGithub />
            <FaLink />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
