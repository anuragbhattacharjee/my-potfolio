import React from "react";
import "./index.css";

const WorkExperience = () => {
  return (
    <div className="content">
      <div className="item">
        <h3 className="title">
          Co-Founder & Lead Developer -{" "}
          <span className="place">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Startup Hub
            </a>
          </span>{" "}
          <span className="year">(2014 - Present)</span>
        </h3>
        <p>
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut
          libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
          eros faucibus tincidunt.
        </p>
      </div>
      <div className="item">
        <h3 className="title">
          Software Engineer -{" "}
          <span className="place">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Google
            </a>
          </span>{" "}
          <span className="year">(2013 - 2014)</span>
        </h3>
        <p>
          Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam
          aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim. Sed
          fringilla mauris sit amet nibh. Donec sodales sagittis magna.
        </p>
      </div>

      <div className="item">
        <h3 className="title">
          Software Engineer -{" "}
          <span className="place">
            <a href="#" target="_blank" rel="noopener noreferrer">
              eBay
            </a>
          </span>{" "}
          <span className="year">(2012 - 2013)</span>
        </h3>
        <p>
          Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
          libero, sit amet adipiscing sem neque sed ipsum.
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
