import React from "react";
import Ionicon from "react-ionicons";
import { Collapse } from "react-collapse";
import Header from "./Header";
import MapContainer from "./MapContainer";
import NavCard from "./NavCard";

class Contact extends React.Component {
  state = {
    title: "Contact",
    wellHidden: true,
    wellText: "christopherkwildenradt@gmail.com",
    shake: false,
    icon: "ios-moon",
    mapType: "normal",
    githubColor: "#EEEEEE",
    style: {
      normal: [
        {
          featureType: "administrative",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#e3e3e3"
            }
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              color: "#cccccc"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.station.airport",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.station.airport",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#01AFF0"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }
      ]
    }
  };

  changeMap() {
    if (this.state.icon === "ios-sunny") {
      this.setState({ icon: "ios-moon" });
      this.setState({ mapType: "night" });
      this.setState({ githubColor: "#EEEEEE" });
    } else {
      this.setState({ icon: "ios-sunny" });
      this.setState({ mapType: "normal" });
      this.setState({ githubColor: "#222831" });
    }
  }

  handleRoute = route => {
    this.props.history.push(route);
  };

  copy() {
    const copyText = document.getElementById("contact-well-input");
    copyText.select();
    document.execCommand("Copy");
    this.deselectAll();
    this.setState({ shake: true });
    setTimeout(() => {
      this.setState({ shake: false });
    }, 750);
  }

  deselectAll() {
    var element = document.activeElement;

    if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
      if ("selectionStart" in element) {
        element.selectionEnd = element.selectionStart;
      }
      element.blur();
    }

    if (window.getSelection) {
      // All browsers, except IE <=8
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      // IE <=8
      document.selection.empty();
    }
  }

  handleClick(target) {
    if (target === "LinkedIn") {
      window.location.assign("https://www.linkedin.com/in/chriskw/");
    }

    if (target === "Github") {
      window.location.assign("https://github.com/ChrisW321");
    }

    if (target === "Email") {
      this.setState({ wellText: "christopherkwildenradt@gmail.com" });
      this.setState({ wellHidden: false });
    }

    if (target === "Phone") {
      this.setState({ wellText: "(831) 345-7627" });
      this.setState({ wellHidden: false });
    }

    if (target === "Text") {
      this.setState({ wellText: "Text is preferred" });
      this.setState({ wellHidden: false });
    }
  }

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const iconSize = "4em";

    const copyIcon = (
      <div className="contact-icon-copy-container">
        <Ionicon
          icon="ios-copy"
          color="#222831"
          fontSize="2em"
          beat={false}
          shake={this.state.shake}
          onClick={() => this.copy()}
          className="contact-icon-copy"
        />
      </div>
    );

    const linkedInIcon = (
      <Ionicon
        icon="logo-linkedin"
        color="#0077B5"
        fontSize={iconSize}
        beat={false}
        shake={false}
        onClick={() => this.handleClick("LinkedIn")}
        className="contact-icon"
      />
    );

    const callIcon = (
      <Ionicon
        icon="ios-call"
        color="#01E64E"
        fontSize={iconSize}
        beat={false}
        onClick={() => this.handleClick("Phone")}
        className="contact-icon"
      />
    );

    const mailIcon = (
      <Ionicon
        icon="ios-mail"
        color="#D64A3A"
        fontSize={iconSize}
        beat={false}
        onClick={() => this.handleClick("Email")}
        className="contact-icon"
      />
    );

    const githubIcon = (
      <Ionicon
        icon="logo-github"
        color={"#222831"}
        fontSize={iconSize}
        beat={false}
        onClick={() => this.handleClick("Github")}
        className="contact-icon"
      />
    );

    return (
      <React.Fragment>
        {/* Header Message */}

        <Header title="Contact" icon="ios-contact" />
        <NavCard handleRoute={this.handleRoute} />
        {/* Greeting Message */}
        <MapContainer
          style={this.state.style}
          mapType={this.state.mapType}
          onClick={null}
        />
        <div className="contact-greeting-container">
          <h2 className="contact-greeting-heading">Hello! </h2>
          <p className="contact-greeting-body">
            I'd love to talk to you! <br /> Please send me an email <br /> and
            I'll get back to you <br /> as soon as possible.
          </p>
          <h2 className="contact-greeting-footer"> Chris </h2>
        </div>

        {/* Contact Information */}

        <Collapse isOpened={!this.state.wellHidden}>
          <div className="contact-well">
            <input id="contact-well-input" value={this.state.wellText} />
            {copyIcon}
          </div>
        </Collapse>

        {/* Contact Buttons */}

        <div className="contact-container">
          {githubIcon}
          {linkedInIcon}
          {callIcon}
          {mailIcon}
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
