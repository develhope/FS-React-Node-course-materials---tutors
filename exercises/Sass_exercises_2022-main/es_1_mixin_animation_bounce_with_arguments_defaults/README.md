Vogliamo applicare una classe che permetta l'animazione dell'elemento, l'effetto dovrà fare "saltellare" l'elemento html.
La classe si chiamerà .bounce ed avrà una durata di animazione di 1s.

Tramite mixin dovremmo creare una animazione di nome "bounce".

[//]: # (Nella mixin dovremmo parametrizzare la partenza della traslazione e la distanza con cui l'elemento dovrà traslare sull'asse Y nei vari frames.)
La mixin accetta due parametri: un parametro che definisce la partenza dell'animazione e l'altro la distanza massima di traslazione dell'elemento sull'asse Y.

Dunque la mixin avrà 2 valori di default nei parametri:
- partenza traslazione
- distanza traslazione

Come possiamo vedere nell'esempio che segue, abbiamo intercettato che si parte da 0 e si arriva a massimo -30px (quando si trova al 40% dell'animazione)
Nel momento in cui si è al 60% bisogna assegnare la metà della distanza di traslazione parametrizzata.
Ad esempio se al 40% abbiamo -30px al 60% dovremmo avere -30px/2

Esempio:
@keyframes bounce { /* animazione */
0%, 20%, 50%, 80%, 100% {transform: translateY(0);} /* 0 rappresenta il valore di partenza */
40% {transform: translateY(-30px);} /* -30px rappresenta il valore al 40% dell'animazione */
60% {transform: translateY(-15px);} /* -15px rappresenta il valore al 60% dell'animazione */
}

.bounce { /* classe con animazione correlata */
animation-duration: 1s;
animation-name: bounce;
}

**Suggestion:**

Per passare i parametri alla mixin con gli eventuali valori di default possiamo fare riferimento a questo:
@mixin bounce($duration: null, $start: null, $distnace: null) { ..... }
