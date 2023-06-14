// temperatura exemplo em °C:
var tempc = 20;
function converterTemp(tempc) {
    // calcula a temperatura em °F:
    var tempf = (tempc * 9 / 5) + 32;
    // printa a conversão e retorna a temperatura em °F:
    console.log(tempc + "°C são " + tempf + "°F.");
    return tempf;
}