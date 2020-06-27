import React from "react";
import "./index.css";

const Languages = () => {
  return (
    <div className="content">
      <ul className="list-unstyled">
        <li className="item">
          <span className="title">
            <strong>Bengali: </strong>
          </span>
          <span className="level">
            Native Speaker <br className="visible-xs" />
            <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
            <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
            <i className="fa fa-star"></i>{" "}
          </span>
        </li>
        <li className="item">
          <span className="title">
            <strong>English: </strong>
          </span>
          <span className="level">
            Advanced User <br className="visible-sm visible-xs" />
            <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
            <i className="fa fa-star"></i> <i className="fa fa-star-half"></i>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Languages;
