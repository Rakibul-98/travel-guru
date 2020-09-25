import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

    static defaultProps = {
      center: {
        lat: 21.427229,
        lng: 92.005806
      },
      zoom: 15
    };
  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '600px', width: '100%', marginTop:'50px' }}>

          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDsGf3LoAUBGbW58ctW4t1J-UWvjw7yml" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={21.427229}
              lng={92.005806}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default SimpleMap;