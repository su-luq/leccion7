var objetonombre = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 23,
    direccion: {
        calle: 'Calle falsa 99',
        ciudad: 'Ciudad falsa',
        pais: 'Pais falso',
        codigoPostal: '12345',
        geo: {
            lat: 123.123,
            lng: 123.123,
        }
    }
}

const { edad } = objetonombre;
console.log(edad); // 23
console.log(objetonombre.apellido);
console.log ('direccion: ', objetonombre.direccion);

const {nombre, edad: copiaEdad } = objetonombre;
console.log(nombre); // Juan
console.log(copiaEdad); // 23
const {calle} = objetonombre.direccion;
const {direccion: {calle: nuevaCalle}} = objetonombre;
console.log(calle); // undefined
console.log(nuevaCalle);

const {direccion: { calle: calle2, geo: { lat }}} = objetonombre; //com que ja he definit la vaiable calle abans, ara li he de donar un altre nom per que no doni duplicada.
console.log (calle2, lat); // calle falsa 123, 123.123
// la esturcura d'assignació de variables és: const {variable: variableNova} = objeto;
const {direccion: {calle: calle3, ...resto2}, ...resto } = objetonombre;
console.log('--> ', resto, ' ## ', resto2); // resto2 es el resto dentro de direccion, resto, es el resto del objeto, sin dirección.
const adressa = resto2; // li canviao el nom xq vull que a la següent estructura sigui adressa i no resto2
const total = { ...resto, adressa }; //fusionar dos objectes
console.log('Total-calle: ', total); // undefined

// arrays
var arrayObject = ["Juan", "Perez", 23];
const [nombre2, apellido2, edad2] = arrayObject; // assignem els valors de l'array a les variables.
console.log(nombre2, apellido2, edad2); // Juan Perez 23
for (const valor of arrayObject) {
    console.log("valor de l'array: ", valor);
}
console.log(arrayObject[0]); // Juan

// en un array puedo tener objetos i deiferentes tipos.

var v1 = [1,2,3,4,new Date()];
const [primero, ...restoArray] = v1;    
console.log(primero); // 1
console.log(restoArray); // [2,3,4,new Date()]

//unir arrays con el operador ...

v2 = [6,7,8];
v3 = [...v1, ...v2];
console.log (v1," # ", v2, " ## ", v3); // [1,2,3,4,new Date(), 6,7,8]