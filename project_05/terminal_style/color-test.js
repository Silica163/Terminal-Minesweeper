const {String} = require('./color-text.js')

colorRound();
setByName();
setStyle();
function colorRound() {
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBBackgroundColor(0, a, b));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBBackgroundColor(a, b, 0));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBBackgroundColor(b, 0, a));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBBackgroundColor(a, 0, b));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBBackgroundColor(b, a, 0));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBBackgroundColor(0, b, a));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBColor(0, a, b));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBColor(a, b, 0));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBColor(b, 0, a));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBColor(a, 0, b));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBColor(b, a, 0));
        if (b == 0) { break; }
        b--;
    }
    b = 255;
    for (let a = 0; a < 256; a++) {
        process.stdout.write('#'.repeat(1).setRGBColor(0, b, a));
        if (b == 0) { break; }
        b--;
    }
}

function setByName(){
    let name = [
        'black','gray','red','brightred','green','brightgreen','blue','brightblue',
        'yellow','brightyellow','cyan','brightcyan','magenta','brightmagenta'
    ]
    for (let a of name) {
        console.log(a.setColor(a));
        console.log(a.setBackgroundColor(a));
    }
    console.log('err test'.setColor(''));
    console.log('err test'.setBackgroundColor(''));
}

function setStyle(){
    let name = ["reset","bold","dim","italic","underline","inverse","hidden","strikethrough"];
    for (let a of name){
        console.log(a.setTextStyle(a));
    }
    console.log('err test'.setTextStyle(''));
    console.log('err test'.setTextStyle('dbunderline'));
}