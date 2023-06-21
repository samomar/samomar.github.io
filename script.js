function matrix() {
  function generateRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function updateColors() {
    color1 = generateRandomColor();
    color2 = generateRandomColor();
    color3 = generateRandomColor();
  }

  var s = window.screen;
  var q = document.getElementById("q");
  var ctx = q.getContext("2d");

  q.width = s.width;
  q.height = s.height;

  var p = [];
  var color1 = generateRandomColor();
  var color2 = generateRandomColor();
  var color3 = generateRandomColor();
  var fillColor = color1;
  var counter = 0;
  for (var i = 0; i < 256; p[i++] = 1);

  setInterval(updateColors, 3000);

  setTimeout(function () {
    setInterval(function () {
      ctx.fillStyle = "rgba(0,0,0,.05)";
      ctx.fillRect(0, 0, q.width, q.height);

      ctx.fillStyle = fillColor;
      ctx.font = "20px monospace"; // Increase the font size here
      p.map(function (v, i) {
        ctx.fillText(String.fromCharCode(3e4 + Math.random() * 33), i * 20, v); // Adjust the character size and position
        p[i] = v > 758 + Math.random() * 1e4 ? 0 : v + 20; // Adjust the character size increment
      });
      counter++;
      if (counter % 3 === 0) {
        fillColor = color1;
      } else if (counter % 3 === 1) {
        fillColor = color2;
      } else {
        fillColor = color3;
      }
    }, 33);
  }, 1111);
}

matrix();
