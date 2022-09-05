/*“El náufrago satisfecho” ofrece hamburguesas sencillas, dobles y triples, las cuales tienen un costo de $20.00, $25.00 y $28.00 respectivamente.
 La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra.
Suponiendo que los clientes adquieren sólo un tipo de hamburguesa, realice un código para determinar cuánto debe pagar una persona por N hamburguesas.*/

var precioSencillas = 20;
var precioDobles = 25;
var precioTriples = 28;
var pagoTarjeta = true;
var cargoPagoTarjeta = 1.05;
var NumeroHamburguesaSencillas = 0;
var NumeroHamburguesaDobles = 0;
var NumeroHamburguesaTriples = 0;

if (NumeroHamburguesaSencillas != 0 && pagoTarjeta == true) {
    TotalPagarHamburguesa = (NumeroHamburguesaSencillas * precioSencillas) * cargoPagoTarjeta;
    console.log("El consumo total de hamburguesas sencillas es: " + NumeroHamburguesaSencillas + " , por lo tanto debe pagar : " + TotalPagarHamburguesa.toFixed(2) + " pesos.");
} else {
    if (NumeroHamburguesaSencillas != 0 && pagoTarjeta == false) {
        TotalPagarHamburguesa = NumeroHamburguesaSencillas * precioSencillas;
        console.log("El consumo total de hamburguesas sencillas es: " + NumeroHamburguesaSencillas + " , por lo tanto debe pagar : " + TotalPagarHamburguesa.toFixed(2) + " pesos.");
    } else {
        console.log("No consumio hamburguesas sencillas");
    }
}
if (NumeroHamburguesaDobles != 0 && pagoTarjeta == true) {
    TotalPagarHamburguesa = (NumeroHamburguesaDobles * precioDobles) * cargoPagoTarjeta;
    console.log("El consumo total de hamburguesas dobles es: " + NumeroHamburguesaDobles + " , por lo tanto debe pagar : " + TotalPagarHamburguesa.toFixed(2) + " pesos.");
} else {
    if (NumeroHamburguesaDobles != 0 && pagoTarjeta == false) {
        TotalPagarHamburguesa = NumeroHamburguesaDobles * precioDobles;
        console.log("El consumo total de hamburguesas dobles es: " + NumeroHamburguesaDobles + " , por lo tanto debe pagar : " + TotalPagarHamburguesa.toFixed(2) + " pesos.");
    } else {
        console.log("No consumio hamburguesas dobles");
    }
}
if (NumeroHamburguesaTriples != 0 && pagoTarjeta == true) {
    TotalPagarHamburguesa = (NumeroHamburguesaTriples * precioTriples) * cargoPagoTarjeta;
    console.log("El consumo total de hamburguesas triples es: " + NumeroHamburguesaTriples + " , por lo tanto debe pagar : " + TotalPagarHamburguesa.toFixed(2) + " pesos.");
} else {
    if (NumeroHamburguesaTriples != 0 && pagoTarjeta == false) {
        TotalPagarHamburguesa = NumeroHamburguesaTriples * precioTriples;
        console.log("El consumo total de hamburguesas triples es: " + NumeroHamburguesaTriples + " , por lo tanto debe pagar : " + TotalPagarHamburguesa.toFixed(2) + " pesos.");
    } else {
        console.log("No consumio hamburguesas triples");
    }
}


