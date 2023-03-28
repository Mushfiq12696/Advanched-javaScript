class Person {
    constructor(firsName, lastName, salary) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Kalam', 25000);
console.log(friendlyPerson);