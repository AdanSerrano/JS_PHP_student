// classes
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
        }
    obtenerPrecio() {
        console.log( this.precio );
    }
}


const producto2 = new Producto('monitor de 49"', 880 /*parametros*/);
const producto3 = new Producto('Laptop"', 880 /*parametros*/);


// herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
    obtenerPrecio() {
        super.obtenerPrecio();
        console.log( 'Y si hay en existencia' );
    }
}

const libro1 = new Libro('java la revolucion', 800, '12222222222111111');
console.log( libro1.formatearProducto() );
console.log( libro1.obtenerPrecio() );

console.log( producto2.formatearProducto() );