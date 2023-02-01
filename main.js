//variables
let pantalla = document.getElementById('pantalla');
let randomizarCartes = Math.round (Math.random() * 2);
let numeroCarta = Math.round (Math.random() / Math.random());
let numeroPareja = 1;
let numeroIdentidad = 0;
let numeroCarta1 = Math.round (Math.random() / Math.random());
let numeroIdentidad1= 10;
let contador = 0;
let primeraCarta;
let segonaCarta;
let tiempo = 0;
let win = 0;

function jugar() {
  añadirCartas();
  rotarCarta();
  temporizador();
}

function siguiente_nivel() {
  numeroPareja++;
  añadirCartas();
  rotarCarta();
};

function añadirCartas() {
  pantalla.innerHTML = '';
  tiempo = 0;

  if (randomizarCartes == 0) {
      for (let i = 0; i < numeroPareja; i++) {
          for (let i = 0; i <1; i++) {
              pantalla.innerHTML +=  
              `
                  <section id = "container">
                      <div class="flip-card">
                          <div class="flip-card-inner ${numeroIdentidad}">
                              <div class="flip-card-front"></div>
                              <div class="flip-card-back">
                                  <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta}.jpg">
                              </div>
                              </div>
                          </div>
                      </div>
                      <div class="flip-card">
                          <div class="flip-card-inner ${numeroIdentidad}">
                              <div class="flip-card-front"></div>
                                  <div class="flip-card-back">
                                      <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta}.jpg">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="flip-card">
                          <div class="flip-card-inner ${numeroIdentidad1}">
                              <div class="flip-card-front"></div>
                              <div class="flip-card-back">
                                  <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta1}.jpg">
                              </div>
                              </div>
                          </div>
                      </div>
                      <div class="flip-card">
                          <div class="flip-card-inner ${numeroIdentidad1}">
                              <div class="flip-card-front"></div>
                                  <div class="flip-card-back">
                                      <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta1}.jpg">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              `
          };
          numeroCarta++;
          numeroIdentidad++;
          numeroCarta1++;
          numeroIdentidad1++;
      };
      numeroPareja++;
      numeroPareja++;
      randomizarCartes = Math.round (Math.random() * 2);
  } else if ( randomizarCartes == 1) {
      for (let i = 0; i < numeroPareja; i++) {
          for (let i = 0; i <1; i++) {
              pantalla.innerHTML += 
              `
                  <section id = "container">
                      <div class="flip-card">
                          <div class="flip-card-inner ${numeroIdentidad}">
                              <div class="flip-card-front"></div>
                                  <div class="flip-card-back">
                                      <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta}.jpg">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="flip-card">
                          <div class="flip-card-inner ${numeroIdentidad1}">
                              <div class="flip-card-front"></div>
                                  <div class="flip-card-back">
                                      <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta1}.jpg">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="flip-card">
                          <div class="flip-card-inner ${numeroIdentidad}">
                              <div class="flip-card-front"></div>
                                  <div class="flip-card-back">
                                      <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta}.jpg">
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="flip-card">
                          <div class="flip-card-inner ${numeroIdentidad1}">
                              <div class="flip-card-front"></div>
                                  <div class="flip-card-back">
                                      <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta1}.jpg">
                                  </div>
                              </div>
                          </div>
                      </div>
              </section>
              `
          };
          numeroCarta++;
          numeroIdentidad++;
          numeroCarta1++;
          numeroIdentidad1++;
      };
      numeroPareja++;
      numeroPareja++;
      randomizarCartes = Math.round (Math.random() * 2);
  } else {
    for (let i = 0; i < numeroPareja; i++) {
      for (let i = 0; i <1; i++) {
          pantalla.innerHTML += 
          `
              <section id = "container">
                  <div class="flip-card">
                      <div class="flip-card-inner ${numeroIdentidad1}">
                          <div class="flip-card-front"></div>
                              <div class="flip-card-back">
                                  <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta1}.jpg">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="flip-card">
                      <div class="flip-card-inner ${numeroIdentidad}">
                          <div class="flip-card-front"></div>
                              <div class="flip-card-back">
                                  <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta}.jpg">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="flip-card">
                      <div class="flip-card-inner ${numeroIdentidad}">
                          <div class="flip-card-front"></div>
                              <div class="flip-card-back">
                                  <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta}.jpg">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="flip-card">
                      <div class="flip-card-inner ${numeroIdentidad1}">
                          <div class="flip-card-front"></div>
                              <div class="flip-card-back">
                                  <img class="img" src="https://avatars.dicebear.com/v2/avataaars/${numeroCarta1}.jpg">
                              </div>
                          </div>
                      </div>
                  </div>
          </section>
          `
      };
      numeroCarta++;
      numeroIdentidad++;
      numeroCarta1++;
      numeroIdentidad1++;
  };
  numeroPareja++;
  numeroPareja++;
  randomizarCartes = Math.round (Math.random() * 2);
  }
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


