

// Timer globale
let timerInterval = null;
let timerValue = 0;
let firstClick = true;

function startTimer() {
  stopTimer();
  timerValue = 0;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerValue++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('timer');
  if (timerEl) {
    timerEl.textContent = String(timerValue).padStart(3, '0');
  }
}


function updateMineCounterDisplay(number) {
  const mineCounterEl = document.getElementById('mine-counter');
  if (mineCounterEl) {
    mineCounterEl.textContent = String(number).padStart(3, '0');
  }
}

function init() {
  stopTimer();
  updateTimerDisplay();
  updateMineCounterDisplay(0);
  firstClick = true;
  let gameField = document.getElementById("game-field");
  gameField.classList.remove("field-bomb");
  gameField.innerHTML = '<span class="game-over">GAME OVER</span>';
  let N = 10;
  let rd = new Array(N);
  for (let j = 0; j < N; j++) {
    rd[j] = new Array(N);
  }

  //inizializzazione
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      rd[i][j] = Math.floor(Math.random() * 10);
      if (rd[i][j] == 0) {
        rd[i][j] = "x";
      }
      if (rd[i][j] != "x") {
        rd[i][j] = 0;
      }
    }
  }

  //ciclo conta numeri
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      //implementazione neighborhood
      if (i > 0 && j > 0 && i < N - 1 && j < N - 1 && rd[i][j] != "x") {
        //internal conditions
        if (rd[i - 1][j - 1] == "x") {
          rd[i][j] += 1;
        }
        if (rd[i - 1][j] == "x") {
          rd[i][j] += 1;
        }
        if (rd[i - 1][j + 1] == "x") {
          rd[i][j] += 1;
        }
        if (rd[i][j - 1] == "x") {
          rd[i][j] += 1;
        }
        if (rd[i][j + 1] == "x") {
          rd[i][j] += 1;
        }
        if (rd[i + 1][j - 1] == "x") {
          rd[i][j] += 1;
        }
        if (rd[i + 1][j] == "x") {
          rd[i][j] += 1;
        }
        if (rd[i + 1][j + 1] == "x") {
          rd[i][j] += 1;
        }
      } else {
        if (i == 0 && j > 0 && i < N - 1 && j < N - 1 && rd[i][j] != "x") {
          if (rd[i][j - 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i][j + 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i + 1][j - 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i + 1][j] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i + 1][j + 1] == "x") {
            rd[i][j] += 1;
          }
        }

        if (i == N - 1 && j > 0 && i > 0 && j < N - 1 && rd[i][j] != "x") {
          if (rd[i - 1][j - 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i - 1][j] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i - 1][j + 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i][j - 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i][j + 1] == "x") {
            rd[i][j] += 1;
          }
        }

        if (j == 0 && i > 0 && i < N - 1 && j < N - 1 && rd[i][j] != "x") {
          if (rd[i - 1][j] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i - 1][j + 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i][j + 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i + 1][j] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i + 1][j + 1] == "x") {
            rd[i][j] += 1;
          }
        }

        if (j == N - 1 && i > 0 && i < N - 1 && j > 0 && rd[i][j] != "x") {
          if (rd[i - 1][j - 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i - 1][j] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i][j - 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i + 1][j - 1] == "x") {
            rd[i][j] += 1;
          }
          if (rd[i + 1][j] == "x") {
            rd[i][j] += 1;
          }
        }

        //condizioni ai vertici
        if (rd[0][0] != "x") {
          if (rd[0][1] == "x") {
            rd[0][0] += 1;
          }
          if (rd[1][0] == "x") {
            rd[0][0] += 1;
          }
          if (rd[1][1] == "x") {
            rd[0][0] += 1;
          }
        }
        if (rd[N - 1][0] != "x") {
          if (rd[N - 2][0] == "x") {
            rd[N - 1][0] += 1;
          }
          if (rd[N - 2][1] == "x") {
            rd[N - 1][0] += 1;
          }
          if (rd[N - 1][1] == "x") {
            rd[N - 1][0] += 1;
          }
        }
        if (rd[0][N - 1] != "x") {
          if (rd[0][N - 2] == "x") {
            rd[0][N - 1] += 1;
          }
          if (rd[1][N - 2] == "x") {
            rd[0][N - 1] += 1;
          }
          if (rd[1][N - 1] == "x") {
            rd[0][N - 1] += 1;
          }
        }
        if (rd[N - 1][N - 1] != "x") {
          if (rd[N - 1][N - 2] == "x") {
            rd[N - 1][N - 1] += 1;
          }
          if (rd[N - 2][N - 1] == "x") {
            rd[N - 1][N - 1] += 1;
          }
          if (rd[N - 2][N - 2] == "x") {
            rd[N - 1][N - 1] += 1;
          }
        }
      }
      if (rd[i][j] > 9) {
        rd[i][j] = 0;
      }
      gameField.innerHTML =
        gameField.innerHTML +
        '<span class="cella" id="B' +
        i +
        j +
        '">' +
        rd[i][j] +
        "</span>";
    }
    gameField.innerHTML = gameField.innerHTML + "<br>";
  }

  //interazione
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      //click
      (function (i, j) {
        document
          .getElementById("B" + i + j)
          .addEventListener("click", function (event) {
            if (firstClick) {
              startTimer();
              firstClick = false;
            }
            if (rd[i][j] == "x") {
              this.classList.add("cell-bomb");
              gameField.classList.toggle("field-bomb");
              stopTimer();
              // aggiorna mine-counter
              updateMineCounterDisplay(document.querySelectorAll('.cell-bomb').length);
            } else if (rd[i][j] == "0") {
              this.classList.add("cell-empty");
            } else {
              this.classList.add("cell-near");
            }
          });
        document
          .getElementById("B" + i + j).addEventListener("contextmenu", function (e) {
            e.preventDefault();
            this.classList.toggle("cell-flag");
            updateMineCounterDisplay(document.querySelectorAll('.cell-flag').length);
          });
      })(i, j);
    }
  }

  // Associa il pulsante start/reset
  const startBtn = document.getElementById("game-start");
  if (startBtn) {
    startBtn.onclick = function () {
      init();
    };
  }
}


function startTimer() {
  stopTimer();
  timerValue = 0;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerValue++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('timer');
  if (timerEl) {
    timerEl.textContent = String(timerValue).padStart(3, '0');
  }
}

// Avvia il gioco all'avvio
document.addEventListener('DOMContentLoaded', () => {
  init();
});
