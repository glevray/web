class Config {
    constructor() {
        this.URLACCES = 'http://127.0.0.1:5000/api/todos';
        /*URLACCES: 'http://192.168.99.100:5000/api/todos';*/
        this.URLCONNECT = "../connexion/connexion.html";
        this.URLINDEX = "../index.html";
        this.version = 2;
    }
}

const globalConfig = new Config()

console.log(globalConfig);