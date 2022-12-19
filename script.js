function matrix() {
  var s = window.screen;
  var q = document.querySelector("canvas");
  var ctx = q.getContext("2d");
  
  q.width = s.width;
  q.height = s.height;
  
  var p = [];
  var fillColor = "green";
  for (var i = 0; i < 256; p[i++] = 1);
  
  setInterval(function() {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, q.width, q.height);
    
    ctx.fillStyle = fillColor;
    p.map(function(v, i) {
      ctx.fillText(String.fromCharCode(3e4 + Math.random() * 33), i * 10, v);
      p[i] = v > 758 + Math.random() * 1e4 ? 0 : v + 10;
    });
  }, 33);
  
  setTimeout(function() {
    fillColor = "purple";
  }, 5000);
  
  setInterval(function() {
    if (fillColor === "purple") {
      fillColor = "blue";
    } else {
      fillColor = "purple";
    }
  }, 33);
}
