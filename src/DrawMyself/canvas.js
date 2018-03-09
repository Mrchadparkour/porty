export function cloudHandler(startY, color, className) {
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

export function starhandler() {
  let { height, width } = document.querySelector('body').getBoundingClientRect();
  const canvas = document.querySelector('.StarSky');
  const ctx    = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas,height);
  canvas.height = height;
  canvas.width  = width;
  let stars    = [];

  for (var i = 0; i < canvas.width; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      ratio: Math.random()
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.ratio, 0, 2 * Math.PI);
      ctx.fill();
    });
  }

  function update() {
    stars.map(star => {
      star.ratio = Math.random();
      return star;
    });
  }

  function pulse() {
    update();
    drawStars();
    requestAnimationFrame(pulse);
  }

  pulse();
}


export function eyeHandler() {
  const canvas      = document.querySelector('.Eyes');
  const ctx         = canvas.getContext('2d');
  let { height } = document.querySelector('body').getBoundingClientRect();
  let adjHeight         = height / 3.84;
  let adjWidth          = adjHeight * 1.321858864;
  let leftDist          = height * .286458;

  ctx.clearRect(0,0, canvas.width, canvas.height);
  canvas.height     = adjHeight;
  canvas.width      = adjWidth;
  canvas.attributes.style.value = `left: ${leftDist}px`;
  const eyeWH       = canvas.height / 4.450727273;
  let eyeY          = canvas.height / 3.059875;
  let startY        = eyeY;
  let eyeX          = eyeWH;
  canvas.style.left = document.querySelector('body').getBoundingClientRect().height * .286458;

  let canvX = canvas.getBoundingClientRect().x;
  let canvY = canvas.getBoundingClientRect().y;

  function moveEyes(e) {
    let { clientX, clientY } = e;
    if (eyeY > canvas.height / 4.5 && clientY < eyeY + canvY) eyeY -=2;
    else if (eyeY < startY && clientY > eyeY + canvY) eyeY+=2;

    if (eyeX > eyeWH / 2 && clientX < eyeX + canvX) eyeX-=2;
    else if (eyeX < eyeWH && clientX > eyeX + canvX) eyeX+=2;

    drawEyes();
  }

  function drawEyes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = '#3f51b5'
    ctx.fillRect(eyeX, eyeY, eyeWH, eyeWH);
    ctx.fillRect(eyeX + (eyeWH * 2.9), eyeY, eyeWH, eyeWH);
    ctx.closePath();
  }
  drawEyes();

  window.onmousemove = null;
  window.onmousemove = moveEyes;
}
