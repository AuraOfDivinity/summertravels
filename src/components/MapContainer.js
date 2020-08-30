import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "80%",
  height: "75%",
};

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        />
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDPprgDjafjgImq-P_xtsZpblwbhm7XDp0",
})(MapContainer);
