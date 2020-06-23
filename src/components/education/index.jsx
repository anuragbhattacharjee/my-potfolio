import React from "react";
import "./index.css";

const Education = () => {
  return (
    <div className="content">
      <div className="item">
        <h3 className="title">
          <i className="fa fa-graduation-cap"></i> MSc Computer Science
        </h3>
        <h4 className="university">
          University College London <span className="year">(2011-2012)</span>
        </h4>
      </div>
      <div className="item">
        <h3 className="title">
          <i className="fa fa-graduation-cap"></i> BSc Computer Science
        </h3>
        <h4 className="university">
          University of Bristol <span className="year">(2008-2011)</span>
        </h4>
      </div>
    </div>
  );
};

export default Education;
