const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

const radiusSeconds = 125;
const radiusMinutes = 100;
const radiusHours = 75;
const radiusDial = 150;
const positionDial = {
  x : 175,
  y : 150,
};


function drawDial () {
  ctx.fillStyle = 'orange';
  ctx.beginPath();
  ctx.arc(positionDial.x, positionDial.y, radiusDial, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  for (let i = 0; i < 60; i++) {
    ctx.beginPath();
    if (i % 5 === 0) {    
        ctx.font = '25px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText(
          `${((i / 5 + 2) % 12) + 1}`, 
          positionDial.x + 98 * Math.cos(Math.PI * i / 30), 
          positionDial.y + 98 * Math.sin(Math.PI * i / 30)
        );
        ctx.moveTo(positionDial.x + 120 * Math.cos(Math.PI * i / 30), positionDial.y + 120 * Math.sin(Math.PI * i / 30));
        ctx.lineTo(positionDial.x + 200 * Math.cos(Math.PI * i / 30), positionDial.y + 200 * Math.sin(Math.PI * i / 30));
    } else {
        ctx.moveTo(positionDial.x + 140 * Math.cos(Math.PI * i / 30), positionDial.y + 140 * Math.sin(Math.PI * i / 30));
        ctx.lineTo(positionDial.x + 200 * Math.cos(Math.PI * i / 30), positionDial.y + 200 * Math.sin(Math.PI * i / 30));
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}


function drawSeconds() {
  ctx.beginPath();
  ctx.moveTo(positionDial.x, positionDial.y);
  ctx.lineTo(
    positionDial.x + radiusSeconds * Math.sin(Math.PI * (this.now.getSeconds() - 1)  / 30 + Math.PI * now.getMilliseconds() / (999 * 30)), 
    positionDial.y - radiusSeconds * Math.cos(Math.PI * (this.now.getSeconds() - 1) / 30 + Math.PI * now.getMilliseconds() / (999 * 30)));
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  ctx.stroke();
}


function drawMinutes() {
  ctx.beginPath();
  ctx.moveTo(positionDial.x, positionDial.y);
  ctx.lineTo(
    positionDial.x + radiusMinutes * Math.sin(Math.PI * now.getMinutes() / 30 + Math.PI * now.getSeconds() / (59 * 30 )), 
    positionDial.y - radiusMinutes * Math.cos(Math.PI * now.getMinutes() / 30 + Math.PI * now.getSeconds() / (59 * 30))
  );
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();
}


function drawHours() {
  ctx.beginPath();
  ctx.moveTo(positionDial.x, positionDial.y);
  ctx.lineTo(
    positionDial.x + radiusHours * Math.sin(Math.PI * (now.getHours() % 12 ) / 6 + Math.PI * now.getMinutes() / (59 * 6)), 
    positionDial.y - radiusHours * Math.cos(Math.PI * (now.getHours() % 12 ) / 6 + Math.PI * now.getMinutes() / (59 * 6))
  );
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();
}


function update () {
  now = new Date();
  drawDial();
  drawSeconds();
  drawMinutes();
  drawHours();
}


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  update();
    
  requestAnimationFrame(animate);
}

animate();
