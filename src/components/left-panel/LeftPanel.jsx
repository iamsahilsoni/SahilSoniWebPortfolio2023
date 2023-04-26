import React from "react";
import "./LeftPanel.css";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { NewTabAnchor } from "../generic";

function LeftPanel() {
  return (
    <div className="left-panel">
      <ul>
        <li>
          <NewTabAnchor href="https://github.com/iamsahilsoni">
            <FaGithub />
          </NewTabAnchor>
        </li>
        <li>
          <NewTabAnchor href="https://www.instagram.com/iamsahilsoni/">
            <FaInstagram />
          </NewTabAnchor>
        </li>
        <li>
          <NewTabAnchor href="https://twitter.com/yeahsahil">
            <FaTwitter />
          </NewTabAnchor>
        </li>
        <li>
          <NewTabAnchor href="https://www.linkedin.com/in/lialh4/">
            <FaLinkedin />
          </NewTabAnchor>
        </li>
      </ul>
    </div>
  );
}

export default LeftPanel;
