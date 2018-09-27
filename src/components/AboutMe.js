import React from "react";
import "babel-polyfill";
import Header from "./Header";
import NavCard from "./NavCard";

import { Fade } from "react-reveal";

class AboutMe extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Header title="About Me" icon="md-person" />
        <NavCard handleRoute={this.handleRoute} />
        <Fade>
          <div className="about-me">
            <div className="about-me-headshot-container">
              <img
                className="about-me-headshot"
                alt="did not load"
                src="../images/ChrisW321.jpg"
              />
            </div>
            <div className="about-description">
              <p className="about-description-text">
                I'm a full-stack software engineer who enjoys building scalable,
                responsive, mobile-first web applications.
              </p>
              <p className="about-description-text">
                When I’m not on the job, I enjoy traveling the world from Southeast Asia all the way to Northern Africa.
              </p>
              <p className="about-description-text">
                I earned a B.S. in Business-Economics from the University
                of California, Los Angeles. I have experience working with: React,
                MongoDB, Express, Node.js, Git, Docker, Webpack, SQL,
                HTML5/CSS/JS, AWS (S3, EC2, Route 53, CloudFront), Jest/Enzyme,
                Mocha/Chai, Redux, jQuery, Heroku, CircleCI,
                MySQL, PostgreSQL, and Grunt.
              </p>
            </div>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default AboutMe;
