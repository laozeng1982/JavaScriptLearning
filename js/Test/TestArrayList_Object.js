const LIST = require('../Data_Structure/ArrayList.js');
const LOG = require('../util.js');
const PERSON = require('../Data_Structure/Person.js');

let list = new LIST.ArrayList();
let log = new LOG.Log();
let Person = require('../Data_Structure/Person.js').Person;
console.log();


for (let idx = 0; idx < 50; idx++) {
    let person = new Person("name_" + idx, "age_" + idx);

    list.append(person);
}

let person1 = new Person("name_1", "age_1");
let person2 = new Person();

log.info("list contains person1 is: " + list.contains(person1));
log.info("list contains person2 is: " + list.contains(person2));
log.info("the position of person1 in list is: " + list.find(person1));
log.info("the position of person1 in list is: " + list.find(person2));
console.log();

for (list.front(); list.currPos() < list.length(); list.next()) {

    log.info(list.getElement(), "position is: " + list.pos, "total length: " + list.length());
}



