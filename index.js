const {GameManager} = require("./sub/game-manager.js");
const {MapManager} = require("./sub/map-manager.js");
const {OutputManager} = require("./sub/output-manager.js");
//const {InputManager} = require("./sub/input-manager.js")
//const {map} = require("./sub/require-in-all.js")

//https://www.kindacode.com/article/node-js-colorizing-console-log-output/
//https://www.npmjs.com/package/node-mouse
//https://www.npmjs.com/package/key-events

new GameManager(MapManager,OutputManager);
