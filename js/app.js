const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
ctx.fillStyle = "#2be271a6";
ctx.filter = "blur(5px)";

document.body.addEventListener("mousemove", (e) => {
  requestAnimationFrame(() => {
    setTimeout(() => {
      const { clientX, clientY } = e;
      ctx.beginPath();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.arc(clientX, clientY, 50, 0 * Math.PI, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }, 100);
  });
});
window.addEventListener("resize", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  ctx.fillStyle = "#2be271a6";
});
