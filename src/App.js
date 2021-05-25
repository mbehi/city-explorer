import React from 'react';

import City from './City.js';
import Searching from './Searching.js';
import Weather from './Weather.js';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Jumbotron } from 'react-bootstrap';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      weatherData: [],
    };
  }

  handleFormSearch = city => {
    axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${city}&format=json`)
    .then(response => response.data[0])
    .then(cityData => {
      this.setState({
        citySearch: cityData,
        cityErrorMessage: ''
      });
      this.setState({
        citySearch: '',
        cityErrorMessage: error.message
      });
    });
  }
  
  getWeatherData = async() => {
    try { 
      const weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`)
      this.setState({
        weatherData: weatherData.data
      })
    } catch(error){
      console.log('error found', error.message);
    }
  }

  getMovieData = location => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`, {
      params: {
        location: location
      }
    })
    .then(response => {
      this.setState({
        movieData: response.data,
        movieErrorMessage: ''
      });
    })
    .catch(error => {
      this.setState({
        movieData: '',
        movieErrorMessage: error.message
      });
    });
  }

  render() {
    return (
      <div className="city-explorer">
        <h1>Mohsin's City Explorer App</h1>
        <Searching 
      </div>
      // <>
      //   <h1>City Explorer</h1>
      //   <Form onSubmit={this.handleFormSubmit}>
      //     <Form.Group controlId="city">
      //       <Form.Label>City Name</Form.Label>
      //       <Form.Control value={this.state.city} onInput={e => this.setState({city: e.target.value})}></Form.Control>
      //     </Form.Group>
      //     <Button variant="primary" type="submit">
      //       Explore!
      //       </Button>
      //   </Form>
      //   { this.state.error ? <h3>{this.state.error}</h3> : ''}
      //   { this.state.cityData.lat !== undefined ? 
      //     <>
      //     <Jumbotron>
      //     <h3>{this.state.cityData.display_name}</h3>
      //     <h5>{this.state.cityData.lat}, {this.state.cityData.lon}</h5>
      //     <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`} alt={`Map of ${this.state.cityData.display_name}`}/>
      //     </Jumbotron>
      //     <Weather weatherData={this.state.weatherData}/>
      //   </>
      //   : ''};
      //   </>
    )
  }
}
export default App;
