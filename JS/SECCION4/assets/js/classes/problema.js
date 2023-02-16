const adhan = {
    name: 'Adhan',
    age: 23,
    imprimir() {
        console.log(`Nombre: ${this.name} - Edad: ${this.age}`)
    }
}

const pedro = {
    name: 'Pedro',
    age: 23,
    imprimir() {
        console.log(`Nombre: ${this.name} - Edad: ${this.age}`)
    }
}

// adhan.imprimir();

function Persona(name, age) {
    console.log('Se ejecutó esta línea');
    this.name = name;
    this.age = age;
    this.imprimir = function () {
        console.log(`Nombre: ${this.name} - Edad: ${this.age}`)
    }
}

const juan = new Persona('Juan', 23);
console.log(juan);
juan.imprimir();
