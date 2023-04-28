import React from "react";
import "./Footer.css";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import { NewTabAnchor } from "../generic";

function Footer() {
  const [gitStats, setGitStats] = React.useState({
    star_count: 0,
    fork_count: 0,
  });
  React.useEffect(() => {
    fetch("https://api.github.com/repos/iamsahilsoni/SahilSoniWebPortfolio2023")
      .then((data) => data.json())
      .then((gitResult) => {
        const newGitStats = {
          star_count: gitResult.stargazers_count,
          fork_count: gitResult.forks_count,
        };
        setGitStats(newGitStats);
      });
  }, []);
  return (
    <div className="footer">
      <NewTabAnchor href="https://github.com/iamsahilsoni/SahilSoniWebPortfolio2023/">
        <p>
          Built by <strong>Sahil Soni</strong>
        </p>
      </NewTabAnchor>

      <NewTabAnchor
        className="design-credit"
        href="https://brittanychiang.com/">
        <p>
          Design Motivation from <strong>Brittany Chiang</strong>
        </p>
      </NewTabAnchor>
      <div className="git-stats">
        <p>
          <FaStar /> {gitStats.star_count} stars
        </p>
        <p>
          <FaCodeBranch /> {gitStats.fork_count} forks
        </p>
      </div>
    </div>
  );
}

export default Footer;
