//array
const squadra = ["w", "w", "l", "x", "x", "w"];
let vittorie = 0;
let sconfitte = 0;
let pareggi = 0;

//ciclo for
for (i = 0; i < squadra.length; i++) {

    const risultato = squadra[i];

    if (risultato == "w") {
        vittorie++;
    } else if (risultato == "l") {
        sconfitte++;
    } else {
        pareggi++;
    }
}

console.log(vittorie);
//output
document.getElementById('h2').innerHTML = "Vittorie: " + vittorie + "<br> Sconfitte: " + sconfitte + "<br>Pareggi: " + pareggi;
