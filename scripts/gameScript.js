const level = getLevel(
  localStorage.getItem('type'),
  localStorage.getItem('number')
);

var rightPicture = level.nonogram;

var rows = level.rows;
var columns = level.columns;

var currentPicture = [
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],

  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
];

var coordinates = [];

function draw() {
  let myFont = new FontFace(
    'SourceCodePro',
    'url(https://fonts.gstatic.com/s/sourcecodepro/v14/HI_XiYsKILxRpg3hIP6sJ7fM7Pqt8srDs-cq.woff2)'
  );
  myFont.load().then((font) => {
    document.fonts.add(font);
    var canvas = document.getElementById('nonogram');
    canvas.height = level.height;
    canvas.width = level.width;
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.strokeStyle = 'rgb(31, 37, 77)';
      ctx.font = 'bold 22px SourceCodePro';

      var height = getMax(columns);
      var width = getMax(rows);

      var x = width;
      var y = height;

      for (var i = 0; i < columns.length; i++) {
        for (var j = columns[i].length - 1; j > -1; j--) {
          ctx.fillStyle = 'rgb(173,216,230)';
          ctx.fillRect(x - 5, y - 30, 30, 35);
          ctx.fillStyle = 'rgb(75,135,184)';
          if (columns[i][j] > 9) {
            ctx.fillText(columns[i][j], x - 3, y - 5);
          } else {
            ctx.fillText(columns[i][j], x + 2, y - 5);
          }

          y -= 30;
        }
        y = height;
        x += 30;
      }

      x = width - 30;
      y += 30;

      for (var i = 0; i < rows.length; i++) {
        for (var j = rows[i].length - 1; j > -1; j--) {
          ctx.fillStyle = 'rgb(173,216,230)';
          ctx.fillRect(x - 5, y - 30, 30, 35);
          ctx.fillStyle = 'rgb(75,135,184)';
          if (rows[i][j] > 9) {
            ctx.fillText(rows[i][j], x - 3, y - 5);
          } else {
            ctx.fillText(rows[i][j], x + 2, y - 5);
          }
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
  });
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
  var canvas = document.getElementById('nonogram');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var coordinate = findCoordinate(event.layerX, event.layerY);
    if (coordinate != null) {
      drawSquare(ctx, coordinate);
      if (equalsPictures()) {
        alert('YOU WIN!!!');
      }
    }
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

  if (
    (i + 1 == coordinates.length || j + 1 == coordinates[i].length) &&
    (x > coordinates[i][j].x + 30 || y > coordinates[i][j].y + 30)
  ) {
    return null;
  }

  return { x: coordinates[i][j].x, y: coordinates[i][j].y, i, j };
}

function drawSquare(ctx, coordinate) {
  var current = currentPicture[coordinate.i][coordinate.j];
  if (current === null) {
    drawBlackSquare(ctx, coordinate);
  } else if (current == 1) {
    drawBlock(ctx, coordinate);
  } else if (current === 0) {
    drawWhiteSquare(ctx, coordinate);
  }
}

function drawBlackSquare(ctx, coordinate) {
  ctx.fillStyle = 'rgb(75,135,184)';
  ctx.fillRect(coordinate.x, coordinate.y, 30, 30);
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.strokeRect(coordinate.x, coordinate.y, 30, 30);
  currentPicture[coordinate.i][coordinate.j] = 1;
}

function drawWhiteSquare(ctx, coordinate) {
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(coordinate.x, coordinate.y, 30, 30);
  ctx.fillStyle = 'rgb(75,135,184)';
  ctx.strokeRect(coordinate.x, coordinate.y, 30, 30);
  currentPicture[coordinate.i][coordinate.j] = null;
}

function drawBlock(ctx, coordinate) {
  ctx.fillStyle = 'rgb(255,255,255)';
  ctx.fillRect(coordinate.x, coordinate.y, 30, 30);
  ctx.fillStyle = 'rgb(75,135,184)';
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(coordinate.x, coordinate.y);
  ctx.lineTo(coordinate.x + 30, coordinate.y + 30);
  ctx.moveTo(coordinate.x, coordinate.y + 30);
  ctx.lineTo(coordinate.x + 30, coordinate.y);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeRect(coordinate.x, coordinate.y, 30, 30);
  currentPicture[coordinate.i][coordinate.j] = 0;
}

function equalsPictures() {
  for (var i = 0; i < rightPicture.length; i++) {
    for (var j = 0; j < rightPicture[i].length; j++) {
      var temp;
      if (rightPicture[i][j] == 1) {
        temp = currentPicture[i][j] == 1;
      } else {
        temp = currentPicture[i][j] != 1;
      }
      if (!temp) return false;
    }
  }
  return true;
}
