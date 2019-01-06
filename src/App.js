import React, { Component } from 'react';
import './styles/App.scss';
import logo from '@images/thecarecloud.png'
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World!
        <img src={logo} alt="" />
      </div>
    );
  }
}

export default App;
