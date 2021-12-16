const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var InputManager = function () {
    this.gameStatus = 0;
    this.Command;
    this.output = {method:undefined,position:{y:undefined,x:undefined},status:this.gameStatus,playAgain:false};
    this.callback = ()=>{};
}

InputManager.prototype.questionSele = {
    0:"[mark?unmark?select] [a-j?0-9]",// before first select
    1:"[mark?unmark?select] [a-j?0-9]",//normal status
    2:'You win. Play again?(y/n)',// won
    3:'Game Over Try again?(y/n)',//Game Over

};

InputManager.prototype.getInput = function(gameStatus,callback) {
    this.callback = callback;
    this.gameStatus = gameStatus;
    this.output.status=this.gameStatus;
    var question = this.questionSele[this.gameStatus];
    rl.question(question, (commandIn) => {
        this.rawCommand = commandIn;
        this.Command = commandIn.toLowerCase().split(' ');
        switch (this.gameStatus) {
            case 0:
            case 1: this.defaultMessage();
                break;
            case 2:
            case 3:this.afterGameMessage();
                break;
            default:this.defaultMessage();
                break;
        }
        console.log(this);
        return this.send();
    });
};

InputManager.prototype.defaultMessage = function(){
    if (/\b[sum][a-z]+ [\w][\d]/.test(this.rawCommand)||/\b[sum] [\w][\d]/.test(this.rawCommand)) {
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
        this.output.method = this.selector[0][this.Command[0][0]];
        this.output.position = {
            y: this.selector[1][0][this.Command[1][0]],
            x: parseInt(this.Command[1][1], 10)
        }
        console.log(this);
        this.callback(this.output)
    }else {
        return this.getInput();
    }
}
InputManager.prototype.afterGameMessage = function(){
    switch(this.Command[0][0]){
    case "y":this.output.playAgain = true,this.reset(),this.callback(this.output);
        break;
        case 'n':this.output.playAgain = false,rl.close();
        break;
        default:this.output.playAgain = false,rl.close();
        break;
    };
    this.reset();
    console.log(this);
}

InputManager.prototype.send = function(){
    return this.output;
};

InputManager.prototype.reset = function(){
    this.output.status = 0;
    this.gameStatus=this.output.status;
}
exports.InputManager = InputManager;