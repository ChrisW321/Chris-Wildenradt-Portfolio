import React from "react";
import "babel-polyfill";
import { Row, Col } from "react-flexbox-grid";

class NavCard extends React.Component {
  state = {
    hidden: true
  };

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Row
          around="xs"
          className={this.state.hidden ? "nav_container" : "nav_container"}
        >
          <Col className="nav-column" xs={5} sm={3} md={3} lg={3}>
            <button
              className="nav_button"
              onClick={() => this.props.handleRoute("AboutMe")}
            >
              ABOUT
            </button>
          </Col>
          <Col className="nav-column" xs={5} sm={3} md={3} lg={3}>
            <button
              className="nav_button"
              onClick={() => this.props.handleRoute("Projects")}
            >
              PROJECTS
            </button>
          </Col>
          <Col className="nav-column" xs={5} sm={3} md={3} lg={3}>
            <button
              className="nav_button"
              onClick={() => this.props.handleRoute("Resume")}
            >
              RESUME
            </button>
          </Col>
          <Col className="nav-column" xs={5} sm={3} md={3} lg={3}>
            <button
              className="nav_button"
              onClick={() => this.props.handleRoute("Contact")}
            >
              CONTACT
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NavCard;
