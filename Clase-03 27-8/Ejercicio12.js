function procesarCompraMovil(precioBase, descuentoPct) {

    // Función declarada
    function aplicarDescuento(precio, descuento) {
        return precio - (precio * descuento / 100);
    }

    // Expresión de función
    const sumarIva = function(precio) {
        return precio + (precio * 21 / 100);
    };

    // Función flecha
    const redondear = (valor) => {
        return Number(valor.toFixed(2));
    };

    // Lógica encadenada
    let precioConDescuento = aplicarDescuento(precioBase, descuentoPct);
    let precioConIva = sumarIva(precioConDescuento);
    let precioFinal = redondear(precioConIva);

    return precioFinal;
}

procesarCompraMovil(100, 10)