const send = (event) => {

    event.preventDefault();

    fetch(globalConfig.URLACCES)
        .then(function(response) {
            response.json()
                .then(function(value) {
                    var obj = JSON.parse(value);
                    ajouterLignes(obj);
                });
        });

    console.log(event);


}
document.querySelector("#formRecherche").addEventListener('submit', send);

function ajouterLignes(tabUtil) {

    console.log("dans ajouter ligne");
    console.log(tabUtil);

    var tableau = document.querySelector("#monTableau")

    let i = 0;

    while (i < tabUtil.length) {

        console.log(i, tabUtil.length);

        var ligne = tableau.insertRow(-1); //on ajoute une ligne

        var colonne1 = ligne.insertCell(0); //on a une ajouté une cellule
        colonne1.innerHTML += tabUtil[i].firstname; //on y met le nom

        var colonne2 = ligne.insertCell(1); //on ajoute la seconde cellule
        colonne2.innerHTML += tabUtil[i].lastname;

        var colonne3 = ligne.insertCell(2);
        colonne3.innerHTML += tabUtil[i].birthdate.substring(0, 10); //on y met la date de naissance

        i++;

    }

}