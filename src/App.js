import React, { useState } from "react";
import "./App.css";

// For dark mode
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./services/theme";
import { GlobalStyle } from "./services/global";

import Navbar from "./components/navbar/index";
import LatestProjects from "./components/latestProjects";
import AboutMe from "./components/aboutMe";
import WorkExperience from "./components/workExperience";
import MyGithub from "./components/myGithub";
import BasicInformation from "./components/basicInformation";
import Skills from "./components/skills";
import Recommendations from "./components/recommendations";
import Education from "./components/education";
import Languages from "./components/languages";
import Blogs from "./components/blogs";
import Entertainments from "./components/entertainments";
import Credits from "./components/credits";

function App() {
  const [theme, setTheme] = useState("dark");

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <div className="App">
          <header className="header text-center">
            <h1 className="blog-name pt-lg-4 mb-0">Anurag Bhattacharjee</h1>
            <Navbar theme={theme} onToggleTheme={toggleTheme} />
          </header>
          <div className="main-wrapper">
            <div className="container-fluid sections-wrapper">
              <div className="row">
                {/* Primary Section  */}
                <div className="primary col-lg-8 col-12">
                  <section className="about section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">About Me</h2>
                      <AboutMe />
                    </div>
                  </section>

                  <section className="experience section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">Work Experience</h2>
                      <WorkExperience />
                    </div>
                  </section>

                  <section className="blogs section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">Latest Blog Posts</h2>
                      <Blogs />
                    </div>
                  </section>

                  <section className="latest section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">Projects I built for myself</h2>
                      <LatestProjects />
                    </div>
                  </section>

                  <section className="github section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">My GitHub</h2>
                      <MyGithub />
                    </div>
                  </section>
                </div>

                {/* Secondary Section */}

                <div className="secondary col-lg-4 col-12">
                  <aside className="info aside section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading sr-only">Basic Information</h2>
                      <BasicInformation />
                    </div>
                  </aside>

                  <aside className="skills aside section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">Skills</h2>
                      <Skills />
                    </div>
                  </aside>

                  <aside className="recommendations aside section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">Recommendations</h2>
                      <Recommendations />
                    </div>
                  </aside>

                  <aside className="education aside section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">Education</h2>
                      <Education />
                    </div>
                  </aside>

                  <aside className="languages aside section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">Languages</h2>
                      <Languages />
                    </div>
                  </aside>

                  {/* <aside className="blog aside section">
                  <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Latest Blog Posts</h2>
                  </div>
                </aside> */}

                  <aside className="entertainment music aside section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">Problem Solving</h2>
                      <Entertainments />
                    </div>
                  </aside>

                  <aside className="credits aside section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">Credits</h2>
                      <Credits />
                    </div>
                  </aside>
                </div>
              </div>
            </div>
            {/* <footer className="footer">
              <div className="container text-center">
                <small className="copyright">
                  Developed by Anurag Bhattacharjee
                </small>
              </div>
            </footer> */}
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
