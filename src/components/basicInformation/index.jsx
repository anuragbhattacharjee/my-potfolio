import React from "react";
import "./index.css";

const BasicInformation = () => {
  return (
    <div className="content">
      <ul className="list-unstyled">
        <li>
          <i className="fa fa-map-marker"></i>
          <span className="sr-only">Location:</span>
          Dhaka, Bangladesh
        </li>
        <li>
          <i className="fa fa-envelope"></i>
          <span className="sr-only">Email:</span>
          <a
            href="mailto:anurag07061@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            anurag07061@gmail.com
          </a>
        </li>
        <li>
          <i className="fa fa-envelope"></i>
          <span className="sr-only">Email:</span>
          <a
            href="mailto:bhattacharjee.anurag@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            bhattacharjee.anurag@outlook.com
          </a>
        </li>
        <li>
          <i className="fa fa-envelope"></i>
          <span className="sr-only">Official Email:</span>
          <a
            href="mailto:anurag@chatleads.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            anurag@chatleads.io
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BasicInformation;
