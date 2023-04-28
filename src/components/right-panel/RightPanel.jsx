import React from "react";
import "./RightPanel.css";
import { FiMail } from "react-icons/fi";
import { NewTabAnchor } from "../generic";

function RightPanel() {
  return (
    <div className="right-panel">
      <ul>
        <li>
          <div className="rotate-text">
            <NewTabAnchor href="mailto:sonisahil.ca@gmail.com">
              <span className="text">sonisahil.ca@gmail.com</span>
            </NewTabAnchor>
            <NewTabAnchor href="mailto:soni87@uwindsor.ca">
              <span className="text">soni87@uwindsor.ca</span>
            </NewTabAnchor>
          </div>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default RightPanel;
