import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: this.props.lat,
      lng: this.props.long
    },
    zoom: 11,
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "95%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBS0y9kcZTxEcVxml-XbzCcuZd_LssrWQM" }}
          defaultCenter={this.props.center}
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
