# simplexnoise.js

This is a javascript port of the original java version implemented by Stefan Gustavson (http://staffwww.itn.liu.se/~stegu/simplexnoise/SimplexNoise.java).

It uses typed arrays for an extra speed boost. It's quite fast (see the example provided).

### Usage example

To check the example provided you have two option. Either by using `npm install`. This will install `node-static` package to serve static files in the node way. Then you can run:

```
node app.js
```
in the console. After this you can run the experiment from the browser by typing `localhost:3000`.

Another way is to run `index.html` directly.

### Basic usage
```javascript
var simplex = new NOISE.Simplex();
simplex.init();
simplex.noiseDetail(1, 0.5);
```

This will initialize the noise with some initial values the first one representing the `octaves`, the second one the `persistence`.

After intialization you have to call the basic `noise` function passing as parameters the `x`, `y`, `z`,`w` values, depending on the target corrdinate system used (2d, 3d, 4d).
For example:
```javascript
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
```

For a more complex use case please check my simplex noise powered minecraft experiment: www.esimov.com/experiments/javascript/minecraft_v2/
