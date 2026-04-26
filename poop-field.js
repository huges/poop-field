let init = function () {
  stopTimer();
  updateTimerDisplay();
  firstClick = true;
  let gameField = document.getElementById("game-field");
  gameField.classList.remove("field-bomb");
  gameField.innerHTML = '<span class="game-over">GAME OVER</span>';
  document.getElementById("game-start").addEventListener("click", function (e) {
    init();
  });
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
            if (rd[i][j] == "x") {
              this.classList.add("cell-bomb");
              gameField.classList.toggle("field-bomb");
              stopTimer();
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
            updateMineCounterDisplay(document.getElementsByClassName("cell-flag").length);
          });
      })(i, j);
    }
  }
  //numeri random da 0 a 9
  // Math.floor(Math.random()*10)
};

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

// Modifica funzione init per resettare timer
const oldInit = init;
init = function () {
  stopTimer();
  updateTimerDisplay();
  firstClick = true;
  oldInit();
};

// Avvia timer al primo click su una cella
function enableFirstClickTimer() {
  const cells = document.querySelectorAll('.cella');
  cells.forEach(cell => {
    cell.addEventListener('click', function handler() {
      if (firstClick) {
        startTimer();
        firstClick = false;
      }
      cell.removeEventListener('click', handler);
    });
  });
}

function updateMineCounterDisplay(number) {
  const mineCounterEl = document.getElementById('mine-counter');
  if (mineCounterEl) {
    mineCounterEl.textContent = String(number).padStart(3, '0');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  enableFirstClickTimer();
});

// Richiama enableFirstClickTimer dopo ogni init
const oldInit2 = init;
init = function () {
  oldInit2();
  enableFirstClickTimer();
};

init();
