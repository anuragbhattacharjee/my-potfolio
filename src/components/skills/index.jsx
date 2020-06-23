import React from "react";
import "./index.css";

const Skills = () => {
  return (
    <div className="content">
      <p className="intro">
        Intro about your skills goes here. Keep the list lean and only show your
        primary skillset. You can always provide a link to your Linkedin or
        Github profile so people can get more info there.
      </p>

      <div className="skillset">
        <div className="item">
          <h3 className="level-title">
            Python &amp; Django
            <span
              className="level-label"
              data-toggle="tooltip"
              data-placement="left"
              data-animation="true"
              title="You can use the tooltip to explain more about your skill level..."
            >
              <i className="fa fa-info-circle"></i>Expert
            </span>
          </h3>
          <div className="level-bar">
            <div className="level-bar-inner" data-level="96%"></div>
          </div>
        </div>

        <div className="item">
          <h3 className="level-title">
            Javascript &amp; jQuery
            <span
              className="level-label"
              data-toggle="tooltip"
              data-placement="left"
              data-animation="true"
              title="You can use the tooltip to explain more about your skill level..."
            >
              <i className="fa fa-info-circle"></i>Expert
            </span>
          </h3>
          <div className="level-bar">
            <div className="level-bar-inner" data-level="96%"></div>
          </div>
        </div>

        <div className="item">
          <h3 className="level-title">
            HTML5, CSS3, SASS &amp; LESS
            <span
              className="level-label"
              data-toggle="tooltip"
              data-placement="left"
              data-animation="true"
              title="You can use the tooltip to explain more about your skill level..."
            >
              <i className="fa fa-info-circle"></i>Expert
            </span>
          </h3>
          <div className="level-bar">
            <div className="level-bar-inner" data-level="96%"></div>
          </div>
        </div>

        <div className="item">
          <h3 className="level-title">
            Ruby on Rails
            <span
              className="level-label"
              data-toggle="tooltip"
              data-placement="left"
              data-animation="true"
              title="You can use the tooltip to explain more about your skill level..."
            >
              <i className="fa fa-info-circle"></i>Pro
            </span>
          </h3>
          <div className="level-bar">
            <div className="level-bar-inner" data-level="85%"></div>
          </div>
        </div>

        <p>
          <a className="more-link" href="#">
            <i className="fa fa-external-link-alt"></i>More on GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Skills;
