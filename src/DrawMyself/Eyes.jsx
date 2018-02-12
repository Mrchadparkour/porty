import React, { Component } from 'react';

class Eyes extends Component {
  componentDidMount() {
    console.log(window);
    const canvas      = document.querySelector('.Eyes');
    const ctx         = canvas.getContext('2d');
    const eyeWH       = canvas.height / 4.450727273;
    let eyeY          = canvas.height / 3.059875;
    let startY        = eyeY;
    let eyeX          = eyeWH;
    console.log(canvas, eyeWH);
    canvas.style.left = document.querySelector('body').getBoundingClientRect().height * .286458;

    function drawEyes(x, y) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillStyle = '#3f51b5'
      ctx.fillRect(x, y, eyeWH, eyeWH);
      ctx.fillRect(x + (eyeWH * 2.9), y, eyeWH, eyeWH);
      ctx.closePath();
    }

    function moveEyesLeft() {
      eyeX -= 4;
      drawEyes(eyeX, eyeY);
      if (eyeX > eyeWH / 2) {
        window.requestAnimationFrame(moveEyesLeft)
      } else {
        setTimeout(moveEyesUp, 500);
      }
    }

    function moveEyesUp() {
      eyeX += 4;
      eyeY -= 4;
      drawEyes(eyeX, eyeY);
      if (eyeY > canvas.height / 4.5) {
        window.requestAnimationFrame(moveEyesUp);
      } else {
        setTimeout(moveEyesDown, 500);
      }
    }

    function moveEyesDown() {
      eyeY += 4;
      if (eyeX < eyeWH) eyeX += 4;
      drawEyes(eyeX, eyeY);
      if (eyeY < startY) {
        window.requestAnimationFrame(moveEyesDown)
      } else {
        setTimeout(moveEyesLeft, 2000);
      }
    }
    moveEyesLeft();
  }

  render() {
    let { height, width } = document.querySelector('body').getBoundingClientRect();
    let adjHeight         = height / 3.84;
    let adjWidth          = adjHeight * 1.321858864;
    let leftDist          = height * .286458;
    return(
      <canvas style={{left: leftDist }} className="Eyes" height={adjHeight} width={adjWidth}></canvas>
    );
  }
}

export default Eyes;
