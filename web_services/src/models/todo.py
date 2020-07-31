from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# création d'une classe qui permettra de faire des objets qui mettront en forme les informations recus depuis la BDD


class Todo(db.Model):
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
