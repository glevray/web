if (!(sessionStorage.getItem("connexion")))
    document.location.href = globalConfig.URLCONNECT;

let compte = {}

function send(event) {
    event.preventDefault();

    console.log("dans le send");
    console.log(event);

    compte[event.target[0].name] = event.target[0].value;

    console.log(compte);

    let option_suppression = {
        method: "DELETE",
        body: JSON.stringify(compte),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(`${globalConfig.URLACCES}/suppression`, option_suppression).
    then(resp => resp.json()).then(window.location.reload());

    erreur = document.querySelector("#texterreur");
    erreur.innerHTML = "Erreur lors de la suppression";
}

document.querySelector("#formSuppression").addEventListener('submit', send);


fetch(globalConfig.URLACCES + "/administration")
    .then(function(response) {
        response.json()
            .then(function(value) {
                var obj = JSON.parse(value);
                creerTableau(obj);
            });
    });



function creerTableau(tabUtil) {


    console.log(sessionStorage.getItem('connexion'));

    console.log("dans ajouter ligne");
    console.log(tabUtil);

    var tableau = document.querySelector("#monTableau")

    let i = 0;

    console.log(i, tabUtil.length);

    while (i < tabUtil.length) {

        console.log(i, tabUtil.length);

        var ligne = tableau.insertRow(-1); //on ajoute une ligne

        var colonne1 = ligne.insertCell(0); //on a une ajouté une cellule
        colonne1.innerHTML += tabUtil[i].idutilisateurs; //on y met le nom

        var colonne1 = ligne.insertCell(1); //on a une ajouté une cellule
        colonne1.innerHTML += tabUtil[i].firstname; //on y met le nom

        var colonne2 = ligne.insertCell(2); //on ajoute la seconde cellule
        colonne2.innerHTML += tabUtil[i].lastname;

        var colonne3 = ligne.insertCell(3);
        colonne3.innerHTML += tabUtil[i].birthdate.substring(0, 10); //on y met la date de naissance

        var colonne3 = ligne.insertCell(4);
        colonne3.innerHTML += tabUtil[i].email; //on y met l'email

        i++;
    }
}