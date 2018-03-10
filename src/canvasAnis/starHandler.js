export default function() {
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
