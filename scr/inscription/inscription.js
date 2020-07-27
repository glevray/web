const send = (event) => {
    event.preventDefault();
    /*alert('je suis dans la fonction send');*/

    console.log(event);

    for (elt of event.target) {
        console.log(elt.value)
    }

}
document.querySelector("#formInscription").addEventListener('submit', send);