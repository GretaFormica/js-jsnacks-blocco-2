//dichiarazioni costanti
const stampa = document.getElementById('btn');

//codice

stampa.addEventListener(
    'click',

    function () {
        const numero = document.getElementById('num').value;

        if (numero % 2 == 0) {

            //output
            document.getElementById('h2').innerHTML = numero;
        } else {
            //output
            document.getElementById('h2').innerHTML = numero + 1;

        }
    }
)