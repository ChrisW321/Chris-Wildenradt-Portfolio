import React from "react";
import { Document, Page } from "react-pdf";
import Ionicon from "react-ionicons";
import resume from "../assets/_Christopher Wildenradt Resume.pdf";
import Header from "./Header";
import NavCard from "./NavCard";

class Resume extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  render() {
    const downloadButton = (
      <div className="resume-download-button">
        <a
          href={require("../assets/_Christopher Wildenradt Resume.pdf")}
          download="_Christopher Wildenradt Resume.pdf"
        >
          <p className="resume-download-button">Download my resume!</p>
          <Ionicon
            icon="md-download"
            color="#222831"
            fontSize="2em"
            beat={true}
            className="contact-icon-copy"
          />
        </a>
      </div>
    );
    const scale = window.innerWidth > 800 ? 0.6 : 0.5;
    return (
      <React.Fragment>
        <Header title="Resume" icon="ios-folder" />
        <NavCard handleRoute={this.handleRoute} />
        <div className="resume-container">
          {downloadButton}
          <Document className="resume" file={resume}>
            <Page pageNumber={1} renderTextLayer={false} scale={scale} />
          </Document>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
