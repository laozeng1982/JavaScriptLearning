/**
 * This is a data type demonstration
 * About DeepCopy
 */

const LOG = require('../util.js');

let log = new LOG.log();
console.log();

var numberArr1 = [];


for (let idx = 0; idx < 10; idx++) {
    numberArr1.push(idx + 1);
}

var numberArr2 = numberArr1;

log.info("numberArr1 is: " + numberArr1);
log.info("numberArr2 is: " + numberArr2);
console.log();

for (let idx = 0; idx < numberArr2.length; idx++) {
    numberArr2[idx] = (idx + 1) * 5;
}
log.info("after modify numberArr2, numberArr1 is: " + numberArr1);
log.info("after modify numberArr2, numberArr2 is: " + numberArr2);
console.log();

var numberArr3 = [];
for (let idx = 0; idx < numberArr2.length; idx++) {
    numberArr3[idx] = numberArr2[idx];
}
log.info("after create numberArr3, numberArr1 is: " + numberArr1);
log.info("after create numberArr3, numberArr2 is: " + numberArr2);
log.info("after create numberArr3, numberArr3 is: " + numberArr3);

console.log();

for (let idx = 0; idx < numberArr3.length; idx++) {
    numberArr3[idx] = (idx + 1) * 10;
}
log.info("after modify numberArr3, numberArr1 is: " + numberArr1);
log.info("after modify numberArr3, numberArr2 is: " + numberArr2);
log.info("after modify numberArr3, numberArr3 is: " + numberArr3);

console.log();

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.toString = function () {
        return "{ name: " + this.name + ", age: " + this.age + " }";
    }
}

var person1 = new Person("lao1", 30);
var person2 = person1;

log.info("person1 is: " + person1.toString());
log.info("person2 is: " + person2.toString());
console.log();

person2.age = 18;
log.info("after modify person2, person1 is: " + person1.toString());
log.info("after modify person2, person2 is: " + person2.toString());
console.log();

var person3 = new Person();
person3.name = person2.name;
person3.age = person2.age;

log.info("after create person3, person1 is: " + person1.toString());
log.info("after create person3, person2 is: " + person2.toString());
log.info("after create person3, person3 is: " + person3.toString());
console.log();

person3.name = "JianGe";
person3.age = 100;

log.info("after modify person3, person1 is: " + person1.toString());
log.info("after modify person3, person2 is: " + person2.toString());
log.info("after modify person3, person3 is: " + person3.toString());
console.log();
