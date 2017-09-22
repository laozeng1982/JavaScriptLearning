class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.speak = function (msg) {
            log.info("I will say: " + msg);
            console.log();
        }
    }

    equals(person) {
        return this.name === person.name && this.age === person.age;
    }

    toString() {
        var str = "I am " + this.name + ", and " + this.age + " years old.";
        return str;
    }
}

module.exports = {
    Person: Person
};

var person1 = new Person("zhangsan", 30);
console.log(person1.toString());
person1.age = 40;
console.log(person1.toString());