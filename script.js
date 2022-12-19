function matrix() {
  function generateRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  var s = window.screen;
  var q = document.querySelector("canvas");
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
  
  setInterval(function() {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, q.width, q.height);
    
    ctx.fillStyle = fillColor;
    p.map(function(v, i) {
      ctx.fillText(String.fromCharCode(3e4 + Math.random() * 33), i * 10, v);
      p[i] = v > 758 + Math.random() * 1e4 ? 0 : v + 10;
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
}
