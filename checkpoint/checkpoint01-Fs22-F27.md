CHECKPOINT 1 EX1

Task: 
1. Create a function called filterEvenNumbers that takes an array of numbers as input and returns a Promise. Inside this function, filter out the even numbers from the input array. If the filtering is successful, resolve the Promise with the resulting array of even numbers. If there are any errors during the filtering process, reject the Promise with an appropriate error message.
2. Next, create a function called displayFilteredNumbers that takes no arguments. Inside this function, create an array of numbers of your choice and then call filterEvenNumbers with this array. Use await to wait for the Promise to be resolved and then log the resulting array of even numbers to the console. Use catch to handle any errors and log them to the console as well.
3. Lastly, call the displayFilteredNumbers function to see your implementation in action.



CHECKPOINT 1 EX 2

Task: 
1. Create an asynchronous function called calculateSum that takes an array of numbers as input and returns the sum of all the numbers in the array. Inside this function, use a loop to iterate over the array asynchronously. For each iteration, wait for a short delay using await (e.g., using setTimeout) to simulate asynchronous operations. Finally, return the sum once all iterations are complete.
2. Next, create another function called displaySum that takes no arguments. Inside this function, create an array of numbers of your choice and then call calculateSum with this array. Use await to wait for the sum to be calculated, and then log the result to the console.
3. Finally, call the displaySum function to compute and display the sum of the numbers.


CHECKPOINT 1 EX3

Task: 
1. Create a function called calculateSquare that takes a number as input and returns a Promise. Inside this function, use a setTimeout to simulate a time-consuming operation. If the number is positive, resolve the Promise with the square of the number after a delay. If the number is negative or zero, reject the Promise with an appropriate error message after the same delay.

2. Next, create another function called displaySquare that takes a number as input. Inside this function, call calculateSquare with the provided number. Use .then() to handle the resolved Promise and log the squared result to the console. Use .catch() to handle any errors and log them to the console as well.

3. Lastly, call the displaySquare function with both positive and negative numbers to see your implementation in action.


CHECKPOINT 1 EX4

1. Scrivi il tuo nome e cognome dentro un console.log

2. Scrivi il tuo nome e cognome, facendoli restituire sottoforma di stringa da una funzione chiamate getFullName. Fai un console.log del risultato di questa funzione.

3. Scrivi un oggetto chiamato "personalInfo" che rappresenti le tue informazioni personali, le proprietà sono: name, surname, age, hairColor, eyesColor, hobbies ( array di stringhe ).

4. Scrivi una funzione che riceva come parametro l'oggetto personalInfo. Usa il destructuring per recuperare il nome ed il cognome all'interno della funzione. Usa i template literals per restituire una stringa che contenga il nome e il cognome. Effettua il console.log del risultato.

5. Scrivi una funzione "getAllIntegerProperties" che riceva come parametro l'oggetto personalInfo. Usa in combinata un ciclo for e l'operatore typeof per restituire un oggetto che contenga solo le proprietà di tipo int.

6. Scrivi una funzione "addHobby" che riceva come parametro una nuova stringa hobby ed un oggetto personalInfo. La funzione deve restituire l'oggetto personalInfo con il nuovo hobby aggiunto all'array hobbies.

6.1 Scrivi una funzione "hobbyExists" che riceva come parametro una stringa hobby ed un oggetto personalInfo. La funzione deve restituire true se l'hobby esiste già, altrimenti false.

6.2 Fai in modo che la funzione "hobbyExists" sia case insensitive. Quindi se ho un hobby "calcio" e cerco "Calcio" mi deve restituire true.

6.3 Fai in modo che il caseSensitive sia un parametro opzionale della funziona "hobbyExists" e che di default sia true. Se il parametro è false, la funzione deve essere case insensitive.

7. Scrivi una funzione di autenticazione che riceva due parametri, username e password. La funzione deve restituire una Promise. Se l'utente esiste, la Promise deve essere risolta, altrimenti deve essere rifiutata. Gestisci la Promise per effettuare un console.log degli esiti.
 Usa l'array users sottostante come database di utenti esistenti da poter controllare. Scrivi la funzione dopo l'array users.

### Bonus points
8. Scrivi una funzione "registerUser" che riceva come parametro un oggetto user. La funzione deve restituire una Promise. Se l'utente esiste già, la Promise deve essere rifiutata, altrimenti deve essere risolta e l'utente deve essere aggiunto all'array users. Gestisci la Promise con una nuova registrazione.

9. Scrivi una funzione "sendEmail" che riceva come parametro un oggetto user. Aggiungi una nuova proprietà mail all'oggetto user. La funzione deve restituire una Promise. Se l'utente ha un'email valida, la Promise deve essere risolta, altrimenti deve essere rifiutata. Cerca su Google come poter validare un email in Javascript se non ne sei a conoscenza. Aggiungi questa promise alla catena di promises della funzione "registerUser" precedente.

10. Scrivi una funzione asincrona register, che riceva un oggetto user. Usa la sintassi async/await per registrare un utente e inviare una email di conferma. La funzione deve effettuare il console.log di "Utente registrato e email inviata" se tutto va a buon fine, altrimenti deve effettuare il console.log dell'errore specifico trovato.


