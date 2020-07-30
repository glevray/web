const send = (event) => {
    event.preventDefault();


    fetch('http://127.0.0.1:5000/todos')
        .then(function(response) {
            response.json()
                .then(function(value) {
                    charge_tabUtil(value);
                });
        });


    console.log(event);


}
document.querySelector("#formRecherche").addEventListener('submit', send);


function charge_tabUtil(value) {
    affiche_utilisateurs(value);
}



function affiche_utilisateurs(tabUtil) {
    var tabLignes = document.querySelector("#monTableau").rows; //on récupère les lignes du tableau
    var lgLignes = tabLignes.length; //on peut donc appliquer la propriété length

    let i = 0;
    for (ligne of tabLignes) {
        ligne.cells[0].innerHTML = tabUtil[i].nom;
        ligne.cells[1].innerHTML = tabUtil[i].prenom;
        ligne.cells[2].innerHTML = tabUtil[i].dateNaissance;
        ligne.cells[3].innerHTML = tabUtil[i].email;
        ligne.cells[4].innerHTML = tabUtil[i].login;
        ligne.cells[5].innerHTML = tabUtil[i].password;
        i++;
    }

}