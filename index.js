const hexToRgb = require('./hexToRgb');
const rgbToHex = require('./rgbToHex');
const rgbToHsl = require('./rgbToHsl');
const hexToHsl = require('./hexToHsl');
const r = parseInt((process.argv[3]));
const g = parseInt((process.argv[4]));
const b = parseInt((process.argv[5]));


if(process.argv[2] === "hex"){
    for(let i = 3; i < process.argv.length; i++){
    console.log(hexToRgb(process.argv[i]));
    console.log(hexToHsl(process.argv[i]));
    }
} else if(process.argv[2] === "rgb"){
    console.log(rgbToHex(r,g,b));
    console.log(rgbToHsl(r,g,b));
} else if(process.argv[2] === "color"){
    myOutput = process.argv[6];
    console.log(`\x1b[38;2;${r};${g};${b}m%s\x1b[0m`, myOutput);
}