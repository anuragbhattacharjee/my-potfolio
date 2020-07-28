import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import "./index.css";
import blogAltImage from "./blog-alt-image.jpeg";
import { medium } from "./rss";

class Blogs extends Component {
  state = {
    m: {},
    baseurl: "https://medium.com/@anuragbhattacharjee/",
  };

  componentDidMount() {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@anuragbhattacharjee/latest?format=json`
      )
      .then((res) => {
        const m = res.payload;
        console.log(m);
        this.setState({ m });
      });
  }

  imageLink = (imageId) => {
    return imageId !== ""
      ? `https://miro.medium.com/max/796/${imageId}`
      : blogAltImage;
  };

  render() {
    let posts = [];
    let Posts = {};
    if (_.isEmpty(this.m)) {
      Posts = { ...medium.payload.references.Post };
    } else {
      Posts = { ...this.m.payload.references.Post };
    }

    if (!_.isEmpty(medium)) {
      posts = Object.keys(Posts).map((index) => (
        <div className="item row" key={Posts[index].id}>
          <a
            className="col-md-4 col-12"
            href={this.state.baseurl + Posts[index].uniqueSlug}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-fluid project-image rounded shadow-sm"
              src={this.imageLink(Posts[index].virtuals.previewImage.imageId)}
              alt="project name"
            />
          </a>
          <div className="desc col-md-8 col-12">
            <h3 className="title">
              <a
                href={this.state.baseurl + Posts[index].uniqueSlug}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Posts[index].title}
              </a>
            </h3>
            <p className="mb-2">{Posts[index].content.subtitle}</p>
            <p>
              <a
                className="more-link"
                href={this.state.baseurl + Posts[index].uniqueSlug}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-external-link-alt"></i>Find out more
              </a>
            </p>
          </div>
        </div>
      ));
    }
    return <div className="content">{posts}</div>;
  }
}

export default Blogs;
