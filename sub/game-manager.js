const {map,DisplayMap,isBlank,isCount,isEdge,isMark,isMine,isNone,isUndefined,symbols} = require("./require-in-all.js");
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// x = แนวนอน ซ้าย-ขวา
// y = แนวตั้ง บน-ล่าง

//game function
function GameManager(MapManager, OutputManager) {
    this.MapManager = new MapManager;
    this.OutputManager = new OutputManager;
    //this.InputManager = new InputManager;
    this.status = 0;
    rl.question("all mine : ",(allmine)=>{
        if (typeof allmine != 'undefined'&&allmine < 100 && allmine >-1){
            this.allMine = allmine.toString(10);
        }else{
            this.allMine = 10;
        }
        this.nextStep()
    });
    //this.input = this.InputManager.getInput(this.status,this.Start.bind(this));
};

GameManager.prototype.nextStep = function(){
    this.OutputManager.Update();
    this.markStatus();
    if (this.status == 0|| this.status == 1){
        this.InputManager();
    }
    if (this.status == 2||this.status == 3){
        this.GameMessage();
    }
};

GameManager.prototype.InputManager = function () {
    rl.question("[mark?unmark?select] [a-j?0-9]", (commandIn) => {
        if (/\b[sum][a-z]+ [\w][\d]/.test(commandIn.toLowerCase())||/\b[sum] [\w][\d]/.test(commandIn.toLowerCase())) {
            this.commandIn = commandIn.toLowerCase().split(' ');
            this.selector = {
                0: {"m": "m","u": "u","s": "s"},
                1: {
                    0: {
                        "a": 0,
                        "b": 1,
                        "c": 2,
                        "d": 3,
                        "e": 4,
                        "f": 5,
                        "g": 6,
                        "h": 7,
                        "i": 8,
                        "j": 9
                    },
                }
            };
            this.input= {
                "method": this.selector[0][this.commandIn[0][0]],
                "position": {
                    "y": this.selector[1][0][this.commandIn[1][0]],
                    "x": parseInt(this.commandIn[1][1], 10)
                }
            };
            this.Start();
        }else if(commandIn.toLowerCase == 'exit'){
            rl.close();
        }else {
            this.nextStep();
        }
    });
};



GameManager.prototype.Start = function (/*input*/) {
    this.input // = input;
    //this.status = this.input.status;
    // if (this.status != 0){this.input = this.InputManager.getInput(this.status);}
    const DisValue = DisplayMap[this.input.position.y][this.input.position.x];
    const SysValue = map[this.input.position.y][this.input.position.x];

    if (this.input.method == 's') {
        this.selectCase(DisValue,SysValue);
    }

    if (this.input.method == 'm') {
        if (isNone(DisValue)) {
            DisplayMap[this.input.position.y][this.input.position.x] = symbols.mark;
        }
    }

    if (this.input.method == 'u') {
        if (isMark(DisValue)) {
            DisplayMap[this.input.position.y][this.input.position.x] = symbols.none;
        }
    }
    //this.Start()
    // console.log(this);
    //this.InputManager.getInput(this.status,this.Start.bind(this));
    this.nextStep();
};

GameManager.prototype.selectCase = function (DisValue,SysValue) {
    if (this.status == 0 && this.input.method == 's') {
        this.MapManager.MapGenerater(this.allMine, this.input.position);
        this.status = 1;
        if (!isCount(SysValue)) {
            this.showNext(this.input.position.y, this.input.position.x);
        } else {
            this.OutputManager.Show(this.input.position.y, this.input.position.x)
        }
        if (this.isWon()) {
            this.Won();
            // if(this.input.playAgain){
            //     this.playAgainCase();
            // }
        }
        this.saveMap("map");
    } else {
        if (this.input.method == 's') {
            if (isBlank(DisValue)) {
            } else

                if (isMark(DisValue)) {
                } else

                    if (!isNone(SysValue)) {
                        if (isMine(SysValue)) {
                            this.status = 3;
                            this.GameOver();
                            // if(this.input.playAgain){
                            //     this.playAgainCase();
                            // }
                        } else
                            if (isCount(SysValue)) {
                                this.OutputManager.Show([this.input.position.y], [this.input.position.x])
                            }
                    } else
                    
                        if (isNone(SysValue)) {
                            DisplayMap[this.input.position.y][this.input.position.x] = symbols.blank;
                            this.showNext(this.input.position.y, this.input.position.x);
                        }
            if (this.isWon()) {
                this.Won();
                // if(this.InputManager.getInput(this.status).playAgain){
                //     this.playAgainCase();
                // }
            }
        }
    }
};
GameManager.prototype.statusSelector = {
    0:'[mark?unmark?select] [a-j?0-9]',
    1:'[mark?unmark?select] [a-j?0-9]',
    2: 'You win. Play again?(y/n)',
    3: 'Game Over Try again?(y/n)',
};

