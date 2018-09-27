import { GoogleApiWrapper } from "google-maps-react";
import GoogleMap from "./GoogleMap";
import React from "react";
// import { Fade } from "react-reveal";
export class MapContainer extends React.Component {
  render() {
    const style = {
      width: "100vw",
      height: "50vh",
      align: "center"
    };
    return (
      <div className="map-container" style={style}>
          <GoogleMap
            key={this.props.mapType}
            style={this.props.style}
            mapType={this.props.mapType}
            google={this.props.google}
          />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2XN8SPcbYQLyfKHgltf9Oa91c6KN8dk8"
})(MapContainer);
