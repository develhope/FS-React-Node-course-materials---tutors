
function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}


async function lanciaVeicoloSpaziale() {
  console.log("Preparazione al lancio del veicolo spaziale...");

  const caricaModulo1 = await caricaModulo("A");
  console.log(caricaModulo1);

  const caricaModulo2 = await caricaModulo("B");
  console.log(caricaModulo2);

  const caricaModulo3 = await caricaModulo("C");
  console.log(caricaModulo3);

  console.log("Veicolo spaziale pronto per il lancio!");
}


lanciaVeicoloSpaziale();
