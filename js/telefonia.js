/* 
Ejercicio 2:
La política de la compañía telefónica “chimefón” es: “Chismea + x -”. Cuando se realiza una llamada, el cobro es por el tiempo que ésta dura, 
de tal forma que los primeros cinco minutos cuestan $ 1.00 c/u, los siguientes tres, 80¢ c/u, los siguientes dos minutos, 70¢ c/u, y a partir del décimo minuto, 50¢ c/u.
Además, se carga un impuesto de 3 % cuando es domingo, y si es día hábil, en turno matutino, 15 %, y en turno vespertino, 10 %. 
Realice un código para determinar cuánto debe pagar por cada concepto una persona que realiza una llamada.
minutosLlamada >5 && minutosLlamada <=8 */

var minutosLlamada = 10;
var diaHabil = true;
var turnoMatutino = true;
var impuesto = {
    impuestoDiaInhabil: "1.03",
    impuestoDiaHabilMatutino: "1.15",
    impuestoDiaHabilVespertino: "1.10"
}


if (minutosLlamada <= 5 && diaHabil == true && turnoMatutino == true) {
    var costoPorMinuto = 1;
    var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaHabilMatutino;
    console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")
} else {
    if (minutosLlamada <= 5 && diaHabil == true && turnoMatutino == false) {
        var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaHabilVespertino;
        console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")

    } else {
        if (minutosLlamada <= 5 && diaHabil == false) {
            var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaInhabil;
            console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")
        }
    }
}

if (minutosLlamada > 5 && minutosLlamada <= 8 && diaHabil == true && turnoMatutino == true) {
    var costoPorMinuto = .80;
    var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaHabilMatutino;
    console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")
} else {
    if (minutosLlamada > 5 && minutosLlamada <= 8 && diaHabil == true && turnoMatutino == false) {
        var costoPorMinuto = .80;
        var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaHabilVespertino;
        console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")

    } else {
        if (minutosLlamada > 5 && minutosLlamada <= 8 && diaHabil == false) {
            var costoPorMinuto = .80;
            var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaInhabil;
            console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")
        }
    }
}
if (minutosLlamada > 8 && minutosLlamada <= 10 && diaHabil == true && turnoMatutino == true) {
    var costoPorMinuto = .70;
    var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaHabilMatutino;
    console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")
} else {
    if (minutosLlamada > 8 && minutosLlamada <= 10 && diaHabil == true && turnoMatutino == false) {
        var costoPorMinuto = .70;
        var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaHabilVespertino;
        console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")

    } else {
        if (minutosLlamada > 8 && minutosLlamada <= 10 && diaHabil == false) {
            var costoPorMinuto = .70;
            var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaInhabil;
            console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")
        }
    }
}
if (minutosLlamada > 10 && diaHabil == true && turnoMatutino == true) {
    var costoPorMinuto = .50;
    var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaHabilMatutino;
    console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")
} else {
    if (minutosLlamada > 10 && diaHabil == true && turnoMatutino == false) {
        var costoPorMinuto = .50;
        var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaHabilVespertino;
        console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")

    } else {
        if (minutosLlamada > 10 && diaHabil == false) {
            var costoPorMinuto = .50;
            var costoPorLlamada = (minutosLlamada * costoPorMinuto) * impuesto.impuestoDiaInhabil;
            console.log("El tiempo total de su llamada fue de: " + minutosLlamada + " minutos , por lo tanto debe pagar : " + costoPorLlamada.toFixed(2) + " pesos.")
        }
    }
}



