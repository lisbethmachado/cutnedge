import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '90%',
  height: '80%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 32.715736,
            lng: -117.161087
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey
    }
  ))(MapContainer)
  
// export default GoogleApiWrapper({
    
//   apiKey: 'AIzaSyBrzW4VK5MxtTEexIzUt1gDqDU9ZQZKcNw'
// })(MapContainer);