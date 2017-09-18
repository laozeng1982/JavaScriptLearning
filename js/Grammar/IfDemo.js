/**
 * This is a grammar demonstration
 * About Loops
 */

const LOG = require('../util.js');

let log = new LOG.log();
console.log();

// If statement
var age = 16;
var status;

if (age >= 18) {
    status = "Adult";
}

log.info("This man is " + status);
console.log();

// If else statement
age = 18;
if (age >= 18) {
    status = "Adult";
} else {
    status = "Youth"
}

log.info("This man is " + status);
console.log();


// Multi if else if~~
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.speak = function (msg) {
        log.info("I will say: " + msg);
    }
}

var person1 = new Person("Mike Jordan", 55);
var person2 = new Person("James Band", 42);
var person3 = new Person("Kobe Bryan", 33);
person1.speak("Hello World!");
person2.name = "Smith";
person3.age = 43;

var persons = [
    new Person("zhangsan", -1),
    new Person("zhangsan", 1),
    new Person("zhangsan", 12),
    new Person("zhangsan", 18),
    new Person("zhangsan", 22),
    new Person("zhangsan", 26),
    new Person("zhangsan", 35),
    new Person("zhangsan", 40),
    new Person("Li si", 65)
];

for (let person of persons) {
    let tips;
    if (person.age < 0) {
        tips = "别闹，等你出生再说！";
    } else if (person.age >= 0 && person.age < 18) {
        tips = "你还小，好好学习！";
    } else if (person.age >= 18 && person.age <= 22) {
        tips = "上大学了撒，好好谈恋爱！";
    } else if (person.age > 22 && person.age < 30) {
        tips = "单身狗，赶紧找对象了！"
    } else {
        tips = "祝你好运咯，对象是个人就行了！！！！";
    }

    log.info(person.name + " age is: " + person.age + " Suggestion is: " + tips);
}
console.log();

persons[0].status = "baby";
persons[1].status = "baby";
persons[2].status = "jurSchool";
persons[3].status = "highSchool";
persons[4].status = "collage";
persons[5].status = "graduated";
persons[6].status = "worker";
persons[7].status = "boss";
persons[7].status = "professor";

for (let person of persons) {
    let tips;
    switch (person.status) {
        case "baby":
            tips = "睡觉";
            break;
        case "jurSchool":
            tips = "上初中";
            break;
        case "highSchool":
            tips = "上高中";
            break;
        case "collage":
            tips = "上大学";
            break;
        case "graduated":
            tips = "读研究生";
            break;
        case "worker":
            tips = "上班";
            break;
        case "boss":
            tips = "当老板";
            break;
        case "professor":
            tips = "当教授";
            break;
        default:
            tips = "搞毛线啊";
            break;
    }

    log.info(person.name + " status is: " + person.status + ", is doing: " + tips);
}
console.log();
