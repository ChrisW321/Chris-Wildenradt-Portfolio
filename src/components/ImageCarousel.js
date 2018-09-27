import React from "react";
// import { Fade } from "react-reveal";
import { Carousel } from "react-bootstrap";

class ImageCarousel extends React.Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
        <div className="carousel_container">
        <Carousel interval={0} controls={true} indicators={false}>
          <Carousel.Item>
            <img alt="did not load" src="../images/missing.jpg" />
            {/* <Carousel.Caption id="carousel-caption">
              <h3>Hi, I'm Nick!</h3>
              <p>
                Welcome to my site.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img alt="did not load" src="../images/missing.jpg" />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img alt="did not load" src="../images/missing.jpg" />
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        </div>
    );
  }
}

export default ImageCarousel;
