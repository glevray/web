from flask_sqlalchemy import SQLAlchemy
from models.todo import User,Ident

db = SQLAlchemy()

# récupération des données dans la base de données


def get_users():
    users = User.query.all()
    return users


def get_user_by_id(user_id):
    return user_id


def create_user(user):
    db.session.add(user)
    db.session.commit()
    return user.idutilisateurs


def update_user(user_id):
    return user_id


def delete_user(user_id):
    return user_id

def create_ident(ident):
    db.session.add(ident)
    db.session.commit()
    return ident.idident

def create_connexion(ident):
    print(ident)
    result = Ident.query.filter_by(identifiant = ident.identifiant).first()
    db.session.remove()
    return result