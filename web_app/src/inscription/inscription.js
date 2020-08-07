let users = {}
let ident = {}

const send = (event) => {
    event.preventDefault();

    console.log(event);

    for (let ind = 0; ind < 3; ind++) {
        users[event.target[ind].name] = event.target[ind].value;
    }
    for (let ind = 3; ind < 6; ind++) {
        ident[event.target[ind].name] = event.target[ind].value;
    }


    console.log(users);
    console.log(ident);

    let option_inscription = {
        method: "POST",
        body: JSON.stringify(users),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    let option_identifiant = {
        method: "POST",
        body: JSON.stringify(ident),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://127.0.0.1:5000/api/todos/inscription', option_inscription).
        /*fetch('http://192.168.99.100:5000/api/todos', option).*/
    then(resp => resp.json()).then(resp => console.log(resp));

    fetch('http://127.0.0.1:5000/api/todos/identifiant', option_identifiant).
        /*fetch('http://192.168.99.100:5000/api/todos', option).*/
    then(resp => resp.json()).then(resp => console.log(resp));


}
document.querySelector("#formInscription").addEventListener('submit', send);