import React from "react";
import "./Introduction.css";
import { NewTabAnchor } from "../../generic";

function Introduction(props) {
  return (
    <div className="intro">
      <div className="intro-upper-section">
        <div className="intro-left-section">
          <h4 className="beginning-line">
            <NewTabAnchor href="https://www.google.com/search?q=Namaste">
              Namaste
            </NewTabAnchor>{" "}
            World 🙏 , my name is
          </h4>
          <h1 className="name-line">{props.name}</h1>
          <h2 className="status-line">{props.status}</h2>
        </div>
        <div className="intro-image-section">
          <img
            src={props.displayPic}
            alt="display pic 1"
            className="display-pic"
          />
        </div>
      </div>

      <h4 className="summary-line">{props.summary}</h4>
    </div>
  );
}

export default Introduction;
