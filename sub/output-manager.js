const {map,DisplayMap, isNone, symbols,isMark,isMine, isCount} = require("./require-in-all.js");

//output map

function OutputManager() {}
OutputManager.prototype.Show = function(y,x){
    DisplayMap[y][x] = map[y][x];
    if(isMark(DisplayMap[y][x])){
        DisplayMap[y][x] = symbols.none
    }else
    if(isNone(map[y][x])&&!isMark(DisplayMap[y][x])){
        DisplayMap[y][x] = symbols.blank
    }else
    if(isMine(map[y][x])){
        DisplayMap[y][x] = symbols.clmine;
    }else if(isCount(map[y][x])){
        this.StyleGenerater(y,x);
    }
};

OutputManager.prototype.Update = function(){
    var outputMap = `\x1b[H
+ - + - + - + - + - + - + - + - + - + - + - +
|   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+ - + - + - + - + - + - + - + - + - + - + - +
| A | ${DisplayMap[0][0]} | ${DisplayMap[0][1]} | ${DisplayMap[0][2]} | ${DisplayMap[0][3]} | ${DisplayMap[0][4]} | ${DisplayMap[0][5]} | ${DisplayMap[0][6]} | ${DisplayMap[0][7]} | ${DisplayMap[0][8]} | ${DisplayMap[0][9]} |
+ - + - + - + - + - + - + - + - + - + - + - +
| B | ${DisplayMap[1][0]} | ${DisplayMap[1][1]} | ${DisplayMap[1][2]} | ${DisplayMap[1][3]} | ${DisplayMap[1][4]} | ${DisplayMap[1][5]} | ${DisplayMap[1][6]} | ${DisplayMap[1][7]} | ${DisplayMap[1][8]} | ${DisplayMap[1][9]} |
+ - + - + - + - + - + - + - + - + - + - + - +
| C | ${DisplayMap[2][0]} | ${DisplayMap[2][1]} | ${DisplayMap[2][2]} | ${DisplayMap[2][3]} | ${DisplayMap[2][4]} | ${DisplayMap[2][5]} | ${DisplayMap[2][6]} | ${DisplayMap[2][7]} | ${DisplayMap[2][8]} | ${DisplayMap[2][9]} |
+ - + - + - + - + - + - + - + - + - + - + - +
| D | ${DisplayMap[3][0]} | ${DisplayMap[3][1]} | ${DisplayMap[3][2]} | ${DisplayMap[3][3]} | ${DisplayMap[3][4]} | ${DisplayMap[3][5]} | ${DisplayMap[3][6]} | ${DisplayMap[3][7]} | ${DisplayMap[3][8]} | ${DisplayMap[3][9]} |
+ - + - + - + - + - + - + - + - + - + - + - +
| E | ${DisplayMap[4][0]} | ${DisplayMap[4][1]} | ${DisplayMap[4][2]} | ${DisplayMap[4][3]} | ${DisplayMap[4][4]} | ${DisplayMap[4][5]} | ${DisplayMap[4][6]} | ${DisplayMap[4][7]} | ${DisplayMap[4][8]} | ${DisplayMap[4][9]} |
+ - + - + - + - + - + - + - + - + - + - + - +
| F | ${DisplayMap[5][0]} | ${DisplayMap[5][1]} | ${DisplayMap[5][2]} | ${DisplayMap[5][3]} | ${DisplayMap[5][4]} | ${DisplayMap[5][5]} | ${DisplayMap[5][6]} | ${DisplayMap[5][7]} | ${DisplayMap[5][8]} | ${DisplayMap[5][9]} |
+ - + - + - + - + - + - + - + - + - + - + - +
| G | ${DisplayMap[6][0]} | ${DisplayMap[6][1]} | ${DisplayMap[6][2]} | ${DisplayMap[6][3]} | ${DisplayMap[6][4]} | ${DisplayMap[6][5]} | ${DisplayMap[6][6]} | ${DisplayMap[6][7]} | ${DisplayMap[6][8]} | ${DisplayMap[6][9]} |
+ - + - + - + - + - + - + - + - + - + - + - +
| H | ${DisplayMap[7][0]} | ${DisplayMap[7][1]} | ${DisplayMap[7][2]} | ${DisplayMap[7][3]} | ${DisplayMap[7][4]} | ${DisplayMap[7][5]} | ${DisplayMap[7][6]} | ${DisplayMap[7][7]} | ${DisplayMap[7][8]} | ${DisplayMap[7][9]} |
+ - + - + - + - + - + - + - + - + - + - + - +
| I | ${DisplayMap[8][0]} | ${DisplayMap[8][1]} | ${DisplayMap[8][2]} | ${DisplayMap[8][3]} | ${DisplayMap[8][4]} | ${DisplayMap[8][5]} | ${DisplayMap[8][6]} | ${DisplayMap[8][7]} | ${DisplayMap[8][8]} | ${DisplayMap[8][9]} |
+ - + - + - + - + - + - + - + - + - + - + - +
| J | ${DisplayMap[9][0]} | ${DisplayMap[9][1]} | ${DisplayMap[9][2]} | ${DisplayMap[9][3]} | ${DisplayMap[9][4]} | ${DisplayMap[9][5]} | ${DisplayMap[9][6]} | ${DisplayMap[9][7]} | ${DisplayMap[9][8]} | ${DisplayMap[9][9]} |
+ - + - + - + - + - + - + - + - + - + - + - +
`;
    console.clear();
    console.log(outputMap);
};

OutputManager.prototype.StyleGenerater = function(y,x){
    this.cl = symbols.cl;
    DisplayMap[y][x] = this.cl[map[y][x]] ?? map[y][x];
};

exports.OutputManager = OutputManager;