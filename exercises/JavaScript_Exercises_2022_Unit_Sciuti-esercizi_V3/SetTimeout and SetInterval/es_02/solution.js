let tempoRimanente = 10;

function contoAllaRovescia() {
  if (tempoRimanente >= 1) {
    console.log(`Tempo rimanente: ${tempoRimanente}`);
    tempoRimanente--;
  } else {
    clearInterval(intervalId);
    console.log("Conto alla rovescia terminato!");
  }
}

console.log("Conto alla rovescia in corso...");

// Imposta il conto alla rovescia
const intervalId = setInterval(contoAllaRovescia, 1000);



