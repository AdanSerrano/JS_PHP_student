
class Person{
    static _conteo = 0; // propiedad privada

    static get conteo() {
        return Person._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.name + ' says hello' );
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

const spiderman = new Person('Peter Parker', 20, 'Spiderman');
const batman = new Person('Bruce Wayne', 30, 'Batman');
const ironman = new Person('Tony Stark', 40, 'Ironman');

spiderman.setFavoriteFood = 'Pizza';
batman.setFavoriteFood = 'yogurt';
ironman.setFavoriteFood = 'omelette';
// spiderman.nemesis = 'Green Goblin';


spiderman.myAge();
console.log(spiderman.getFavoriteFood);
console.log( '----------------------------' );
batman.myAge();
console.log(batman.getFavoriteFood);
console.log( '----------------------------' );
ironman.myAge();
console.log(ironman.getFavoriteFood);
console.log( '----------------------------' );



console.log(spiderman);

// Person._conteo = 2;
console.log('Conteo statico', Person._conteo);
console.log(Person.conteo);

Person.mensaje();