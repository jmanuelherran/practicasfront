var numeroAlumnos = 10;

if (numeroAlumnos >= 100) {
    var totalPagarCompania = Math.round(numeroAlumnos * 65);
    console.log("Debido a que son " + numeroAlumnos + " alumnos,  el total a pagar a la compañia es de: " + totalPagarCompania + " y el pago por alumno es de : 65 pesos")
} else {
    if (numeroAlumnos >= 50 && numeroAlumnos <= 99) {
        var totalPagarCompania = Math.round(numeroAlumnos * 70);
        console.log("Debido a que son " + numeroAlumnos + " alumnos,  el total a pagar a la compañia es de: " + totalPagarCompania + " y el pago por alumno es de : 70 pesos")
    } else {
        if (numeroAlumnos >= 30 && numeroAlumnos <= 49) {
            var totalPagarCompania = Math.round(numeroAlumnos * 95);
            console.log("Debido a que son " + numeroAlumnos + " alumnos,  el total a pagar a la compañia es de: " + totalPagarCompania + " y el pago por alumno es de : 95 pesos")
        } else {
            if (numeroAlumnos < 30) {
                var cuotaPocosAlumnos = 4000;
                var cuotaPoralumno = Math.round(cuotaPocosAlumnos / numeroAlumnos);
                console.log("Debido a que son " + numeroAlumnos + " alumnos, el total a pagar a la compañia es de: " + cuotaPocosAlumnos + " y el pago por alumno es de :" + cuotaPoralumno + " pesos")
            }
        }
    }
}


