const LIST = require('../DataStructure/ArrayList.js');
const LOG = require('../util.js');

let list = new LIST.ArrayList();
let log = new LOG.Log();
console.log();

for (let idx = 0; idx < 50; idx++) {
    list.append("aa" + idx);
}

log.info("Elements in list are: " + list.dataStore);
log.info("This list contains \"aa1\" is: " + list.contains("aa1"));
log.info("This list contains \"aa100\" is: " + list.contains("aa100"));
log.info("The position of \"aa0\" is: " + list.find("aa0"));
console.log();

for (list.front(); list.currPos() < list.length(); list.next()) {
    log.info(list.getElement(), list.pos, list.length());
}
console.log();

for (list.end(); list.currPos() >= 0; list.prev()) {
    log.info(list.getElement(), list.pos, list.length());
}

