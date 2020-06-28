import React, { useState, useEffect } from "react";
import "./index.css";

const skills = [
  { id: 1, title: "Python & Flask", level: "Intermediate", completed: 70 },
  { id: 2, title: "C#", level: "Intermediate", completed: 70 },
  { id: 2, title: "Laravel", level: "Intermediate", completed: 70 },
  { id: 3, title: "JavaScript", level: "Advanced", completed: 90 },
  { id: 3, title: "Node.js", level: "Intermediate", completed: 70 },
  { id: 4, title: "Vue.js", level: "Advanced", completed: 80 },
  { id: 5, title: "React", level: "Intermediate", completed: 60 },
  { id: 6, title: "MySql", level: "Introductory", completed: 60 },
  { id: 7, title: "MongoDB", level: "Introductory", completed: 60 },
  { id: 8, title: "Linux", level: "Intermediate", completed: 70 },
];

const Skills = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(completed), 2000);
  }, []);

  return (
    <div className="content">
      <p className="intro">Skills that I love to work on.</p>
      <p>
        Server Side: <i className="fab fa-python"></i>{" "}
        <i className="fab fa-laravel"></i> <span>C#</span>{" "}
        <i className="fab fa-node-js"></i>
      </p>
      <p>
        Front End: <i className="fab fa-vuejs"></i>{" "}
        <i className="fab fa-react"></i> <i className="fab fa-js-square"></i>
      </p>
      <p>
        DB <i className="fas fa-database"></i> : <span>MySql</span>,{" "}
        <span>MongoDB</span>
      </p>
      <p>
        OS: <i className="fab fa-linux"></i> <i className="fab fa-apple"></i>{" "}
        <i className="fab fa-windows"></i>
      </p>
      <div className="skillset">
        {skills.map((skill, idx) => (
          <div className="item" key={idx}>
            <h3 className="level-title">
              {skill.title}
              <span
                className="level-label"
                data-toggle="tooltip"
                data-placement="left"
                data-animation="true"
                title={skill.completed + "%"}
              >
                <i className="fa fa-info-circle"></i>
                {skill.level}
              </span>
            </h3>
            <div className="level-bar">
              <div
                className="level-bar-inner"
                style={{ width: `${skill.completed}%` }}
              ></div>
            </div>
          </div>
        ))}
        <p>
          <a
            className="more-link"
            href="https://www.linkedin.com/in/anuragbhattacharjee/"
          >
            <i className="fa fa-external-link-alt"></i>More on LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Skills;
