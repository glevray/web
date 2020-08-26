from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_cors import CORS


# initialisation de l'application Flask
app = Flask(__name__)

# mise en place des CORS
CORS(app)

# définition d'une variable de configuration pour sqlalchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@192.168.99.100:3306/users'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# initionalisation de la connexion à la base de données
db = SQLAlchemy(app)


db = SQLAlchemy()

# création d'une classe qui permettra de faire des objets qui mettront en forme les informations recus depuis la BDD


class User(db.Model):
    __tablename__ = 'users'
    idutilisateurs = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String)
    lastname = db.Column(db.String)
    birthdate = db.Column(db.DateTime)

    def __init__(self, firstname,lastname,birthdate):
        self.firstname = firstname
        self.lastname = lastname
        self.birthdate = birthdate

    def __repr__(self):
        return f'<Todo idutilisateurs:{self.idutilisateurs} firstname:{self.firstname} lastname:{self.lastname} birthdate: {self.birthdate}>'

class Ident(db.Model):
    __tablename__ = 'ident'
    idident = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    identifiant = db.Column(db.String)
    motdepasse = db.Column(db.String)

    def __init__(self, email,identifiant,motdepasse):
        self.email = email
        self.identifiant = identifiant
        self.motdepasse = motdepasse

    def __repr__(self):
        return f'<Ident idident:{self.idident} email:{self.email} identifiant:{self.identifiant} motdepasse: {self.motdepasse}>'

requete = """ select firstname,lastname,email,birthdate from users,ident where idutilisateurs=idident"""

row = db.session.execute(requete)

for f in row:
    print (f)


if __name__ == "__main__":
    app.run(debug=True)