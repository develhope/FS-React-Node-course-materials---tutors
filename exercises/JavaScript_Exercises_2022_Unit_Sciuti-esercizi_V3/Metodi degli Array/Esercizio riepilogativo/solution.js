// Array di studenti
const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];


console.log("Nomi degli studenti:");
studenti.forEach(studente => {
  console.log(studente.nome);
});


const studenteVotoAlto = studenti.find(studente => studente.voto > 90);
console.log("\nStudente con voto superiore a 90:");
console.log(studenteVotoAlto);

const sommaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0);
const mediaVoti = sommaVoti / studenti.length;
console.log("\nMedia dei voti degli studenti:", mediaVoti);

const nomiMaiuscolo = studenti.map(studente => studente.nome.toUpperCase());
console.log("\nNomi degli studenti in maiuscolo:");
console.log(nomiMaiuscolo);


const studentiVotoAlto = studenti.filter(studente => studente.voto > 85);
console.log("\nStudenti con voto superiore a 85:");
console.log(studentiVotoAlto);
