// una peticion Http, tendrà un resultado en el tiempo y se denomina promesa.
// vamos a hacer una función que devulelva ok para par y error para impar.

const promesa = function (valor) {
    return new Promise ((resolve, reject) => {
        if (valor % 2 == 0) {
            setTimeout(() => {
                resolve ('Hola Mundo');
            }, 3000); // tarda 3 segundos en devolver el valor, es un retraso.
        } else {
            reject ({
                "error": "el número es impar ",
                "parametros": valor
            }); 
        }
    });
};

var num = 12;

promesa(num).then(i => {
    console.log ('ok', i);
}).catch(e => {
    console.log ('error', e);   
}).finally(() => {
    console.log ('finalizado');
});