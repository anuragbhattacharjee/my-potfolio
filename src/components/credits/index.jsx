import React from "react";

const Credits = () => {
  return (
    <div className="content">
      <ul className="list-unstyled pb-2">
        <li>
          Designed and Developed in{" "}
          <span style={{ color: "#61dafb" }}>
            {" "}
            <i className="fab fa-react"></i> React
          </span>{" "}
          <br />
          by Anurag Bhattacharjee
        </li>
        <hr />
        <li>
          Design Inspiration:
          <a
            href="https://twitter.com/3rdwave_themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Xiaoying Riley
          </a>
        </li>
        <hr />
        <li>
          Dark Mode Icons: "Icon made by
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Pixel perfect
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.flaticon.com
          </a>
          "
        </li>
      </ul>
    </div>
  );
};

export default Credits;
