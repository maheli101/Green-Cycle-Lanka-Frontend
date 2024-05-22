import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';




function pickup() {

    const MapComponent = withScriptjs(withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
      )));


  return (
    <Container style={{width:'400px'}}>
       
        <Col>
        <h1 style={{textAlign:'center'}}>PICKUP REQUEST</h1>
        </Col>

        <div>
      {/* Other components */}
      <MapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=YOUR_API_KEY`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
       
    </Container>
  )
}

export default pickup