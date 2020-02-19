// Creo una lista di email
// Chiedo all'utente di inserire la sua email
// Se è nella lista rispondi che puoi accedere
// Se non scrivi che non può accedere.
// Far capire al programma cosa è una mail e cosa non

var iscritti = ['luigi@email.com','luigi2@email.com','luigi3@email.com','luigi4@email.com','luigi5@email.com','luigi6@email.com','luigi7@email.com','luigi8@email.com','luigi9@email.com','luigi10@email.com','luigi11@email.com',];
var tuaEmail = prompt('Inserisci la tua email per poter accedere');
  console.log(tuaEmail);


for(var i = 0; i < iscritti.length; i++) {
    if(iscritti[i] ==tuaEmail) {
      document.getElementById('entra-alla-festa').innerHTML = 'Puoi entrare alla festa';
    }
    if(iscritti[i] ==tuaEmail) {
      document.getElementById('non-entra-alla-festa').innerHTML = 'Non puoi entrare alla festa';
    }
}
