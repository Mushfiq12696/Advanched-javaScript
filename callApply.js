const normalPerson = {
    firstName: "Alen",
    lastName: "Shopon",
    salary: 15000,
    getFulName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;

        return this.salary;
    },
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
        firstName: 'Hero',
        lastName: 'golam',
        salary: 35000
    }
    // const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
    // const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
    // heroChargeBill(2000);
    // console.log(heroPerson.salary);
    // normalPerson.chargeBill();
    // heroChargeBill(3000);
    // friendlyPersonChargeBill(5000);
    // friendlyPersonChargeBill(5000);
    // normalPerson.chargeBill.call(heroPerson, 1000, 300, 20);
    // console.log(heroPerson.salary);
normalPerson.chargeBill.apply(heroPerson, [3000, 300, 40]);
console.log(heroPerson.salary);