let users = {}
let ident = {}

const checkmail = (event) => {
    event.preventDefault();

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

    console.log(event);

    if (!(checkmail(event))) return false;

    /* Recuperation des valeurs de champs du formulaire */
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

    fetch(globalConfig.URLACCES + "/inscription", option_inscription).
    then(resp => resp.json()).then(resp => {
        console.log("resultat:", resp);
        if ((resp != null) && (!(resp.erreur)))
            document.location.href = globalConfig.URLINDEX;
        /*    console.log("dnas le debranchement") */
        else {
            erreur = document.querySelector("#texterreur");
            if (resp.erreur)
                erreur.innerHTML = resp.erreur;
            else erreur.innerHTML = "Erreur lors de l'inscription";
        }

    });
}

document.querySelector("#formInscription").addEventListener('submit', send);