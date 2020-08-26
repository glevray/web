from flask_sqlalchemy import SQLAlchemy
from models.todo import User,Ident
from flask import jsonify

db = SQLAlchemy()

# récupération des données dans la base de données


def get_users():
    users = User.query.all()
    return users

def get_comptes():
    users = db.session.query(User, Ident).filter(User.idutilisateurs == Ident.idident).all()
    print ("Get_comptes:",users)
    return users


def get_user_by_id(user_id):
    return user_id


def create_user(user):
    db.session.add(user)
    db.session.commit()
    return user.idutilisateurs


def update_user(user_id):
    return user_id


def delete_user(id):
# on supprime dans la table des utilisateurs et des identifiants les 
# dont la clé est passée en paramétre

    deluser  = db.session.query(User).get(id)

    if deluser is None: # eregistrement non trouvé
        return None

    delident = db.session.query(Ident).get(id)
    if delident is None: # eregistrement non trouvé
        return None
        
    db.session.delete(deluser)
    db.session.delete(delident)
    db.session.commit()

    return id

def create_ident(ident):
    db.session.add(ident)
    db.session.commit()
    return ident.idident

def create_connexion(ident):
    result = Ident.query.filter_by(identifiant = ident.identifiant).first()
    db.session.remove()
    return result

def recherche_user(rech):
    
    requete = """ select idutilisateurs,firstname,lastname,email,birthdate from users,ident where idutilisateurs=idident"""
    if rech['firstname']!='':
        requete = requete + """ and firstname = '"""+rech['firstname']+"'"
    if rech['lastname']!='':
        requete = requete + """ and lastname = '"""+rech['lastname']+"'"
    if rech['email']!='':
        requete = requete + """ and email = '"""+rech['email']+"'"

    row = db.session.execute(requete)

    return row