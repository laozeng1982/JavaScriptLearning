/**
 * This is a data type demonstration
 * About Date
 */

const LOG = require('../util.js');

let log = new LOG.log();
console.log();

var number1 = 3.1415926;
var number2 = 3.4415926;
var number3 = 3.5415926;

log.info("number1 is: " + number1 + ", and after ceil is: " + Math.ceil(number1));
log.info("number1 is: " + number1 + ", and after floor is: " + Math.floor(number1));
log.info("number1 is: " + number1 + ", and after round is: " + Math.round(number1));
console.log();

log.info("number2 is: " + number2 + ", and after ceil is: " + Math.ceil(number2));
log.info("number2 is: " + number2 + ", and after floor is: " + Math.floor(number2));
log.info("number2 is: " + number2 + ", and after round is: " + Math.round(number2));
console.log();

log.info("number3 is: " + number3 + ", and after ceil is: " + Math.ceil(number3));
log.info("number3 is: " + number3 + ", and after floor is: " + Math.floor(number3));
log.info("number3 is: " + number3 + ", and after round is: " + Math.round(number3));
console.log();

// random
for (let idx = 0; idx < 100; idx++) {
    var random = Math.random();
    log.info("random " + idx + " is: " + random + ", and parseInt(random) is: " + parseInt(random * 100));
}

