/* si la varibale de session est à null alors on n'affiche pas les acces
au menu de recherche et d'admin */
console.log("recuperation de la variable de session connexion", sessionStorage.getItem("connexion"));
console.log(sessionStorage.getItem("connexion"));
if (sessionStorage.getItem("connexion")) {
    document.querySelector('#connexion').remove();
    document.querySelector('#inscription').remove();
} else {
    document.querySelector('#research').remove();
    document.querySelector('#admin').remove();
    document.querySelector('#deconnexion').remove();
}