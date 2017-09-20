/**
 * This is a grammar demonstration
 * About Exception
 */

const LOG = require('../util.js');

let log = new LOG.Log();
console.log();

var number1 = 10;
var number2;
var numberArr;

log.info("number1 * number2 = " + number1 * number2);
// Log.info("numberArr[10] = " + numberArr[10]);

try {
    //在这里运行代码
    log.info("numberArr[10] = " + numberArr[10]);
} catch (err) {
    //在这里处理错误，使用系统的err，会有err.message
    log.info("Error description: " + err.message);
}

number2 = 10;
log.info("number1 * number2 = " + number1 * number2);

console.log();


try {
    //在这里运行代码
    // var x;
    var x = 0 / 0;
    if (x === "") {
        throw "empty";
    }
    if (isNaN(x)) {
        throw "not a number";
    }
    if (x > 10) {
        throw "too high";
    }
    if (x < 5) {
        throw "too low";
    }
} catch (err) {
    //在这里处理错误，自定义异常
    log.info("Error description: " + err);
}




