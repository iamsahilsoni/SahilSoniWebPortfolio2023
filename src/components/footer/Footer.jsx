import React from "react";
import "./Footer.css";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import { NewTabAnchor } from "../generic";

function Footer({
  gitUrl,
  creditContent,
  creditUrl,
  selfCreditContent,
  gitRepo,
}) {
  const [gitStats, setGitStats] = React.useState({
    star_count: 0,
    fork_count: 0,
  });
  React.useEffect(() => {
    fetch(`https://api.github.com/repos/${gitRepo}`)
      .then((data) => data.json())
      .then((gitResult) => {
        const newGitStats = {
          star_count: gitResult.stargazers_count ?? 0,
          fork_count: gitResult.forks_count ?? 0,
        };
        setGitStats(newGitStats);
      });
  }, [gitRepo]);
  return (
    <div className="footer">
      <NewTabAnchor href={gitUrl}>
        <p dangerouslySetInnerHTML={{ __html: selfCreditContent }}></p>
      </NewTabAnchor>

      <NewTabAnchor className="design-credit" href={creditUrl}>
        <p>{creditContent}</p>
      </NewTabAnchor>
      <div className="git-stats">
        <p>
          <NewTabAnchor href={gitUrl}>
            <FaStar />
            {gitStats.star_count > 1
              ? `${gitStats.star_count} stars`
              : `${gitStats.star_count} star`}
          </NewTabAnchor>
        </p>
        <p>
          <NewTabAnchor href={gitUrl}>
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
