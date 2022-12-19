function matrix() {
  var s = window.screen;
  var q = document.querySelector("canvas");
  var ctx = q.getContext("2d");
  
  q.width = s.width;
  q.height = s.height;
  
  var p = [];
  var color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var color3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
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
    
    if (counter === 0) {
      fillColor = color2;
      counter = 1;
    } else if (counter === 1) {
      fillColor = color3;
      counter = 2;
    } else {
      fillColor = color1;
      counter = 0;
    }
  }, 33);
}
