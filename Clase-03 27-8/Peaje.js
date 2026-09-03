// ==============================================================================
// Desafío Semanal Obligatorio: Peaje Inteligente (Telepase)
// Consigna: Implementar la facturación automática de una cabina de peaje:
// 1. `calcularTarifa(tipoVehiculo, hora, esFeriado)`:
//    - Tarifas base: "moto": $150, "auto": $300, "camion": $600.
//    - Hora pico (8 a 10 y 17 a 19 inclusive): +30% recargo si NO es feriado.
//    - Aceptar mayúsculas/minúsculas. Si es inválido, advertir y retornar 0.
// 2. `simularFilaCabina(cantidadVehiculos)`:
//    - Simular aleatoriamente tipo, hora (0-23) y feriado (true/false).
//    - Mostrar detalle de cada intento en consola y retornar total recaudado.
// ==============================================================================

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


// ¡Excelente trabajo en el ejercicio integrador! Muy bien el uso de .toLowerCase() para normalizar datos, la lógica de hora pico y la simulación con Math.random().
//
// 💡 Desafío de Modularización (Responsabilidad Única):
// En desarrollo profesional buscamos dividir problemas complejos en funciones auxiliares más pequeñas donde cada una hace una sola cosa bien. Mirá cómo quedaría desacoplando la lógica en funciones que cooperan:

// 1. Función que normaliza y valida el vehículo
function normalizarVehiculo(tipo) {
    let vehiculoLimpio = tipo.toLowerCase();
    let esValido = vehiculoLimpio === "moto" || vehiculoLimpio === "auto" || vehiculoLimpio === "camion";

    if (!esValido) {
        console.warn("Vehículo no válido: " + tipo);
        return null;
    }
    return vehiculoLimpio;
}

// 2. Función que determina la tarifa base
function obtenerTarifaBase(tipo) {
    let tarifa = 0;
    if (tipo === "moto") tarifa = 150;
    if (tipo === "auto") tarifa = 300;
    if (tipo === "camion") tarifa = 600;
    return tarifa;
}

// 3. Función que evalúa si corresponde recargo por hora pico
function esHorarioPico(hora, esFeriado) {
    let enRango = (hora >= 8 && hora <= 10) || (hora >= 17 && hora <= 19);
    return enRango && !esFeriado;
}

// 4. Función orquestadora principal (mucho más legible y testeable)
function calcularTarifaModular(tipoVehiculo, hora, esFeriado) {
    let vehiculo = normalizarVehiculo(tipoVehiculo);
    if (!vehiculo) return 0;

    let tarifaFinal = obtenerTarifaBase(vehiculo);

    if (esHorarioPico(hora, esFeriado)) {
        tarifaFinal = tarifaFinal * 1.30;
    }

    return tarifaFinal;
}

console.log(calcularTarifa("moto", 9, false)); // 195 
console.log(calcularTarifa("auto", 18, true)); // 300 
console.log(calcularTarifa("camion", 12, false)); // 600
console.log(calcularTarifa("MOTO", 9, false));// 195
console.log(calcularTarifa("AuTo", 12, false));// 300
console.log(calcularTarifa("bicicleta", 10, false));// Muestra una advertencia y retorna 0