import React, { Component } from 'react';

class Clouds extends Component {
  render() {
    let { className } = this.props;
    let { height, width } = document.querySelector('body').getBoundingClientRect();
    return <canvas className={className} height={height /3} width={width}></canvas>;
  }
}

export default Clouds;
