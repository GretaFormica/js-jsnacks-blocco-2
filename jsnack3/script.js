//array
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let somma = 0;

for(i = 0; i < numeri.length; i++) {

    if(i % 2 !=0){
        somma += numeri[i];
    }
}

//output
document.getElementById('h2').innerHTML = "la somma è : " + somma;