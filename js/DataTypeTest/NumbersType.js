/**
 * This is a data type demonstration
 * About Number
 */

const LOG = require('../util.js');

let log = new LOG.log();
console.log();

var number1 = 0x70;
log.info("Hexadecimal 0x70 transfer to Decimal is:" + number1);
console.log();

log.info(Number.MAX_VALUE);
log.info(Number.MIN_VALUE);
console.log();

log.info(Number.POSITIVE_INFINITY);
log.info(Number.NEGATIVE_INFINITY);
console.log();

log.info(42 / 0);
log.info(42 / 0 === Number.POSITIVE_INFINITY);
console.log();

log.info(-42 / 0);
log.info(-42 / 0 === Number.NEGATIVE_INFINITY);
console.log();

log.info(0 / 0);
log.info("abc" / 0);
console.log();

log.info("abc" / 1);
log.info(1 / "abc");
console.log();

var nan1 = 0 / 0;
var nan2 = 0 / 0;

log.info("nan1 equals nan2 is: " + (nan1 === nan2));

if (nan1 === Number.NaN)
    log.info("nan1 is NaN");

if (Number.isNaN(nan2))
    log.info("nan2 is NaN");

if (!Number.isFinite(42 / 0))
    log.info("42/0 is Infinity");

