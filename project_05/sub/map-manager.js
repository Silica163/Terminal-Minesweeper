const {map,symbols,isBlank,isCount,isMark,isMine,isNone,isSelect,isEdge, isUndefined, DisplayMap} = require("./require-in-all");

// x = แนวนอน ซ้าย-ขวา
// y = แนวตั้ง บน-ล่าง

//map function

function MapManager() {}
MapManager.prototype.MapGenerater = function (allmine,sePos) {
    //random mines
    this.MineGenerater(allmine,sePos);
    this.CountGenerater();
};
MapManager.prototype.MapScaner = function (y, x) {
    var scanVar = [-1,0,1];
    var scanMap =[[],[],[]];
    for(c in scanVar){
        if(!isUndefined(map[y+scanVar[c]])){
            for (d in scanVar) {
                scanMap[c][d] = map[y + scanVar[c]][x + scanVar[d]];
            }
        }else{scanMap[c] = [undefined,undefined,undefined]}
    }
    return scanMap;
};
MapManager.prototype.finder = function(maptarget,target){
    var result = {
        "position":{},
        "pieces":0
    };
    n = 0;
    for (var y in maptarget){
        for(var x in maptarget[y]){
            if(maptarget[y][x]==target){
                result.position[n] = [parseInt(y),parseInt(x)];
                n++;
                result.pieces = n;
            }
        }
    }
    return result;
};
MapManager.prototype.MineGenerater = function(allmine,sePos){
    this.allMines = allmine < map.flat().length ? allmine : map.flat().length - 1;
    this.sePos = sePos;
    var aMine = 0;
    var aroundse = 0;
    var nomineY = [this.sePos.y-1,this.sePos.y,this.sePos.y+1];
    var nomineX = [this.sePos.x-1,this.sePos.x,this.sePos.x+1];
    while (aMine < this.allMines) {
        var yPos = Math.floor(Math.random() * map.length);
        var xPos = Math.floor(Math.random() * map[yPos].length);
        if (!isMine(map[yPos][xPos]) && (xPos!=this.sePos.x || yPos!=this.sePos.y)) {
            if (aroundse < 91) {
                var notmineMap = (
                    //line 0
                    (xPos != nomineX[0] || yPos != nomineY[0]) &&
                    (xPos != nomineX[0] || yPos != nomineY[1]) &&
                    (xPos != nomineX[0] || yPos != nomineY[2]) &&
                    // line 1
                    (xPos != nomineX[1] || yPos != nomineY[0]) &&
                    (xPos != nomineX[1] || yPos != nomineY[1]) &&
                    (xPos != nomineX[1] || yPos != nomineY[2]) &&
                    //line 2
                    (xPos != nomineX[2] || yPos != nomineY[0]) &&
                    (xPos != nomineX[2] || yPos != nomineY[1]) &&
                    (xPos != nomineX[2] || yPos != nomineY[2])
                );
                if (notmineMap) {
                    map[yPos][xPos] = symbols.mine;
                    aMine += 1;
                    aroundse += 1;
                }
            }else if(aroundse>=91){
                map[yPos][xPos] = symbols.mine;
                aMine += 1;
            }
        }
    }

}
MapManager.prototype.resetMap = function(){
    for(y in DisplayMap){
        for(x in DisplayMap[y]){
            DisplayMap[y][x] = symbols.none;
        }
    }
    for(y in map){
        for(x in map[y]){
            map[y][x] = symbols.none;
        }
    }
}
MapManager.prototype.CountGenerater = function(){
    var minesPos = this.finder(map,symbols.mine).position;
    var minePieces = this.finder(map,symbols.mine).pieces;
    var mineNow = 0;
    var scanVar = [-1,0,1];
    for (;mineNow<minePieces;mineNow++) {
        var y = minesPos[mineNow][0];
        var x = minesPos[mineNow][1];
        for (c in scanVar) {
            if (!isUndefined(map[y + scanVar[c]])) {
                for (d in scanVar) {
                    if (!isUndefined(map[y + scanVar[c]][x + scanVar[d]])) {
                        if (isCount(map[y + scanVar[c]][x + scanVar[d]])) {
                            map[y + scanVar[c]][x + scanVar[d]]++;
                        }
                        if (
                            isNone(map[y + scanVar[c]][x + scanVar[d]])
                            && ((!isMine(map[y + scanVar[c]][x + scanVar[d]]))
                                && (!isCount(map[y + scanVar[c]][x + scanVar[d]])))
                        ) {
                            map[y + scanVar[c]][x + scanVar[d]] = 1;
                        }
                    }
                }
            }
        }
    }
}
exports.MapManager = MapManager;