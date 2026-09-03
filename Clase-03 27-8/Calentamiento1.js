// ==============================================================================
// Ejercicio 1: Contraseña Válida
// Consigna: Escribir una función llamada `contrasenaValida` que reciba un string
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
// De lo contrario debe retornar `false`.
// ==============================================================================

function contrasenaValida(str) {
    let retorno = false;
    if (str === "2Fj(jjbFsuj" || str==="eoZiugBf&g9"){
        retorno = true
    }
  return retorno
}

//Esto está perfecto, es la manera a la que quiero que se acostumbren en un principio; utilizar una variable auxiliar para usar como retorno según lo que necesite hacer la función. Te dejo otra manera de hacerla:

function contrasenaValida(str) {

    return(str === "2Fj(jjbFsuj" || str==="eoZiugBf&g9")
    
  }

console.log(contrasenaValida("2Fj(jjbFsuj")); 
console.log(contrasenaValida("eoZiugBf&g9")); 
console.log(contrasenaValida("hola"));        
console.log(contrasenaValida(""));    