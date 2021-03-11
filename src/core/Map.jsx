import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  render() {

    const center = {
      lat: this.props.lat || 0,
      lng: this.props.lng || 0
    },
    const zoom = 11

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "95%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBS0y9kcZTxEcVxml-XbzCcuZd_LssrWQM" }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={{
            styles: [{ stylers: [{ saturation: 50 }, { gamma: 0.5 }] }],
          }}
        >
          <AnyReactComponent lat={center.lat} lng={center.lng} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
