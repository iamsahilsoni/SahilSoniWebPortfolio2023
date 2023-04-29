import React from "react";
import About from "./about/About";
import Experience from "./experience/Experience";
import Work from "./work/Work";
import Contact from "./contact/Contact";
import "./AllSections.css";
import Introduction from "./introduction/Introduction";

function AllSections() {
  return (
    <div className="all-sections">
      <Introduction></Introduction>
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default AllSections;
