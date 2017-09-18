class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.speak = function (msg) {
            log.info("I will say: " + msg);
            console.log();
        }
    }
}

module.exports = {
    Person: Person
};