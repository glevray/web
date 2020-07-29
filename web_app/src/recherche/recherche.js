const send = (event) => {
    event.preventDefault();



    var tabLignes = document.querySelector("#monTableau").rows; //on récupère les lignes du tableau
    var lgLignes = tabLignes.length; //on peut donc appliquer la propriété length
    /*
    for (var i = 0; i < lgLignes; i++) //on peut directement définir la variable i dans la boucle
    {

        tabLignes[i].cells[0].innerHTML = tabUtil[i].nom;
        tabLignes[i].cells[1].innerHTML = tabUtil[i].prenom;
        tabLignes[i].cells[2].innerHTML = tabUtil[i].dateNaissance;
        tabLignes[i].cells[3].innerHTML = tabUtil[i].email;
        tabLignes[i].cells[4].innerHTML = tabUtil[i].login;
        tabLignes[i].cells[5].innerHTML = tabUtil[i].password;

    }*/
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
    /*
    for (ligne of tabLignes) {
        for (cellule of ligne.cells)

    }*/


    console.log(event);


}
document.querySelector("#formRecherche").addEventListener('submit', send);