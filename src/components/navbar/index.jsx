import React from "react";
import anurag from "./anurag.jpg";
import "./index.css";

import Toggle from "../toggle";

const Navbar = (props) => {
  const { theme, onToggleTheme } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div id="navigation" className="collapse navbar-collapse flex-column">
        <div className="profile-section pt-3 pt-lg-0">
          <img
            className="profile-image mb-3 rounded-circle mx-auto"
            src={anurag}
            alt="anurag"
          />

          <h2 className="pt-lg-4 mb-0">Anurag Bhattacharjee.</h2>
          <br />

          <ul className="social-list list-inline py-3 mx-auto">
            <li className="list-inline-item">
              <a href="https://twitter.com/AnuragOn2">
                <i className="fab fa-twitter fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/anuragbhattacharjee/">
                <i className="fab fa-linkedin fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/anuragbhattacharjee">
                <i className="fab fa-github-alt fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://stackoverflow.com/users/2149373/anurag">
                <i className="fab fa-stack-overflow fa-fw"></i>
              </a>
            </li>
            {/* <li className="list-inline-item">
              <a href="https://www.facebook.com/AnuragOn2">
                <i className="fab fa-facebook fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/AnuragOn2">
                <i className="fab fa-instagram fa-fw"></i>
              </a>
            </li> */}
          </ul>
          <hr />
        </div>

        <ul className="navbar-nav flex-column text-left">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fa fa-home fa-fw mr-2"></i>Home{" "}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/researches.html">
              <i className="fa fa-bookmark fa-fw mr-2"></i>Researches
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resume.html">
              <i className="fa fa-user fa-fw mr-2"></i>Resume
            </a>
          </li>
        </ul>

        <div className="my-2 my-md-3">
          <Toggle theme={theme} toggleTheme={onToggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
