const { MapManager } = require("./sub/map-manager");
const { OutputManager } = require("./sub/output-manager");
const { map, symbols, isUndefined, isNone, isCount, isMine,isBlank,isMark ,DisplayMap } = require("./sub/require-in-all");
const fs = require("fs");
const { InputManager } = require("./sub/input-manager");


var mapManager = new MapManager;
var opm = new OutputManager;
var sePos = {x:5,y:5};
//sePos.x = Math.floor(Math.random()*map.length);
//sePos.y = Math.floor(Math.random()*map.length);
console.log(sePos);

mapManager.MapGenerater(70,sePos);

process.stdout.write(map.join('\n'));
console.log('\n');
process.stdout.write(DisplayMap.join('\n'));
console.log('\n');
function tube(a) {
    var Tube = {start:'[',end:']',bar:'█',all:10};
    bar = `${Tube.start}${(' ').repeat(Tube.all-a)}${Tube.bar.repeat(a*2)}${(' ').repeat(Tube.all-a)}${Tube.end}`;
    process.stdout.write(bar);
    process.stdout.write('\n');
}
var b=0;
while(b<10){
    tube(b);
    b++;
}
while(b>0){
    tube(b);
    b--;
}
for (a in map){
    for (b in map[a]){
        opm.Show(a,b)
    }
}
opm.Update()