GameManager.prototype.GameMessage = function(){
    rl.question(`${this.statusSelector[`${this.status}`]}`,(aws)=>{
        switch (aws.toLowerCase()[0]) {
            case 'y': this.playAgainCase();
                break;
            case 'n': rl.close(); this.saveMap("dpmap");
                break;
            default: rl.close(); this.saveMap("dpmap");
                break;
        }
    });
};

GameManager.prototype.playAgainCase = function(){
    this.status = 0;
    this.saveMap("dpmap");
    this.MapManager.resetMap();
    //this.InputManager.getInput(this.status,this.Start.bind(this));
    //this.Start();
    this.nextStep();
};

GameManager.prototype.GameOver = function(){
    for(var line in map){
        for(var col in map){
            var sysValue = map[line][col];
            var disValue = DisplayMap[line][col];
            if(isMine(sysValue)&&(!isMark(disValue))&&(this.input.position.x == col&&this.input.position.y == line)){
                DisplayMap[line][col] = symbols.wrongmine;
            }else
            if(isMine(sysValue)&&(!isMark(disValue))){
                this.OutputManager.Show(line,col);
            }else
            if((!isMine(sysValue))&&isMark(disValue)){
                DisplayMap[line][col] = symbols.wrongmark;
            }
        }
    }
    this.nextStep();
    //this.InputManager.getInput(this.status,this.Start.bind(this));
};

GameManager.prototype.showNext = function(y,x){
    var minimap = this.MapManager.MapScaner(y,x);
    var scanVar = [-1,0,1];
    for(var line in minimap){
        for(var col in minimap[line]){
            const yPosition = y + scanVar[line];
            const xPosition = x + scanVar[col];
            if (!isUndefined(map[yPosition])) {
                if (
                    !isUndefined(minimap[line][col])
                    && (!isCount(DisplayMap[yPosition][xPosition])
                    && !isMark(DisplayMap[yPosition][xPosition])
                    && !isBlank(DisplayMap[yPosition][xPosition]))
                ) {
                    if (isCount(minimap[line][col])) {
                        this.OutputManager.Show(yPosition, xPosition);
                    }
                    if (isNone(minimap[line][col])) {
                        this.OutputManager.Show(yPosition, xPosition);

                        if (line == 0 && col == 0) { this.showNext(yPosition, xPosition); }
                        if (line == 0 && col == 1) { this.showNext(yPosition, xPosition); }
                        if (line == 0 && col == 2) { this.showNext(yPosition, xPosition); }
                        if (line == 1 && col == 0) { this.showNext(yPosition, xPosition); }
                        if (line == 1 && col == 2) { this.showNext(yPosition, xPosition); }
                        if (line == 2 && col == 0) { this.showNext(yPosition, xPosition); }
                        if (line == 2 && col == 1) { this.showNext(yPosition, xPosition); }
                        if (line == 2 && col == 2) { this.showNext(yPosition, xPosition); }
                    }
                }
            }
        }
    }
};

GameManager.prototype.isWon = function(){
    var blank = (
        JSON.stringify(this.MapManager.finder(map,symbols.none)) === JSON.stringify(this.MapManager.finder(DisplayMap,symbols.blank))
    );
    var count = function(){
        var out = [];
        var n = 0;
        for(var line in map){
            for(var col in map[line]){
                if (isCount(map[line][col])) {
                    out[n] = isCount(map[line][col]) && isCount(DisplayMap[line][col]);
                    n++;
                }
            }
        }
        for (x in out){
            out[0] = out[0]&&out[1];
            out[1] = out[x];
        }
        return out[0];
    }
    return (blank&&count());
};
GameManager.prototype.Won = function(){
    for(var line in map){
        for(var col in map[line]){
            var sysValue = map[line][col];
            if(isMine(sysValue)){
                DisplayMap[line][col] = symbols.mark;
            }
        }
    }
    this.status = 2;
    this.nextStep();
    //this.InputManager.getInput(this.status,this.Start.bind(this));
};

GameManager.prototype.markStatus = function(){
    var tube = {
        full: '▒',
        none: '▓',
        allmark: this.MapManager.finder(DisplayMap,symbols.mark).pieces | this.MapManager.finder(DisplayMap,symbols.wrongmark).pieces
    };
    if (tube.allmark > this.allMine) {
        var bar = `[${tube.full.repeat(10)}${tube.none.repeat(0)}] ${this.allMine - tube.allmark}\n`;
    } else {
        var bar = `[${tube.full.repeat(tube.allmark)}${tube.none.repeat(this.allMine - tube.allmark)}] ${this.allMine - tube.allmark}\n`;
    }
    console.log(bar);
};

GameManager.prototype.saveMap = function(target){
    switch (target){
        case "map":
            fs.appendFileSync("log.txt", `${Date()}\nSYTEM MAP\n${map.join("\n")}\n\n`);
            break;
        case "dpmap":
            fs.appendFileSync("log.txt", `DISPLAY MAP\n${DisplayMap.join("\n")}\n\n`);
            break;
        default:
            break;
    }
}
exports.GameManager = GameManager;
