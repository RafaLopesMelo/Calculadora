var display = document.body.querySelector("#display p");
var arrayn = [];
var operadores = ["+", "-", "×", "÷"];
var testeSinal = false;
display.innerHTML = "";

function conta(numero) {
    arrayn = display.innerHTML.split("+").join(" ").split("-").join(" ").split("×").join(" ").split("÷").join(" ").split(" ");
    if (arrayn[0].length < 8) {
        display.innerHTML += numero;
    }
    if (arrayn[1].length < 8) {
        display.innerHTML += numero;
    }
    arrayn.join("")
}

function ponto() {
    if (display.innerHTML.length < 7) {
        display.innerHTML += ".";
    }
}

function operador(op) {
    if (display.innerHTML != "") {
        if (display.innerHTML.indexOf("+") == -1 && display.innerHTML.indexOf("-") == -1 && display.innerHTML.indexOf("×") == -1 && display.innerHTML.indexOf("÷") == -1) {
            if (op == 20) { display.innerHTML += "+"; } else if (op == 30) { display.innerHTML += "-"; }
            else if (op == 40) { display.innerHTML += "×"; } else if (op == 50) { display.innerHTML += "÷"; }
        }
    }
}

function cln() {
    display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
}

function clnall() {
    display.innerHTML = null;
}

function igual() {

    if (display.innerHTML.indexOf("+") != -1) {

        arrayn = display.innerHTML.split("+");
        var n1 = parseFloat(arrayn[0]);
        var n2 = parseFloat(arrayn[1]);
        display.innerHTML = n1 + n2;

    } else if (display.innerHTML.indexOf("-") > -1) {

        arrayn = display.innerHTML.split("-");
        display.innerHTML = arrayn[0] - arrayn[1];

    } else if (display.innerHTML.indexOf("×") > -1) {

        arrayn = display.innerHTML.split("×");
        display.innerHTML = arrayn[0] * arrayn[1];

    } else if (display.innerHTML.indexOf("÷") > -1) {

        arrayn = display.innerHTML.split("÷");
        display.innerHTML = arrayn[0] / arrayn[1];
    }
}


function porcento() {

    for (var i = 0; operadores.length > i; i++) {
        if (display.innerHTML.indexOf(operadores[i]) != -1) {
            testeSinal = true;
        }
    }

    arrayn = display.innerHTML.split("+").join(" ").split("-").join(" ").split("×").join(" ").split("÷").join(" ").split(" ");

    if (testeSinal == false) {

        display.innerHTML = arrayn[0] / 100;

    } else if (testeSinal == true) {

        arrayn[1] = arrayn[1] / 100

        if (display.innerHTML.indexOf("+") != -1) {

            display.innerHTML = arrayn[0] + "+" + arrayn[1];

        } else if (display.innerHTML.indexOf("-") > -1) {

            display.innerHTML = arrayn[0] + "-" + arrayn[1];

        } else if (display.innerHTML.indexOf("×") > -1) {

            display.innerHTML = arrayn[0] + "×" + arrayn[1];

        } else if (display.innerHTML.indexOf("÷") > -1) {

            display.innerHTML = arrayn[0] + "÷" + arrayn[1];

        }

        testeSinal = false;
        i = 0;
        igual();
    }
}
