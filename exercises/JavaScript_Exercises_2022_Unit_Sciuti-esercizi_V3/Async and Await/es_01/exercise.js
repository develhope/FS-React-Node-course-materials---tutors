// Funzione simulata per ottenere dati 
function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}

// ipmlementa la funzione asincrona "ottieniDati"
//....
