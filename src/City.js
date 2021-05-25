import React from 'react';
import { Card } from 'react-bootstrap';

class City extends React.Component {
  render() {
    const lat = this.props.cityData.lat;
    const lon = this.props.cityData.lon;
    const displayName = this.props.cityData.display_name;

    return (
      <>
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>{displayName}</Card.Title>
            <Card.Text>City Latitude: {lat}</Card.Text>
            <Card.Text>Longitude: {lon}</Card.Text>
          </Card.Body>
          <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${lat},${lon}&zoom=12`}  />
        </Card>
      </>
    );
  }
}

export default City;