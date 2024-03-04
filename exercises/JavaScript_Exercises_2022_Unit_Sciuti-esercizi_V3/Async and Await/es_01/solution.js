// Funzione simulata per ottenere dati da una fonte asincrona
function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}



async function ottieniDati() {
  console.log("Caricamento dati in corso...");
  const dati = await caricamentoDati();
  console.log("Dati ottenuti:", dati);
}


ottieniDati();

