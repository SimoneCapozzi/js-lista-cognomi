//chiedere con un prompt il cognome
var cognome_utente = prompt("Salve inserisca il suo cognome");

//creare un array con lista cognomi
var lista_cognomi = ["verdi", "bianchi", "rossi", "gialli", "neri"];

//pusho il cognome che ho preso nel prompt nell'array
lista_cognomi.push(cognome_utente);

//array = array.sort(; sovrascrivo l'array con la stesso ordinato alfabeticamente
lista_cognomi = lista_cognomi.sort();

//creiamo un for
for(var i = 0 ; i < lista_cognomi.length; i++){
  if(cognome_utente === lista_cognomi[i]){
    var pos_cognome = i + 1;
    var testo = document.getElementById("lista").innerHTML;
    document.getElementById("lista").innerHTML = testo + '<li>Il cognome inserito è : '+ lista_cognomi[i] + ' alla posizione numero: ' + pos_cognome + '</li>';
  }else{
    testo = document.getElementById("lista").innerHTML;
    document.getElementById("lista").innerHTML = testo + '<li>Il cognome  è: ' + lista_cognomi[i] + '</li>';
  }

}

/* 1 inserisco il cognome marroni

2 creo la lista dei cognomi esistenti ["verdi", "bianchi", "rossi", "gialli", "neri"]

3 aggiungo il cognome inserito (marroni) alla lista esistente :
["verdi", "bianchi", "rossi", "gialli", "neri", "marroni"] 

4 sovrascrivo la lista con (sort) 
lista_cognomi = lista_cognomi.sort() *regola* 
["bianchi", "gialli", "marroni", "neri", "rossi", "verdi"]

5 i = 0
if se marroni === bianchi  "non entra perchè diverso"
pos_cognome = 0 + 1
testo è uguale alla concatenazione degli li e stampa la posizione + il cognome

6 else altrimenti      "entra"
testo è uguale alla concatenazione degli li e stampa solo il cognome 

7 i++ 

8 i = 1
if se marroni === gialli    "non entra perchè diverso"
pos_cognome = 1 + 1 
testo è uguale alla concatenazione degli li e stampa la posizione + il cognome

9 else altrimenti     "entra"
testo è uguale alla concatenazione degli li e stampa solo il cognome 

10 i ++

11 i = 2

12 if se marroni ===  marroni   "entra perchè uguale"
pos_cognome = 2 + 1
testo è uguale alla concatenazione degli li e stampa la posizione + il cognome

13 else altrimenti     "non entra"
testo è uguale alla concatenazione degli li e stampa solo il cognome 

14 i ++

15 i = 3

16 if se marroni === neri    "non entra perche diverso"
pos_cognome = 3 + 1
testo è uguale alla concatenazione degli li e stampa la posizione + il cognome

17 else altrimenti     "entra"
testo è uguale alla concatenazione degli li e stampa solo il cognome 

18 i ++

19 i = 4

20 if se marronni === rossi    "non entra perche diverso"
pos_cognome = 4 + 1
testo è uguale alla concatenazione degli li e stampa la posizione + il cognome

21 else altrimenti    "entra"
testo è uguale alla concatenazione degli li e stampa solo il cognome 

22 i ++

23 i = 5

24 if se marroni === verdi     "non entra perche diverso"
pos_cognome = 5 + 1
testo è uguale alla concatenazione degli li e stampa la posizione + il cognome

25 else altrimenti   "entra"
testo è uguale alla concatenazione degli li e stampa solo il cognome 

*/

