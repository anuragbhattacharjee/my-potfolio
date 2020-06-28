import React from "react";
import "./index.css";

const WorkExperience = () => {
  return (
    <div className="content">
      <div className="item">
        <h3 className="title">
          Senior Developer -{" "}
          <span className="place">
            <a
              href="https://chatleads.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ChatLeads
            </a>
          </span>
          <span className="year">(2018 - Present)</span>
        </h3>
        <p>
          ChatLeads, a startup company working to develop a cloud platform
          providing an ecosystem of chatbot development tools & integrations to
          help organizations design performance driven conversations. <br />I
          have developed the{" "}
          <span className="highlight">Natural Language Processing (NLP)</span>{" "}
          micro-service part of the application. I have worked on detecting
          language, parsing them based on parts of speech using NLTK and Spacy
          python library. Then based on some rules and position I detected
          entity and intents. I developed a technique to detect multi word
          product names as entity. I have also worked on detecting entity and
          intents from a speech. <br />
          Other than that I have also worked on building the dashboard of the
          platform which is built on laravel and Vue.js. My latest work is
          NinjaCommerce which is an uCommerce like experience inside messenger.
        </p>
        <ul className="tags">
          <li className="tag">Python</li>
          <li className="tag">Flask</li>
          <li className="tag">Laravel</li>
          <li className="tag">MySQL</li>
          <li className="tag">Vue.js</li>
          <li className="tag">JavaScript</li>
        </ul>
      </div>
      <div className="item">
        <h3 className="title">
          Software Engineer -{" "}
          <span className="place">
            <a
              href="https://www.iqvia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IQVIA
            </a>
          </span>{" "}
          <span className="year">(2015 - 2018)</span>
        </h3>
        <p>
          IQVIA, the global leader in Information Management and Consulting
          Services for the Pharmaceutical and Biomedical Industry. It provided
          me with an opportunity to work with an ample amount of data. I worked
          on data analysis and searching techniques. Other than that, I also
          made Key Performance Indicator (KPI) dashboard in pharma domain.
          Working on these dashboards has taught me about mining data from
          heterogeneous sources and use it as a valuable information for
          business intelligence.
        </p>
        <ul className="tags">
          <li className="tag">C#</li>
          <li className="tag">ASP.NET</li>
          <li className="tag">JavaScript</li>
          <li className="tag">AngularJs</li>
        </ul>
        {/* <ul className="list-inline dev-icons">
          <li className="list-inline-item" title="C#">
            <i class="fab fa-python"></i>
            <i class="fab fa-python"></i>
            <i class="fab fa-python"></i>
          </li>
        </ul> */}
      </div>

      <div className="item">
        <h3 className="title">
          Software Engineer -{" "}
          <span className="place">
            <a
              href="http://www.bracits.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BRAC IT
            </a>
          </span>{" "}
          <span className="year">(2014 - 2015)</span>
        </h3>
        <p>
          I started my career as a software engineer in BRAC IT Limited. BRAC
          Bank is a well-recognized international bank especially in south Asia.
          I have worked here in a project named ‘sbiCloud’ (Stitching BRAC
          International). It’s an ERP system. I worked here to build a system
          for the bank employees of all branches of BRAC Bank.
        </p>
        <ul className="tags">
          <li className="tag">Groovy</li>
          <li className="tag">Grails</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
