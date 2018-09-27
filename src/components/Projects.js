import React from "react";
import Header from "./Header";
import NavCard from "./NavCard";
import Project from "./Project";
import projects from "../assets/projects.json";

class Projects extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {
    // console.log(projects);
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    let projectsViews = projects.map((project, index) => {
      return <Project {...project} key={index} />;
    });
    return (
      <React.Fragment>
        <Header title="Projects" icon="ios-folder" />
        <NavCard handleRoute={this.handleRoute} />
        {projectsViews}
      </React.Fragment>
    );
  }
}

export default Projects;
