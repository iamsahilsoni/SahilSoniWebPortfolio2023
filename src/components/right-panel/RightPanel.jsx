import React from "react";
import "./RightPanel.css";
import { NewTabAnchor } from "../generic";

function RightPanel(props) {
  return (
    <div className="right-panel">
      <ul>
        <li>
          <div className="rotate-text">
            {props.emails?.[0] && (
              <NewTabAnchor href={`mailto:${props.emails[0]}`}>
                <span className="text">{props.emails[0]}</span>
              </NewTabAnchor>
            )}
            {props.emails?.[1] && (
              <NewTabAnchor href={`mailto:${props.emails[1]}`}>
                <span className="text">{props.emails[1]}</span>
              </NewTabAnchor>
            )}
          </div>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default RightPanel;
