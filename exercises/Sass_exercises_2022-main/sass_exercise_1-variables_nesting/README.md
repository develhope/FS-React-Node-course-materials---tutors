Ricreare il layout fornito utilizzando il nesting delle regole e le variabili SASS.
I colori da utilizzare sono:
- red
- blue
- green

**Suggestion:**

$color-primary: red;
$color-tertiary: green;

.exercise {
border: 1px solid $color-primary;

    .exercise-title {
        color: $color-tertiary;
    }
}
