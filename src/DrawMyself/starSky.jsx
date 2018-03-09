import React, { Component } from 'react';

class StarSky extends Component {
  render() {
    let { height, width } = document.querySelector('body').getBoundingClientRect();
    return <canvas className="StarSky" height={height} width={width}></canvas>;
  }
}

export default StarSky;
