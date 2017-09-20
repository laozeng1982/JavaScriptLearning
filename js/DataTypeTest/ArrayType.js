/**
 * This is a data type demonstration
 * About Array
 */

const LOG = require('../util.js');

let log = new LOG.Log();
console.log();

// 3 methods define a Array
let size = 4;
var arr1 = new Array(size);
var arr2 = new Array(1, 2, 3, 4);
var arr3 = Array(size);
var arr4 = [1, 2, 3, 4];

log.info("arr1 length is: " + arr1.length + ", and arr1 is: " + arr1.toString());
log.info("arr2 length is: " + arr2.length + ", and arr2 is: " + arr2.toString());
log.info("arr3 length is: " + arr3.length + ", and arr3 is: " + arr3.toString());
log.info("arr4 length is: " + arr4.length + ", and arr4 is: " + arr4.toString());
console.log();

// define a Array
var arrayLength = 100;
var numberArr = [];

log.info("length of numberArr is: " + numberArr.length + ", and numberArr is: " + numberArr);


for (let idx = 0; idx < arrayLength; idx++) {
    numberArr.push(idx);
}

for (let idx = 0; idx < arrayLength; idx++) {
    numberArr[idx] = idx + 5;
}

for (let idx = 0; idx < numberArr.length; idx++) {
    log.info("element index is: " + idx + ", and element value is: " + numberArr[idx]);
}

for (let element of numberArr) {
    log.info("element index is: " + "unknown" + ", and element value is: " + element);
}

console.log();

// String methods
let part1 = [1, 2, 3];
let part2 = [4, 5];

// concat method, 连接两个或更多的数组，并返回结果。
let concat1 = part1.concat(part2);
let concat2 = part2.concat(part1);
log.info("concat1 is: " + concat1);
log.info("concat2 is: " + concat2);
console.log();

// join method, 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
let join1 = concat1.join("-");
let join2 = concat1.join(":");
log.info("join1 is: " + join1);
log.info("join2 is: " + join2);
console.log();

// pop method, 	删除并返回数组的最后一个元素
let pop = concat1.pop();
log.info("pop element is: " + pop);
log.info("after pop, concat1 is: " + concat1);
console.log();

// push method, 向数组的末尾添加一个或更多元素，并返回新的长度。
let push = 5;
concat1.push(push);
log.info("push element is: " + push);
log.info("after push, concat1 is: " + concat1);
console.log();

// reverse method, 颠倒数组中元素的顺序。
log.info("before reverse, concat1 is: " + concat1);
concat1.reverse();
log.info("after reverse, concat1 is: " + concat1);
console.log();

// shift, 删除并返回数组的第一个元素
concat1.reverse();
log.info("before shift, concat1 is: " + concat1);
let shift = concat1.shift();
log.info("shift value is: " + shift);
log.info("after shift, concat1 is: " + concat1);
console.log();

// unshift, 向数组的开头添加一个或更多元素，并返回新的长度。
log.info("before unshift, concat1 is: " + concat1);
concat1.unshift(1);
log.info("after unshift, concat1 is: " + concat1);
console.log();

// slice, 从某个已有的数组返回选定的元素，这是一个半开半闭的区间，[1,3)
let sliceArr = concat1.slice(1, 3);
log.info("sliceArr is: " + sliceArr);
log.info("after slice, concat1 is: " + concat1);
console.log();

// sort， 对数组的元素进行排序
var randomArr = [];
for (let idx = 0; idx < 10; idx++) {
    randomArr.push(parseInt(Math.random() * 100));
}

log.info("before sort randomArr is: " + randomArr);
randomArr.sort();
log.info("after normal sort randomArr is: " + randomArr);

function sortNumber(a, b) {
    return a - b > 0
}

randomArr.sort(sortNumber);
log.info("after right sort randomArr is: " + randomArr);

console.log();

// splice, 删除元素，并向数组添加新元素。
var originArr = [4, 14, 19, 29, 31, 42, 43, 58, 59, 75];
const ORG = [4, 14, 19, 29, 31, 42, 43, 58, 59, 75];

log.info("before splice originArr is: " + originArr);
// 直接删除
originArr.splice(1, 3);
log.info("after splice(1,3) originArr is: " + originArr);

// 什么也不做
originArr.splice(1, 0);
log.info("after splice(1,0) originArr is: " + originArr);

// 直接增加元素，可以增加任意元素
originArr.splice(1, 0, "aa", "bb");
log.info("after splice(1,0,\"aa\",\"bb\") originArr is: " + originArr);

originArr.splice(1, 0, ["cc", "dd"]);
log.info("after splice(1,0,[\"cc\",\"dd\"]) originArr is: " + originArr);

// 替换元素
originArr.splice(1, 4, 14, 19, 29);
log.info("after splice(1, 4, 14, 19, 29) originArr is: " + originArr);
log.info("the very origin Array is: " + ORG);
console.log();

// toString, 把数组转换为字符串，并返回结果。
log.info("result of toString(): "+originArr.toString());
console.log();

// valueOf,	返回数组对象的原始值
log.info("result of valueOf(): "+originArr.valueOf());