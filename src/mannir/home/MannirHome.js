import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

export default class MannirHome extends Component {

  constructor(props) {
    super(props);

    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      foo: "",
    }
  }


  handleClick = (e, id) => {
    console.log('this is:', id);
  }

  handleCheck = (e, id) => {
    console.log('handleCheck')
  }

  render() {
    return (
      <div>

      <Checkbox
  label=""
  checked={this.props.checked}
  onCheck = {this.handleCheck('room1')}
  />


      <Button variant="raised" color="primary" onClick={(e) => this.handleClick(e, 'btn1')}>Room1</Button>
      <Button variant="raised" color="secondary" onClick={(e) => this.handleClick(e, 'btn2')}>Room2</Button>
      </div>
    );
  }
}
