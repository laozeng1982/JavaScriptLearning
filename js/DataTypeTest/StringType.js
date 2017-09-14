/**
 * This is a data type demonstration
 * About String
 */

const LOG = require('../util.js');

let log = new LOG.log();
console.log();

var str1 = new String("string1");
var str2 = String("string2");
var str3 = "string3";

log.info("str1 is: "+str1);
log.info("str2 is: "+str2);
log.info("str3 is: "+str3);
console.log();

var gender = "";
if (gender === "man")
    log.info("Hi, 帅哥");
else if (gender === "female")
    log.info("Hi, 美女");
else
    log.info("Hi, 禽兽");

gender = "";
if (gender)
    log.info("empty string is true");

gender = "string";
if (gender)
    log.info("non-empty string is true");

console.log();

var stringNumber = "122";

if (stringNumber > 0) {
    log.info("stringNumber 122 is bigger than 0!");
}

if (stringNumber == 122) {
    log.info("stringNumber 122 is equal 122!");
}

if (stringNumber === 122) {
    log.info("stringNumber 122 is number 122!");
}

console.log();

// String methods