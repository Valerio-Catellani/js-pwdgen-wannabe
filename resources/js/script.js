
/* Ciao ragazzi,
esercizio di oggi: (insicurissimo) password generator
nome repo: js-pwdgen-wannabe
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
Buon pomeriggio buon lavoro ! :muscolo: :js: */

let userName = prompt("What is your name?")
let surName = prompt("What is your surname?")
let favoriteColor = prompt("What is your favorite color?")

document.getElementById("app").innerHTML = `${userName}${surName}${favoriteColor}23`