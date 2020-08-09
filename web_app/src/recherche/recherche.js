const send = (event) => {

    event.preventDefault();

    fetch('http://127.0.0.1:5000/api/todos')
        /*  fetch('http://192.168.99.100:5000/api/todos')*/
        .then(function(response) {
            response.json()
                .then(function(value) {
                    var obj = JSON.parse(value);
                    console.log(obj);
                    console.log(obj[0].firstname);
                    ajouterLignes(obj);
                });
        });

    console.log(event);


}
document.querySelector("#formRecherche").addEventListener('submit', send);

function affiche_utilisateurs(tabUtil) {
    var tabLignes = document.querySelector("#monTableau").rows; //on récupère les lignes du tableau
    var lgLignes = tabLignes.length; //on peut donc appliquer la propriété length

    let i = 0;
    for (ligne of tabLignes) {
        if (i < tabUtil.length) {

            ligne.cells[0].innerHTML = tabUtil[i].firstname;
            ligne.cells[1].innerHTML = tabUtil[i].lastname;
            ligne.cells[2].innerHTML = tabUtil[i].birthdate.substring(0, 10);

            i++;

        } else {
            ligne.cells[0].innerHTML = ' ';
            ligne.cells[1].innerHTML = ' ';
            ligne.cells[2].innerHTML = ' ';
        }


    }
}

function ajouterLignes(tabUtil) {

    console.log("dans ajouter ligne");

    var tableau = document.querySelector("#monTableau")

    let i = 0;

    console.log(i, tabUtil.length);

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