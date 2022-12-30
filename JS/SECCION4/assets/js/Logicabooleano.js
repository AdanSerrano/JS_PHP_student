

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
};

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
};

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log( !regresaFalse() ); // true

// regresaTrue() && regresaFalse();

console.warn("And");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log( regresaFalse() && regresaTrue() ); // false

console.warn("Or");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log( regresaTrue() || regresaFalse() ); // true


console.warn("Asignaciones");
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo'; // Hola Mundo
const a2 = 'Hola' && 'Mundo' && soyFalso; // false
const a3 = soyFalso || 'Ya no soy falso'; // Ya no soy falso
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // Ya no soy falso de nuevo
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; // true

console.log({a1, a2, a3, a4, a5});