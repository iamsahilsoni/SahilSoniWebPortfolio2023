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
        <p>Design Motivation from Brittany Chiang</p>
      </NewTabAnchor>
      <div className="git-stats">
        <p>
          <NewTabAnchor href="https://github.com/iamsahilsoni/SahilSoniWebPortfolio2023/">
            <FaStar />{" "}
            {gitStats.star_count > 1
              ? `${gitStats.star_count} stars`
              : `${gitStats.star_count} star`}
          </NewTabAnchor>
        </p>
        <p>
          <NewTabAnchor href="https://github.com/iamsahilsoni/SahilSoniWebPortfolio2023/">
            <FaCodeBranch />
            {gitStats.fork_count > 1
              ? `${gitStats.fork_count} forks`
              : `${gitStats.fork_count} fork`}
          </NewTabAnchor>
        </p>
      </div>
    </div>
  );
}

export default Footer;
