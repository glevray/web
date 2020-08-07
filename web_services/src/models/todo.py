from flask_sqlalchemy import SQLAlchemy

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
