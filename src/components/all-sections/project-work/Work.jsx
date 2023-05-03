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
          project_desc={
            "Single-page Twitter Analytics app, where users can enter a Twitter handle or hashtag and retrieve relevant data. As my first React project, I gained a solid understanding of component-based development and data flow. I also implemented data adaptation to facilitate efficient communication between components and the backend. "
          }
          git_url={
            "https://github.com/iamsahilsoni/twitter_analytics_ADT_course"
          }
          ext_url={"https://iamsahilsoni-twitter-analytics.netlify.app/"}
        />
        <ProjectCard
          idx={1}
          project_heading={"Zero Waste (Angular App)"}
          img_src={"zer-waste-app.png"}
          project_desc={
            "Key contributor to an Angular-powered dashboard featuring login and signup pages with real-time validation. Built using best practices, project demonstrates my development expertise and commitment to quality."
          }
          git_url={"https://github.com/iamsahilsoni/zero-waste"}
          ext_url={"https://iamsahilsoni-zero-waste.netlify.app//"}
        />
        <ProjectCard
          idx={2}
          project_heading={
            "Deep learning based image classification (Publication)"
          }
          img_src={"publication.png"}
          project_desc={
            "Co-authored a research publication titled 'Deep learning based image classification for intestinal hemorrhage' in the journal Multimedia Tools and Applications. Our study focused on developing a supervised learning ensemble to accurately detect bleeding in images of Wireless Capsule Endoscopy, using convolutional neural networks and optimized attribute selection."
          }
          ext_url={"https://doi.org/10.1007/s11042-020-08905-7"}
        />
      </div>
    </div>
  );
}
