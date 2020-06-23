import React from "react";
import "./index.css";

const Blogs = () => {
  return (
    <div className="content">
      <p>
        You can use Sascha Depold's{" "}
        <a href="https://github.com/sdepold/jquery-rss" target="_blank">
          jQuery RSS plugin
        </a>{" "}
        to pull in your blog post feeds.
      </p>
      <div id="rss-feeds" className="content"></div>
    </div>
  );
};

export default Blogs;
