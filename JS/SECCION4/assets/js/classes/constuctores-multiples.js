class Person {

    static porObjeto({
        name, 
        lastname,
        country
    }) {
        return new Person(name, lastname, country);
    }

    constructor(name, lastname, country) {
        this.name = name;
        this.lastname = lastname;
        this.country = country;
    }

    getInfo() {
        console.log(`Info: ${this.name}, ${this.lastname}, ${this.country}`);
    }
}

const name1 = "melisa",
    lastname1 = "perez",
    country1 = "mexico";


const fer = {
    name: "Fernando",
    lastname: "Herrera",
    country: "Mexico"

}
const person1 = new Person(name1, lastname1, country1);
const person2 = Person.porObjeto(fer);
person1.getInfo();
person2.getInfo();
