import React from "react";
import NavCard from "./NavCard";
import Blurb from "./Blurb";
import Footer from "./Footer";
import Header from "./Header";

import GithubCorner from "react-github-corner";
import { Fade } from "react-reveal";
import "babel-polyfill";

class App extends React.Component {
  state = {
    adjective: 0,
    verb: 0
  };

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <GithubCorner
          href="https://github.com/ChrisW321"
          className="corner"
          octoColor="#222831"
          bannerColor="#EEEEEE"
          size={175}
        />
        <Header
          title="Christopher Wildenradt"
          icon="ios-contact"
          buttonsHidden="true"
        />
        <NavCard handleRoute={this.handleRoute} />
        <h2 className="about-tagline">
          I'm an engineer
          <br />
          designing responsive
          <br />
          mobile-first web applications
        </h2>
        <Blurb />
        <Fade>
          <div>
            <h2 className="about-tagline-mobile">
              I'm an engineer
              <br />
              designing responsive
              <br />
              mobile-first web applications
            </h2>
          </div>
        </Fade>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
