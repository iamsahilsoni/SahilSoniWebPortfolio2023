import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

export default function Experience(props) {
  return (
    <div className="experience" id="experience">
      <h4 className="section-heading">Professional Experience 💼</h4>
      <div className="experience-cards">
        {props.experiences?.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
