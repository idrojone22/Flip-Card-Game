//vatiables globals
let numeroPareja = 1;
let tempo = document.getElementById('tempo');

//variables de la funcion añadir cartas
let pantalla = document.getElementById('pantalla');
let order = [];
let numero = 1;

//variables funcion rotar carta
let contador = 0;
let primeraCarta;
let segonaCarta;
let win = 0;

//variables para la funcion temporizador
let tiempo = 0;

function reiniciar() {
    pantalla.innerHTML = "";
    numeroPareja = 1;
    añadirCartas();
    temporizador();
}

function jugar() {
    añadirCartas();
    rotarCarta();
    tiempo = 0;
    temporizador();
};

function siguiente_nivel() {
    numeroPareja++;
    tiempo = 0;
    añadirCartas();
    rotarCarta();
}

function añadirCartas() {
    pantalla.innerHTML = "";
    
    for (let i = 0; i < numeroPareja; i++) {
        for (let i = 0; i < 2; i++) {
            order.push(numero); // -> los valores del numero las metemos dentro del array
            order.sort( () => Math.random() - 0.5); // -> desordenamos las posiciones del array
        };
        numero++;
    };

    order.forEach( numero => { // -> recorremos el array

        pantalla.innerHTML +=  // -> lo presentamos en pantalla
        `
        <div class = "flip-card">
            <div class = "flip-card-inner ${numero}">
                <div class = "flip-card-front"></div>
                    <div class = "flip-card-back">
                        <img class = "img" src="https://avatars.dicebear.com/v2/avataaars/${numero}.jpg">
                    </div>
                </div>
            </div>
        </div>
        `
    });
    order = [];
};

/*function rotarCarta() {
    let carta = document.querySelectorAll('.flip-card-inner');

    carta.forEach(flip_card_inner => {
        flip_card_inner.addEventListener('click', () => {
            flip_card_inner.style.transform = 'rotateY(180deg)'; // -> rota la carta
            if (contador == 0) {
                primeraCarta = flip_card_inner;
                contador++;
            } else {
                segonaCarta = flip_card_inner;
                contador++;
            };
            if (contador == 2) {
                if ( primeraCarta.classList.value == segonaCarta.classList.value ) {
                    contador = 0; // -> restablix el contador 
                    win++;
                    if ( win == numeroPareja ) {
                        win = 0;
                        tempo.innerHTML = 'Tiempo:' + ' '+ tiempo;
                    }
                } else {
                    contador = 0;
                    setTimeout(() => { 
                        primeraCarta.style.removeProperty('transform');
                        segonaCarta.style.removeProperty('transform');
                    }, 1000);
                };
            };
        });
    });
}; */

function temporizador(){    // -> Calcula los segundos que tardas 
    temporizador = setInterval(() => {
        tiempo++;
        document.getElementById('temporizador').innerHTML = tiempo;
    }, 1000);
};