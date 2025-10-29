let tablero = Array(9).fill("");
let jugadorActual = "X";
let juegoActivo = false;

const tableroDiv = document.getElementById("tablero");
const mensaje = document.getElementById("mensaje");

function iniciarJuego() {
  jugadorActual = document.getElementById("jugadorSeleccion").value;
  tablero = Array(9).fill("");
  juegoActivo = true;
  mensaje.textContent = `Turno del jugador ${jugadorActual}`;
  dibujarTablero();
}

function dibujarTablero() {
  tableroDiv.innerHTML = "";
  tablero.forEach((casilla, index) => {
    const celda = document.createElement("button");
    celda.textContent = casilla;
    celda.style.width = "50px";
    celda.style.height = "50px";
    celda.style.fontSize = "24px";
    celda.style.margin = "2px";
    celda.addEventListener("click", () => hacerMovimiento(index));
    tableroDiv.appendChild(celda);
    if ((index + 1) % 3 === 0) tableroDiv.appendChild(document.createElement("br"));
  });
}

function hacerMovimiento(posicion) {
  if (!juegoActivo) return;
  if (tablero[posicion] !== "") return;

  tablero[posicion] = jugadorActual;
  if (verificarGanador()) {
    mensaje.textContent = ` ¡El jugador ${jugadorActual} ha ganado!`;
    juegoActivo = false;
    return;
  }

  if (!tablero.includes("")) {
    mensaje.textContent = " Empate.";
    juegoActivo = false;
    return;
  }

  // Cambiar jugador
  jugadorActual = jugadorActual === "X" ? "O" : "X";
  mensaje.textContent = `Turno del jugador ${jugadorActual}`;
  dibujarTablero();
}

function verificarGanador() {
  const combinaciones = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return combinaciones.some(([a,b,c]) =>
    tablero[a] !== "" &&
    tablero[a] === tablero[b] &&
    tablero[a] === tablero[c]
  );
}

document.getElementById("iniciarBtn").addEventListener("click", iniciarJuego);
