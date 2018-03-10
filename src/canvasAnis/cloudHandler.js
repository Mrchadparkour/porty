export default function(startY, color, className) {
    const canvas      = document.querySelector('.' + className);
    const ctx         = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.height, canvas.width);
    let { height, width } = document.querySelector('body').getBoundingClientRect();
    canvas.height     = height;
    canvas.width      = width;
    let yPosMax       = canvas.height / startY;
    let yPosMin       = canvas.height;
    let yPosStart     = canvas.height / 1.2;
    let xPosStart     = -100;
    let yPosChange    = 60;
    let xPosChangeMin = 125;
    let xPosChange    = 25;
    let yControl      = 20;
    let yControlMin   = 40;

    if (!color) color = '#ecf0f1';
    ctx.fillStyle = color;
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
