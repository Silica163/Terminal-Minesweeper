

/**
 * @param red   0-255
 * @param green 0-255
 * @param blue  0-255 
 * */
const colorSelecter = require("./style-selector.json");

String.prototype.reset = `\x1b[0m`;

String.prototype.setRGBColor = function(red,green,blue){
    var start = `\x1b[38;2;${red};${green};${blue}m`;
    var end = '\x1b[39m'
    return `${start}${this}${end}`;
};

String.prototype.setRGBBackgroundColor = function(red,green,blue){
    var start = `\x1b[48;2;${red};${green};${blue}m`;
    var end = '\x1b[49m';
    return `${start}${this}${end}`;
};

String.prototype.setColor = function (colorName) {
    colorName = colorName.toLowerCase();
    let value = 0;
    if (colorSelecter.fg[colorName]) {
        value = colorSelecter.fg[colorName]
        var start = `\x1b[${value}m`
        var end = '\x1b[39m'
        return `${start}${this}${end}`
    } else {
        if (colorName == '' || colorName == null) {
            return Error('COLOR NAME CAN NOT EMPTY')
        }
        else {
            return new Error('COLOR NAME ERROR')
        }
    }
};

String.prototype.setBackgroundColor = function (colorName) {
    colorName = colorName.toLowerCase();
    let value = 0;
    colorSelecter.bg[colorName] ? value = colorSelecter.bg[colorName] : (
        (colorName == '' || colorName == null) ?
        console.error(new Error('COLOR NAME CAN NOT EMPTY')) : console.error(new Error('COLOR NAME ERROR'))
    );
    var start = `\x1b[${value}m`;
    var end = '\x1b[49m';
    return `${start}${this}${end}`;
};
String.prototype.setTextStyle = function(style){
    if (style == null || style == undefined) {
        return new Error(`STYLE NAME CAN NOT BE ${style}`)
    } else {
        style = style.toLowerCase();
        var start = 0;
        var end = 0;
        if (colorSelecter.style[style]) {
            start = colorSelecter.style[style][0];
            end = colorSelecter.style[style][1];
            return `\x1b[${start}m${this}\x1b[${end}m`;
        } else {
            if (style == '') {
                console.error(new Error(`STYLE NAME CAN NOT EMPTY`));
            }
            else {
                var errMsg = new Error('STYLE NAME ERROR');
                console.error(errMsg);
            }
        }
    }
};

exports.String = String;