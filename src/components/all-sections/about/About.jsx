import React from "react";
import "./About.css";
import { TiChevronRight } from "react-icons/ti";

function About(props) {
  return (
    <div className="about" id="about">
      <h4 className="section-heading">About Me 🙋‍♂️</h4>
      <div className="about-section-container">
        <div className="left-section">
          <p
            className="about-first-para"
            dangerouslySetInnerHTML={{ __html: props.firstPara }}></p>
          <p>{props.secondPara}</p>
          {props?.skillsList?.length && (
            <p className="tech-heading">
              Here are a few technologies I’ve been working with recently
            </p>
          )}
          <div>
            <ul className="skills-list">
              {props?.skillsList?.map((skill, idx) => {
                return (
                  <li key={idx}>
                    <TiChevronRight />
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="right-section ">
          <img
            src={props.displayPic}
            alt="display pic 2"
            className="display-pic"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
