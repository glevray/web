import repositories.todo_repo as todoRepo
from models.todo import User,Ident
import jsonpickle

# défintion d'une méthode pour récupérer les todos dans la base de données avec le repo


def get_users():
    users = todoRepo.get_users()
    return jsonpickle.encode(users)


def get_user_by_id(user_id):
    return user_id


def create_user(userDto):
    user = User(userDto.firstname, userDto.lastname, userDto.birthdate)
    data = todoRepo.create_user(user)
    userDto = jsonpickle.encode(data,max_depth=2)
    return userDto


def update_user(user_id):
    return user_id


def delete_user(user_id):
    return user_id


def create_Ident(IdentDto):
    ident = Ident(IdentDto.email,IdentDto.identifiant,IdentDto.motdepasse)
    data = todoRepo.create_ident(ident)
    IdentDto = jsonpickle.encode(data,max_depth=2)
    return IdentDto

def create_connexion(IdentDto):
    ident = Ident(IdentDto.email,IdentDto.identifiant,IdentDto.motdepasse)
    data = todoRepo.create_connexion(ident)
    return data
    