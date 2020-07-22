const send = (event) => {
    event.preventDefault();
    /*alert('je suis dans la fonction send');*/

    console.log(event);

}
document.querySelector("#formConnexion").addEventListener('submit', send);