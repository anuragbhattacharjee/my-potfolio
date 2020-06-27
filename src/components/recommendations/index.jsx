import React, { Component } from "react";
import "./index.css";
import "./recommendations";
import { recommendations } from "./recommendations";

class Recommendations extends Component {
  state = {
    recommendations: recommendations,
  };
  render() {
    return (
      <div className="content">
        {recommendations.map((recommendation) => (
          <div className="item" key={recommendation.id}>
            <blockquote className="quote">
              <p>
                <i className="fa fa-quote-left"></i>
                {recommendation.content}
              </p>
            </blockquote>
            <div className="row">
              <div className="col-4">
                <img src={recommendation.image} alt="" />
              </div>
              <div className="col-8">
                <p className="source">
                  <span className="name">{recommendation.name}</span>
                  <br />
                  <span className="title">{recommendation.designation}</span>
                </p>
              </div>
            </div>
          </div>
        ))}

        <p>
          <a
            className="more-link"
            href="https://www.linkedin.com/in/anuragbhattacharjee/"
          >
            <i className="fa fa-external-link-alt"></i>More on Linkedin
          </a>
        </p>
      </div>
    );
  }
}

export default Recommendations;
