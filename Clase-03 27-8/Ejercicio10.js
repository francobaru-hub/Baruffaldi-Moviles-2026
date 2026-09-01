function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if (esInvitado) {
        return false;
    }

    if (edad >= 18 || tienePermisoDocente) {
        return true;
    } else {
        return false;
    }
}

evaluarAccesoApp(16, true, false) 
evaluarAccesoApp(20, false, true)