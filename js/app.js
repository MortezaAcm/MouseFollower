window.addEventListener("load", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  let radius = 50;

  const onResizeHandler = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "#2be271a6";
    ctx.filter = "blur(5px)";
    radius = 30;
  };

  const drawing = (x, y) => {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  };

  const showCircle = (event) => {
    setTimeout(() => {
      if (event.clientX) {
        const { clientX, clientY } = event;
        drawing(clientX, clientY);
      } else if (event.changedTouches) {
        const { clientX, clientY } = event.changedTouches[0];
        drawing(clientX, clientY);
      }
    }, 100);
  };

  onResizeHandler();
  document.body.addEventListener("mousemove", showCircle);
  document.body.addEventListener("touchmove", showCircle);
  window.addEventListener("resize", onResizeHandler);
});
