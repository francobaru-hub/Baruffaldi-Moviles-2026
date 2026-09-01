function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    cantArchivos = Number(cantArchivos);
    tamanoPromedioMB = Number(tamanoPromedioMB);

    let pesoTotalMB = cantArchivos * tamanoPromedioMB;
    let pesoTotalKB = pesoTotalMB * 1024;

    return `Se descargarán ${cantArchivos} archivos con un peso total de ${pesoTotalKB} KB.`;
}

calcularEstadisticasDescarga("10", "1.5")