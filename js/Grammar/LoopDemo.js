/**
 * This is a grammar demonstration
 * About Loops
 */

const LOG = require('../util.js');

let log = new LOG.log();
console.log();

var loopLength = 100;

// for loop
var numberArr1 = [];
for (let idx = 0; idx < loopLength; idx++) {
    numberArr1.push((idx + 1) * 5);
    log.info("numberArr1[" + idx + "] is: " + numberArr1[idx]);
}
console.log();

var numberArr2 = [];
while (loopLength > 0) {
    numberArr2.push((101 - loopLength) * 5);
    loopLength--;
    log.info("numberArr2[" + (numberArr2.length - 1) + "] is: " + numberArr2[numberArr2.length - 1]);
}
console.log();

var numberArr3 = [];

do {
    numberArr3.push((loopLength + 1) * 5);
    log.info("numberArr3[" + loopLength + "] is: " + numberArr3[loopLength]);
    loopLength++;
} while (loopLength < 100);


var numberArr4 = [];
for (let idx = 0; idx < loopLength; idx++) {
    if (idx === 50)
        break;
    numberArr4.push((idx + 1) * 5);

    log.info("numberArr4[" + idx + "] is: " + numberArr4[idx]);


}
console.log();

var numberArr5 = [];
for (let idx = 0; idx < loopLength; idx++) {
    if (idx === 50)
        continue;
    numberArr5.push((idx + 1) * 5);

    log.info("numberArr5[" + idx + "] is: " + numberArr5[idx]);

}
console.log();


var testObj = {
    name: "Jian Ge",
    age: 100,
    height: 170,
    father: "daddy",
    mother: "mommy",
    brother: "gege",
    sisiter: "meimei"

};

for (let item in testObj) {
    log.info("item in testObj is: " + item);
}
console.log();

// for (let item of testObj) {
//     log.info("item of testObj is: " + item);
// }
// console.log();

for (let item in numberArr4) {
    log.info("numberArr4 item is: " + item);
}
console.log();

for (let item of numberArr4) {
    log.info("numberArr4 item is: " + item);
}

var iNum = 0;
outermost:  // This is a Label
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i === 5 && j === 5) {
                break outermost;
            }
            iNum++;
        }
    }

log.info("iNum is: " + iNum);

iNum = 0;
outermost:  // This is a Label
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i === 5 && j === 5) {
                continue outermost;
            }
            iNum++;
        }
    }

log.info("iNum is: " + iNum);
// random


