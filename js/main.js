// Creo una lista di email
// Chiedo all'utente di inserire la sua email
// Se è nella lista rispondi che puoi accedere
// Se non , scrivi che non può accedere.
// Far capire al programma cosa è una mail e cosa non

var iscritti = ['luigi@email.com','luigi2@email.com','luigi3@email.com','luigi4@email.com','luigi5@email.com','luigi6@email.com','luigi7@email.com','luigi8@email.com','luigi9@email.com','luigi10@email.com','luigi11@email.com'];
var tuaEmail = prompt('Inserisci la tua email per poter accedere');
  console.log(tuaEmail);




//Possiamo creare una variabile che controlli in che situazione ci troviamo
var trovato = false;

for(var i = 0; i < iscritti.length; i++) {
    if(iscritti[i] == tuaEmail) {
      trovato = true;
    }
    // else {
    //   document.getElementById('non-entra-alla-festa').innerHTML = 'Non puoi entrare alla festa';
    // }
    /*if(iscritti[i] != tuaEmail) {
      document.getElementById('non-entra-alla-festa').innerHTML = 'Non puoi entrare alla festa';
    }*/
}

if(trovato) {
  document.getElementById('entra-alla-festa').innerHTML = 'Puoi entrare alla festa';

}else {
  document.getElementById('non-entra-alla-festa').innerHTML = 'Non puoi entrare alla festa';

}



// inizio esercizio dadi

// Creazione numeri random da 1 a 6
// Creazione numeri random da 1 a 6
// Confronto quale numero è più alto
// Quello più alto vince

var dado1 = Math.floor(Math.random() * 6) + 1;
document.getElementById('dado-uno').innerHTML = dado1;
var dado2 = Math.floor(Math.random() * 6) + 1;
document.getElementById('dado-due').innerHTML = dado2;

var vincita = false;

if (dado1 > dado2) {
  document.getElementById('vincita-uno').innerHTML = 'Vince il dado uno';
  vincita = true;

}
else if(dado1 == dado2) {
  document.getElementById('parita').innerHTML = 'Abbiamo una parità!';

}
else {
  document.getElementById('vincita-due').innerHTML = 'Vince il dado due';

}
