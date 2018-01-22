import React, { Component } from 'react';

class Clouds extends Component {
  componentDidMount() {
      const canvas      = document.querySelector('.Clouds');
      const ctx         = canvas.getContext('2d');
      let yPosMax       = canvas.height / 1.2;
      let yPosMin       = canvas.height;
      let yPosStart     = canvas.height / 1.2;
      let xPosStart     = -100;
      let yPosChange    = 60;
      let xPosChangeMin = 125;
      let xPosChange    = 25;
      let yControl      = 20;
      let yControlMin   = 40;

      ctx.fillStyle = '#ecf0f1';
      let xPos = xPosStart;
      let yPos = yPosStart;
      ctx.beginPath();
      ctx.moveTo(xPos, yPos);
      while(xPos < canvas.width) {
        let lastX = xPos;
        xPos += Math.floor(Math.random() * xPosChange + xPosChangeMin);
        yPos += Math.floor(Math.random() * yPosChange - yPosChange / 2);
        while (yPos < yPosMin) {
          yPos += Math.floor(Math.random() * yPosChange / 2);
        }
        while (yPos > yPosMax) {
          yPos -= Math.floor(Math.random() * yPosChange / 2);
        }
        let controlX = (lastX + xPos) / 2;
        let controlY = yPos - Math.floor(Math.random() * yControl + yControlMin);
        ctx.quadraticCurveTo(controlX, controlY, xPos, yPos);
      }
      ctx.lineTo(canvas.width, yPos);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.fill();

  }

  render() {
    // console.log(document.getElementById('root'), document.querySelector('body'));
    let { height } = document.querySelector('body').getBoundingClientRect();
    let { width }  = document.querySelector('body').getBoundingClientRect();
    return <canvas className="Clouds" height={height} width={width}></canvas>;
  }
}

export default Clouds;
