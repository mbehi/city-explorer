import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

class Searching extends React.Component {
  constructor(props) {
    super(props);
    this.textBoxInput = React.createRef();
  }

  handleButtonClick = () => {
    this.props.handleSearch(this.textBoxInput.current.value);
    this.textBoxInput.current.value = '';
  }

  render(){
    return(
      <div>
        <InputGroup className="mb-1">
          <FormControl 
            ref={this.textBoxInput}
            placeholder="Enter the Desired City"
            aria-label="Enter the Desired City"
            aria-describedby="basic-addon1"
        />
        <InputGroup.Append>
          <Button onClick={this.handleButtonClick} variant="outline-secondary">Explore the World!</Button>
        </InputGroup.Append>
       </InputGroup>
      </div> 
    );
  }
}

export default Searching;