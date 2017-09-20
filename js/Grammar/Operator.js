/**
 * This is a grammar demonstration
 * About Operator
 */

const LOG = require('../util.js');

let log = new LOG.Log();
console.log();

// delete

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.toString = function () {
        return "{ name: " + this.name + ", age: " + this.age + " }";
    }
}

var person1 = new Person("lao1", 30);

log.info("before delete, person1 is: " + person1.toString());
delete person1.name;
log.info("after delete, person1 is: " + person1.toString());
person1.name = "lao2";
log.info("after add, person1 is: " + person1.toString());
console.log();


// void
function saySomething() {
    return "Hello~~";
}

var hi = saySomething();
log.info("before void, saySomething: " + hi);
hi = void(saySomething());
log.info("after void, saySomething: " + hi);
console.log();

// ++ and --
var num = 10;
log.info("++num is: " + ++num);

num = 10;
log.info("num++ is: " + num++);
log.info("num is: " + num);

num = 10;
num++;
log.info("num++ is: " + num);
console.log();

num = 10;
log.info("--num is: " + --num);

num = 10;
log.info("num-- is: " + num--);
log.info("num is: " + num);

num = 10;
num--;
log.info("num-- is: " + num);

console.log();

num = -10;
num = +num;
log.info("num is: " + num);
num = -num;
log.info("num is: " + num);

console.log();

//Logic Operator
log.info("!true: " + !true);
log.info("!false: " + !false);
console.log();

log.info("true && true ", true && true);
log.info("true && false ", true && false);
log.info("false && true ", false && true);
log.info("false && false ", false && false);
console.log();

log.info("true || true ", true || true);
log.info("true || false ", true || false);
log.info("false || true ", false || true);
log.info("false || false ", false || false);
console.log();

// Add and sub

var normal1 = 1024;
var normal2 = 32;

log.info("normal1 + normal2: " + (normal1 + normal2));
log.info("normal1 - normal2: " + (normal1 - normal2));
log.info("normal1 * normal2: " + (normal1 * normal2));
log.info("normal1 / normal2: " + (normal1 / normal2));
console.log();

var str1 = "1024";
var str2 = "hello";
log.info("normal1 + str1: " + (normal1 + str1));
log.info("normal1 - str1: " + (normal1 - str1));
log.info("str1 + str2: " + (str1 + str2));
log.info("str1 - str2: " + (str1 - str2));

log.info("normal1 * str1: " + (normal1 * str1));
log.info("normal1 / str1: " + (normal1 / str1));
log.info("str1 * str2: " + (str1 * str2));
log.info("str1 / str2: " + (str1 / str2));

log.info("str2 * str2: " + (str2 * str2));
log.info("str2 / str2: " + (str2 / str2));
console.log();


var maxInfinity = 1024 / 0;
var minInfinity = 1024 / -0;
var nan1 = 0 / 0;
var nan2 = 0 / 0;

log.info("maxInfinity: " + maxInfinity);
log.info("minInfinity: " + minInfinity);
log.info("nan1: " + nan1);
log.info("nan2: " + nan2);
log.info("nan1 === nan1: " + (nan1 === nan2));
log.info("nan1 > nan2: " + (nan1 > nan2));
log.info("nan1 < nan2: " + (nan1 < nan2));
console.log();

var apple = "apple";
var banana1 = "Banana";
var banana2 = "banana";

log.info("apple > banana1: " + (apple > banana1));
log.info("apple > banana2: " + (apple > banana2));
log.info("apple > banana2: " + (apple.toLowerCase() > banana1.toLowerCase()));

console.log();

log.info("\"255\" < \"35\" is: " + ("255" < "35"));
log.info("\"255\" < 35 is: " + ("255" < 35));
console.log();

var sNum = "666";
var iNum = 666;
log.info("\"666\" == 666 is: " + (sNum == iNum));	//输出 "true"
log.info("\"666\" === 666 is: " + (sNum === iNum));	//输出 "false"

log.info("\"666\" != 666 is: " + (sNum != iNum));	//输出 "false"
log.info("\"666\" !== 666 is: " + (sNum !== iNum));	//输出 "true"
console.log();

var b1 = true;
log.info("b1 == 1 is: " + (b1 == 1));
log.info("b1 === 1 is: " + (b1 === 1));

var b2 = false;
log.info("b1 == 0 is: " + (b2 == 0));
log.info("b1 === 0 is: " + (b2 === 0));
console.log();

num = 10;
num += num;
log.info("num = 10, num += num is: " + num);

num = 10;
num -= num;
log.info("num = 10, num -= num is: " + num);

num = 10;
num /= num;
log.info("num = 10, num /= num is: " + num);

num = 10;
num *= num;
log.info("num = 10, num *= num is: " + num);
console.log();

log.info("(5 > 3 ? 5 : 3) is: " + (5 > 3 ? 5 : 3));

log.info("(5 < 3 ? 5 : 3) is: " + (5 < 3 ? 5 : 3));