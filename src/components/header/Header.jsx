import React from "react";
import { Link } from "react-scroll";
import * as Router from "react-router-dom";
import "./Header.css";
import { NewTabAnchor, useScrollDirection } from "../generic";

function Header() {
  const urlHistory = Router.useNavigate();
  const scrollDirection = useScrollDirection();
  React.useEffect(() => {}, [urlHistory]);
  return (
    <div className={`header ${scrollDirection === "down" ? "hide" : "show"}`}>
      <div className="logo">
        <Router.Link to="/" reloadDocument={true}>
          <img
            src={process.env.PUBLIC_URL + "/favicon-512x512.png"}
            alt="Logo"
          />
        </Router.Link>
      </div>
      <div className="sections">
        {window.location.pathname === "/" ? (
          <>
            <Link to="about" smooth={true} hashSpy={true} duration={500}>
              Who Am I
            </Link>
            <Link to="experience" hashSpy={true} smooth={true} duration={500}>
              Work xP
            </Link>
            <Link to="work" hashSpy={true} smooth={true} duration={500}>
              Creations
            </Link>
            <Link to="contact" smooth={true} hashSpy={true} duration={500}>
              Say Hello
            </Link>
            {/* <Router.Link to="/create-yours">
              Create Your Portfolio(via dialog box)
            </Router.Link>
            <Router.Link to="/recommendations">Recommendations</Router.Link> */}
            <NewTabAnchor
              className="resume-button glow-on-hover"
              href={process.env.PUBLIC_URL + "/resume_SahilSoni.pdf"}>
              Resume
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
