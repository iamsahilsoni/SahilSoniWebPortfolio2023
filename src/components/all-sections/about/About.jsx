import React from "react";
import "./About.css";
import { ImageToggle, NewTabAnchor } from "../../generic/";

function About() {
  return (
    <div className="about" id="about">
      <h4 className="section-heading">About Me 🙋‍♂️</h4>
      <div className="about-section-container">
        <div className="left-section">
          <p className="about-first-para">
            Hello, my name is
            <strong> Sahil Soni</strong> and I am an experienced Full-Stack Web
            Application Engineer with 1+ of experience in web development. I
            have a strong passion for building reliable and efficient web
            applications that provide a seamless user experience. As a current
            Masters student at the University of Windsor, I have had the
            opportunity to work on numerous academic and industry projects that
            have challenged me to consistently learn and grow as a professional.
          </p>
          <p>
            During my free time, I enjoy engaging in two of my passions -
            playing chess and staying fit by going to the gym. As a dedicated
            Web Apps Engineer, I am always seeking ways to enhance my skills and
            expertise in building high-quality Web applications. I am eager to
            apply my knowledge and experience to help clients fulfill their Web
            Application needs, and I am always ready to take on new challenges.
            Thank you for visiting my website, and I am excited to connect with
            you soon!
          </p>
          <p className="tech-heading">
            Here are a few technologies I’ve been working with recently
          </p>
          <div>
            <ul class="skills-list">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>Data Structure & Algorithms</li>
              <li>React</li>
              <li>Angular</li>
              <li>C++</li>
            </ul>
          </div>
        </div>
        <div class="right-section ">
          <ImageToggle
            primaryImageUrl="./display-pic1.jpg"
            secondaryImageUrl="./display-pic2.jpg"></ImageToggle>
        </div>
      </div>
    </div>
  );
}

export default About;
