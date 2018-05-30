import React, { Component } from "react";
import socketIOClient from "socket.io-client";

const socket = socketIOClient('http://192.168.8.102:4001');

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://192.168.8.102:4001",
      color: 'white',
      time: ''
    };
  }

  componentDidMount = () => {
    console.log('component mounted');
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }

  click1 = (e) => {
    console.log('client: ' +  + new Date())
    socket.emit('time', + new Date())
  }

  ///

  // adding the function
  setColor = (color) => {
    this.setState({ color })
  }

  ///

  render() {
    // testing for socket connections

    //const socket = socketIOClient(this.state.endpoint);
    socket.on('change color', (col) => {
      document.body.style.backgroundColor = col
    })

    socket.on('time', (tm) => {
      this.setState({ time: tm })
      console.log("socket.on('time'");
    })

    return (
      <div style={{ textAlign: "center" }}>

      <button onClick={() => this.click1('btn1') }>Button1: {this.state.time}</button>


        <button onClick={() => this.send() }>Change Color</button>

        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>

      </div>
    )
  }
}
export default App;
