//variables
let pantalla = document.getElementById('pantalla');
let randomizarCartes = Math.round (Math.random() * 2);
let numero = 1;
let numeroPareja = 1;
let numeroNivel = 1;
let contador = 0;
let primeraCarta;
let segonaCarta;
let tiempo = 0;
let win = 0;
let order = [];


// if (numeroPareja == numeroNivel) {
//   jugar();
// } else {
//   siguiente_nivel();
// }

function jugar() {
  añadirCartas();
  rotarCarta();
  temporizador();
}

function siguiente_nivel() {
  numeroPareja++;
  añadirCartas();
  rotarCarta();
  numeroNivel++;
  localStorage.setItem("nivel", numeroNivel);
};

function añadirCartas() {
  container.innerHTML = '';
  tiempo = 0;
  for (let i = 0; i < numeroPareja; i++) {
    for (let i = 0; i < 2; i++) {
      order.push(numero)
      order.sort( () => Math.random() - 0.5)
    };
  numero++;    
  };
  order.forEach( numero => {
    container.innerHTML += 
    `
    <div class="flip-card">
      <div class="flip-card-inner ${numero}">
        <div class="flip-card-front"></div>
          <div class="flip-card-back">
            <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numero}.jpg">
          </div>
        </div>
      </div>
    </div>
    ` 
  });
  order = [];
};

function rotarCarta() {
  let carta = document.querySelectorAll('.flip-card-inner');

  carta.forEach(flip_card_inner => {
    flip_card_inner.addEventListener('click', () => {
      flip_card_inner.style.transform = 'rotateY(180deg)'; //rotar carta

      if (contador == 0) {
        primeraCarta = flip_card_inner;
        contador++;
      } else {
        segonaCarta = flip_card_inner;
        contador++;
      };
    
      if (contador == 2) {
        if ( primeraCarta.classList.value == segonaCarta.classList.value) {
          alert('pareja!!');
          contador = 0;
          win++;
          console.log(win);
          console.log( numeroPareja);
          if (win == numeroPareja) {
            localStorage.setItem ( "tiempo", tiempo);
            win = 0;
          };
        } else {
          contador = 0;
          alert('error');
          setTimeout(() => {
            primeraCarta.style.removeProperty('transform');
            segonaCarta.style.removeProperty('transform');
          }, 1000);
        };
      };
    });
  });
};


function temporizador(){
  temporizador = setInterval(() => {
      tiempo++
      document.getElementById('temporizador').innerHTML = tiempo;
  }, 1000);
};