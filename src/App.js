import React, { useState, useEffect } from "react";
import "./App.css";

// For dark mode
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./services/theme";
// import { GlobalStyle } from "./services/global";

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

function App() {
  // const theme = useTheme();

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        {/* <GlobalStyle /> */}
        <div className="App">
          <header className="header text-center">
            <h1 class="blog-name pt-lg-4 mb-0">Anurag Bhattacharjee</h1>
            <Navbar />
            {/* <ToggleMode /> */}
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
                      <h2 className="heading">Latest Projects</h2>
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
                      <h2 className="heading">Testimonials</h2>
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
                      <h2 className="heading">Favourite coding music</h2>
                      <Entertainments />
                    </div>
                  </aside>

                  <aside className="credits aside section">
                    <div className="section-inner shadow-sm rounded">
                      <h2 className="heading">Credits</h2>
                      <div className="content">
                        <ul className="list-unstyled pb-2">
                          <li>
                            <a href="https://getbootstrap.com/" target="_blank">
                              <i className="fa fa-external-link-alt"></i>
                              Bootstrap
                            </a>
                          </li>
                        </ul>

                        <hr />

                        <p className="pt-2">
                          This Bootstrap 4 portfolio template is handcrafted by
                          UX designer{" "}
                          <a
                            href="https://twitter.com/3rdwave_themes"
                            target="_blank"
                          >
                            Xiaoying Riley
                          </a>{" "}
                          at{" "}
                          <a
                            href="https://themes.3rdwavemedia.com/"
                            target="_blank"
                          >
                            3rd Wave Media
                          </a>{" "}
                          for developers and is <strong>FREE</strong> as long as
                          you keep the footer attribution link.
                        </p>

                        <a
                          className="btn btn-cta-primary btn-download"
                          href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap-portfolio-theme-for-web-developers/"
                          target="_blank"
                        >
                          <i className="fa fa-download"></i> I want to download
                        </a>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="container text-center">
              <small class="copyright">
                Designed with <i class="fas fa-heart"></i> by{" "}
                <a href="https://themes.3rdwavemedia.com" target="_blank">
                  Xiaoying Riley
                </a>{" "}
                for developers
              </small>
            </div>
          </footer>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
