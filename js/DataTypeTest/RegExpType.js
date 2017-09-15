/**
 * This is a data type demonstration
 * About Date
 */

const LOG = require('../util.js');

let log = new LOG.log();
console.log();

var str = "Hi Jian Ge, Jian Ge is a handsome man. JIAN GE is teaching JavaScript. JavaScript is the best WEB LANGUAGE!";

var pattern1 = new RegExp("Jian Ge", "g");
var result;

while ((result = pattern1.exec(str)) !== null) {
    log.info(result);
    log.info(pattern1.lastIndex);
}

console.log();

var pattern2 = /Jian Ge/gi;
while ((result = pattern2.exec(str)) !== null) {
    log.info(result);
    log.info(pattern2.lastIndex);
}

var pattern3 = /[is]/g;
var resultArr = [];

while ((result = pattern3.exec(str)) !== null) {
    resultArr.push(result + ", " + pattern3.lastIndex);
}

console.log();
for (let item of resultArr) {
    log.info(item);
}

var pattern4 = /[a-h]/g;
resultArr = [];

while ((result = pattern4.exec(str)) !== null) {
    resultArr.push(result + ", " + pattern4.lastIndex);
}

console.log();
for (let item of resultArr) {
    log.info(item);
}

var pattern5 = /\w/g;
resultArr = [];

while ((result = pattern5.exec(str)) !== null) {
    resultArr.push(result);
}

console.log();
log.info(resultArr);

var pattern6 = /\W/g;
resultArr = [];

while ((result = pattern6.exec(str)) !== null) {
    resultArr.push(result);
}

console.log();
log.info(resultArr);

var pattern7 = /G+/g;
resultArr = [];

while ((result = pattern7.exec(str)) !== null) {
    resultArr.push(result);
}

console.log();
log.info(resultArr);

console.log();

var pattern8 = /Jian/g;
var str2 = str.replace(pattern8, "Shuai");
log.info(str2);