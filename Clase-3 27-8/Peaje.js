function calcularTarifa(tipoVehiculo, hora, esFeriado) {

    // Convertimos el tipo de vehículo a minúsculas
    // para aceptar "AUTO", "AuTo", "auto", etc.
    tipoVehiculo = tipoVehiculo.toLowerCase();

    let tarifa;

    // Determinamos la tarifa según el vehículo
    if (tipoVehiculo === "moto") {
        tarifa = 150;
    } else if (tipoVehiculo === "auto") {
        tarifa = 300;
    } else if (tipoVehiculo === "camion") {
        tarifa = 600;
    } else {
        console.warn("Vehículo no válido: " + tipoVehiculo);
        return 0;
    }

    // Verificamos si es hora pico
    let horaPico =
        (hora >= 8 && hora <= 10) ||
        (hora >= 17 && hora <= 19);

    // El recargo solamente se aplica si NO es feriado
    if (horaPico && !esFeriado) {
        tarifa = tarifa * 1.30;
    }

    return tarifa;
}



function simularFilaCabina(cantidadVehiculos) {

    // Arreglo con los tipos de vehículos posibles
    let tiposVehiculos = ["moto", "auto", "camion"];

    // Variable para acumular todo lo recaudado
    let totalRecaudado = 0;

    // Recorremos la cantidad de vehículos indicada
    for (let i = 1; i <= cantidadVehiculos; i++) {

        // Elegimos un vehículo al azar
        let posicion = Math.floor(Math.random() * tiposVehiculos.length);
        let tipoVehiculo = tiposVehiculos[posicion];

        // Elegimos una hora al azar entre 0 y 23
        let hora = Math.floor(Math.random() * 24);

        // Elegimos aleatoriamente true o false
        let esFeriado = Math.random() < 0.5;

        // Calculamos la tarifa usando la función anterior
        let tarifa = calcularTarifa(tipoVehiculo, hora, esFeriado);

        // Acumulamos la tarifa
        totalRecaudado = totalRecaudado + tarifa;

        // Mostramos el detalle del vehículo
        console.log(
            `[Intento ${i}] Vehículo: ${tipoVehiculo} | Hora: ${hora} | Feriado: ${esFeriado} | Tarifa cobrada: $${tarifa}`
        );
    }

    // Retornamos el total recaudado
    return totalRecaudado;
}


console.log(calcularTarifa("moto", 9, false)); // 195 
console.log(calcularTarifa("auto", 18, true)); // 300 
console.log(calcularTarifa("camion", 12, false)); // 600
console.log(calcularTarifa("MOTO", 9, false));// 195
console.log(calcularTarifa("AuTo", 12, false));// 300
console.log(calcularTarifa("bicicleta", 10, false));// Muestra una advertencia y retorna 0