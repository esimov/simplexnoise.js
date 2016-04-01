var simplex = new NOISE.Simplex();
simplex.init();
simplex.noiseDetail(1, 0.5);

var canvas = document.getElementsByTagName('canvas')[0];

var ctx = canvas.getContext('2d');

var image = ctx.createImageData(canvas.width, canvas.height);
var data = image.data;

var height = 0;

setInterval(function() {  
  for (var x = 0; x < canvas.width; x++) {
    for (var y = 0; y < canvas.height; y++) {
      var value = Math.abs(simplex.noise(x / 100, y / 100, height));
      value *= 256;

      var cell = (x + y * canvas.width) * 4;
      data[cell] = data[cell + 1] = data[cell + 2] = value;
      data[cell] += Math.max(0, (25 - value) * 8);
      data[cell + 3] = 255; // alpha.
    }
  }  

  ctx.fillColor = 'black';
  ctx.fillRect(0, 0, 100, 100);
  ctx.putImageData(image, 0, 0);

  height += 0.05;
}, 1000/30);