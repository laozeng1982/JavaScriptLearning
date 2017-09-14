/**
 * This is a data type demonstration
 * About Boolean
 */

const LOG = require('../util.js');

let log = new LOG.log();
console.log();

var number = 0;

if (number)
    log.info("0 is true");

number = -1;
if (number)
    log.info("non 0 is true");
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

function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person1 = new Person("zhangsan", 21);
var person2 = new Person();
var person3;

if (person1)
    log.info("person1 is true!");

if (person2)
    log.info("person2 is true!");

if (person3)
    log.info("person3 is true!");

// if (person4)
//     log.info("person4 is true!");

console.log();

if (Number.POSITIVE_INFINITY)
    log.info("Number.POSITIVE_INFINITY is true!");
if (Number.NEGATIVE_INFINITY)
    log.info("Number.NEGATIVE_INFINITY is true!");

console.log();

if (null)
    log.info("null is true");

if (!null)
    log.info("not null is true");

var nan =0/0;

if (nan)
    log.info("NaN is true");