import React from "react";
import "./Footer.css";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import { NewTabAnchor } from "../generic";

function Footer() {
  return (
    <div className="footer">
      <NewTabAnchor href="https://github.com/iamsahilsoni/SahilSoniWebPortfolio2023/">
        <p>Built by Sahil Soni</p>
      </NewTabAnchor>

      <NewTabAnchor href="https://brittanychiang.com/">
        <p>Design Motivation from Brittany Chiang</p>
      </NewTabAnchor>
      <div className="git-stats">
        <p>
          <FaStar /> 100 stars
        </p>
        <p>
          <FaCodeBranch /> 20 forks
        </p>
      </div>
    </div>
  );
}

export default Footer;
