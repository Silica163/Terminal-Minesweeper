const style = require("../style.json");
// x = แนวนอน ซ้าย-ขวา
// y = แนวตั้ง บน-ล่าง
//create map
const map = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
];
const DisplayMap = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
];
exports.DisplayMap = DisplayMap;
exports.map = map
const symbols = {
    "markerTube":['▓','▒'],
    "none": " ",
    'blank': "█",
    "wrongmark": `\x1b[${style.bgRed[0]}m╳\x1b[${style.bgRed[1]}m`,
    "mark": "╳",
    "count":[1,2,3,4,5,6,7,8],
    "mine": `▲`,
    "clmine": `\x1b[${style.red[0]}m▲\x1b[${style.red[1]}m`,
    "wrongmine": `\x1b[${style.red[0]}m\x1b[${style.inverse[0]}m▲\x1b[${style.inverse[1]}m\x1b[${style.red[1]}m`,
    cl:{
        1:`\x1b[94m1\x1b[39m`,
        2:`\x1b[32m2\x1b[39m`,
        3:`\x1b[91m3\x1b[39m`,
        4:`\x1b[34m4\x1b[39m`,
        5:`\x1b[31m5\x1b[39m`,
        6:`\x1b[36m6\x1b[39m`,
        7:`\x1b[97m7\x1b[39m`,
        8:`\x1b[90m8\x1b[39m`,
    }
};
exports.symbols = symbols;
const markerTube = "[          ]"
exports.markerTube = markerTube
//checker 
exports.isMine = function(check) {
    return check == symbols["mine"];
}
exports.isCount = function(check) {
    if(check.length > 1) {check = parseInt(check[5],10)};
    return check>0&&check<9;
}
exports.isMark = function(check) {
    return check == symbols["mark"];
}
exports.isNone = function(check) {
    return check == symbols["none"];
}
exports.isBlank = function(check) {
    return check == symbols["blank"];
}
exports.isEdge = function(y,x){
   return ((y==0|| y == map.length-1)||(x==0||x==map.length-1));
}
exports.isUndefined = function(check){
    return check == undefined;
}