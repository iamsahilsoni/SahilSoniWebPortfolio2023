import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const experiences = [
    {
      company: "SourceFuse Technologies, India",
      position: "Junior Engineer - Web Apps ",
      duration: "Jul 2021 - Aug 2022",
      description: [
        "Developed a web-based project management system using Angular and LoopBack4, incorporating design patterns such as the Singleton, Factory, and Observer patterns to improve code maintainability and extensibility.",

        "Optimized database queries in PostgreSQL, resulting in a 10% improvement in query performance through indexing.",

        "Conducted code reviews and provided feedback to improve code quality and maintainability.",
      ],
    },
    {
      company: "SourceFuse Technologies, India",
      position: "Trainee - Web Apps",
      duration: "Jan 2021 - Jun 2021",
      description: [
        "Completed training in Angular and Loopback4, gained knowledge of best practices, and applied learning to contribute to live projects.",
        "Demonstrated a rigorous attention to detail and a relentless drive to deliver top-quality code, meeting all deadlines and milestones as scheduled.",
        "Engaged in agile practices, such as daily stand-ups, strategic sprint planning, and insightful retrospectives. ",
      ],
    },
  ];

  return (
    <div className="experience" id="experience">
      <h4 className="section-heading">Professional Experience 💼</h4>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
