(function (_0x5d8b23, _0x4cd1f8) {
  var _0x366950 = _0x13db,
    _0x3d6426 = _0x5d8b23();
  while (!![]) {
    try {
      var _0x5650dc =
        -parseInt(_0x366950(0x11f)) / 0x1 +
        -parseInt(_0x366950(0xe9)) / 0x2 +
        parseInt(_0x366950(0xfb)) / 0x3 +
        (parseInt(_0x366950(0x111)) / 0x4) *
          (-parseInt(_0x366950(0xe0)) / 0x5) +
        -parseInt(_0x366950(0x105)) / 0x6 +
        (parseInt(_0x366950(0xfd)) / 0x7) * (parseInt(_0x366950(0x11d)) / 0x8) +
        (parseInt(_0x366950(0x121)) / 0x9) * (parseInt(_0x366950(0xf3)) / 0xa);
      if (_0x5650dc === _0x4cd1f8) break;
      else _0x3d6426["push"](_0x3d6426["shift"]());
    } catch (_0x43ed40) {
      _0x3d6426["push"](_0x3d6426["shift"]());
    }
  }
})(_0x5c01, 0x8ab7e);
function HSVtoRGB(_0x3efd8e, _0x3466cd, _0x518fac) {
  var _0x35ebf2 = _0x13db,
    _0x217921,
    _0x5406db,
    _0x78ebcc,
    _0x4633c0,
    _0x5b6e29,
    _0x6c5f29,
    _0x4cdc06,
    _0x48f7ae;
  arguments[_0x35ebf2(0x103)] === 0x1 &&
    ((_0x3466cd = _0x3efd8e["s"]),
    (_0x518fac = _0x3efd8e["v"]),
    (_0x3efd8e = _0x3efd8e["h"]));
  (_0x4633c0 = Math[_0x35ebf2(0xf5)](_0x3efd8e * 0x6)),
    (_0x5b6e29 = _0x3efd8e * 0x6 - _0x4633c0),
    (_0x6c5f29 = _0x518fac * (0x1 - _0x3466cd)),
    (_0x4cdc06 = _0x518fac * (0x1 - _0x5b6e29 * _0x3466cd)),
    (_0x48f7ae = _0x518fac * (0x1 - (0x1 - _0x5b6e29) * _0x3466cd));
  switch (_0x4633c0 % 0x6) {
    case 0x0:
      (_0x217921 = _0x518fac), (_0x5406db = _0x48f7ae), (_0x78ebcc = _0x6c5f29);
      break;
    case 0x1:
      (_0x217921 = _0x4cdc06), (_0x5406db = _0x518fac), (_0x78ebcc = _0x6c5f29);
      break;
    case 0x2:
      (_0x217921 = _0x6c5f29), (_0x5406db = _0x518fac), (_0x78ebcc = _0x48f7ae);
      break;
    case 0x3:
      (_0x217921 = _0x6c5f29), (_0x5406db = _0x4cdc06), (_0x78ebcc = _0x518fac);
      break;
    case 0x4:
      (_0x217921 = _0x48f7ae), (_0x5406db = _0x6c5f29), (_0x78ebcc = _0x518fac);
      break;
    case 0x5:
      (_0x217921 = _0x518fac), (_0x5406db = _0x6c5f29), (_0x78ebcc = _0x4cdc06);
      break;
  }
  return {
    r: Math[_0x35ebf2(0xf2)](_0x217921 * 0xff),
    g: Math[_0x35ebf2(0xf2)](_0x5406db * 0xff),
    b: Math["round"](_0x78ebcc * 0xff),
  };
}
var grid = [],
  scl = 0x4,
  padding = 0x4,
  columns = 0x50,
  rows = 0xa0,
  buff,
  t = 0x0,
  playerBlock,
  nextBlock,
  vis,
  fullLine,
  cleartime = 0x0,
  placed = ![],
  staticCount = 0x0,
  linesCleared = 0x0,
  score = 0x0,
  gameOffset = 0x4 * scl,
  nextOffset,
  gameRes,
  placeSound,
  lineSound,
  gameMusic,
  pixelFont,
  gameOver = !![],
  paused = !![],
  startScreen,
  pauseScreen,
  aboutScreen,
  gameoverScreen,
  gameoverText,
  timeText = "00:00",
  levelSlider,
  levelText,
  difficulty = 0x1,
  sfxSlider1,
  sfxSlider2,
  musSlider1,
  musSlider2,
  filter,
  speed = 0.5,
  staticChance = 0x8,
  dupChance = 0.5,
  brick = [
    [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    [0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0],
    [0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0],
    [0x0, 0x1, 0x0, 0x2, 0x2, 0x0, 0x1, 0x0],
    [0x0, 0x1, 0x0, 0x2, 0x2, 0x0, 0x1, 0x0],
    [0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0],
    [0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0],
    [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
  ],
  staticbrick = [
    [0x2, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x2],
    [0x0, 0x1, 0x2, 0x1, 0x1, 0x2, 0x1, 0x0],
    [0x0, 0x2, 0x1, 0x1, 0x1, 0x1, 0x2, 0x0],
    [0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0],
    [0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0],
    [0x0, 0x2, 0x1, 0x1, 0x1, 0x1, 0x2, 0x0],
    [0x0, 0x1, 0x2, 0x1, 0x1, 0x2, 0x1, 0x0],
    [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x2],
  ],
  cols = [
    [0xff, 0x0, 0x0],
    [0x0, 0xff, 0x0],
    [0x0, 0x0, 0xff],
    [0xff, 0xff, 0x0],
    [0xff, 0xff, 0xff],
  ],
  blockType = [
    [
      [0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1, 0x1],
      [0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1, 0x1],
      [0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1, 0x1],
      [0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1, 0x1],
    ],
    [
      [0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x0, 0x2],
      [0x0, 0x0, 0x1, 0x0, 0x2, 0x0, 0x2, 0x1],
      [0x0, 0x2, 0x1, 0x2, 0x1, 0x1, 0x1, 0x0],
      [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x2, 0x1],
    ],
    [
      [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x1, 0x2],
      [0x0, 0x1, 0x1, 0x1, 0x2, 0x1, 0x2, 0x0],
      [0x0, 0x0, 0x0, 0x1, 0x0, 0x2, 0x1, 0x2],
      [0x0, 0x0, 0x0, 0x1, 0x1, 0x0, 0x2, 0x0],
    ],
    [
      [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x2, 0x1],
      [0x0, 0x1, 0x0, 0x2, 0x1, 0x1, 0x1, 0x0],
      [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x2, 0x1],
      [0x0, 0x1, 0x0, 0x2, 0x1, 0x1, 0x1, 0x0],
    ],
    [
      [0x0, 0x1, 0x1, 0x1, 0x1, 0x0, 0x2, 0x0],
      [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2],
      [0x0, 0x1, 0x1, 0x1, 0x1, 0x0, 0x2, 0x0],
      [0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2],
    ],
    [
      [0x0, 0x0, 0x1, 0x0, 0x2, 0x0, 0x1, 0x1],
      [0x0, 0x1, 0x1, 0x0, 0x1, 0x1, 0x1, 0x2],
      [0x1, 0x0, 0x0, 0x1, 0x1, 0x1, 0x2, 0x1],
      [0x0, 0x0, 0x0, 0x1, 0x0, 0x2, 0x1, 0x1],
    ],
    [
      [0x0, 0x0, 0x1, 0x0, 0x2, 0x0, 0x3, 0x0],
      [0x0, 0x0, 0x0, 0x1, 0x0, 0x2, 0x0, 0x3],
      [0x0, 0x0, 0x1, 0x0, 0x2, 0x0, 0x3, 0x0],
      [0x0, 0x0, 0x0, 0x1, 0x0, 0x2, 0x0, 0x3],
    ],
  ],
  blockWidth = [
    [0x1, 0x1, 0x1, 0x1],
    [0x1, 0x2, 0x1, 0x2],
    [0x1, 0x2, 0x1, 0x2],
    [0x2, 0x1, 0x2, 0x1],
    [0x2, 0x1, 0x2, 0x1],
    [0x2, 0x1, 0x2, 0x1],
    [0x3, 0x0, 0x3, 0x0],
  ],
  blockHeight = [
    [0x1, 0x1, 0x1, 0x1],
    [0x2, 0x1, 0x2, 0x1],
    [0x2, 0x1, 0x2, 0x1],
    [0x1, 0x2, 0x1, 0x2],
    [0x1, 0x2, 0x1, 0x2],
    [0x1, 0x2, 0x1, 0x2],
    [0x0, 0x3, 0x0, 0x3],
  ];
function preload() {
  var _0x2281ed = _0x13db;
  soundFormats(_0x2281ed(0xf1), "ogg"),
    (placeSound = loadSound("sounds/place")),
    (lineSound = loadSound(_0x2281ed(0xdb))),
    (gameMusic = loadSound(_0x2281ed(0x117))),
    (pixelFont = loadFont(_0x2281ed(0xea)));
}
function swiped(_0x5efcd8) {}
function Block(_0x342ee9, _0x30102f) {
  var _0x75bc08 = _0x13db;
  (this[_0x75bc08(0x112)] = createVector(0x0, 0x0)),
    (this[_0x75bc08(0x11a)] = speed),
    (this[_0x75bc08(0x113)] = null),
    (this["grid"] = []),
    (this[_0x75bc08(0xf8)] = 0x0),
    (this[_0x75bc08(0x104)] = 0x0),
    (this[_0x75bc08(0x115)] = ![]),
    (this["rot"] = 0x0),
    (this["rotReset"] = !![]),
    (this[_0x75bc08(0x116)] = function () {
      var _0x202b35 = _0x75bc08;
      this[_0x202b35(0xe3)] = [];
      for (let _0x3019c6 = 0x0; _0x3019c6 < 0x20; _0x3019c6++) {
        this[_0x202b35(0xe3)]["push"](new Array(0x20)[_0x202b35(0x119)](null));
      }
    }),
    (this["renderBlock"] = function () {
      var _0x584b37 = _0x75bc08;
      this[_0x584b37(0x116)](),
        AddBlock(
          this["grid"],
          0x0,
          0x1f,
          blockType[this[_0x584b37(0xf8)]][this["rot"]],
          this[_0x584b37(0x104)],
          this[_0x584b37(0x115)]
        ),
        renderFromArray(this[_0x584b37(0xe3)], this[_0x584b37(0x113)]);
    }),
    (this[_0x75bc08(0xd9)] = function () {
      var _0x2d8260 = _0x75bc08;
      (this["static"] = ![]),
        (this[_0x2d8260(0x113)] = createImage(0x20, 0x20)),
        (this["type"] = int(random(blockType[_0x2d8260(0x103)]))),
        (this[_0x2d8260(0x104)] = int(random(0x4))),
        (this["pos"] = createVector(
          int(columns / 0x2 - (blockWidth[this[_0x2d8260(0xf8)]][0x0] + 0x1)),
          0x0
        )),
        (staticCount += 0x1),
        staticCount == staticChance &&
          ((this[_0x2d8260(0x115)] = !![]), (staticCount = 0x0)),
        this[_0x2d8260(0xe4)]();
    }),
    (this["show"] = function () {
      var _0x48f91f = _0x75bc08;
      image(
        this[_0x48f91f(0x113)],
        this[_0x48f91f(0x112)]["x"] * scl + gameOffset,
        (this[_0x48f91f(0x112)]["y"] - 0x20) * scl,
        0x20 * scl,
        0x20 * scl
      );
    }),
    (this[_0x75bc08(0xdd)] = function () {
      var _0x4ff845 = _0x75bc08;
      let _0x55667d = Math[_0x4ff845(0xf5)](this["pos"]["x"]),
        _0x52f57a = Math["floor"](this[_0x4ff845(0x112)]["y"]);
      if (_0x52f57a + 0x1 >= rows) placed = !![];
      else
        for (let _0x39573d = 0x0; _0x39573d < 0x4; _0x39573d++) {
          let _0x42f04c = _0x39573d * 0x2,
            _0x31cdf3 =
              blockType[this[_0x4ff845(0xf8)]][this[_0x4ff845(0xf9)]][
                _0x42f04c
              ],
            _0x7ffce2 =
              blockType[this[_0x4ff845(0xf8)]][this["rot"]][_0x42f04c + 0x1],
            _0x5390c8 = int(_0x55667d + _0x31cdf3 * 0x8),
            _0x8594dd = int(_0x52f57a - _0x7ffce2 * 0x8);
          if (_0x8594dd <= 0x0) continue;
          for (let _0xfbbb3b = 0x0; _0xfbbb3b < 0x8; _0xfbbb3b++) {
            grid[_0x8594dd + 0x1][_0x5390c8 + _0xfbbb3b] != null &&
              (grid[_0x8594dd][_0x5390c8 + _0xfbbb3b] &&
                (this["pos"]["y"] -= 0x1),
              (placed = !![]));
          }
        }
      if (placed) {
        this[_0x4ff845(0x112)]["y"] -
          0x8 * (blockHeight[this["type"]][this[_0x4ff845(0xf9)]] + 0x1) <
          0x0 &&
          ((gameOver = !![]),
          gameOverScore(),
          (gameoverScreen[_0x4ff845(0xe2)] = !![]));
        AddBlock(
          grid,
          _0x55667d,
          min(_0x52f57a, rows - 0x1),
          blockType[this[_0x4ff845(0xf8)]][this[_0x4ff845(0xf9)]],
          this[_0x4ff845(0x104)],
          this[_0x4ff845(0x115)]
        ),
          placeSound[_0x4ff845(0x102)]();
        return;
      }
      this[_0x4ff845(0x112)]["y"] += this["grav"];
    }),
    (this[_0x75bc08(0xe8)] = function () {
      var _0x1fc49e = _0x75bc08;
      (this[_0x1fc49e(0xf9)] = (this[_0x1fc49e(0xf9)] + 0x1) % 0x4),
        this[_0x1fc49e(0x116)](),
        (this[_0x1fc49e(0x113)] = createImage(0x20, 0x20)),
        AddBlock(
          this["grid"],
          0x0,
          0x1f,
          blockType[this[_0x1fc49e(0xf8)]][this[_0x1fc49e(0xf9)]],
          this["col"],
          this[_0x1fc49e(0x115)]
        ),
        renderFromArray(this[_0x1fc49e(0xe3)], this["sprite"]);
      let _0x5107dd =
        blockWidth[this[_0x1fc49e(0xf8)]][this[_0x1fc49e(0xf9)]] + 0x1;
      this[_0x1fc49e(0x112)]["x"] > columns - _0x5107dd * 0x8 &&
        (this[_0x1fc49e(0x112)]["x"] = columns - _0x5107dd * 0x8);
    }),
    (this[_0x75bc08(0x10f)] = function (_0x47c461 = -0x1) {
      var _0x583b8c = _0x75bc08;
      keyIsDown(UP_ARROW) || _0x47c461 == 0x8
        ? this[_0x583b8c(0x120)] &&
          (this["rotate"](), (this[_0x583b8c(0x120)] = ![]))
        : (this["rotReset"] = !![]);
      (keyIsDown(LEFT_ARROW) || _0x47c461 == 0x2) &&
        ((this[_0x583b8c(0x112)]["x"] -= 0x1),
        this[_0x583b8c(0x112)]["x"] < 0x0 &&
          (this[_0x583b8c(0x112)]["x"] = 0x0));
      if (keyIsDown(RIGHT_ARROW) || _0x47c461 == 0x4) {
        this[_0x583b8c(0x112)]["x"] += 0x1;
        let _0xfcddb9 =
          blockWidth[this[_0x583b8c(0xf8)]][this[_0x583b8c(0xf9)]] + 0x1;
        this[_0x583b8c(0x112)]["x"] > columns - _0xfcddb9 * 0x8 &&
          (this[_0x583b8c(0x112)]["x"] = columns - _0xfcddb9 * 0x8);
      }
      (keyIsDown(DOWN_ARROW) || _0x47c461 == 0x10) &&
        ((this[_0x583b8c(0x112)]["y"] += 0x1), (score += 0x1));
    });
}
function resetGame() {
  var _0x562ee7 = _0x13db;
  (score = 0x0),
    (linesCleared = 0x0),
    (staticCount = 0x0),
    (t = 0x0),
    filter[_0x562ee7(0xe7)](0x2710),
    (placed = ![]),
    (buff = createImage(columns, rows)),
    (grid = []);
  for (let _0x1fb6af = 0x0; _0x1fb6af < rows; _0x1fb6af++) {
    grid[_0x1fb6af] = [];
    for (let _0x48f298 = 0x0; _0x48f298 < columns; _0x48f298++) {
      grid[_0x1fb6af][_0x562ee7(0xe5)](null);
    }
  }
  (playerBlock = new Block(width / 0x2 - gameOffset, 0x0)),
    playerBlock[_0x562ee7(0xd9)](),
    (nextBlock = new Block(width / 0x2 - gameOffset, 0x0)),
    nextBlock[_0x562ee7(0xd9)]();
}
function startGame() {
  var _0x55364a = _0x13db;
  resetGame(),
    (paused = ![]),
    (gameOver = ![]),
    (startScreen[_0x55364a(0xe2)] = ![]),
    gameMusic[_0x55364a(0x110)]();
}
function _0x13db(_0x2264d1, _0x46db42) {
  var _0x5c016b = _0x5c01();
  return (
    (_0x13db = function (_0x13db41, _0x4b50f2) {
      _0x13db41 = _0x13db41 - 0xd9;
      var _0x9e91c2 = _0x5c016b[_0x13db41];
      return _0x9e91c2;
    }),
    _0x13db(_0x2264d1, _0x46db42)
  );
}
function unpauseGame() {
  var _0x4f5238 = _0x13db;
  filter["freq"](0x2710), (paused = ![]), (pauseScreen[_0x4f5238(0xe2)] = ![]);
}
function newGame() {
  var _0x343587 = _0x13db;
  (pauseScreen[_0x343587(0xe2)] = ![]),
    (gameoverScreen[_0x343587(0xe2)] = ![]),
    (startScreen["open"] = !![]),
    gameMusic[_0x343587(0x110)]();
}
function SFXvolume(_0x2d095c) {
  var _0x4f5d1c = _0x13db;
  let _0x43fc25 = _0x2d095c / 0xa;
  placeSound[_0x4f5d1c(0xe6)](_0x43fc25 / 0x2),
    lineSound[_0x4f5d1c(0xe6)](_0x43fc25 / 0x2),
    (sfxSlider1[_0x4f5d1c(0xdf)] = _0x2d095c),
    (sfxSlider2["value"] = _0x2d095c);
}
function MUSvolume(_0x597973) {
  var _0x5bfdd1 = _0x13db;
  let _0x28ef9c = _0x597973 / 0xa;
  gameMusic[_0x5bfdd1(0xe6)](_0x28ef9c / 0x2),
    (musSlider1[_0x5bfdd1(0xdf)] = _0x597973),
    (musSlider2[_0x5bfdd1(0xdf)] = _0x597973);
}
function toggleAbout() {
  var _0x67b1e1 = _0x13db;
  (aboutScreen[_0x67b1e1(0xe2)] = !aboutScreen[_0x67b1e1(0xe2)]),
    (startScreen["open"] = !startScreen[_0x67b1e1(0xe2)]);
}
function adjustDifficulty() {
  var _0x5e36c7 = _0x13db;
  (difficulty = levelSlider["value"]),
    (speed = 0.5 + map(difficulty, 0x1, 0xa, 0x0, 0x3) / 0x2),
    (staticChance = Math[_0x5e36c7(0xf5)](
      map(difficulty, 0x1, 0xa, 0x10, 0x4)
    )),
    (dupChance = map(difficulty, 0x0, 0x1, 0x1, 0.1));
}
function _0x5c01() {
  var _0xb22a02 = [
    "body",
    "static",
    "clearGrid",
    "sounds/music",
    "writeText",
    "fill",
    "grav",
    "cnv",
    "LowPass",
    "32KcENKW",
    "loadPixels",
    "673467ibpVOI",
    "rotReset",
    "8702838raZSxj",
    "clipboard",
    "pixels",
    "newBlock",
    "startpage",
    "sounds/line",
    "parent",
    "update",
    "toString",
    "value",
    "1035JetFkx",
    "innerHTML",
    "open",
    "grid",
    "renderBlock",
    "push",
    "setVolume",
    "freq",
    "rotate",
    "1200100IQFOMf",
    "fonts/retroFont.ttf",
    "Share\x20Text\x20Copied\x20to\x20Clipboard!",
    "swipe",
    "get",
    "isPlaying",
    "getElementById",
    "Play\x20now\x20at\x20https://sandtris.com/",
    "mp3",
    "round",
    "10hiGZJj",
    "lvlSlider",
    "floor",
    "log",
    "LEVEL:",
    "type",
    "rot",
    "sfx2Slider",
    "2271057vMypTU",
    "levelText",
    "281351dLdpJR",
    "disconnect",
    "strokeWeight",
    "set",
    "LINES:\x20",
    "play",
    "length",
    "col",
    "217410hCAWJb",
    "show",
    "<br/>LINES:<br/>",
    "gameoverpage",
    "repeat",
    "mus1Slider",
    "█▀\u2003▄▀█\u2003█▄░█\u2003█▀▄\u2003▀█▀\u2003█▀█\u2003█\u2003█▀\x0a\x20\x20▄█\u2003█▀█\u2003█░▀█\u2003█▄▀\u2003░█░\u2003█▀▄\u2003█\u2003▄█\x0a\x20\x20\x20\x20",
    "LEVEL:\x20",
    "loop",
    "DIRECTION_ALL",
    "controls",
    "stop",
    "132eEPjVT",
    "pos",
    "sprite",
  ];
  _0x5c01 = function () {
    return _0xb22a02;
  };
  return _0x5c01();
}
function gameOverScore() {
  var _0x585f05 = _0x13db;
  (gameoverText["innerHTML"] = ""),
    (gameoverText[_0x585f05(0xe1)] += "SCORE:<br/>" + score),
    (gameoverText[_0x585f05(0xe1)] += _0x585f05(0x107) + linesCleared);
}
function shareText() {
  var _0xca8d32 = _0x13db;
  let _0x1dc362 = _0xca8d32(0x10b),
    _0x50a71e = difficulty["toString"](),
    _0x5ab3f7 = linesCleared[_0xca8d32(0xde)](),
    _0x5bc2d4 = score["toString"]();
  (_0x1dc362 +=
    _0xca8d32(0x10c) +
    _0x50a71e +
    "\x20"[_0xca8d32(0x109)](0x6 - _0x50a71e[_0xca8d32(0x103)]) +
    "|\x20"),
    (_0x1dc362 +=
      _0xca8d32(0x101) +
      _0x5ab3f7 +
      "\x20"[_0xca8d32(0x109)](0x6 - _0x5ab3f7[_0xca8d32(0x103)]) +
      "\x0a"),
    (_0x1dc362 +=
      "SCORE:\x20" +
      _0x5bc2d4 +
      "\x20"[_0xca8d32(0x109)](0x9 - _0x5bc2d4[_0xca8d32(0x103)]) +
      "|\x20"),
    (_0x1dc362 +=
      "TIME:\x20" +
      timeText +
      "\x20"[_0xca8d32(0x109)](0x7 - timeText[_0xca8d32(0x103)]) +
      "\x0a"),
    (_0x1dc362 += _0xca8d32(0xf0)),
    (_0x1dc362 += navigator[_0xca8d32(0x122)][_0xca8d32(0x118)](_0x1dc362)),
    alert(_0xca8d32(0xeb));
}
function setup() {
  var _0x5615b6 = _0x13db;
  (startScreen = document[_0x5615b6(0xef)](_0x5615b6(0xda))),
    (pauseScreen = document[_0x5615b6(0xef)]("pausepage")),
    (gameoverScreen = document[_0x5615b6(0xef)](_0x5615b6(0x108))),
    (aboutScreen = document[_0x5615b6(0xef)]("aboutpage")),
    (levelSlider = document[_0x5615b6(0xef)](_0x5615b6(0xf4))),
    (levelSlider[_0x5615b6(0xdf)] = 0x1),
    (levelText = document[_0x5615b6(0xef)](_0x5615b6(0xfc))),
    (sfxSlider1 = document["getElementById"]("sfx1Slider")),
    (sfxSlider2 = document[_0x5615b6(0xef)](_0x5615b6(0xfa))),
    (sfxSlider1[_0x5615b6(0xdf)] = 0xa),
    (sfxSlider2[_0x5615b6(0xdf)] = 0xa),
    (musSlider1 = document[_0x5615b6(0xef)](_0x5615b6(0x10a))),
    (musSlider2 = document[_0x5615b6(0xef)]("mus2Slider")),
    (musSlider1[_0x5615b6(0xdf)] = 0xa),
    (musSlider2[_0x5615b6(0xdf)] = 0xa),
    (gameoverText = document[_0x5615b6(0xef)]("gameoverText")),
    (gameRes = createVector(columns * scl, rows * scl)),
    (nextOffset = gameRes["x"] + gameOffset * 0x4),
    (cnv = createCanvas(gameRes["x"] + gameOffset * 0x11, gameRes["y"])),
    cnv[_0x5615b6(0xdc)](_0x5615b6(0x11b)),
    textFont(pixelFont),
    frameRate(0x3c),
    noSmooth(),
    (filter = new p5[_0x5615b6(0x11c)]()),
    filter[_0x5615b6(0xe7)](0x2710),
    gameMusic[_0x5615b6(0xfe)](),
    gameMusic["connect"](filter),
    gameMusic[_0x5615b6(0xe6)](0.5);
  var _0x3d0a72 = { preventDefault: !![] },
    _0x25d6a0 = new Hammer(document[_0x5615b6(0x114)], _0x3d0a72);
  _0x25d6a0[_0x5615b6(0xed)]("swipe")[_0x5615b6(0x100)]({
    direction: Hammer[_0x5615b6(0x10e)],
  }),
    _0x25d6a0["on"](_0x5615b6(0xec), swiped),
    resetGame();
}
function AddBlock(
  _0x2c9628,
  _0x5d17a0,
  _0x192e66,
  _0x1e9c5b,
  _0x22bca8,
  _0xae7a7c
) {
  for (let _0x4e1c27 = 0x0; _0x4e1c27 < 0x4; _0x4e1c27++) {
    AddSingleBrick(
      _0x2c9628,
      _0x5d17a0 + _0x1e9c5b[_0x4e1c27 * 0x2] * 0x8,
      _0x192e66 - _0x1e9c5b[_0x4e1c27 * 0x2 + 0x1] * 0x8,
      _0x22bca8,
      _0xae7a7c
    );
  }
}
function AddSingleBrick(_0x5382f7, _0x6c56d4, _0x437299, _0xe2b858, _0x36f30b) {
  let _0x4e9fcc = brick;
  _0x36f30b && (_0x4e9fcc = staticbrick);
  for (let _0x15c88f = 0x0; _0x15c88f < 0x8; _0x15c88f++) {
    for (let _0x509922 = 0x0; _0x509922 < 0x8; _0x509922++) {
      if (_0x437299 - _0x15c88f < 0x0) continue;
      let _0x9b5146 = HSVtoRGB(
        _0xe2b858 / 0x5,
        0.8,
        map(_0x4e9fcc[_0x15c88f][_0x509922], 0x0, 0x1, 0.2, 0.7)
      );
      _0x5382f7[_0x437299 - _0x15c88f][_0x6c56d4 + _0x509922] = [
        _0xe2b858,
        _0x9b5146["r"],
        _0x9b5146["g"],
        _0x9b5146["b"],
        0x0,
        _0x36f30b,
      ];
    }
  }
}
function renderFromArray(_0x25b72a, _0x1a1fa8) {
  var _0x1f62c2 = _0x13db;
  let _0x278359 = _0x25b72a[_0x1f62c2(0x103)],
    _0x51a344 = _0x25b72a[0x0][_0x1f62c2(0x103)];
  _0x1a1fa8[_0x1f62c2(0x11e)]();
  for (let _0x488f22 = 0x0; _0x488f22 < _0x278359; _0x488f22++) {
    for (let _0x5b82d1 = 0x0; _0x5b82d1 < _0x51a344; _0x5b82d1++) {
      let _0x3e5849 = (_0x488f22 * _0x51a344 + _0x5b82d1) * 0x4;
      if (_0x25b72a[_0x488f22][_0x5b82d1] == null) {
        (_0x1a1fa8[_0x1f62c2(0x123)][_0x3e5849] = 0x0),
          (_0x1a1fa8[_0x1f62c2(0x123)][_0x3e5849 + 0x1] = 0x0),
          (_0x1a1fa8[_0x1f62c2(0x123)][_0x3e5849 + 0x2] = 0x0),
          (_0x1a1fa8[_0x1f62c2(0x123)][_0x3e5849 + 0x3] = 0x0);
        continue;
      }
      (_0x1a1fa8[_0x1f62c2(0x123)][_0x3e5849] =
        _0x25b72a[_0x488f22][_0x5b82d1][0x1]),
        (_0x1a1fa8[_0x1f62c2(0x123)][_0x3e5849 + 0x1] =
          _0x25b72a[_0x488f22][_0x5b82d1][0x2]),
        (_0x1a1fa8[_0x1f62c2(0x123)][_0x3e5849 + 0x2] =
          _0x25b72a[_0x488f22][_0x5b82d1][0x3]),
        (_0x1a1fa8["pixels"][_0x3e5849 + 0x3] = 0xff);
    }
  }
  _0x1a1fa8["updatePixels"]();
}
function updateLogic(_0x208384, _0x3b1040) {
  if (grid[_0x3b1040][_0x208384] == null) return;
  grid[_0x3b1040][_0x208384][0x4] = 0x0;
  if (_0x3b1040 >= rows - 0x1) return;
  if (grid[_0x3b1040 + 0x1][_0x208384] == null) {
    (grid[_0x3b1040 + 0x1][_0x208384] = grid[_0x3b1040][_0x208384]),
      (grid[_0x3b1040][_0x208384] = null);
    return;
  }
  if (grid[_0x3b1040][_0x208384][0x5]) return;
  let _0x200d7e =
      _0x208384 > 0x0 && grid[_0x3b1040 + 0x1][_0x208384 - 0x1] == null,
    _0x4a2b17 =
      _0x208384 < columns - 0x1 &&
      grid[_0x3b1040 + 0x1][_0x208384 + 0x1] == null;
  if (_0x200d7e && _0x4a2b17) {
    if (random() < 0.5) {
      (grid[_0x3b1040 + 0x1][_0x208384 - 0x1] = grid[_0x3b1040][_0x208384]),
        (grid[_0x3b1040][_0x208384] = null);
      return;
    }
    (grid[_0x3b1040 + 0x1][_0x208384 + 0x1] = grid[_0x3b1040][_0x208384]),
      (grid[_0x3b1040][_0x208384] = null);
    return;
  }
  if (_0x200d7e) {
    (grid[_0x3b1040 + 0x1][_0x208384 - 0x1] = grid[_0x3b1040][_0x208384]),
      (grid[_0x3b1040][_0x208384] = null);
    return;
  }
  if (_0x4a2b17) {
    (grid[_0x3b1040 + 0x1][_0x208384 + 0x1] = grid[_0x3b1040][_0x208384]),
      (grid[_0x3b1040][_0x208384] = null);
    return;
  }
}
function updateGrid() {
  if (t % 0x4 == 0x0) {
    for (let _0x14fde0 = rows - 0x1; _0x14fde0 >= 0x0; _0x14fde0--) {
      for (let _0x26f8ae = 0x0; _0x26f8ae < columns; _0x26f8ae++) {
        updateLogic(_0x26f8ae, _0x14fde0);
      }
    }
    return;
  }
  if (t % 0x4 == 0x2)
    for (let _0x26b096 = rows - 0x1; _0x26b096 >= 0x0; _0x26b096--) {
      for (let _0xa841e9 = columns - 0x1; _0xa841e9 >= 0x0; _0xa841e9--) {
        updateLogic(_0xa841e9, _0x26b096);
      }
    }
}
function checkLine() {
  var _0x9872c4 = _0x13db;
  vis = [];
  for (let _0x170c82 = 0x0; _0x170c82 < rows; _0x170c82++) {
    (vis = []), (fullLine = ![]);
    if (grid[_0x170c82][0x0] == null || grid[_0x170c82][0x0][0x4] == 0x1)
      continue;
    floodFill(0x0, _0x170c82, grid[_0x170c82][0x0][0x0]);
    if (!fullLine) continue;
    console[_0x9872c4(0xf6)]("LINE\x20AT\x20", _0x170c82);
    return;
  }
}
function floodFill(_0x53320, _0x15727c, _0x28621a) {
  var _0x266d73 = _0x13db;
  if (
    _0x53320 < 0x0 ||
    _0x53320 >= columns ||
    _0x15727c < 0x0 ||
    _0x15727c >= rows ||
    grid[_0x15727c][_0x53320] == null ||
    grid[_0x15727c][_0x53320][0x4] == 0x1 ||
    grid[_0x15727c][_0x53320][0x0] != _0x28621a
  )
    return;
  _0x53320 == columns - 0x1 && (fullLine = !![]),
    (grid[_0x15727c][_0x53320][0x4] = 0x1),
    vis[_0x266d73(0xe5)]([_0x53320, _0x15727c]),
    floodFill(_0x53320 + 0x1, _0x15727c, _0x28621a),
    floodFill(_0x53320 - 0x1, _0x15727c, _0x28621a),
    floodFill(_0x53320, _0x15727c + 0x1, _0x28621a),
    floodFill(_0x53320, _0x15727c - 0x1, _0x28621a);
}
function setLineColor(_0x7e1a9a) {
  let _0x434165 = 0xff;
  _0x7e1a9a % 0xa < 0x5 && (_0x434165 = 0x0);
  for (let _0x106892 of vis) {
    (grid[_0x106892[0x1]][_0x106892[0x0]][0x1] = _0x434165),
      (grid[_0x106892[0x1]][_0x106892[0x0]][0x2] = _0x434165),
      (grid[_0x106892[0x1]][_0x106892[0x0]][0x3] = _0x434165);
  }
}
function deleteLine(_0x57044a) {
  var _0x333f68 = _0x13db;
  for (let _0x499f43 of vis) {
    grid[_0x499f43[0x1]][_0x499f43[0x0]] = null;
  }
  (score += vis[_0x333f68(0x103)]), (vis = []);
}
function UI() {
  var _0x3bc98a = _0x13db;
  renderFromArray(grid, buff),
    background(0xce, 0xae, 0x7f),
    fill(0xa),
    rect(gameOffset, 0x0, columns * scl, rows * scl),
    image(buff, gameOffset, 0x0, columns * scl, rows * scl);
  !gameOver && !placed && playerBlock[_0x3bc98a(0x106)]();
  fill(0xa),
    rect(nextOffset, gameOffset * 0x2, gameOffset * 0xa, gameOffset * 0xa),
    image(
      nextBlock["sprite"],
      nextOffset +
        (0x5 - (blockWidth[nextBlock[_0x3bc98a(0xf8)]][0x0] + 0x1)) *
          gameOffset,
      (0x5 - (0x6 - blockHeight[nextBlock[_0x3bc98a(0xf8)]][0x0]) + 0x1) *
        gameOffset,
      0x20 * scl,
      0x20 * scl
    );
  let _0x1ee85d = Math[_0x3bc98a(0xf5)](t / 0xe10),
    _0x5a44cd = Math[_0x3bc98a(0xf5)](t / 0x3c) % 0x3c;
  _0x1ee85d < 0xa && (_0x1ee85d = "0" + _0x1ee85d),
    _0x5a44cd < 0xa && (_0x5a44cd = "0" + _0x5a44cd),
    (timeText = _0x1ee85d + ":" + _0x5a44cd),
    fill(0x19)[_0x3bc98a(0xff)](0x1)["textSize"](0x20),
    text(timeText, nextOffset - 0x2, gameOffset * 0x10),
    text("LINES:", nextOffset - 0x2, gameOffset * 0x13),
    text(linesCleared, nextOffset - 0x2, gameOffset * 0x15),
    text("SCORE:", nextOffset - 0x2, gameOffset * 0x18),
    text(score, nextOffset - 0x2, gameOffset * 0x1a),
    text(_0x3bc98a(0xf7), nextOffset - 0x2, gameOffset * 0x1d),
    text(difficulty, nextOffset - 0x2, gameOffset * 0x1f),
    (levelText["innerHTML"] = _0x3bc98a(0x10c) + levelSlider["value"]);
}
function keyPressed() {
  var _0x314e97 = _0x13db;
  if (keyCode === 0x50) {
    if (gameOver) return;
    paused ? filter[_0x314e97(0xe7)](0x2710) : filter[_0x314e97(0xe7)](0xc8),
      (paused = !paused),
      (pauseScreen["open"] = !pauseScreen[_0x314e97(0xe2)]);
  }
}
function GameLogic() {
  var _0x5eaedc = _0x13db;
  if (paused) return;
  if (gameOver) {
    gameMusic[_0x5eaedc(0x110)]();
    return;
  }
  if (fullLine) {
    cleartime == 0x0 && ((linesCleared += 0x1), lineSound["play"]());
    (cleartime += 0x1), setLineColor(cleartime);
    cleartime > 0x1e &&
      (console["log"]("Deleting"),
      deleteLine(),
      (cleartime = 0x0),
      (fullLine = ![]));
    return;
  }
  placed &&
    (!gameMusic[_0x5eaedc(0xee)]() && gameMusic[_0x5eaedc(0x10d)](),
    (playerBlock = nextBlock),
    (nextBlock = new Block(width / 0x2, 0x0)),
    nextBlock[_0x5eaedc(0xd9)](),
    playerBlock[_0x5eaedc(0x104)] == nextBlock[_0x5eaedc(0x104)] &&
      random() < dupChance &&
      ((nextBlock["col"] = (nextBlock[_0x5eaedc(0x104)] + 0x1) % 0x4),
      nextBlock[_0x5eaedc(0xe4)]()),
    (placed = ![])),
    updateGrid(),
    playerBlock[_0x5eaedc(0xdd)](),
    playerBlock[_0x5eaedc(0x10f)](),
    checkLine(),
    (t += 0x1);
}
function draw() {
  UI(), GameLogic();
}
