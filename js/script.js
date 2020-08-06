// chiedo il seso e il nome
var sesso = prompt("Inserisci il tuo sesso. I valori accettati sono maschio  o femmina");
var nome = prompt("Come ti chiami");
// Creo un if dove l'input della variabile sesso deve essere per forza "maschio" o femmina se non lo è da errore
// sempre in quersta if definisco la variabile maschio e gli dico che deve prendere le specifiche della classe css malecolor
if (sesso == "maschio") {
  var maschio = document.getElementById('colore');
  maschio.classList.add("maleColor");
  document.getElementById('colore').innerHTML = maschio;
}
// stessa cosa di sopra semplicemente per la variabile femmina
else if (sesso == "femmina") {
  var femmina = document.getElementById('colore');
  femmina.classList.add("femaleColor");
  document.getElementById('colore').innerHTML = femmina;
}
// Qui da errore
else {
  document.getElementById('error').innerHTML = "Inserisci un valore tra mashcio e femmina";

}
  document.getElementById('colore').innerHTML = nome;
