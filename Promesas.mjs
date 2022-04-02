// una peticion Http, tendrà un resultado en el tiempo y se denomina promesa.
// vamos a hacer una función que devulelva ok para par y error para impar.

const promesa = function (valor) {
    return new Promise ((resolve, reject) => {
        if (valor % 2 == 0) {
            setTimeout(() => {
                resolve ('Hola Mundo');
            }, 3000); // tarda 3 segundos en devolver el valor, es un retraso.
        } else {
            reject ('El número ' + valor + ' es impar');
     }
    });
};

var num = 11;

promesa(num).then(i => {
    console.log ('ok', i);
}).catch(e => {
    console.log ('error', e);   
}).finally(() => {
    console.log ('finalizado');
});

// per fer try,, cal que el fitxer sigui mjs que és un mòdul.
try {
    const resultado = await promesa(num);
    console.log (resultado);
} catch (error) {
    console.log (error);
} finally {
    console.log ('finalizado');
    // close database connection - per exemple
}

console.log ("Faré un bucle de 6" );
for (let i = 0; i < 6; i++) {
    promesa(i).then(i => {
        console.log ('ok', i);
    }).catch(e => {
        console.log ('error', e);   
    }).finally(() => {
        console.log ('finalizado');
    });
}

console.log ("----------------------------------------------------");

async function llamarAPromise(val1) {
    await promesa(val1);
}   

console.log("amb async -> ", await llamarAPromise (10));