import React from "react";
import projectImage from "./images/webpod.png";
import weddingImage from "./images/wedding.png";
import flaskImage from "./images/flask.jpg";
import reactNativeImage from "./images/react-native.png";
import translateImage from "./images/translate.jpg";
import camScannerImage from "./images/camscan.jpg";
import "./index.css";

const LatestProjects = () => {
  return (
    <div className="content">
      <div className="item featured text-center">
        <div className="featured-image has-ribbon">
          <a href={projectImage}>
            <img
              className="img-fluid project-image rounded shadow-sm"
              src={projectImage}
              alt="project name"
            />
          </a>
          <div className="ribbon">
            <div className="text">New</div>
          </div>
        </div>

        <h3 className="title mb-3">
          <a
            href="http://webpod.anuragbhattacharjee.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WebPod by Anurag
          </a>
        </h3>

        <div className="desc text-justify">
          <p>
            Covid-19 has changed a lot of practices. We are getting used to work
            from home. Whereas it's very convenient in some ways but it's also
            very easy to get distracted when working alone. Specially when a
            addiction like social media is always poking us to keep looking at
            it. <br />
            So, to increase productivity, I have been practicing to detox myself
            from social media platforms. After a few weeks of practicing it I
            don't feel the urge to look at social medias any more. Rather it
            seems like a burden and I have seen how much productive time I could
            manage by just opracticing some simple rules. I have also written a
            blog on it.{" "}
            <a
              href="https://medium.com/@anuragbhattacharjee/social-media-multitasking-is-affecting-our-brain-976f98f72f2e"
              target="_blank"
            >
              Social media & multitasking is affecting our brain 🧠
            </a>
            {"   "}.
            <br />
            Though, I could easily avoid all the nuisense in the social medias,
            one thing I couldn't avoid is going to Youtube to listen music while
            coding. And Youtube also uses the same techniques to keeps it's
            users attracrted to it's platform and keeps suggesting all the
            lucrative videos that I would like to watch. And it's a productivity
            killer. So I built a WebPod which will search music for me and play
            without any distraction. I mean Why Noy? <span role="img">🤷🏻‍♂️</span>
          </p>
        </div>
        <a
          href="https://github.com/anuragbhattacharjee/webpod"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-star"></i> Star my project
        </a>
      </div>
      <hr className="divider" />

      <div className="item row">
        <a
          className="col-md-4 col-12"
          href={weddingImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid project-image rounded shadow-sm"
            src={weddingImage}
            alt="SwarnAnurag Wedding"
          />
        </a>
        <div className="desc col-md-8 col-12">
          <h3 className="title">
            <a
              href="https://anuragbhattacharjee.github.io/swarnanurag-wedding"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Wedding Invitation Website
            </a>
          </h3>
          <p className="mb-2 text-justify">
            I made a website to countdown the wedding day and give details about
            our wedding venue and timing. This website also includes the story
            of how we met and a timeline of our memorable dates. I also added
            some memorable photos of our family first meeting each other.{" "}
            <span role="img">😻</span>
          </p>
          <p>
            <a
              className="more-link"
              href="https://github.com/anuragbhattacharjee/swarnanurag-wedding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-external-link-alt"></i>See in github
            </a>
          </p>
        </div>
      </div>

      <div className="item row">
        <a
          className="col-md-4 col-12"
          href={flaskImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid project-image rounded shadow-sm"
            src={flaskImage}
            alt="Flask Structure"
          />
        </a>
        <div className="desc col-md-8 col-12">
          <h3 className="title">
            <a
              href="https://github.com/anuragbhattacharjee/flask-structure"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flask Project Skeleton
            </a>
          </h3>
          <p className="mb-2 text-justify">
            While developing the NLU microservice for my current job in
            ChatLeads I did feel that there is no well stublished structure for
            maintaining Flask projects. One obvious reason is that usually big
            projects in python are usually made in Django. But when the project
            grew back there was no option for me to go back and rebuilt it. So I
            built a structure that can be used as a boiler plate of any Flask
            project.
          </p>
          <p>
            <a
              className="more-link"
              href="https://github.com/anuragbhattacharjee/flask-structure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-external-link-alt"></i>See in github
            </a>
          </p>
        </div>
      </div>

      <div className="item row">
        <a
          className="col-md-4 col-12"
          href={reactNativeImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid project-image rounded shadow-sm"
            src={reactNativeImage}
            alt="React Native Structure"
          />
        </a>
        <div className="desc col-md-8 col-12">
          <h3 className="title">
            <a
              href="https://github.com/anuragbhattacharjee/rn_seed_navigation_login"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Native Boiler-plate
            </a>
          </h3>
          <p className="mb-2 text-justify">
            React Native Boilerplate with authentication screens and app screens
            with switch navigation and stack navigation This can be a starting
            point for a react native application. From this project you can
            learn:
          </p>
          <ol>
            <li>How to implement SafeAreaView</li>
            <li>How to design the screen with Flex</li>
            <li>
              How to implement different Navigators and how to customise them
            </li>
            <li>How to organise an RN App in components & how to reuse them</li>
            <li>How to pass props and how to manage states</li>
          </ol>
          <p>
            <a
              className="more-link"
              href="https://github.com/anuragbhattacharjee/rn_seed_navigation_login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-external-link-alt"></i>See in github
            </a>
          </p>
        </div>
      </div>

      <div className="item row">
        <a
          className="col-md-4 col-12"
          href={translateImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid project-image rounded shadow-sm"
            src={translateImage}
            alt="Flask Translator"
          />
        </a>
        <div className="desc col-md-8 col-12">
          <h3 className="title">
            <a
              href="https://github.com/anuragbhattacharjee/google_translator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flask Translator
            </a>
          </h3>
          <p className="mb-2 text-justify">
            Python project for translating a text list in desired language using
            google API
          </p>
          <p>
            <a
              className="more-link"
              href="https://github.com/anuragbhattacharjee/google_translator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-external-link-alt"></i>See in github
            </a>
          </p>
        </div>
      </div>

      <div className="item row">
        <a
          className="col-md-4 col-12"
          href={camScannerImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid project-image rounded shadow-sm"
            src={camScannerImage}
            alt="Flask Translator"
          />
        </a>
        <div className="desc col-md-8 col-12">
          <h3 className="title">
            <a
              href="https://github.com/anuragbhattacharjee/camscanner-seed"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ionic App to Scan Text using Camera
            </a>
          </h3>
          <p className="mb-2 text-justify">
            Python project for translating a text list in desired language using
            google API
          </p>
          <p>
            <a
              className="more-link"
              href="https://github.com/anuragbhattacharjee/camscanner-seed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-external-link-alt"></i>See in github
            </a>
          </p>
        </div>
      </div>

      <a
        href="https://github.com/anuragbhattacharjee"
        target="_blank"
        rel="noopener noreferrer"
      >
        More on GitHub <i className="fa fa-chevron-right pt-1"></i>
      </a>
    </div>
  );
};

export default LatestProjects;
