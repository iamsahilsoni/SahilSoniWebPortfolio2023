import React from "react";
import "./LeftPanel.css";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { NewTabAnchor } from "../generic";

function LeftPanel(props) {
  return (
    <div className="left-panel">
      <ul>
        <li>
          <NewTabAnchor href={props.githubUrl}>
            <FaGithub />
          </NewTabAnchor>
        </li>
        <li>
          <NewTabAnchor href={props.leetcodeUrl}>
            <SiLeetcode />
          </NewTabAnchor>
        </li>
        <li>
          <NewTabAnchor href={props.instaUrl}>
            <FaInstagram />
          </NewTabAnchor>
        </li>
        <li>
          <NewTabAnchor href={props.twitterUrl}>
            <FaTwitter />
          </NewTabAnchor>
        </li>
        <li>
          <NewTabAnchor href={props.linkedinUrl}>
            <FaLinkedin />
          </NewTabAnchor>
        </li>
      </ul>
    </div>
  );
}

export default LeftPanel;
