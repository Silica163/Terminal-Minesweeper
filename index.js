const {GameManager} = require("./sub/game-manager.js");
const {MapManager} = require("./sub/map-manager.js");
const {OutputManager} = require("./sub/output-manager.js");
//const {InputManager} = require("./sub/input-manager.js")
//const {map} = require("./sub/require-in-all.js")

//https://www.kindacode.com/article/node-js-colorizing-console-log-output/
//https://www.npmjs.com/package/node-mouse
//https://www.npmjs.com/package/key-events


// var outputMap = `
// + - + - + - + - + - + - + - + - + - + - + - +
// |   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
// + - + - + - + - + - + - + - + - + - + - + - +
// | A | ${map[0][0]} | ${map[0][1]} | ${map[0][2]} | ${map[0][3]} | ${map[0][4]} | ${map[0][5]} | ${map[0][6]} | ${map[0][7]} | ${map[0][8]} | ${map[0][9]} |
// + - + - + - + - + - + - + - + - + - + - + - +
// | B | ${map[1][0]} | ${map[1][1]} | ${map[1][2]} | ${map[1][3]} | ${map[1][4]} | ${map[1][5]} | ${map[1][6]} | ${map[1][7]} | ${map[1][8]} | ${map[1][9]} |
// + - + - + - + - + - + - + - + - + - + - + - +
// | C | ${map[2][0]} | ${map[2][1]} | ${map[2][2]} | ${map[2][3]} | ${map[2][4]} | ${map[2][5]} | ${map[2][6]} | ${map[2][7]} | ${map[2][8]} | ${map[2][9]} |
// + - + - + - + - + - + - + - + - + - + - + - +
// | D | ${map[3][0]} | ${map[3][1]} | ${map[3][2]} | ${map[3][3]} | ${map[3][4]} | ${map[3][5]} | ${map[3][6]} | ${map[3][7]} | ${map[3][8]} | ${map[3][9]} |
// + - + - + - + - + - + - + - + - + - + - + - +
// | E | ${map[4][0]} | ${map[4][1]} | ${map[4][2]} | ${map[4][3]} | ${map[4][4]} | ${map[4][5]} | ${map[4][6]} | ${map[4][7]} | ${map[4][8]} | ${map[4][9]} |
// + - + - + - + - + - + - + - + - + - + - + - +
// | F | ${map[5][0]} | ${map[5][1]} | ${map[5][2]} | ${map[5][3]} | ${map[5][4]} | ${map[5][5]} | ${map[5][6]} | ${map[5][7]} | ${map[5][8]} | ${map[5][9]} |
// + - + - + - + - + - + - + - + - + - + - + - +
// | G | ${map[6][0]} | ${map[6][1]} | ${map[6][2]} | ${map[6][3]} | ${map[6][4]} | ${map[6][5]} | ${map[6][6]} | ${map[6][7]} | ${map[6][8]} | ${map[6][9]} |
// + - + - + - + - + - + - + - + - + - + - + - +
// | H | ${map[7][0]} | ${map[7][1]} | ${map[7][2]} | ${map[7][3]} | ${map[7][4]} | ${map[7][5]} | ${map[7][6]} | ${map[7][7]} | ${map[7][8]} | ${map[7][9]} |
// + - + - + - + - + - + - + - + - + - + - + - +
// | I | ${map[8][0]} | ${map[8][1]} | ${map[8][2]} | ${map[8][3]} | ${map[8][4]} | ${map[8][5]} | ${map[8][6]} | ${map[8][7]} | ${map[8][8]} | ${map[8][9]} |
// + - + - + - + - + - + - + - + - + - + - + - +
// | J | ${map[9][0]} | ${map[9][1]} | ${map[9][2]} | ${map[9][3]} | ${map[9][4]} | ${map[9][5]} | ${map[9][6]} | ${map[9][7]} | ${map[9][8]} | ${map[9][9]} |
// + - + - + - + - + - + - + - + - + - + - + - +
// `;

// game level
new GameManager(MapManager,OutputManager);
