# Exercise 1

1. Imposta una struttura HTML di base contenente un elemento container per visualizzare i seguenti dati utente (name:{title, first, last,} picture:{medium} email e country ) e un pulsante per avviare il recupero di nuovi dati.
2. Crea un foglio di stile CSS per stilizzare il container e le card secondo il layout desiderato.
3. Scrivi il codice JavaScript per eseguire i seguenti passaggi:
Definisci una funzione chiamata fetchRandomUserData per recuperare i dati dall'API "https://randomuser.me/api/".
Utilizza il Fetch API per effettuare una richiesta GET all'endpoint dell'API.
Estrai le proprietà specifiche dai dati recuperati (es. nome, email, immagine) necessarie per la visualizzazione.
Genera dinamicamente il markup HTML per ciascuna card utente utilizzando le proprietà estratte.
Aggiungi il markup HTML generato all'elemento container nel DOM.
4. Implementa la funzionalità per l'evento del clic sul pulsante:
Aggiungi un listener per l'evento click all'elemento del pulsante.
Al clic del pulsante, chiama di nuovo la funzione fetchRandomUserData per recuperare nuovi dati utente.
Aggiorna le card visualizzate con i nuovi dati recuperati.
5. Testa l'implementazione:
Apri il file HTML in un browser web.
Verifica che i dati utente vengano recuperati e visualizzati in card stilizzate con CSS.
Clicca sul pulsante per recuperare nuovi dati utente e assicurati che le card visualizzate vengano aggiornate di conseguenza.

