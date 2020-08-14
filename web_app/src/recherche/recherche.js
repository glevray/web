if (!(sessionStorage.getItem("connexion")))
    document.location.href = globalConfig.URLCONNECT;

const send = (event) => {

    event.preventDefault();

    console.log(event);

    /* Recuperation de la valeur des parametres de recherche */
    research = {
        "firstname": event.target[0].value,
        "lastname": event.target[1].value,
        "birthdate": event.target[2].value,
        "email": event.target[3].value
    }


    fetch(globalConfig.URLACCES + "/administration")
        .then(function(response) {
            response.json()
                .then(function(value) {
                    var obj = JSON.parse(value);
                    ajouterLignes(obj, research);
                });
        });

    console.log(event);


}
document.querySelector("#formRecherche").addEventListener('submit', send);

function ajouterLignes(tabUtil, research) {

    console.log("dans ajouter ligne");
    console.log(tabUtil);

    var tableau = document.querySelector("#monTableau");

    /* On supprime les lignes du tableau avant de les recreer */
    for (var ind = 1; ind < tableau.rows.length;) {
        tableau.deleteRow(ind);
    }

    let i = 0;

    while (i < tabUtil.length) {

        console.log("Avant la fonction research");

        console.log(i, tabUtil.length, select_ligne(tabUtil[i], research));

        if (select_ligne(tabUtil[i], research)) {
            var ligne = tableau.insertRow(-1); //on ajoute une ligne

            var colonne1 = ligne.insertCell(0); //on a une ajouté une cellule
            colonne1.innerHTML += tabUtil[i].firstname; //on y met le nom

            var colonne2 = ligne.insertCell(1); //on ajoute la seconde cellule
            colonne2.innerHTML += tabUtil[i].lastname;

            var colonne3 = ligne.insertCell(2);
            colonne3.innerHTML += tabUtil[i].birthdate.substring(0, 10); //on y met la date de naissance

            var colonne4 = ligne.insertCell(3);
            colonne4.innerHTML += tabUtil[i].email; //on y met l'email
        }
        i++;

    }

}

function select_ligne(ligTab, research) {

    var select = true;

    if (select)
        select = ((research.firstname == "") || (research.firstname == ligTab.firstname));
    if (select)
        select = ((research.lastname == "") || (research.lastname == ligTab.lastname));
    if (select)
        select = ((research.birthdate == "") || (research.birthdate == ligTab.birthdate.substring(0, 10)));
    if (select)
        select = ((research.email == "") || (research.email == ligTab.email));

    return select;
}