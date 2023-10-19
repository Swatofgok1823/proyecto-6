// requerimos el paquete colors
require('colors');

const { blue } = require('colors');
//definimos math como constante y requerimos el archivo mat.js
const math = require('./modules/math.js');

//funcion flecha asincrona llamada main
const main = async () => {

    //imprimimos 'hola SENA CBA\n'en color .bgMagenta
    console.log('hola SENA CBA\n'.bgMagenta);

    //Definimos numero como constante en un arreglo tipo number
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
    //Itera a través del arreglo "numeros" utilizando un bucle "for of"
    for (const numero of numeros) {
        const invertidoComoNumero = math.invertirNumero(numero);
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);
        console.log("El numero '%s' es '%s' invertido como numero, y '%s' como cadena".bgMagenta,
                    numero, invertidoComoNumero, invertidoComoCadena);
    }
    /* Definimos un array llamado 'textos' este contiene tres cadenas de texto, se
     Itera a través de cada elemento en el array utilizando un bucle 'for...of'.*/
    const textos = ['Hola Sena', 'Ficha 2798618', 'Analisis y desarrollo de software']
    for(const texto of textos){
        // Llamamos a una función 'math.invertirTexto()'
        const textoInvertido = math.invertirTexto(texto);
         // Imprimimos un mensaje en la consola utilizando 'console.log()'.
        console.log("El texto '%S' se invierte como '%S'".blue, texto, textoInvertido);
    }

    /* Definimos un array llamado 'datos' que contiene una mezcla de números, cadenas y un subarray y
    Iteramos a través de cada elemento en el array 'datos' utilizando un bucle 'for...of'.*/
    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO'] ]
    for(let dato of datos ){
        // se llama una funcion de  nombre 'math.conversionDatos() '
        const datoConvertido = math.conversionDatos(dato);
        /* Utilizamos 'console.log()' para imprimir mensajes en la consola y dentro de este 
        utlizamos ${} para poder  llamar una funcion y le agregramos un color, utilizando .red el cual se puede usar por haber descargado 
        el paquete de colors por medio de la terminal*/
        console.log(`El resultado de conversion es : ${datoConvertido}`.bgYellow);
    }
}

main();