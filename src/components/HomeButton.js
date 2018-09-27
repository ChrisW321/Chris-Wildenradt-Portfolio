import React from "react";
import Ionicon from "react-ionicons";
import { Fade } from "react-reveal";
import { Link } from 'react-router-dom'

class HomeButton extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(route);
  };

  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <Fade>
      <Link to="/">
        <Ionicon
          icon="md-home"
          color="#EEEEEE"
          fontSize="2.5em"
          beat={false}
          // onClick={() => this.handleRoute("/")}
          className="home-button"
        />
      </Link>
      </Fade>
    );
  }
}
export default HomeButton;
