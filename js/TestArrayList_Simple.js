const LIST = require('./Data_Structure/ArrayList.js');

var list = new LIST.ArrayList();


for (let idx = 0; idx < 50; idx++) {
    list.append("aa" + idx);
}

var logger = require('tracer').console();

// logger.log(list.insert("fuck", "aa1"));
logger.log(list.dataStore);
logger.log(list.contains("aa1"));
logger.log(list.find("aa0"));


for (list.front(); list.currPos() < list.length(); list.next()) {

    console.log(list.getElement(), " , ", list.pos, " , ", list.length());
}

for (list.end(); list.currPos() >=0; list.prev()) {

    console.log(list.getElement(), " , ", list.pos, " , ", list.length());
}

