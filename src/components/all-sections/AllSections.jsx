import React from "react";
import About from "./about/About";
import Experience from "./experience/Experience";
import Work from "./work/Work";
import Contact from "./contact/Contact";
import "./AllSections.css";

function AllSections() {
  return (
    <div className="all-sections">
      <div className="intro">intro</div>
      <div className="section-wrapper">
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default AllSections;
