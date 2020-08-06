let users = {}

const send = (event) => {
    event.preventDefault();

    for (let ind = 0; ind < 3; ind++) {
        users[event.target[ind].name] = event.target[ind].value;
    }

    console.log(users);

    let option = {
        method: "POST",
        body: JSON.stringify(users),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://127.0.0.1:5000/api/todos/inscription', option).
        /*fetch('http://192.168.99.100:5000/api/todos', option).*/
    then(resp => resp.json()).
    then(resp => console.log(resp));
}
document.querySelector("#formInscription").addEventListener('submit', send);