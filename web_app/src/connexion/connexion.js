connexion = {}

var connecte = false

const send = (event) => {
    event.preventDefault();

    console.log(event);

    connexion[event.target[0].name] = event.target[0].value;
    connexion[event.target[1].name] = event.target[1].value;

    console.log(connexion);

    let option_connexion = {
        method: "POST",
        body: JSON.stringify(connexion),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(globalConfig.URLACCES + "/connexion", option_connexion).
    then(response => response.json()).then(response => {
        connecte = response;
        console.log("connecte", connecte);
        if (connecte) {
            sessionStorage.setItem("connexion", true);
            document.location.href = globalConfig.URLINDEX;
        } else {
            erreur = document.querySelector("#texterreur");
            erreur.innerHTML = "Erreur lors de la connexion";
        }
    });
}
const est_connecte = (retour) => {
    console.log(retour);
    console.log(typeof retour);

    if (retour) { alert("connecte") } else { alert("non connecte"); }

}
document.querySelector("#formConnexion").addEventListener('submit', send);