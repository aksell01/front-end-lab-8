
//https://finance.i.ua/nbu/

var curency = [0.0368, 27.1240, 0.0300, 33.2324, 1.2252, 0.8161 ];

var UAHUSD = curency[0];
var USDUAH = curency[1];
var UAHEUR = curency[2];
var EURUAH = curency[3];
var EURUSD = curency[4];
var USDEUR = curency[5];

function prompt (amount, convertFrom, convertTo) {
    if (convertFrom == "UAH" && convertTo == "USD") {
    result = amount * UAHUSD;
    } else if (convertFrom == "USD" && convertTo == "UAH") {
    result = amount * USDUAH;
    } else if (convertFrom == "UAH" && convertTo == "EUR") {
    result = amount * UAHEUR;
    } else if (convertFrom == "EUR" && convertTo == "UAH") {
    result = amount * EURUAH;
    } else if (convertFrom == "EUR" && convertTo == "USD") {
    result = amount * EURUSD;
    } else if (convertFrom === convertTo) {
        result = amount;
    } else {
        alert ("Invalid input");
    }
    
    document.write(amount + " " + convertFrom + " = " + result + " " + convertTo + "<br>");
}

prompt(100, "EUR", "UAH");
prompt(52, "USD", "UAH");
prompt(1, "EUR", "USD");

