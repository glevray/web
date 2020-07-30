/*
class Utilisateur {
    constructor(nom, prenom, dateNaissance, email, login, password) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.email = email;
        this.login = login;
        this.password = password;
    }
}

let util1 = new Utilisateur("Naimarre", "jean", "06/08/1968", "email@free.fr", "login", "password");
let util2 = new Utilisateur("Dupont", "jean", "06/08/1968", "email@free.fr", "login", "password");
let util3 = new Utilisateur("Durant", "jean", "06/08/1968", "email@free.fr", "login", "password");
let util4 = new Utilisateur("Delannoy", "jean", "06/08/1968", "email@free.fr", "login", "password");
let util5 = new Utilisateur("Sneck", "jean", "06/08/1968", "email@free.fr", "login", "password");
let util6 = new Utilisateur("Champagne", "jean", "06/08/1968", "email@free.fr", "login", "password");
*/

fetch('http://127.0.0.1:5000/todos')
    .then(function(response) {
        response.json()
            .then(charge_tabUtil(value));
    });

tabUtil = function charge_tabUtil(value) {
    /*for (elt in value) {
        console.log("Valeur", elt);*/
    return value;
}
}

#
let tabUtil = [util1, util2, util3, util4, util5, util6]