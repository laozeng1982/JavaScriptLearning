const LIST = require('./data_structure/ArrayList.js');
const LOG = require('./util.js');

let list = new LIST.ArrayList();
let log = new LOG.log();
console.log();

class Custom {
    constructor(name, book) {
        this.name = name;
        this.book = book;
    }

    equals(custom) {
        return this.name === custom.name && this.book === custom.book;
    }

    toString() {
        return "Custom: " + "{ name: " + this.name + ", book: " + this.book + " }";
    }
}

for (let idx = 0; idx < 50; idx++) {
    let custom = new Custom("name_" + idx, "book_" + idx);

    list.append(custom);
}

let cs1 = new Custom("name_1", "book_1");
let cs2 = new Custom();

log.info("list contains cs1 is: " + list.contains(cs1));
log.info("list contains cs2 is: " + list.contains(cs2));
log.info("the position of cs1 in list is: " + list.find(cs1));
log.info("the position of cs1 in list is: " + list.find(cs2));

for (list.front(); list.currPos() < list.length(); list.next()) {

    log.info(list.getElement(), list.pos, list.length());
}



