var rightPicture = [
  [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
];

var currentPicture = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

var coordinates = [];

function draw() {
  var canvas = document.getElementById('nanogram');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var rows = [
      [2, 3],
      [3],
      [3, 2],
      [5, 1, 2],
      [7, 1],
      [1, 4],
      [5],
      [6],
      [3],
      [2],
    ];
    var columns = [
      [1, 4],
      [1, 3],
      [3],
      [2],
      [5],
      [4],
      [5],
      [2, 4],
      [5, 4],
      [4, 3],
    ];

    ctx.font = '30px serif';

    var height = getMax(columns);
    var width = getMax(rows);

    var x = width;
    var y = height;

    for (var i = 0; i < columns.length; i++) {
      for (var j = columns[i].length - 1; j > -1; j--) {
        ctx.fillStyle = 'rgb(189,189,189)';
        ctx.fillRect(x - 5, y - 30, 30, 35);
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillText(columns[i][j], x, y);

        y -= 30;
      }
      y = height;
      x += 30;
    }

    x = width - 30;
    y += 30;

    for (var i = 0; i < rows.length; i++) {
      for (var j = rows[i].length - 1; j > -1; j--) {
        ctx.fillStyle = 'rgb(189,189,189)';
        ctx.fillRect(x - 5, y - 30, 30, 35);
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillText(rows[i][j], x, y);
        x -= 30;
      }
      x = width - 30;
      y += 30;
    }

    x = width - 5;
    y = height + 5;

    for (var i = 0; i < rows.length; i++) {
      coordinates[i] = [];
      for (var j = 0; j < columns.length; j++) {
        ctx.strokeRect(x, y, 30, 30);
        coordinates[i][j] = { x, y };
        x += 30;
      }
      x = width - 5;
      y += 30;
    }
  }
}

function getMax(array) {
  return (
    Math.max.apply(
      null,
      array.map((arr) => arr.length)
    ) *
      30 +
    20
  );
}

function clickSquare() {
  var canvas = document.getElementById('nanogram');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var coordinate = findCoordinate(event.layerX, event.layerY);
    console.warn(coordinate);
    ctx.fillRect(coordinate.x, coordinate.y, 30, 30);
  }
}

function findCoordinate(x, y) {
  var i;

  for (i = 0; i < coordinates.length; i++) {
    if (y < coordinates[i][0].y) {
      break;
    }
  }

  i -= 1;

  var j;

  for (j = 0; j < coordinates[i].length; j++) {
    if (x < coordinates[i][j].x) {
      break;
    }
  }

  j -= 1;

  return { x: coordinates[i][j].x, y: coordinates[i][j].y, i, j };
}
