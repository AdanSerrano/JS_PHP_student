

// singleton es una estancia unica de una clase

class Singleton {
    static instance; // undefined 

    constructor(name = '') {
        if (!!Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.name = name;
    }
}

const instance1 = new Singleton('Juan');
const instance2 = new Singleton('Adan');
const instance3 = new Singleton('Francis');


console.log(`Nombre de la instancia es: ${instance1.name}`);
console.log(`Nombre de la instancia es: ${instance2.name}`);
console.log(`Nombre de la instancia es: ${instance3.name}`);