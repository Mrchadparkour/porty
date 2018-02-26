import React, { Component } from 'react';

class Eyes extends Component {
  render() {
    let { height } = document.querySelector('body').getBoundingClientRect();
    let adjHeight         = height / 3.84 / 3;
    let adjWidth          = adjHeight * 1.321858864;
    let leftDist          = height * .286458 / 3;
    return(
      <canvas style={{left: leftDist }} className="Eyes" height={adjHeight} width={adjWidth}></canvas>
    );
  }
}

export default Eyes;
