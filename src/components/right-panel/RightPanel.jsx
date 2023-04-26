import React from "react";
import "./RightPanel.css";
import { FiMail } from "react-icons/fi";
import { NewTabAnchor } from "../generic";

function RightPanel() {
  return (
    <div className="right-panel">
      <ul>
        <li>
          <NewTabAnchor href="mailto:sonisahil.ca@gmail.com">
            <div className="rotate-text">
              <FiMail />
              <span className="text">sonisahil.ca@gmail.com</span>
            </div>
          </NewTabAnchor>
        </li>
      </ul>
    </div>
  );
}

export default RightPanel;
