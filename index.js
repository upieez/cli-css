const hexToRgb = require('./hexToRgb')
const rgbToHex = require('./rgbToHex')

// console.log(rgbToHex(0, 51, 255)); // #0033ff

if(process.argv[2] === "hex"){
    console.log(hexToRgb(process.argv[3]));
} else if(process.argv[2] === "rgb"){
    console.log(rgbToHex(
            parseInt((process.argv[3])),
            parseInt((process.argv[4])),
            parseInt((process.argv[5]))
        )
    );
}