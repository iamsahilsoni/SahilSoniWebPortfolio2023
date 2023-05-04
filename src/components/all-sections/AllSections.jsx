import React from "react";
import About from "./about/About";
import Experience from "./experience/Experience";
import Work from "./project-work/Work";
import Contact from "./contact/Contact";
import "./AllSections.css";
import Introduction from "./introduction/Introduction";

function AllSections({
  experiences,
  projectWork,
  contactInfo,
  introInfo,
  aboutInfo,
}) {
  return (
    <div className="all-sections">
      <Introduction {...introInfo} />
      <About {...aboutInfo} />
      <Experience experiences={experiences} />
      <Work projectWork={projectWork} />
      <Contact {...contactInfo} />
    </div>
  );
}

export default AllSections;
