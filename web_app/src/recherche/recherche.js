const send = (event) => {

    event.preventDefault();

    /*
        fetch('http://127.0.0.1:5000/lecture')
            .then(function(response) {
                response.json()
                    .then(function(value) {
                        affiche_utilisateurs(value);
                        console.log(value);
                    });
            });
    */

    fetch('http://127.0.0.1:5000/api/todos')
        /*  fetch('http://192.168.99.100:5000/api/todos')*/
        .then(function(response) {
            response.json()
                .then(function(value) {
                    var obj = JSON.parse(value);
                    console.log(obj);
                    console.log(obj[0].firstname);
                    affiche_utilisateurs(obj);
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


    /*  ligne.cells[3].innerHTML = tabUtil[i].email;
        ligne.cells[4].innerHTML = tabUtil[i].login;
        ligne.cells[5].innerHTML = tabUtil[i].password;
        i++;
    */
}