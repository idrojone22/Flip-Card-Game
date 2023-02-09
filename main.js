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

for( numeroNivel = 1; localStorage.getItem("nivel") != numeroNivel; numeroNivel++) {
  console.log(numeroNivel, "numeroNIvel");
};

for(numeroPareja = 1; localStorage.getItem("nivel") != numeroPareja; numeroPareja++) {
  console.log(numeroPareja, "numeroPareja");
};

if(localStorage.getItem("nivel") == numeroPareja) {
  jugar();
};

function jugar() {
  añadirCartas();
  rotarCarta();
  temporizador();
  console.log(numeroNivel, "numeroNivel");
  localStorage.setItem("nivel", numeroNivel); 
}

function siguiente_nivel() {
  numeroPareja++;
  tiempo = 0;
  añadirCartas();
  rotarCarta();
  console.log(numeroNivel, "numeroNivel");
  numeroNivel++;
  console.log(numeroNivel, "numeroNivel");
  localStorage.setItem("nivel", numeroNivel);  
};

function añadirCartas() {
  container.innerHTML = '';
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


//rota les cartes
function rotarCarta() {
  let carta = document.querySelectorAll('.flip-card-inner');

  carta.forEach(flip_card_inner => {
    flip_card_inner.addEventListener('click', () => {
      flip_card_inner.style.transform = 'rotateY(180deg)'; // -> rotar carta

      if (contador == 0) {
        primeraCarta = flip_card_inner; // -> guarda el valor de la primera carta
        contador++; // -> sunma 1 al contador per a que faja el else
      } else {
        segonaCarta = flip_card_inner; // -> guarda el valor de la segona carta 
        contador++; // -> suma 1 al contadod per a poder comparar les cartes 
      };
    
      if (contador == 2) {
        if ( primeraCarta.classList.value == segonaCarta.classList.value) {
          alert('pareja!!');
          contador = 0; // -> restablix el contador 
          win++;
          if (win == numeroPareja) {
            localStorage.setItem ( "tiempo", tiempo);
            win = 0;
          };
        } else {
          contador = 0;
          alert('error');
          // -> timeout per poder vore la segona carta girada
          setTimeout(() => { 
            primeraCarta.style.removeProperty('transform');
            segonaCarta.style.removeProperty('transform');
          }, 1000);
        };
      };
    });
  });
};

//calcual el temps que tardes en completar un nivell
function temporizador(){
  temporizador = setInterval(() => {
      tiempo++
      document.getElementById('temporizador').innerHTML = tiempo;
  }, 1000);
};    