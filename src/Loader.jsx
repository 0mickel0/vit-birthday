import React, { Component } from 'react';

import './App.scss';

import bruh from './assets/bruh.gif';

class Loader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="loader">
        <img src={bruh} className="auto-width" alt="logo" />
      </div>
    );
  }
}

export default Loader;
