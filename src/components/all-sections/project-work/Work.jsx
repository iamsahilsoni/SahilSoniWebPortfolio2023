import React from "react";
import "./Work.css";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <div className="work" id="work">
      <h4 className="section-heading">Some Things I’ve Built 🛠️</h4>
      <div className="projects-group">
        <ProjectCard
          idx={0}
          project_heading={"Twitter Analytics (React App)"}
          img_src={"twitter-analytics-app.png"}
          git_url={
            "https://github.com/iamsahilsoni/twitter_analytics_ADT_course"
          }
          ext_url={"https://iamsahilsoni-twitter-analytics.netlify.app/"}
        />
        <ProjectCard
          idx={1}
          project_heading={"Zero Waste (Angular App)"}
          img_src={"zer-waste-app.png"}
          git_url={"https://github.com/iamsahilsoni/zero-waste"}
          ext_url={"https://iamsahilsoni-zero-waste.netlify.app//"}
        />
        <p>will change the desc of above and will add on more projects</p>
      </div>
    </div>
  );
}
