import React, { useState } from "react";
import { Link } from "react-scroll";
import * as Router from "react-router-dom";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { NewTabAnchor, useScrollDirection } from "../generic";

function NavGroup(props) {
  return (
    <>
      <Link
        to="about"
        smooth={true}
        hashSpy={true}
        duration={500}
        onClick={() => props.setShowSideMenu(false)}>
        Who Am I
      </Link>
      <Link
        to="experience"
        hashSpy={true}
        smooth={true}
        duration={500}
        onClick={() => props.setShowSideMenu(false)}>
        Work xP
      </Link>
      <Link
        to="work"
        hashSpy={true}
        smooth={true}
        duration={500}
        onClick={() => props.setShowSideMenu(false)}>
        Creations
      </Link>
      <Link
        to="contact"
        smooth={true}
        hashSpy={true}
        duration={500}
        onClick={() => props.setShowSideMenu(false)}>
        Say Hello
      </Link>
      <NewTabAnchor
        className="resume-button glow-on-hover"
        href={process.env.PUBLIC_URL + "/resume_SahilSoni.pdf"}
        onClick={() => props.setShowSideMenu(false)}>
        Resume
      </NewTabAnchor>
    </>
  );
}

function Header() {
  const urlHistory = Router.useNavigate();
  const scrollDirection = useScrollDirection();

  const [showSideMenu, setShowSideMenu] = useState(false);

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
      {window.location.pathname === "/" ? (
        <>
          <div className="sections">
            <NavGroup setShowSideMenu={setShowSideMenu} />
            {/* <Router.Link to="/create-yours">
              Create Your Portfolio(via dialog box)
            </Router.Link>
            <Router.Link to="/recommendations">Recommendations</Router.Link> */}
          </div>
          <div className="hamburger-button-section">
            <div
              className="hamburger-button"
              onClick={() => setShowSideMenu(true)}
              role="button"
              aria-label="Menu">
              <RxHamburgerMenu />
            </div>
            <div className="side-menu-section">
              {showSideMenu && (
                <div className="side-menu">
                  <ImCross
                    className="hamburger-close"
                    onClick={() => setShowSideMenu(false)}
                  />
                  <NavGroup setShowSideMenu={setShowSideMenu} />
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <Router.Link className="home-nav" to="/">
          Home
        </Router.Link>
      )}
    </div>
  );
}

export default Header;
