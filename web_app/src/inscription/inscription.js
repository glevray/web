let users = {}
let ident = {}

const checkmail = (event) => {
    event.preventDefault();
    console.log(event);

    if (event.target.motdepasse.value != event.target.motdepasse2.value) {
        erreur = document.querySelector("#texterreur");
        erreur.innerHTML = "Veuillez saisir deux fois le même mot de passe";
        return false
    } else {
        erreur = document.querySelector("#texterreur");
        erreur.innerHTML = "";
        return true
    }

}
const send = (event) => {

    event.preventDefault();

    if (!(checkmail(event))) return false;

    console.log(event);

    for (let ind = 0; ind < 6; ind++) {
        users[event.target[ind].name] = event.target[ind].value;
    }

    let option_inscription = {
        method: "POST",
        body: JSON.stringify(users),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://127.0.0.1:5000/api/todos/inscription', option_inscription).
        /*fetch('http://192.168.99.100:5000/api/todos', option).*/
    then(resp => resp.json()).then(document.location.href = "../index.html");

    erreur = document.querySelector("#texterreur");
    erreur.innerHTML = "Erreur lors de l'inscription";
}

document.querySelector("#formInscription").addEventListener('submit', send);