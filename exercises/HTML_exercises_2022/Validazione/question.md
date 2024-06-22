Dato il form di partenza, che troverai dentro al file in formato zip disponibile al dowanload, validare i campi in modo tale che:
- Tutti i campi siano obbligatori.
- I campi relativi a numero carta di credito e CVC devono avere una prima validazione sulla lunghezza e la correttezza dei valori.

**Suggestion**
Per la validazione del numero della carta e del CVC, utilizza l'attributo `pattern`, questo come valore prende una regular expression, cerca su internet quelle adatte per questi input.
