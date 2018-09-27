export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export default function sketch (p) {
  // Daniel Shiffman
  // http://codingtra.in

  let space;
  let cols;
  let rows;
  let resolution = 5;
  let canvas;

  function setup() {
      let canvas = createCanvas(400, 400);
      canvas.parent('sketch-holder');
      cols = width / resolution;
      rows = height / resolution;
      
      space = make2DArray(cols, rows);
          for (let i = 0; i < cols; i++) {
              for (let j = 0; j < rows; j++) {
                  space[i][j] = floor(random(2));
      }
    }
  }

  function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }

  function mousePressed() {
      setup();
  }

  function draw() {
    background(0);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;
          
        if (space[i][j] == 1) {
          fill("white");
          stroke(0);
          rect(x, y, resolution - 1, resolution - 1);
        }
      }
    }

    let next = make2DArray(cols, rows);

    // Compute next based on space
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = space[i][j];
        // Count live neighbors!
        let sum = 0;
        let neighbors = countNeighbors(space, i, j);

        if (state == 0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }

    space = next;

  }

  function countNeighbors(space, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
        sum += space[col][row];
      }
    }
    sum -= space[x][y];
    return sum;
  }
}