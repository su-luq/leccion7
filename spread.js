// ... se llama operador spread

var array = [1,2,3];

var suma3 = function (a, b, c) {
    return a + b + c;
};

console.log (suma3(...array)); // 6