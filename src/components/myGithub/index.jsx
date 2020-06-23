import React from "react";
import GitHubCalendar from "react-github-calendar";
// import "./index.css";

const MyGithub = () => {
  const defaultTheme = {
    background: "#fafafc",
    // text: "#fafafc",
    grade4: "#196127",
    grade3: "#239a3b",
    grade2: "#7bc96f",
    grade1: "#c6e48b",
    grade0: "#ebedf0",
  };

  return (
    <div className="content">
      {/* <div id="github-graph" className="github-graph"></div> */}
      <GitHubCalendar username="anuragbhattacharjee" theme={defaultTheme} />
    </div>
  );
};

export default MyGithub;
