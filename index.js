const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let from4x4;
let from32x32;

const request4x4 = fetch("./data/4x4.json")
  .then(response => response.json())
  .then(data => (from4x4 = data));

const request32x32 = fetch("./data/32x32.json")
  .then(response => response.json())
  .then(data => (from32x32 = data));

function drawData(data, colorType) {
  const scale = canvas.width / data.length;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (colorType === 'rgb') {
        ctx.fillStyle = `rgb(${data[i][j][0]},${data[i][j][1]},${data[i][j][2]})`;
      }
      if (colorType === 'hex') {
        ctx.fillStyle = `#${data[i][j]}`;
      }
      ctx.fillRect(i * scale, j * scale, scale, scale);
    }
  }
}

document.getElementById("32").addEventListener("click", () => {
    drawData(from32x32, 'rgb');
  });
  
document.getElementById("4").addEventListener("click", () => {
  drawData(from4x4, 'hex');
});

document.getElementById("img").addEventListener("click", () => {
  const img = new Image();
  img.src = "./data/image.png";
  ctx.drawImage(img, 0, 0, canvas.width, canvas.width);
});
