function numeroDeCaracteres(str, caracter) {
    let cantidad = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            cantidad++;
        }
    }

    return cantidad;
}

console.log(numeroDeCaracteres("Hola Mundo", "o")) 
console.log(numeroDeCaracteres("MMMMM", "m")) 
console.log(numeroDeCaracteres("eeee", "e")) 