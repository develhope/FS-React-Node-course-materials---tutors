
function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000;
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}


async function lanciaVeicoloSpaziale() {
  console.log("Preparazione al lancio del veicolo spaziale...");

  try {
    const caricaModulo1 = await caricaModulo("A");
    console.log(caricaModulo1);

    const caricaModulo2 = await caricaModulo("B");
    console.log(caricaModulo2);

    const caricaModulo3 = await caricaModulo("C");
    console.log(caricaModulo3);

    console.log("Veicolo spaziale pronto per il lancio!");
  } catch (error) {
    console.error(`Errore: ${error}`);
    console.log("Impossibile lanciare il veicolo spaziale a causa di errori nei moduli.");
  }
}

lanciaVeicoloSpaziale();




