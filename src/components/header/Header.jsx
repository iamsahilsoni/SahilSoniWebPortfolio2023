import React from "react";
import { Link } from "react-scroll";
import * as Router from "react-router-dom";
import "./Header.css";
import { NewTabAnchor } from "../generic";

function Header() {
  const urlHistory = Router.useNavigate();
  React.useEffect(() => {}, [urlHistory]);
  return (
    <div className="header">
      <div className="logo">
        <img src="your-logo-here.png" alt="Logo" />
      </div>
      <div className="sections">
        {window.location.pathname === "/" ? (
          <>
            <Link to="about" smooth={true} hashSpy={true} duration={500}>
              About
            </Link>
            <Link to="experience" hashSpy={true} smooth={true} duration={500}>
              Experience
            </Link>
            <Link to="work" hashSpy={true} smooth={true} duration={500}>
              Work
            </Link>
            <Link to="contact" smooth={true} hashSpy={true} duration={500}>
              Contact
            </Link>
            <Router.Link to="/create-yours">
              Create Your Portfolio(via dialog box)
            </Router.Link>
            <Router.Link to="/recommendations">Recommendations</Router.Link>
            <NewTabAnchor
              href={process.env.PUBLIC_URL + "/resume_SahilSoni.pdf"}>
              Download PDF
            </NewTabAnchor>
          </>
        ) : (
          <Router.Link to="/">Home</Router.Link>
        )}
      </div>
    </div>
  );
}

export default Header;
