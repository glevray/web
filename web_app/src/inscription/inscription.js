let users = {}

const send = (event) => {

    console.event("dans le send");
    event.preventDefault();
    console.log(event);

    for (let ind = 0; ind <= 5; ind++) {
        users[event.target[ind].name] = event.target[ind].value;
    }

    let option = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://127.0.0.1/users', option).
    then(resp => resp.json()).
    then(resp => console.log(res));

}

document.querySelector("#formInscription").addEventListener('submit', send);