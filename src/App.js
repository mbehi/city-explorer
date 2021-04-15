import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <Form>
          <Form.Group controlId="city">
            <Form.Label>City Name</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">Explore!</Button>
        </Form>
        </>
    )
  }
}

export default App;
