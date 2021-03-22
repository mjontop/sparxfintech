import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  render() {
    if (this.props.lat) {
      const center = {
        lat: this.props.lat || 0,
        lng: this.props.lng || 0,
      };
      const zoom = 11;
    }
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "95%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDhFJ94P5fW1wrosLz93KwhO-5PipAEyNI" }}
          defaultCenter={this.center || this.props.center}
          defaultZoom={this.props.zoom}
          options={{
            styles: [{ stylers: [{ saturation: 50 }, { gamma: 0.5 }] }],
          }}
        >
          <AnyReactComponent lat={28.7041} lng={-77.1025} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
