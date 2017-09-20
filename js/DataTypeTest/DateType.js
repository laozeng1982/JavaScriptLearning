/**
 * This is a data type demonstration
 * About Date
 */

const LOG = require('../util.js');

let log = new LOG.Log();
console.log();

var today = new Date();
var date = new Date(1982, 1, 1);

log.info("today: " + today + ", and time is: " + today.getTime());
log.info("date: " + date + ", and time is: " + date.getTime());

console.log();

function sleep(seconds) {
    var now = new Date();
    var exitTime = now.getTime() + seconds * 1000;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

// sleep(5);
log.info("today: " + today + ", and time is: " + today.getTime());

console.log();

function moveDays(count) {
    var dateAfterMove = new Date();
    dateAfterMove.setTime(dateAfterMove.getTime() + count * 24 * 60 * 60 * 1000);
    return dateAfterMove;
}

count = 5;
log.info("after move to " + count +" days, new date is: " + moveDays(count));
count = -10;
log.info("after move to " + count +" days, new date is: " + moveDays(count));