import repositories.todo_repo as todoRepo
from models.todo import User,Ident
import jsonpickle

# définition d'une méthode pour récupérer les todos dans la base de données avec le repo


def get_users():
    users = todoRepo.get_users()
    return jsonpickle.encode(users,unpicklable=False)

def get_comptes():
    comptes=todoRepo.get_comptes()
    
    liste_compte = []

    for compte in comptes:
        objet = {
            "idutilisateurs"     : compte[0].idutilisateurs,
            "firstname"            : compte[0].firstname,
            "lastname"             : compte[0].lastname,
            "birthdate"            : compte[0].birthdate,
            "email"                : compte[1].email
        }
        liste_compte.append(objet)

        print("Liste Compte:",liste_compte)

    return jsonpickle.encode(liste_compte,unpicklable=False)

def get_user_by_id(user_id):
    return user_id


def create_user(userDto,identDto):
    user = User(userDto.firstname, userDto.lastname, userDto.birthdate)
    datauser = todoRepo.create_user(user)
    ident = Ident(identDto.email,identDto.identifiant,identDto.motdepasse)
    dataident = todoRepo.create_ident(ident)
    IdentDto = jsonpickle.encode(dataident,max_depth=2)
    UserDto = jsonpickle.encode(datauser,max_depth=2)
    return UserDto,IdentDto


def update_user(user_id):
    return user_id

def delete_user(user_id):
    data=todoRepo.delete_user(user_id)
    return data


def create_connexion(IdentDto):
    ident = Ident(IdentDto.email,IdentDto.identifiant,IdentDto.motdepasse)
    data = todoRepo.create_connexion(ident)
    return data
    