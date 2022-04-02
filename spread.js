// ... se llama operador spread

var array = [1,2,3];

var suma3 = function (a, b, c) {
    return a + b + c;
};

console.log (suma3(...array)); // 6

var suma4 = function ( numeros) {
    return (numeros[0] + numeros[1] + numeros[2]);
};
console.log (suma4(array)); // 6

// si el array tiene demasiados valores? Solo coje los primeros que necesita
console.log (suma3(100,...array)); // sumo 100+1+2 = 103

var array2 = [4,5,6,7,8];
var arrayTotal = [...array, ...[10,20], ...array2, 23]; 1,2,3,10,20,4,5,6,7,8,23
console.log (arrayTotal); // 1,2,3,10,20,4,5,6,7,8, 23

// con objetos igual

var objeto = {
    a: "A",
    b: "B",
    c: "C",
};
console.log (objeto, {...objeto}, objeto.a); // {a: "A", b: "B", c: "C"}

//let
var dateFields = [1970, 0, 1];
let d = new Date(...dateFields);
console.log(d); // 1970-01-01T00:00:00.000Z

// Y con objetos

let obj1 = { foo:'bar', x:42 };
var obj2 = { foo:'baz', y:13 };

let clonedObj1 = { ...obj1 };
let clonedObj = { ...obj1, ...obj2 };
console.log( clonedObj1, " ### merge: ",clonedObj); // { foo: 'baz', x: 42, y: 13 }

// merge diferente, de momento no tener en cuenta
const merge = (...objects) => ( {...objects } );
let mergedObj1 = merge(obj1, obj2);
console.log(mergedObj1); // { foo: 'baz', x: 42, y: 13 }
// mirar https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions para funciones flexa.