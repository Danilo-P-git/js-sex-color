var sesso = prompt("Inserisci il tuo sesso. I valori accettati sono maschio  o femmina");
var nome = prompt("Come ti chiami");

if (sesso == "maschio") {
  var maschio = document.getElementById('colore');
  maschio.classList.add("maleColor");
  document.getElementById('colore').innerHTML = maschio;

}
else if (sesso == "femmina") {
  var femmina = document.getElementById('colore');
  femmina.classList.add("femaleColor");
  document.getElementById('colore').innerHTML = femmina;
}
else {
  document.getElementById('error').innerHTML = "Inserisci un valore tra mashcio e femmina";

}
  document.getElementById('colore').innerHTML = nome;
