
class Person {
    static _conteo = 0; // propiedad privada

    static get conteo() {
        return Person._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.name + ' says hello');
    }

    constructor(name = 'Nameless', age = 'ageless', codeName = 'CodeNameless', food = 'foodless ') {
        if (!name || !age || !codeName || !food) throw new Error('Missing arguments');
        this.name = name;
        this.age = age;
        this.codeName = codeName;
        this.food = food;

        Person._conteo++;
    }

    // set establecer un valor 
    set setFavoriteFood(food) {
        this.food = food;
    }

    // get obtener un valor
    // siempre es bueno que retorne algo 
    get getFavoriteFood() {
        return `My favorite food is ${this.food.toUpperCase()}`
    }

    whoIam() {
        console.log(`I'm ${this.name} and my secret identity is ${this.codeName}`);
    }

    myAge() {
        this.whoIam();
        console.log(`I have ${this.age} years`);
    }
}

class Hero extends Person{
    constructor(name, age, codeName, food, clan = 'clanless') {
        super(name, age, codeName, food);
        this.clan = 'avengers';
    }

    whoIam() {
        console.log(`I'm ${this.name} from ${this.clan}`);
        super.whoIam();
    }
}


const spiderman = new Hero('Peter Parker', 20, 'Spiderman', 'Pizza');
// const spiderman = new Hero();
console.log( spiderman );
spiderman.whoIam();
