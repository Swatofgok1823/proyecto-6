//definimos la variable math como constante y de tipo objeto
const math = {};

//definimos la funcion flecha invertirNumero como constante con parametro numero
const invertirNumero = numero => {
    //definimos invertido como variable y de tipo number
    let invertido = 0;
    //ciclo while el cual se repetira mientras numero sea diferente a 0
    while (numero != 0) {
        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    //me devuelve el valor invertido
    return invertido
};

//definimos la funcion flecha invertirNumeroComoTexto como constante con un parametro numero
const invertirNumeroComoTexto = numero => {
    //definimos numeroInvertidoComoTexto como constante de tipo texto
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("").blue;
    //esta devuelve el valor numeroInvertidoComoTexto
    return numeroInvertidoComoTexto;
};

//Definimos la funcion flecha invertirTexto como constante con un parametro texto
const invertirTexto = texto => {
    //definimos splitText como una constante y de tipo texto
    const splitText = texto.split('');
    //definimos reversedText como constante y de tipo texto
    const reversedText = splitText.reverse();
    //definimos joinedText como constante y de tipo texto
    const joinedText = reversedText.join('');
    //Me devuelve el valor joinedText
    return joinedText;
};

//Definimos la funcion flecha invertirArreglo como constante con parametro arreglo
const invertirArreglo = arreglo => {
    //Definimos reverseObject como constente y de tipo texto
    const reverseObject = arreglo.reverse();
    //Me devuelve el valor reverseObject 
    return reverseObject;
};

//Definimos la funcion flecha conversionDatos como constante con parametro data
const conversionDatos = data => {
    //Definimos dataType como variable y de tipo texto
    let dataType = typeof data;
    //Definimos dataType como variable
    let dataVar;

    /*Declaramos la condicinal if la cual evaluara lo que esta dentro de la variable que tiene ciertas 
    partes separadas por el operador lógico "||", la primera condicion verifica
     si "data"es una cadena vacia '', la segunda parte verifica si "data" es nula, la tercera si 
     "data" es indefinida y la cuarta si la longitud de tada es 0*/
    if (data === '' || data === null || data === undefined || data.length === 0) {
        dataVar = 'El valor ingresado esta vacio o incorrecto';
        //en caso de que la condicion sea falsa se ejecutar esto 
    }else {
        console.log(`El valor ingresado es de tipo: ${dataType}, con un valor de: ${data}`);
        /*evalúa una expresión, comparando el valor de esa expresión con la instancia case y 
        ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen hasta que se cumpla alguno de estos 
        o se avance hasta llegar al default, el cual sera definido en caso de que ninguno de los casos previstos se cumpla */
        switch (dataType) {
            case 'number':
                dataVar = invertirNumero(data);
                break;
            case 'string':
                dataVar = invertirTexto(data);
                break;
            case 'object':
                dataVar = invertirArreglo(data);
                break;
            default:
                dataVar = 'El valor ingresado no se puede invertir';              
        }
    }
    return dataVar;
}

//definimos la propiedad "invertirNumero" en el objeto "math" y se le asigna la función "invertirNumero"
math.invertirNumero = invertirNumero;
//definimos la propiedad "invertirNumeroComoCadena" en el objeto "math" y se le asigna la función "invertirNumeroComoTexto".
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
//definimos la propiedad "invertirTexto" en el objeto "math" y se le asigna la función "invertirTexto".
math.invertirTexto = invertirTexto;
//definimos la propiedad "invertirArreglo" en el objeto "math" y se le asigna la función "invertirArreglo".
math.invertirArreglo = invertirArreglo;
//definimos la propiedad "conversionDatos" en el objeto "math" y se le asigna la función "conversionDatos".
math.conversionDatos = conversionDatos;

// exportamos el modulo math
module.exports = math;