function matrix() {
  var s = window.screen;
  var q = document.querySelector("canvas");
  var ctx = q.getContext("2d");
  
  q.width = s.width;
  q.height = s.height;
  
  var p = [];
  var colors = ["AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Green","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke"];
  var color1 = colors[Math.floor(Math.random() * colors.length)];
  var color2 = colors[Math.floor(Math.random() * colors.length)];
  var fillColor = color1;
  for (var i = 0; i < 256; p[i++] = 1);
  
  setInterval(function() {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, q.width, q.height);
    
    ctx.fillStyle = fillColor;
    p.map(function(v, i) {
      ctx.fillText(String.fromCharCode(3e4 + Math.random() * 33), i * 10, v);
      p[i] = v > 758 + Math.random() * 1e4 ? 0 : v + 10;
    });
    
    if (fillColor === color1) {
      fillColor = color2;
    } else {
      fillColor = color1;
    }
  }, 33);
}
