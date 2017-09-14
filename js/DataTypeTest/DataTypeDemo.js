/**
 * This is a data type demonstration
 */

const LOG = require('../util.js');

let log = new LOG.log();
console.log();

// Boolean
let open = true;
let close = false;

log.info("open is: " + open + ", and type is: " + typeof open);
log.info("open prototype is: " + Object.prototype.toString.apply(open));
log.info("close is: " + close + ", and type is: " + typeof close);
log.info("close prototype is: " + Object.prototype.toString.apply(close));

console.log();

// Number
let number = 10;
log.info("number is: " + number + ", and type is: " + typeof number);
log.info("number prototype is: " + Object.prototype.toString.apply(number));
console.log();

// String
let string = "Hello, World!";
log.info("string is: \"" + string + "\", and type is: " + typeof string);
log.info("string prototype is: " + Object.prototype.toString.apply(string));
console.log();

//Undefined
let undefinedVar;
log.info("undefinedVar is: " + undefinedVar + ", and type is: " + typeof undefinedVar);
log.info("undefinedVar prototype is: " + Object.prototype.toString.apply(undefinedVar));
console.log();

undefinedVar = "I am a string";
log.info("undefinedVar is: \"" + undefinedVar + "\", and type is: " + typeof undefinedVar);
log.info("undefinedVar prototype is: " + Object.prototype.toString.apply(undefinedVar));
console.log();

// JavaScript中一些特殊的对象

// Null
let nullVar = null;
log.info("nullVar is: " + nullVar + ", and type is: " + typeof nullVar);
log.info("nullVar prototype is: " + Object.prototype.toString.apply(nullVar));
console.log();

// Array
let array = [1, 2, 3, 4];
log.info("array is: " + array + ", and type is: " + typeof array);
log.info("array prototype is: " + Object.prototype.toString.apply(array));
console.log();

// Date
let date = new Date();
log.info("date is: " + array + ", and type is: " + typeof date);
log.info("date prototype is: " + Object.prototype.toString.apply(date));
console.log();






