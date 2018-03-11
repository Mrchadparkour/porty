export default function () {
  const canvas      = document.querySelector('.Eyes');
  const ctx         = canvas.getContext('2d');
  let { height } = document.querySelector('html').getBoundingClientRect();
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

  // let canvX = canvas.getBoundingClientRect().x;
  // let canvY = canvas.getBoundingClientRect().y;

  let canvX = parseInt(canvas.style.left);
  let canvY = canvas.getBoundingClientRect().y;

  function moveEyes(e) {
    let { clientX, clientY } = e;
    if (eyeY > canvas.height / 4.5 && clientY < eyeY + canvY) eyeY -=2;
    else if (eyeY < startY && clientY > eyeY + canvY) eyeY+=2;

    console.log(clientX, " Should be less than ",  eyeX, " + ", canvX);
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
