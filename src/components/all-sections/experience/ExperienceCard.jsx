import React, { useState } from "react";
import "./ExperienceCard.css";

export default function ExperienceCard(props) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="experience-card">
      <h5>{props.position}</h5>
      <p>{props.company}</p>
      <p className="duration">{props.duration}</p>
      <ul className="responsibilities">
        {props.description.map((resp, index) => {
          if (!(window.innerWidth > 500) && index > 1 && !showMore) return null;
          return <li key={index}>{resp}</li>;
        })}
      </ul>
      <div className="show-btn">
        {props.description.length > 2 && window.innerWidth < 500 && (
          <button className="show-more-btn" onClick={toggleShowMore}>
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}
